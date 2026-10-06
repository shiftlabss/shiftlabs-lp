/**
 * Funil: four steps coming down towards the viewer, each narrower than the
 * one behind it, with beads rolling down them all the time. At every edge the
 * beads in the outer lanes have no step under them and drop through a slot in
 * the base; only the middle lanes reach the front, and fall into a cash box.
 * The pointer on a step lights it and slows the flow there, on a spring, so the
 * beads on it can be counted; the read-out names the step and how many it
 * holds. The slider is how much the flow slows.
 *
 * The pattern: dilate time. An ambient clock that sleeps offscreen and holds
 * still under reduced motion, a spring on each step's rate, and a hit test on
 * the steps' tops, which never move.
 */
import HL from "../kernel.js";

const {
  Cam, clamp, facing, fit, poly, prism, proj, put, rings, rrect, ringAt, spring, stepS, unproj, disposer, mk, place, pointer, reducedMotion, reflect, register, solid,
} = HL;

const C = 34, D = 20, W = [56, 40, 20, 10], HT = [17, 12.5, 8, 3.5], R = 2.2, K = 0.44, V = 12, POOL = 18, BOXTOP = 1.4;
const NAMES = ["visitas", "leads", "propostas", "clientes"];
const LANES = [-22.5, -17.5, -12.5, -7.5, -2.5, 2.5, 7.5, 12.5, 17.5, 22.5];
/** The edge a bead in a lane falls off: the first step too narrow for it. 3 is the front edge, into the box. */
const fate = (off) => { const a = Math.abs(off); return a > 20 ? 0 : a > 10 ? 1 : a > 5 ? 2 : 3; };
/** How far a bead in a lane travels before it is gone: to its edge, then down to the base or the box. */
const life = (off) => { const f = fate(off); return D * (f + 1) + Math.sqrt((HT[f] - (f < 3 ? 0 : BOXTOP)) / K) - 2; };

/** Where a bead is, d along its way: on a step, dropping to the next, or falling off its edge; null once gone. */
function where(off, d) {
  const f = fate(off), x = 2 + d, y = C + off, edge = D * (f + 1);
  if (x >= edge) {
    const z = HT[f] - K * (x - edge) ** 2, floor = f < 3 ? 0 : BOXTOP;
    return z <= floor ? null : { x, y, z, stage: -1, lost: f < 3 ? f + 1 : 4 };
  }
  const j = clamp(Math.floor(x / D), 0, 3);
  return { x, y, z: j ? Math.max(HT[j], HT[j - 1] - K * (x - D * j) ** 2) : HT[0], stage: j, lost: 0 };
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let slow = value, over = -1, said = null;

  const cam = Cam(45, 0.5, 2.5);
  fit(cam, [[-6, 0, -4], [104, 68, -14], [104, 0, -4], [-6, 68, -4], [0, C - W[0] / 2, HT[0] + 3]], 200, 166);
  const P = proj(cam), front = facing(cam);

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(-6, 0, 104, 68, 10, 2);
  reflect(svg, g, P, front, pr, -4, 10);
  put(solid(g), prism(P, front, pr, pi, -4, 0));
  // the slots the dropped beads go through, on each side, where they land beside the next step
  const slot = (x0, a, b) => poly(ringAt(P, rrect(x0, C + a, x0 + 8, C + b, 1.2, 3), 0)) + poly(ringAt(P, rrect(x0, C - b, x0 + 8, C - a, 1.2, 3), 0));
  mk("path", { d: slot(24, 20.8, 25) + slot(43, 10.6, 20) + slot(62, 5.4, 9.8), class: "nf" }, g);

  // back to front: a step, then the beads dropped on its far side, which the next step hides
  const steps = [], far = [];
  for (let i = 0; i < 4; i++) {
    if (i) far[i] = mk("g", {}, g);
    const [ring, inner] = rings(D * i, C - W[i] / 2, D * (i + 1), C + W[i] / 2, 2.5, 1);
    const el = solid(g);
    put(el, prism(P, front, ring, inner, 0, HT[i]));
    steps.push({ el, rate: spring(1, { eps: 0.002 }) });
  }
  // the cash box at the front, with its slot
  const box = solid(g), [xr, xi] = rings(82, C - 9, 98, C + 9, 3, 1.2);
  put(box, prism(P, front, xr, xi, 0, BOXTOP));
  mk("path", { d: poly(ringAt(P, rrect(83, C - 5.5, 86.5, C + 5.5, 1.2, 3), BOXTOP)), class: "nf" }, g);
  far[4] = mk("g", {}, g);
  const near = mk("g", {}, g);

  let next = 0;
  const lane = () => LANES[(next++ * 7) % LANES.length];
  const toks = Array.from({ length: POOL }, (_, k) => { const off = lane(); return { off, d: (k / POOL) * life(off), el: mk("circle", { r: R, class: "dot m" }, near) }; });

  function draw() {
    const counts = [0, 0, 0, 0], order = [];
    for (const t of toks) {
      let w = where(t.off, t.d);
      if (!w) { t.off = lane(); t.d = 0; w = where(t.off, 0); }
      if (w.stage >= 0) counts[w.stage]++;
      const home = w.lost && t.off < 0 ? far[w.lost] : near;
      if (t.el.parentNode !== home) home.appendChild(t.el);
      place(t.el, P(w.x, w.y, w.z + R * 0.6));
      if (home === near) order.push([w.x + w.y + w.z, t.el]);
    }
    // the beads in front of every step, farthest first
    order.sort((a, b) => a[0] - b[0]);
    for (const [, el] of order) near.appendChild(el);
    const word = over < 0 ? "rest" : `${NAMES[over]} ${counts[over]}`;
    if (word !== said) read.textContent = said = word;
  }

  const B = register(stage, (dt) => {
    const still = reducedMotion();
    let moving = false;
    for (const s of steps) if (stepS(s.rate, dt)) moving = true;
    if (!still) for (const t of toks) {
      const w = where(t.off, t.d), j = w ? (w.stage >= 0 ? w.stage : Math.min(w.lost - 1, 3)) : 0;
      t.d += V * steps[j].rate.x * dt;
    }
    draw();
    return !still || moving;
  });
  bag.add(B.unregister);

  /** The step under the pointer, met on each step's own top, front first; they never move. */
  function hit([sx, sy]) {
    for (let i = 3; i >= 0; i--) {
      const [x, y] = unproj(cam, sx, sy, HT[i]);
      if (x >= D * i && x <= D * (i + 1) && Math.abs(y - C) <= W[i] / 2) return i;
    }
    return -1;
  }
  function aim(i) {
    over = i;
    steps.forEach((s, k) => { s.rate.t = k === i ? slow : 1; s.el.sil.classList.toggle("hi", k === i); });
    box.sil.classList.toggle("hi", i < 0);
    B.wake();
  }
  aim(-1);

  bag.add(pointer(stage, { move: (p) => aim(hit(p)), leave: () => aim(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { slow = v; if (over >= 0) aim(over); },
    destroy: bag.dispose,
  };
}

export default {
  name: "funil",
  means: "Um funil em degraus: as fichas das bordas caem pelo caminho e só as do centro chegam ao cofre; o mouse desacelera uma etapa.",
  rules: [1, 4, 5, 7],
  range: [0.5, 0.25, 0.1],
  mount,
};
