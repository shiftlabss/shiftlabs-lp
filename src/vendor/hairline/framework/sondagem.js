/**
 * Sondagem: a block of soil cut on its two near sides, so the strata show,
 * with a 6 × 6 grid of probe stakes driven into its top, each a thin shaft
 * under a wider cap. The pointer is the probe: met on the ground, which never
 * moves, it lifts each stake by its distance, on its own spring, as far as the
 * soil gives there. One point is weak: the soil there gives almost twice as
 * much, cracks run out from it, and both cut faces show the strata sagging in
 * line with it. At rest its stake stands above the field with the bright
 * stroke; probing elsewhere takes the bright away, and the probe's dot rides
 * the cap of the stake under the pointer. The slider is the probe's radius,
 * in cells.
 *
 * The pattern: a continuous field, as in Terrain, with one place in it that
 * answers more than the rest.
 */
import HL from "../kernel.js";

const {
  Cam, circ, clamp, facing, fit, open, prism, proj, put, rings, run, unproj, spring, stepS,
  disposer, flatDot, mk, place, pointer, reflect, register, solid,
} = HL;

const N = 6, CELL = 16, EXT = N * CELL, PAD = 7, T = 18, REF = 9;
const RS = 1.4, RC = 3.2, CH = 2.1, BASE = 2.5, LIFT = 24;
const WI = 3, WJ = 4, WX = (WI + 0.5) * CELL, WY = (WJ + 0.5) * CELL;

/** The share of the lift at u radii from the probe: 1 under it, .5 at half the radius, never under .09. */
const falloff = (u) => Math.max(0.09, Math.exp(-((u / 0.6) ** 2)));
/** How much more the soil gives at a stake: almost twice at the weak point, a little round it. */
const give = (i, j) => 1 + 0.95 * Math.exp(-((i - WI) ** 2 + (j - WJ) ** 2) / 0.6);
/** The rest pose: a soil that is never level, two low swells and a rise round the weak point. */
const field = (i, j) => 4 + 5 * Math.exp(-((i - 0.8) ** 2 + (j - 1.2) ** 2) / 2.4) +
  2.5 * Math.exp(-((i - 4.6) ** 2 + (j - 0.4) ** 2) / 1.6) + 4 * Math.exp(-((i - WI) ** 2 + (j - WJ) ** 2) / 1.1);
