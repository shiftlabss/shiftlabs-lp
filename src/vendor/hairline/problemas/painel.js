/**
 * Painel: an instrument panel standing on a plinth, square to the floor, with
 * three round gauges on its face. At rest each needle is someone's guess, and
 * it never settles: it sways about the guess, each at its own slow pace, with
 * nothing measured. The pointer on the panel turns measuring on: the lamps
 * light, the needle swings out to the measured value, far from the guess, and
 * holds there, staggered outwards from the gauge under the pointer on the
 * 700ms lift curve, while the guess goes on swaying as a dashed mark. The
 * read-out sets that gauge's guess against its reading. The gauge under the
 * pointer takes the bright stroke; the middle one holds it at rest. The
 * slider is the stagger.
 *
 * The pattern: an ambient sway that sleeps offscreen and holds still under
 * reduced motion; tweens, a stagger by distance, and a hit test on the
 * panel's face and the gauges, which never move.
 */
import HL from "../kernel.js";

const {
  Cam, facing, fit, hull, open, poly, prism, proj, put, rad, rings, seg, tdone, tset, tval, tween, disposer, mk, place, pointer, reducedMotion, reflect, register, solid,
} = HL;

// the panel's own axes, square to the floor like every other figure, facing +y: across it, the way it faces, and up; its face is FACE out from its middle
const TURN = 0, CEN = [50, 50], FACE = 3, DEPTH = 2.4, HIGH = 46;
const ACROSS = [Math.cos((TURN * Math.PI) / 180), Math.sin((TURN * Math.PI) / 180)], OUT = [-ACROSS[1], ACROSS[0]];
// each gauge: where along the panel, how high, its radius, the guess and the reading, out of 100,
// and how far and how slowly (seconds) the guess sways
const GAUGES = [
  { u: -35, z: 25, r: 13, guess: 70, real: 28, sway: 11, period: 6.1 },
  { u: 0, z: 26, r: 15, guess: 40, real: 88, sway: 13, period: 7.7 },
  { u: 35, z: 25, r: 13, guess: 62, real: 12, sway: 10, period: 5.3 },
];
/** The angle a value points at on the face: the scale runs from lower left, over the top, to lower right. */
const angle = (v) => rad(225 - v * 2.7);

