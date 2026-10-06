/**
 * Pedidos: a desk with an in-tray, an out-tray and a rubber stamp between them.
 * Orders drop onto the pile in the in-tray all the time; at its own pace the
 * top sheet slides out under the stamp, is stamped, and goes on to the
 * out-tray. At rest arrivals
 * keep the pile about even. The pointer on the desk brings demand up, and the
 * pile grows faster than the stamp can clear it, each sheet a little more out
 * of line than the one under it, until it spills over the tray; the read-out
 * gives the queue. The in-tray holds the bright stroke. The slider is how many
 * times faster orders come in.
 *
 * The pattern: an ambient flow that sleeps offscreen and holds still under
 * reduced motion, and a hit test on the desk, which never moves.
 */
import HL from "../kernel.js";

const {
  Cam, circ, facing, fit, poly, prism, proj, put, rad, ringAt, rings, unproj, disposer, mk, pointer, reducedMotion, reflect, register, solid,
} = HL;

const PILE = [22, 27], MID = [47, 27], OUT = [72, 27], BASE = 2, SH = 0.9, N0 = 6, MAX = 18, HOVER = 9;
const ARRIVE = 1.5, PROCESS = 2, DROP = 0.3;
const fr = (n) => { const v = Math.sin(n * 91.7 + 13.1) * 43758.5453; return v - Math.floor(v); };
/** Sheet k of the pile: how far it sits off the one under it, and its twist; past the sixth, more each sheet. */
const lay = (k) => { const m = 0.6 + 0.5 * Math.max(0, k - 5); return [(fr(k) - 0.5) * 2 * m, (fr(k + 50) - 0.5) * 2 * m, (fr(k + 99) - 0.5) * 6 * (1 + 0.3 * Math.max(0, k - 5))]; };
const ease = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
const lerp = (a, b, t) => a + (b - a) * t;