/** The weak stake stands out of it by one diagonal step on screen (.408 of a ground unit at this camera), so its cap hides the cap right behind it. */
const rest = (i, j) => i === WI && j === WJ ? field(i - 1, j - 1) + 2 * CELL * 0.408 : field(i, j);
/** How far a stratum sinks at a point of the cut: most in line with the weak point, along the face it is on. */
const sag = (q) => Math.exp(-(((q.u - WX) ** 2) * (1 - Math.abs(q.nu)) + ((q.v - WY) ** 2) * (1 - Math.abs(q.nv))) / 120);
/** Four cracks out from the weak stake's foot, as (along, across) steps at an angle. */
const CRACKS = [[0.4, [[2.2, 0], [5.6, 0.9], [8.8, -0.4], [12, 0.6]]], [1.9, [[2.2, 0], [5.4, -0.8], [8.6, 0.3]]],
  [3.3, [[2.2, 0], [6, 0.7], [9.4, -0.5], [11.6, 0.4]]], [4.7, [[2.2, 0], [5.6, -0.6], [8.2, 0.4]]]];

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let R = value * CELL, over = null;

  const cells = [];
  for (let s = 0; s <= 2 * (N - 1); s++) for (let i = 0; i < N; i++) {
    const j = s - i;
    if (j >= 0 && j < N) cells.push({ i, j, x: (i + 0.5) * CELL, y: (j + 0.5) * CELL, k: give(i, j), h0: rest(i, j) });
  }

  // The camera is fitted to the block, its reflection and every stake at the most it can rise, so no pose leaves the frame.
  const C = Cam(45, 0.5, 1.85);
  fit(C, [[-PAD, -PAD, 0], [EXT + PAD, EXT + PAD, -T - REF], [EXT + PAD, -PAD, -T - REF], [-PAD, EXT + PAD, -T - REF],
    ...cells.map((c) => [c.x - RC, c.y - RC, BASE + LIFT * c.k + CH])], 200, 166);
  const P = proj(C), front = facing(C);

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(-PAD, -PAD, EXT + PAD, EXT + PAD, 8, 2);
  reflect(svg, g, P, front, pr, -T, REF);
  put(solid(g), prism(P, front, pr, pi, -T, 0));

  // The strata, drawn on the two cut faces: the near run of the block's ring, cut into short steps, each step sunk by sag().
  const cut = run(pr, front), steps = [];
  cut.forEach((a, n) => {
    const b = cut[n + 1], m = b ? Math.ceil(Math.hypot(b.u - a.u, b.v - a.v) / 3) : 1;
    for (let t = 0; t < m; t++) {
      const f = t / m;
      steps.push(b ? { u: a.u + (b.u - a.u) * f, v: a.v + (b.v - a.v) * f, nu: a.nu + (b.nu - a.nu) * f, nv: a.nv + (b.nv - a.nv) * f } : a);
    }
  });
  for (const [z, dip] of [[-4.6, 3.4], [-9.4, 2.6], [-13.6, 1.8]])
    mk("path", { class: "lo nf", d: open(steps.map((q) => P(q.u, q.v, z - dip * sag(q) + 0.35 * Math.sin((q.u - q.v) * 0.19 + z)))) }, g);
  for (const [a, pts] of CRACKS) {
    const ca = Math.cos(a), sa = Math.sin(a);
    mk("path", { class: "lo nf", d: open(pts.map(([s, w]) => P(WX + s * ca - w * sa, WY + s * sa + w * ca, 0))) }, g);
  }

  // Diagonal by diagonal from the far corner, so appending is painting back to front.
  const sh = circ(RS, 12), shi = circ(RS - 0.45, 12), cp = circ(RC, 20), cpi = circ(RC - 0.75, 20);
  const at = (ring, c) => ring.map((q) => ({ ...q, u: q.u + c.x, v: q.v + c.y }));
  for (const c of cells) {
    c.g = mk("g", {}, g);
    c.shaft = solid(c.g); c.cap = solid(c.g);
    Object.assign(c, { sr: at(sh, c), si: at(shi, c), cr: at(cp, c), ci: at(cpi, c), sp: spring(c.h0, { eps: 0.04 }), drawn: NaN });
  }
  const weak = cells.find((c) => c.i === WI && c.j === WJ), byCell = new Map(cells.map((c) => [c.i + "," + c.j, c]));

  // The probe's dot, moved in the paint order to just after the stake it rides, so nearer stakes still cover it.
  const mark = mk("g", {}, g), dot = flatDot(mark, C, 0.8, "dot");
  let mc = null, want = weak, mh = NaN;
  function drawMark() {
    const h = Math.max(0.8, want.sp.x) + CH;
    if (want !== mc) { mc = want; mc.g.after(mark); mh = NaN; }
    if (h !== mh) { mh = h; place(dot, P(mc.x, mc.y, h)); }
  }
  function drawStake(c) {
    const h = Math.max(0.8, c.sp.x);
    if (h === c.drawn) return;
    c.drawn = h;
    put(c.shaft, prism(P, front, c.sr, c.si, 0, h));
    put(c.cap, prism(P, front, c.cr, c.ci, h, h + CH));
  }

  const B = register(stage, (dt) => {
    let m = false;
    for (const c of cells) { if (stepS(c.sp, dt)) m = true; drawStake(c); }
    drawMark();
    return m;
  });
  bag.add(B.unregister);

  /** The weak stake, bright at rest and when the probe is on it, and only then. */
  function light() {
    const on = want === weak;
    weak.shaft.sil.classList.toggle("hi", on);
    weak.cap.sil.classList.toggle("hi", on);
  }
  function retarget() {
    for (const c of cells) c.sp.t = over ? BASE + LIFT * c.k * falloff(Math.hypot(c.x - over[0], c.y - over[1]) / R) : c.h0;
    if (over) {
      const i = clamp(Math.floor(over[0] / CELL), 0, N - 1), j = clamp(Math.floor(over[1] / CELL), 0, N - 1);
      want = byCell.get(i + "," + j);
      read.textContent = `ponto ${i + 1}·${j + 1}`;
    } else { want = weak; read.textContent = "rest"; }
    light();
    B.wake();
  }
  light();

  // The weak stake in its rest pose, on screen: a column from its foot to its cap. It never moves, so it holds the probe on that stake.
  const foot = P(WX, WY, 0), head = P(WX, WY, weak.h0 + CH), hw = RC * 1.85 + 1;
  /** Where the probe touches the soil: on the weak stake when the pointer is on its rest column, else on the ground under the pointer, kept on the block. */
  function probe([sx, sy]) {
    if (Math.abs(sx - foot[0]) < hw && sy > head[1] - hw / 2 && sy < foot[1] + hw / 2) return [WX, WY];
    const [x, y] = unproj(C, sx, sy, 0);
    return [clamp(x, 0, EXT), clamp(y, 0, EXT)];
  }

  bag.add(pointer(stage, {
    move: (p) => { over = probe(p); retarget(); },
    leave: () => { over = null; retarget(); },
  }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { R = v * CELL; if (over) retarget(); },
    destroy: bag.dispose,
  };
}

export default {
  name: "sondagem",
  means: "Um terreno de sondagem: a sonda do mouse ergue as estacas onde o solo cede, e no ponto fraco ela sobe mais.",
  rules: [1, 3, 4, 5],
  range: [1.3, 2.2, 3.2],
  mount,
};
