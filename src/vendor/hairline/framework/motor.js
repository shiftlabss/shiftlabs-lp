/**
 * Motor: an inline four on a plate, open at the top and underneath. A block
 * stands on two end walls; four pistons rise out of the collars on its deck,
 * and under it the crankshaft that ties them turns between the walls, each
 * piston on its rod and its throw, with the pulley out in front. The pins are
 * a quarter turn apart, a crossplane crank, so the pistons top out in the
 * firing order, 1-3-4-2, and the engine runs on its own. The pointer is the
 * throttle: its x sets the speed, on a spring, and all four follow without
 * losing step; the piston of the cylinder under it takes the bright stroke,
 * which the pulley holds at rest. The slider is the top speed, in turns a
 * second.
 *
 * The pattern: dilate time, the other way. An ambient clock that sleeps
 * offscreen and holds still under reduced motion, one spring on the speed,
 * paint order by depth along the shaft, and a hit test on the cylinders'
 * columns, which never move.
 */
import HL from "../kernel.js";

const {
  Cam, circ, clamp, facing, fit, hull, lerp, poly, prism, proj, put, rings, spring, stepS, disposer, mk, place, pointer, reducedMotion, reflect, register, solid,
} = HL;

// the block runs along y, the pulley at its near end; x across it, z up
const BW = 24, BL = 88, XC = 12, ZB = 36, ZT = 52, DECK = 55, RC = 9, RB = 7.4, RP = 6.2;
const ZC = 12, E = 7, ROD = 33, HC = DECK + 1 - (ZC - E + ROD), TOP = DECK + 1 + 2 * E, SP = 22, IDLE = 0.45;
// cylinder k from the pulley end; pin phases a quarter turn apart, so the pistons top out 1, 3, 4, 2
const CYL = [1, 2, 3, 4].map((k) => ({ k, y: BL - 11 - (k - 1) * SP, ph: [0, 1.5, 0.5, 1][k - 1] * Math.PI }));