/** A ring turned by deg degrees about its own centre and moved to (cx, cy), normals with it. */
function tf(ring, deg, cx, cy) {
  const c = Math.cos(rad(deg)), s = Math.sin(rad(deg));
  return ring.map((q) => ({ u: q.u * c - q.v * s + cx, v: q.u * s + q.v * c + cy, nu: q.nu * c - q.nv * s, nv: q.nu * s + q.nv * c }));
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let fast = value, over = false, said = null, n = N0, wait = 0, fall = -1, cycle = -1, doneAt = null;

  const cam = Cam(45, 0.5, 2.6);
  fit(cam, [[0, 0, -4], [96, 56, -14], [96, 0, -4], [0, 56, -4], [PILE[0] - 12, PILE[1] - 12, BASE + MAX * SH + 17]], 200, 166);
  const P = proj(cam), front = facing(cam);

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(0, 0, 96, 56, 10, 2);
  reflect(svg, g, P, front, pr, -4, 10);
  put(solid(g), prism(P, front, pr, pi, -4, 0));
  const tray = (x0, y0, x1, y1) => { const [r, i] = rings(x0, y0, x1, y1, 3, 1.2), s = solid(g); put(s, prism(P, front, r, i, 0, BASE)); return s; };
  const inTray = tray(PILE[0] - 13, PILE[1] - 11, PILE[0] + 13, PILE[1] + 11);
  tray(OUT[0] - 13, OUT[1] - 11, OUT[0] + 13, OUT[1] + 11);
  inTray.sil.classList.add("hi");

  // the sheets: the pile bottom up, then the one sent to the out-tray with its stamp, the stamp itself,
  // and last the sheet falling onto the pile, which comes down from above it all
  const [sr, si] = rings(-9, -6.5, 9, 6.5, 1.5, 0.6);
  const pile = Array.from({ length: MAX }, () => solid(g));
  const done = solid(g), mark = mk("path", { class: "nf lo" }, g);
  const stamp = { base: solid(g), handle: solid(g), knob: solid(g) }, drop = solid(g);
  const [kr, ki] = rings(-4.5, -3.5, 4.5, 3.5, 1.4, 0.7);

  function sheet(el, x, y, deg, z) { put(el, prism(P, front, tf(sr, deg, x, y), tf(si, deg, x, y), z, z + SH)); }
  const hide = (el) => put(el, { sil: "", crease: "" });
  const top = (k) => BASE + k * SH;

  /** How high the stamp's face is at phase t of a round: it waits over the middle of the desk, comes down on the sheet, and goes back up. */
  const stampAt = (t) => (t < 0.3 || t >= 0.6 ? HOVER : t < 0.45 ? lerp(HOVER, SH, ease((t - 0.3) / 0.15)) : lerp(SH, HOVER, ease((t - 0.45) / 0.15)));
  /** Where the sheet being dealt with is at phase t: off the pile to the middle, stamped there, then on to the out-tray. */
  function dealt(t, from) {
    const [fx, fy, fd, fz] = from;
    if (t < 0.3) { const e = ease(t / 0.3); return [lerp(fx, MID[0], e), lerp(fy, MID[1], e), lerp(fd, 0, e), lerp(fz, 0, e) + 4 * Math.sin(Math.PI * e)]; }
    if (t < 0.6) return [MID[0], MID[1], 0, 0];
    const e = ease((t - 0.6) / 0.3);
    return [lerp(MID[0], OUT[0], e), lerp(MID[1], OUT[1], e), lerp(0, 4, e), lerp(0, BASE, e) + 4 * Math.sin(Math.PI * e)];
  }

  function draw() {
    for (let k = 0; k < pile.length; k++) {
      if (k < n) { const [dx, dy, deg] = lay(k); sheet(pile[k], PILE[0] + dx, PILE[1] + dy, deg, top(k)); }
      else hide(pile[k]);
    }
    if (fall >= 0) { const [dx, dy, deg] = lay(n); sheet(drop, PILE[0] + dx, PILE[1] + dy, deg, top(n) + 16 * (1 - fall * fall)); }
    else hide(drop);
    if (doneAt) {
      const [x, y, deg, z] = doneAt;
      sheet(done, x, y, deg, z);
      mark.setAttribute("d", cycle < 0 || cycle >= 0.45 ? poly(ringAt(P, circ(2.4, 16).map((q) => ({ ...q, u: q.u + x + 2, v: q.v + y })), z + SH)) : "");
    }
    const [x, y] = MID, z = stampAt(cycle < 0 ? 1 : cycle);
    put(stamp.base, prism(P, front, kr.map((q) => ({ ...q, u: q.u + x, v: q.v + y })), ki.map((q) => ({ ...q, u: q.u + x, v: q.v + y })), z, z + 3));
    const at = (r) => circ(r, 14).map((q) => ({ ...q, u: q.u + x, v: q.v + y }));
    put(stamp.handle, prism(P, front, at(1.5), at(0.9), z + 3, z + 8));
    put(stamp.knob, prism(P, front, at(2.6), at(1.8), z + 8, z + 10.5));
    const word = over ? `fila ${n}` : "rest";
    if (word !== said) read.textContent = said = word;
  }

  /**
   * One step of the desk: orders arrive at their pace, and the stamp works at
   * its own. At rest orders come in just fast enough to keep the pile at N0,
   * and slower while it is above that.
   */
  function step(dt) {
    const pace = over ? fast : n < N0 ? 1.3 : n === N0 ? 0.8 : 0.25;
    wait = Math.min(wait + (dt * pace) / ARRIVE, 1);
    if (fall >= 0) { fall += dt / DROP; if (fall >= 1) { fall = -1; n++; } }
    else if (wait >= 1 && n < MAX) { wait = 0; fall = 0; }
    if (cycle < 0 && n > 0 && fall < 0) {
      // the top sheet leaves the pile now, to be stamped in the middle
      cycle = 0; n--;
      const [dx, dy, deg] = lay(n);
      doneAt = [PILE[0] + dx, PILE[1] + dy, deg, top(n)]; doneAt.from = [...doneAt];
    }
    if (cycle >= 0) {
      cycle = Math.min(1, cycle + dt / PROCESS);
      doneAt = Object.assign(dealt(cycle, doneAt.from), { from: doneAt.from });
      if (cycle >= 1) cycle = -1;
    }
  }
  for (let i = 0; i < 150; i++) step(0.02);

  const B = register(stage, (dt) => {
    const still = reducedMotion();
    if (!still) step(Math.min(dt, 0.05));
    draw();
    return !still;
  });
  bag.add(B.unregister);

  /** Whether the pointer is over the desk, met on its top; the desk never moves. */
  const onDesk = (p) => { const [x, y] = unproj(cam, p[0], p[1], 0); return x >= 0 && x <= 96 && y >= 0 && y <= 56; };
  bag.add(pointer(stage, { move: (p) => { over = onDesk(p); B.wake(); }, leave: () => { over = false; B.wake(); } }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { fast = v; },
    destroy: bag.dispose,
  };
}

export default {
  name: "pedidos",
  means: "Pedidos caem na bandeja e um carimbo despacha um de cada vez; com o mouse a demanda sobe e a pilha transborda.",
  rules: [1, 4, 5, 7],
  range: [2, 3.5, 5],
  mount,
};