/** A ring turned by deg degrees about its own centre and moved to (cx, cy), normals with it. */
function tf(ring, deg, cx, cy) {
  const c = Math.cos(rad(deg)), s = Math.sin(rad(deg));
  return ring.map((q) => ({ u: q.u * c - q.v * s + cx, v: q.u * s + q.v * c + cy, nu: q.nu * c - q.nv * s, nv: q.nu * s + q.nv * c }));
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let step = value, on = false, act = -1, clock = 0;

  const cam = Cam(45, 0.5, 2.38);
  const W = (u, n, z) => [CEN[0] + ACROSS[0] * u + OUT[0] * n, CEN[1] + ACROSS[1] * u + OUT[1] * n, z];
  fit(cam, [W(-60, -14, -4), W(60, 14, -14), W(-60, 14, -4), W(60, -14, -4), W(-54, -3, HIGH), W(54, -3, HIGH)], 200, 177);
  const P = proj(cam), front = facing(cam), at = (u, n, z) => P(...W(u, n, z));
  /** A circle on the panel's face: r round (u, z), n out from the panel's middle. */
  const circle = (u, z, r, n, k = 40) => Array.from({ length: k }, (_, i) => { const a = (i / k) * 2 * Math.PI; return at(u + r * Math.cos(a), n, z + r * Math.sin(a)); });
  const onFace = (u, z, r, a, n) => at(u + r * Math.cos(a), n, z + r * Math.sin(a));

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(-60, -14, 60, 14, 9, 2), plinth = [tf(pr, TURN, ...CEN), tf(pi, TURN, ...CEN)];
  reflect(svg, g, P, front, plinth[0], -4, 10);
  put(solid(g), prism(P, front, plinth[0], plinth[1], -4, 0));
  const [br, bi] = rings(-54, -FACE, 54, FACE, 3, 1.2);
  put(solid(g), prism(P, front, tf(br, TURN, ...CEN), tf(bi, TURN, ...CEN), 0, HIGH));

  // the lamps along the bottom of the face, off until it measures
  const lamps = [-15, -5, 5, 15].map((u) => { const d = mk("circle", { r: 1.7, class: "dot off" }, g); place(d, at(u, FACE, 6)); return d; });

  // each gauge: its rim standing out of the face, the face's edge and bezel, the scale, the dashed guess, the needle, the hub
  const f = FACE + DEPTH;
  for (const gg of GAUGES) {
    const { u, z, r } = gg;
    gg.body = solid(g);
    put(gg.body, { sil: poly(hull(circle(u, z, r, FACE).concat(circle(u, z, r, f)))), crease: poly(circle(u, z, r - 1.4, f)) });
    let ticks = "";
    for (let k = 0; k <= 10; k++) {
      const a = angle(k * 10);
      ticks += seg(onFace(u, z, r - (k % 5 ? 3 : 4.2), a, f), onFace(u, z, r - 2.2, a, f));
    }
    mk("path", { d: ticks, class: "nf" }, g);
    gg.ghost = mk("path", { class: "nf dash" }, g);
    gg.needle = mk("path", { class: "sil" }, g);
    const hub = solid(g);
    put(hub, { sil: poly(hull(circle(u, z, 2, f, 16).concat(circle(u, z, 2, f + 1.4, 16)))), crease: poly(circle(u, z, 1.1, f + 1.4, 16)) });
    gg.tw = tween(0); gg.m = NaN;
  }

  /** Where gauge gg's guess is now: two slow waves about it, so it never quite repeats. */
  const opinion = (gg, i) => gg.guess + gg.sway * (0.7 * Math.sin((2 * Math.PI * clock) / gg.period + i * 2.1) + 0.3 * Math.sin((2 * Math.PI * clock) / (gg.period * 0.43) + i * 1.3));
  /** Gauge gg's needle pointing at value v. */
  function needle(gg, v) {
    const { u, z, r } = gg, a = angle(v), n = f + 0.5;
    const tip = onFace(u, z, r - 2.6, a, n), back = onFace(u, z, 3, a + Math.PI, n), side = onFace(u, z, 2, a + Math.PI / 2, n), other = onFace(u, z, 2, a - Math.PI / 2, n);
    return poly([tip, side, back, other]);
  }

  const B = register(stage, (dt, now) => {
    const still = reducedMotion();
    if (!still) clock += dt;
    let moving = false;
    GAUGES.forEach((gg, i) => {
      const m = tval(gg.tw, now), g = opinion(gg, i), key = m + "|" + g;
      if (key !== gg.m) {
        gg.m = key;
        // measuring, the needle goes to the reading and holds; the guess goes on swaying, dashed
        gg.needle.setAttribute("d", needle(gg, g + (gg.real - g) * m));
        gg.ghost.setAttribute("d", m > 0.02 ? open([at(gg.u, f + 0.3, gg.z), onFace(gg.u, gg.z, gg.r - 2.6, angle(g), f + 0.3)]) : "");
      }
      if (!tdone(gg.tw, now)) moving = true;
    });
    return !still || moving;
  });
  bag.add(B.unregister);

  // hit test, on screen: the panel's face and each gauge's face where they stand; none of them moves
  const inside = (pt, q) => { let c = false; for (let i = 0, j = q.length - 1; i < q.length; j = i++) if ((q[i][1] > pt[1]) !== (q[j][1] > pt[1]) && pt[0] < ((q[j][0] - q[i][0]) * (pt[1] - q[i][1])) / (q[j][1] - q[i][1]) + q[i][0]) c = !c; return c; };
  const panel = [at(-54, FACE, 0), at(54, FACE, 0), at(54, FACE, HIGH), at(-54, FACE, HIGH)];
  const faces = GAUGES.map((gg) => circle(gg.u, gg.z, gg.r, f, 24));
  const hit = (p) => ({ over: inside(p, panel) || faces.some((q) => inside(p, q)), k: faces.findIndex((q) => inside(p, q)) });

  function light(k) { GAUGES.forEach((gg, i) => gg.body.sil.classList.toggle("hi", i === (k < 0 ? 1 : k))); }
  /** Turns measuring on or off: the needles go out to the readings, or back to the guesses, staggered from the gauge pointed at. */
  function aim({ over, k }) {
    if (over !== on) {
      on = over;
      const now = performance.now(), from = k >= 0 ? k : act >= 0 ? act : 1;
      GAUGES.forEach((gg, i) => tset(gg.tw, on ? 1 : 0, now, Math.abs(i - from) * step));
      lamps.forEach((d) => { d.classList.toggle("off", !on); d.classList.toggle("m", on); });
    }
    act = on ? k : -1;
    light(act);
    const gg = GAUGES[act];
    read.textContent = !on ? "rest" : gg ? `palpite ${gg.guess} · real ${gg.real}` : "medindo";
    B.wake();
  }
  light(-1);

  bag.add(pointer(stage, { move: (p) => aim(hit(p)), leave: () => aim({ over: false, k: -1 }) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { step = v; },
    destroy: bag.dispose,
  };
}

export default {
  name: "painel",
  means: "Ponteiros oscilam no palpite; o mouse liga a medição e o real vai para bem longe, enquanto o palpite segue oscilando, tracejado.",
  rules: [1, 2, 7, 10],
  range: [20, 45, 80],
  mount,
};
