/**
 * Balança: a balança romana on a plinth. A column holds the fulcrum in a fork;
 * the beam rests on it, with a pan hung by three cords from its short arm and
 * a pear-shaped poise riding its long arm, graduated in kg. At rest the pan
 * holds a load, the beam is level, and the poise, bright, sits on its mark.
 * The pointer puts load in the pan, more the nearer it comes to the pan: the
 * load grows on its spring, the beam tips towards the heavier side, and the
 * poise runs along the scale on a slower spring until the beam is level
 * again. The read-out is what the poise measures. The pan takes the bright
 * stroke from the poise while the pointer loads it. The slider is the most
 * the pointer can put in the pan, in kg.
 *
 * The pattern: a continuous input. Springs, the tilt chasing the imbalance
 * between the load and the poise, both clamped, and a hit test on the plane of
 * the pan at rest, which never moves.
 */
import HL from "../kernel.js";

const {
  Cam, circ, clamp, facing, fit, hull, open, poly, prism, proj, put, rad, rings, run, seg, spring, stepS, unproj, disposer, mk, pointer, reflect, register, solid,
} = HL;

// The beam runs along x through the fulcrum at (0, 0, FZ), from BACK to END. The pan hangs A behind
// the fulcrum; the scale's zero is D0 out along the long arm, and each kg is STEP further out.
const FZ = 36, A = 21, BACK = -24, END = 76, BW = 1.2, D0 = 9, STEP = 2.1, FULL = 30, REST = 10;
const CORD = 20, PR = 11, RB = 4.5, TMAX = 8, GAIN = 1.4, R0 = 9, RF = 85;

