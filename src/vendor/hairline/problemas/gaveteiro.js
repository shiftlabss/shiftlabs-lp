/**
 * Gaveteiro: a filing cabinet with four drawers, each left open a different
 * way: the top one stuffed with sheets standing up out of it, the others with
 * sheets caught in their fronts or poking up where the drawer above is shut
 * further. The pointer on a drawer pushes it shut, on the 700ms lift curve;
 * it will not stay: it springs back out past where it was and settles, and
 * one of its sheets jumps as it does. The drawer under the pointer takes the
 * bright stroke; the most open one holds it at rest. The slider is how far
 * the drawers stand open.
 *
 * The pattern: discrete items. A tween in, a spring back out, and a hit test
 * on the drawers' fronts in the rest pose, which never moves.
 */
import HL from "../kernel.js";

const {
  Cam, facing, fit, poly, prism, proj, put, rad, rings, spring, stepS, tdone, tset, tval, tween, disposer, mk, pointer, reflect, register, solid,
} = HL;

const FX = 44, Y0 = 11.5, Y1 = 36.5, SHUT = 0.8;
// each drawer, bottom to top: how far it stands open, and its sheets: standing ones [x along the open part, height, twist]
// and caught ones lying out of the front [how far out, twist]
const DRAWERS = [
  { out: 3, caught: [[4, 8]] },
  { out: 9, stand: [[6.5, 3, -5], [8, 2.5, 7]] },
  { out: 5, caught: [[5, -10]] },
  { out: 14, stand: [[3, 6, -6], [5.5, 4.5, 4], [8, 7, -3], [10.5, 5, 8]] },
];
DRAWERS.forEach((d, k) => { d.z0 = 2 + k * 10.5; d.z1 = d.z0 + 9.5; });

/** A ring turned by deg degrees about its own centre and moved to (cx, cy), normals with it. */
function tf(ring, deg, cx, cy) {
  const c = Math.cos(rad(deg)), s = Math.sin(rad(deg));
  return ring.map((q) => ({ u: q.u * c - q.v * s + cx, v: q.u * s + q.v * c + cy, nu: q.nu * c - q.nv * s, nv: q.nu * s + q.nv * c }));
}

