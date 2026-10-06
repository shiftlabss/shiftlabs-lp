/**
 * Roadmap: a long board with a trail of six stepping stones winding from the
 * near end to a flag on a platform at the far one. Built, the stones climb in
 * steps towards the flag; not yet built, they lie flat. At rest the first one
 * is built and the flag is at half mast. The pointer picks a stone: every
 * stone up to it rises into its step, staggered outwards from it on the 700ms
 * lift curve, and the ones past it lie flat; picking the platform raises the
 * flag to the top. The stone picked takes the bright stroke. The slider is how
 * much each step climbs.
 *
 * The pattern: discrete items. Tweens, a stagger by distance, and a hit test on
 * each stone's top in the rest pose, which never moves.
 */
import HL from "../kernel.js";

const {
  Cam, circ, facing, fillet, fit, poly, prism, proj, put, rings, tdone, tset, tval, tween, unproj, disposer, mk, pointer, reflect, register, solid,
} = HL;

const N = 6, BL = 124, BW = 44, R = 7, RF = 8.5, FLAT = 0.8, BASE = 3.5, POLE = 20, STEP = 45, BUILT = 1, RMAX = 5;

/** The trail at t, from 0 at the near end to 1 at the flag: down the board's length, swinging from side to side. */
const trail = (t) => [110 - 98 * t, BW / 2 + 7 * Math.sin(2 * Math.PI * t)];

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let rise = value, act = -1, hoisted = NaN;

  // the six stones and, last, the flag's platform
  const items = [];
  for (let i = 0; i <= N; i++) {
    const [cx, cy] = trail(i / N), r = i < N ? R : RF, at = (q) => ({ ...q, u: q.u + cx, v: q.v + cy });
    items.push({ i, cx, cy, r, ring: circ(r, 24).map(at), inner: circ(r - 1.1, 24).map(at), tw: tween(i < BUILT ? 1 : 0), t: NaN });
  }
  const built = (i, k = rise) => BASE + i * k, height = (i, t) => FLAT + (built(i) - FLAT) * t;
  const hoist = tween(0), [fx, fy] = trail(1), dir = [0.707, -0.707];

  // The camera is fitted to the board, the steps at their tallest and the flag at full mast, so no pose leaves the frame.
  const crown = built(N, RMAX) + POLE + 1, cam = Cam(45, 0.5, 2.5);
  fit(cam, [[0, 0, -4], [BL, BW, -14], [BL, 0, -4], [0, BW, -4], [fx, fy, crown], [fx + 16 * dir[0], fy + 16 * dir[1], crown],
    ...items.map((it) => [it.cx - it.r, it.cy - it.r, built(it.i, RMAX)])], 200, 166);
  const P = proj(cam), front = facing(cam);

  const g = mk("g", {}, svg);
  const [br, bi] = rings(0, 0, BL, BW, 10, 2);
  reflect(svg, g, P, front, br, -4, 10);
  put(solid(g), prism(P, front, br, bi, -4, 0));

  // far to near, so a nearer stone covers a farther one; the flag stands on the farthest
  for (const it of items.slice().sort((a, b) => a.cx + a.cy - b.cx - b.cy)) {
    it.el = solid(g);
    if (it.i === N) { it.pole = solid(g); it.cloth = mk("path", { class: "sil" }, g); }
  }
  const at = (dx, dy) => (q) => ({ ...q, u: q.u + dx, v: q.v + dy }), pole = circ(0.9, 12).map(at(fx, fy)), core = circ(0.4, 12).map(at(fx, fy));

  /** A swallowtail flag hung from the pole with its top at z, its cloth across the view. */
  function cloth(z) {
    const p = (k, h) => P(fx + dir[0] * k, fy + dir[1] * k, z - h);
    return poly(fillet([p(0, 0), p(16, 0), p(11.5, 4.5), p(16, 9), p(0, 9)], [0.4, 0.8, 0.6, 0.8, 0.4]));
  }

  function draw(it) {
    const h = height(it.i, it.t);
    put(it.el, prism(P, front, it.ring, it.inner, 0, h));
    if (it.i < N) return;
    put(it.pole, prism(P, front, pole, core, h, h + POLE));
    it.cloth.setAttribute("d", cloth(h + POLE - (1 - hoisted) * POLE * 0.45));
  }

  const LOOP = register(stage, (_dt, now) => {
    let moving = !tdone(hoist, now);
    const hz = tval(hoist, now), flag = hz !== hoisted;
    hoisted = hz;
    for (const it of items) {
      const t = tval(it.tw, now);
      if (t !== it.t || (it.i === N && flag)) { it.t = t; draw(it); }
      if (!tdone(it.tw, now)) moving = true;
    }
    return moving;
  });
  bag.add(LOOP.unregister);

  /** The stone the pointer is nearest, met on each stone's own top in the rest pose; the gaps between stones belong to the nearest. */
  function hit([sx, sy]) {
    let best = -1, bd = 14;
    for (const it of items) {
      const [x, y] = unproj(cam, sx, sy, height(it.i, it.i < BUILT ? 1 : 0)), d = Math.hypot(x - it.cx, y - it.cy);
      if (d < bd) { bd = d; best = it.i; }
    }
    return best;
  }

  function light(a) {
    const lit = a < 0 ? BUILT - 1 : a;
    for (const it of items) it.el.sil.classList.toggle("hi", it.i === lit);
    items[N].cloth.classList.toggle("hi", lit === N);
  }
  /** Builds the trail up to stone a (-1 puts it back as it was), staggered outwards from the stone picked or let go. */
  function setActive(a) {
    if (a === act) return;
    const now = performance.now(), from = a >= 0 ? a : act;
    act = a;
    for (const it of items) tset(it.tw, (a < 0 ? it.i < BUILT : it.i <= a) ? 1 : 0, now, Math.abs(it.i - from) * STEP);
    tset(hoist, a === N ? 1 : 0, now, 0);
    light(a);
    read.textContent = a < 0 ? "rest" : a === N ? "chegada" : `marco ${a + 1}`;
    LOOP.wake();
  }
  light(-1);

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { rise = v; for (const it of items) it.t = NaN; LOOP.wake(); },
    destroy: bag.dispose,
  };
}

export default {
  name: "roadmap",
  means: "Uma trilha de pedras até uma bandeira: o mouse constrói o caminho, degrau por degrau, até o marco escolhido.",
  rules: [1, 2, 5, 9],
  range: [2.2, 3.6, 5],
  mount,
};