/** The beam's half height at u along it: thickest at the fulcrum, thinner towards both ends. */
const hw = (u) => 1.9 - (u < 0 ? (0.3 * u) / BACK : (0.8 * u) / END);
const shift = (ring, dx) => ring.map((q) => ({ ...q, u: q.u + dx }));
/** The beam tipped th degrees, pan side down: a point of its own frame (u along, v across, w up) in the world. */
function frame(th) {
  const c = Math.cos(rad(th)), s = Math.sin(rad(th));
  return (u, v, w) => [u * c - w * s, v, FZ + u * s + w * c];
}
/** The pan's hook under the short arm, the point its cords meet, and the top of its plate, CORD below. */
function hook(T) {
  const H = T(-A, 0, -hw(-A));
  return { H, ap: [H[0], 0, H[2] - 2.5], top: H[2] - 2.5 - CORD };
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let max = value, over = null, drawn = "";

  // fitted to the plinth and its reflection, and to the beam, the pan and the poise at both ends of the tilt
  const C = Cam(45, 0.5, 3.1), DMAX = D0 + FULL * STEP;
  const env = [[-34, -15, -4], [14, 15, -14], [14, -15, -4], [-34, 15, -4], [0, 0, FZ + 3]];
  for (const th of [-TMAX, TMAX]) {
    const T = frame(th), { H, top } = hook(T), hp = T(DMAX, 0, -hw(DMAX) - 0.7), z = top - 1.2;
    env.push(T(END, 0, hw(END)), T(BACK, 0, hw(BACK)), [H[0] - PR, 0, z], [H[0], PR, z], [H[0] + PR, 0, z], [hp[0] + RB, RB, hp[2] - 3.8 - 2 * RB]);
  }
  fit(C, env, 193, 174);
  const P = proj(C), front = facing(C);

  const g = mk("g", {}, svg);
  const box = (x0, y0, x1, y1, r, b, z0, z1) => { const [o, i] = rings(x0, y0, x1, y1, r, b); put(solid(g), prism(P, front, o, i, z0, z1)); };
  const [br, bi] = rings(-34, -15, 14, 15, 9, 2);
  reflect(svg, g, P, front, br, -4, 10);
  put(solid(g), prism(P, front, br, bi, -4, 0));

  // back to front: the pan, farthest; the column and the far cheek of its fork; the beam, its scale and
  // the poise's rider; the near cheek with the pin; the poise, nearest
  const back = mk("path", { class: "nf" }, g), plate = solid(g), crate = solid(g), fore = mk("path", { class: "nf" }, g);
  box(-6, -6, 6, 6, 3, 1.2, 0, 1.6);
  box(-3, -2.6, 3, 2.6, 2, 0.9, 1.6, FZ - 4.5);
  box(-3, -2.6, 3, -1.4, 0.5, 0.3, FZ - 4.5, FZ + 2.8);
  const beam = solid(g), minor = mk("path", { class: "nf lo" }, g), major = mk("path", { class: "nf" }, g), rider = solid(g);
  box(-3, 1.4, 3, 2.6, 0.5, 0.3, FZ - 4.5, FZ + 2.8);
  mk("path", { d: poly(circ(1, 16).map((q) => P(q.u, 2.65, FZ + q.v))) }, g);
  const hanger = mk("path", { class: "nf" }, g), poise = solid(g);

  const [bR, bI] = rings(BACK, -BW, END, BW, 1.1, 0.5), pR = circ(PR, 40), pI = circ(PR - 1, 40);
  const ball = circ(RB, 48), eq = circ(RB - 0.5, 48), neck = circ(0.9, 12);

  /** A bar in the beam's frame T: the hull of its ring at heights ±h(u), and its top's crease. */
  function bar(T, ring, inner, h) {
    const at = (q, w) => P(...T(q.u, q.v, w));
    return { sil: poly(hull(ring.flatMap((q) => [at(q, h(q.u)), at(q, -h(q.u))]))), crease: open(run(inner, front).map((q) => at(q, h(q.u)))) };
  }

  /** Draws the scale tipped th degrees, the poise d along the beam and w kg in the pan. */
  function draw(th, d, w) {
    const T = frame(th), { H, ap, top } = hook(T), cx = H[0], a = P(...ap);
    const rim = (deg) => P(cx + (PR - 0.8) * Math.cos(rad(deg)), (PR - 0.8) * Math.sin(rad(deg)), top);
    back.setAttribute("d", seg(P(...H), a) + seg(a, rim(240)));
    fore.setAttribute("d", seg(a, rim(0)) + seg(a, rim(120)));
    put(plate, prism(P, front, shift(pR, cx), shift(pI, cx), top - 1.2, top));
    // the load, a crate whose side grows with its weight
    const s = w > 0.2 ? 2 + (7.5 * clamp(w, 0, FULL)) / FULL : 0;
    if (s > 1.2) { const [o, i] = rings(cx - s / 2, -s / 2, cx + s / 2, s / 2, 1.2, Math.min(0.6, s / 4)); put(crate, prism(P, front, o, i, top, top + 0.8 * s)); }
    else put(crate, { sil: "", crease: "" });

    put(beam, bar(T, bR, bI, hw));
    let lo = "", hi = "";
    for (let k = 0; k <= FULL; k++) {
      const u = D0 + k * STEP, h = hw(u), p = P(...T(u, BW, h - 0.45));
      if (k % 5) lo += seg(p, P(...T(u, BW, h - 1.1)));
      else hi += seg(p, P(...T(u, BW, 0.25 - h)));
    }
    minor.setAttribute("d", lo);
    major.setAttribute("d", hi);
    const [o, i] = rings(d - 1.8, -BW - 0.6, d + 1.8, BW + 0.6, 0.8, 0.4);
    put(rider, bar(T, o, i, () => hw(d) + 0.7));

    // the poise hangs straight down from its rider: a ball drawn up to a neck, a pear
    const hp = T(d, 0, -hw(d) - 0.7), nz = hp[2] - 3, cz = nz - 0.8 - RB, at = (q, k, z) => P(hp[0] + q.u * k, q.v * k, z);
    hanger.setAttribute("d", seg(P(...hp), P(hp[0], 0, nz)));
    const pts = neck.map((q) => at(q, 1, nz));
    for (let j = -6; j <= 6; j++) { const f = (j / 6) * (Math.PI / 2); for (const q of ball) pts.push(at(q, Math.cos(f), cz + RB * Math.sin(f))); }
    put(poise, { sil: poly(hull(pts)), crease: open(run(eq, front).map((q) => at(q, 1, cz))) });
  }

  // the load follows the pointer; the poise chases the balance on a slower spring than the beam's, so the beam is
  // seen to tip before it levels; the tilt chases the imbalance between them
  const ld = spring(REST), po = spring(REST, { k: 16, c: 7 }), tl = spring(0);
  const B = register(stage, (dt) => {
    let moving = stepS(ld, dt);
    if (stepS(po, dt)) moving = true;
    tl.t = clamp(GAIN * (ld.x - po.x), -TMAX, TMAX);
    if (stepS(tl, dt)) moving = true;
    const key = `${tl.x}|${po.x}|${ld.x}`;
    if (key !== drawn) { drawn = key; draw(tl.x, D0 + STEP * po.x, ld.x); }
    const kg = `${Math.round(po.x)} kg`;
    if (over && read.textContent !== kg) read.textContent = kg;
    return moving;
  });
  bag.add(B.unregister);

  const PZ = hook(frame(0)).top;
  /** The load the pointer puts in the pan: all of max over the pan, none RF away; met on the plane of the pan at rest, which never moves. */
  function load([sx, sy]) {
    const [x, y] = unproj(C, sx, sy, PZ);
    return Math.round(max * clamp((RF - Math.hypot(x + A, y)) / (RF - R0), 0, 1));
  }
  function light(on) {
    poise.sil.classList.toggle("hi", !on);
    plate.sil.classList.toggle("hi", on);
    crate.sil.classList.toggle("hi", on);
  }
  function aim(p) {
    over = p;
    ld.t = po.t = p ? load(p) : REST;
    if (!p) read.textContent = "rest";
    light(!!p);
    B.wake();
  }
  light(false);
  read.textContent = "rest";

  bag.add(pointer(stage, { move: aim, leave: () => aim(null) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { max = v; if (over) aim(over); },
    destroy: bag.dispose,
  };
}

export default {
  name: "balanca",
  means: "Uma balança romana: o mouse põe carga no prato, o braço inclina e o contrapeso corre sozinho pela escala até nivelar de novo.",
  rules: [1, 3, 5, 8],
  range: [14, 22, 30],
  mount,
};