function mount({ stage, svg, read }, value) {
  let open = value, act = -1;
  const bag = disposer(), lid = (d) => d.out * open;

  const cam = Cam(45, 0.5, 2.7);
  fit(cam, [[0, 0, -4], [84, 48, -14], [84, 0, -4], [0, 48, -4], [18, 10, 60], [FX + 14 * 1.4 + 6, Y1, 0]], 200, 166);
  const P = proj(cam), front = facing(cam);

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(0, 0, 84, 48, 10, 2);
  reflect(svg, g, P, front, pr, -4, 10);
  put(solid(g), prism(P, front, pr, pi, -4, 0));
  const [cr, ci] = rings(16, 9, FX, 39, 3, 1.4);
  put(solid(g), prism(P, front, cr, ci, 0, 44));
  // the openings the drawers slide in and out of, on the cabinet's front
  const face = (x, y0, y1, z0, z1) => poly([P(x, y0, z0), P(x, y1, z0), P(x, y1, z1), P(x, y0, z1)]);
  mk("path", { d: DRAWERS.map((d) => face(FX, Y0 + 0.6, Y1 - 0.6, d.z0 + 0.3, d.z1 - 0.3)).join(""), class: "nf lo" }, g);

  // bottom to top, each drawer: its body, the sheets standing in it, its front, its handle and label, and the sheets caught in it
  const [sheetR, sheetI] = rings(-0.35, -9, 0.35, 9, 0.3, 0.1), [flatR, flatI] = rings(-5, -8, 5, 8, 1.2, 0.5);
  for (const d of DRAWERS) {
    d.body = solid(g);
    d.stands = (d.stand || []).map(() => solid(g));
    d.front = solid(g); d.handle = solid(g); d.label = mk("path", { class: "nf lo" }, g);
    d.caughts = (d.caught || []).map(() => solid(g));
    d.tw = null; d.sp = spring(lid(d)); d.jump = tween(0); d.drawn = NaN;
  }

  /** Drawer d drawn standing open by x, its jumping sheet up by j of its jump. */
  function draw(d, x, j) {
    const fx = FX + x, box = (x0, y0, x1, y1, r, z0, z1) => { const [a, b] = rings(x0, y0, x1, y1, r, Math.min(0.6, r / 2)); return prism(P, front, a, b, z0, z1); };
    put(d.body, x > 1.8 ? box(FX - 0.5, Y0 + 1, fx - 1.2, Y1 - 1, 0.6, d.z0 + 0.4, d.z1) : { sil: "", crease: "" });
    (d.stand || []).forEach(([sx, h, deg], i) => {
      const at = FX + Math.min(sx, Math.max(0.8, x - 2)), lift = i === 0 ? 8 * Math.sin(Math.PI * j) : 0;
      put(d.stands[i], prism(P, front, tf(sheetR, deg, at, 24), tf(sheetI, deg, at, 24), d.z1 + lift, d.z1 + h + lift));
    });
    put(d.front, box(fx - 1.4, Y0, fx, Y1, 0.6, d.z0, d.z1));
    const mid = (d.z0 + d.z1) / 2;
    put(d.handle, box(fx, 21, fx + 1.6, 27, 0.7, mid - 0.8, mid + 0.8));
    d.label.setAttribute("d", face(fx, 15, 20, mid + 1.4, mid + 3.6));
    (d.caught || []).forEach(([far, deg], i) => {
      const reach = far + 5 * Math.sin(Math.PI * j);
      put(d.caughts[i], prism(P, front, tf(flatR, deg, fx - 3 + reach, 30), tf(flatI, deg, fx - 3 + reach, 30), d.z1, d.z1 + 0.5));
    });
  }

  const B = register(stage, (dt, now) => {
    let moving = false;
    for (const d of DRAWERS) {
      let x;
      if (d.tw) {
        x = tval(d.tw, now);
        // shut, it will not stay: it springs back out from there, past where it was, and one of its sheets jumps
        if (tdone(d.tw, now)) { d.tw = null; d.sp = spring(SHUT, { c: 9 }); d.sp.t = lid(d); tset(d.jump, 1, now, 0); }
        moving = true;
      } else {
        if (stepS(d.sp, dt)) moving = true;
        x = d.sp.x;
      }
      const j = tval(d.jump, now);
      if (tdone(d.jump, now) && j === 1) { d.jump = tween(0); }
      else if (!tdone(d.jump, now)) moving = true;
      const key = x + "|" + j;
      if (key !== d.drawn) { d.drawn = key; draw(d, x, j); }
    }
    return moving;
  });
  bag.add(B.unregister);

  // hit test: the drawers' fronts where they stand at rest, as screen quadrilaterals; they never move
  const inside = (pt, q) => q.every((a, i) => { const b = q[(i + 1) % q.length]; return (b[0] - a[0]) * (pt[1] - a[1]) - (b[1] - a[1]) * (pt[0] - a[0]) <= 0; }) ||
    q.every((a, i) => { const b = q[(i + 1) % q.length]; return (b[0] - a[0]) * (pt[1] - a[1]) - (b[1] - a[1]) * (pt[0] - a[0]) >= 0; });
  function hit(pt) {
    for (let k = DRAWERS.length - 1; k >= 0; k--) {
      const d = DRAWERS[k], x = FX + lid(d);
      if (inside(pt, [P(x, Y0, d.z0), P(x, Y1, d.z0), P(x, Y1, d.z1), P(x, Y0, d.z1)])) return k;
    }
    return -1;
  }

  function light(a) {
    const lit = a < 0 ? 3 : a;
    DRAWERS.forEach((d, k) => d.front.sil.classList.toggle("hi", k === lit));
  }
  /** Pushes drawer a shut (-1 does nothing but put the bright stroke back): it springs back out by itself. */
  function setActive(a) {
    if (a === act) return;
    act = a;
    if (a >= 0) {
      const d = DRAWERS[a], now = performance.now();
      d.tw = tween(d.sp.x);
      tset(d.tw, SHUT, now, 0);
    }
    light(a);
    read.textContent = a < 0 ? "rest" : `gaveta ${DRAWERS.length - a}`;
    B.wake();
  }
  light(-1);

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { open = v; for (const d of DRAWERS) if (!d.tw) d.sp.t = lid(d); B.wake(); },
    destroy: bag.dispose,
  };
}

export default {
  name: "gaveteiro",
  means: "Um arquivo com gavetas abarrotadas: o mouse empurra uma gaveta para fechar, e ela volta a abrir, cuspindo papel.",
  rules: [1, 5, 6, 8],
  range: [0.7, 1, 1.25],
  mount,
};