/** A circle of [x, z] points, in a plane across the shaft. */
const round = (cx, cz, r, n = 24) => Array.from({ length: n }, (_, j) => [cx + r * Math.cos((j / n) * 2 * Math.PI), cz + r * Math.sin((j / n) * 2 * Math.PI)]);
/** Two round ends and the hull between them: the outline of a crank web or a rod. */
const lobe = (a, ra, b, rb) => hull(round(a[0], a[1], ra).concat(round(b[0], b[1], rb)));

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let top = value, theta = 0.2 * Math.PI, drawn = NaN, over = -1, on = false, pull = 0;
  const speed = spring(IDLE);

  // fitted to the plate and its reflection, and the pistons at the top of their stroke
  const cam = Cam(45, 0.5, 2.15);
  fit(cam, [[-9, -8, -4], [35, 100, -14], [35, -8, -4], [-9, 100, -4], [XC - RP, 11 - RP, TOP], [XC, 92, ZC]], 200, 175);
  const P = proj(cam), front = facing(cam);
  const inY = (pts, y) => pts.map(([x, z]) => P(x, y, z));
  const at = (ring, y) => ring.map((q) => ({ ...q, u: q.u + XC, v: q.v + y }));

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(-9, -8, 35, 100, 10, 2);
  reflect(svg, g, P, front, pr, -4, 10);
  put(solid(g), prism(P, front, pr, pi, -4, 0));

  /** A thin plate across the shaft: its far face dim, its near face the silhouette, as Riffle's cards. */
  const sheet = () => ({ back: mk("path", { class: "lo" }, g), face: mk("path", { class: "sil" }, g) });
  const lay = (s, pts, y0, y1) => { s.back.setAttribute("d", poly(inY(pts, y0))); s.face.setAttribute("d", poly(inY(pts, y1))); };
  /** A main journal: a round bar along the shaft, from y0 to y1. */
  const bar = (y0, y1) => mk("path", { d: poly(hull(inY(round(XC, ZC, 2.2), y0).concat(inY(round(XC, ZC, 2.2), y1)))), class: "sil" }, g);
  const wall = (y0) => { const [r, i] = rings(5, y0, 19, y0 + 4, 1.5, 0.8); put(solid(g), prism(P, front, r, i, 0, ZB)); };

  // far to near along the shaft: the rear wall, then each throw (web, rod, web) and the journal after it, then the front wall
  wall(0);
  bar(4, CYL[3].y - 4);
  for (const c of CYL.slice().reverse()) {
    c.webA = sheet(); c.rod = sheet(); c.webB = sheet();
    bar(c.y + 4, c.k > 1 ? c.y + SP - 4 : BL - 4);
  }
  wall(BL - 4);

  // the block over them hides the rods' small ends; then the collars and pistons on its deck, far to near
  const [br, bi] = rings(0, 0, BW, BL, 5, 1.6);
  put(solid(g), prism(P, front, br, bi, ZB, ZT));
  for (const c of CYL.slice().reverse()) {
    put(solid(g), prism(P, front, at(circ(RC, 28), c.y), at(circ(RB, 28), c.y), ZT, DECK));
    c.piston = solid(g);
    c.ring = at(circ(RP, 24), c.y);
    c.inner = at(circ(RP - 1.1, 24), c.y);
  }

  // the pulley out in front, on the shaft's end: a hub and a timing mark that turns with it
  const pulley = sheet(), wheel = round(XC, ZC, 7, 28);
  lay(pulley, wheel, BL + 1, BL + 4.5);
  mk("path", { d: poly(inY(round(XC, ZC, 2.2), BL + 4.5)), class: "nf lo" }, g);
  const mark = mk("circle", { r: 1.2, class: "dot m" }, g);

  function draw() {
    if (theta === drawn) return;
    drawn = theta;
    for (const c of CYL) {
      const a = theta - c.ph, s = Math.sin(a), co = Math.cos(a), px = XC + E * s, pz = ZC + E * co;
      const wz = pz + Math.sqrt(ROD * ROD - E * E * s * s);
      const web = lobe([XC - 1.4 * s, ZC - 1.4 * co], 5.8, [px, pz], 3.3);
      lay(c.webA, web, c.y - 4, c.y - 2.6);
      lay(c.rod, lobe([px, pz], 2.7, [XC, wz], 1.9), c.y - 0.8, c.y + 0.8);
      lay(c.webB, web, c.y + 2.6, c.y + 4);
      put(c.piston, prism(P, front, c.ring, c.inner, DECK, wz + HC));
    }
    place(mark, P(XC + 4.6 * Math.sin(theta), BL + 4.5, ZC + 4.6 * Math.cos(theta)));
  }

  const B = register(stage, (dt) => {
    const still = reducedMotion(), moving = stepS(speed, dt);
    if (!still) theta = (theta + 2 * Math.PI * speed.x * dt) % (4 * Math.PI);
    draw();
    return !still || moving;
  });
  bag.add(B.unregister);

  // each cylinder's column on screen, from its rest centre on the deck down to the plate's near edge: none of it moves
  for (const c of CYL) {
    c.sx = P(XC, c.y, DECK)[0];
    c.top = P(XC - RP, c.y - RP, TOP)[1] - 4;
    c.bot = P(35, c.y + 35 - XC, 0)[1];
  }
  const half = Math.abs(CYL[0].sx - CYL[1].sx) / 2, XL = CYL[0].sx - half, XR = CYL[3].sx + half;

  /** The cylinder whose column holds the point; -1 outside them all. */
  function hit([sx, sy]) {
    return CYL.findIndex((c) => Math.abs(sx - c.sx) <= half && sy >= c.top && sy <= c.bot);
  }
  function light() {
    CYL.forEach((c, i) => c.piston.sil.classList.toggle("hi", i === over));
    pulley.face.classList.toggle("hi", over < 0);
    read.textContent = over < 0 ? "rest" : `cilindro ${CYL[over].k}`;
  }
  /** The pointer is the throttle: its x, across the four columns, sets the speed the spring heads for. */
  function aim(p) {
    on = !!p;
    pull = p ? clamp((p[0] - XL) / (XR - XL), 0, 1) : 0;
    speed.t = on ? lerp(IDLE, top, pull) : IDLE;
    const i = p ? hit(p) : -1;
    if (i !== over) { over = i; light(); }
    B.wake();
  }
  light();
  draw();

  bag.add(pointer(stage, { move: aim, down: aim, leave: () => aim(null) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { top = v; if (on) speed.t = lerp(IDLE, top, pull); B.wake(); },
    destroy: bag.dispose,
  };
}

export default {
  name: "motor",
  means: "Um motor de quatro cilindros roda sozinho, em compasso; o mouse acelera e os quatro seguem juntos, presos ao mesmo virabrequim.",
  rules: [1, 5, 7, 8],
  range: [1, 1.8, 3],
  mount,
};
