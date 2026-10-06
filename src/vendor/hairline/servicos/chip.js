/**
 * Chip: a square board with a chip in the middle, its package, its lid and the
 * dot that marks pin 1, sixteen pins, four a side, each with a trace that fans
 * out to a pad near the edge, and a few small parts at the corners. Signals
 * come in all the time, each from the pad of a pin along its trace. The
 * pointer on the board raises the lid on the 700ms lift curve and holds it up;
 * on a trace it also lights it and routes every new signal through it, and the
 * read-out names the input. At rest the lid is down and holds the bright
 * stroke. The slider is how far the lid rises.
 *
 * The pattern: an ambient flow that sleeps offscreen and holds still under
 * reduced motion, a tween for the lid, and a hit test on the board and the
 * traces, which never move.
 */
import HL from "../kernel.js";

const {
  Cam, circ, facing, fit, open, poly, prism, proj, put, ringAt, rings, tdone, tset, tval, tween, unproj, disposer, mk, place, pointer, reducedMotion, reflect, register, solid,
} = HL;

const C = 50, HALF = 15, PKG = 5, OFFS = [-9, -3, 3, 9], SIDES = [[1, 0], [0, 1], [-1, 0], [0, -1]], LMAX = 9;
const POOL = 6, V = 26, GAP = 9;

/** The sixteen pins, numbered round the chip from the marked corner, each with its trace from the pad in to the package. */
const PINS = [];
SIDES.forEach(([nx, ny], s) => OFFS.forEach((o, j) => {
  const at = (a, b) => [C + nx * a - ny * b, C + ny * a + nx * b];
  PINS.push({
    n: s * 4 + j + 1, far: nx + ny < 0, foot: [at(HALF, o - 1.3), at(HALF + 5, o + 1.3)],
    path: [at(43, o * 2.4), at(26 + Math.abs(o) * 1.4, o * 2.4), at(26, o), at(HALF + 5, o), at(HALF, o)],
  });
}));
for (const pin of PINS) pin.len = pin.path.slice(1).reduce((s, b, i) => s + Math.hypot(b[0] - pin.path[i][0], b[1] - pin.path[i][1]), 0);

/** The point d along a polyline of world [x, y] points. */
function along(pts, d) {
  for (let i = 1; i < pts.length; i++) {
    const [a, b] = [pts[i - 1], pts[i]], l = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (d <= l) return [a[0] + ((b[0] - a[0]) * d) / l, a[1] + ((b[1] - a[1]) * d) / l];
    d -= l;
  }
  return pts[pts.length - 1];
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let rise = value, over = -1, lifted = NaN, next = 0;
  const lift = tween(0);

  const cam = Cam(45, 0.5, 2.1);
  fit(cam, [[0, 0, -4], [100, 100, -14], [100, 0, -4], [0, 100, -4], [41, 41, PKG + 1.2 + LMAX]], 200, 166);
  const P = proj(cam), front = facing(cam), flat = (pts, z = 0) => pts.map(([x, y]) => P(x, y, z));

  const g = mk("g", {}, svg);
  const [br, bi] = rings(0, 0, 100, 100, 10, 2);
  reflect(svg, g, P, front, br, -4, 10);
  put(solid(g), prism(P, front, br, bi, -4, 0));

  // the traces and their pads, flat on the board
  for (const pin of PINS) {
    const [px, py] = pin.path[0];
    pin.trace = mk("path", { d: open(flat(pin.path)) + poly(ringAt(P, circ(2.4, 16).map((q) => ({ ...q, u: q.u + px, v: q.v + py })), 0)), class: "nf" }, g);
  }
  const block = (x0, y0, x1, y1, r, z0, z1) => { const [ring, inner] = rings(Math.min(x0, x1), Math.min(y0, y1), Math.max(x0, x1), Math.max(y0, y1), r, 0.5); put(solid(g), prism(P, front, ring, inner, z0, z1)); };
  const pins = (far) => PINS.filter((p) => p.far === far).forEach((p) => block(...p.foot[0], ...p.foot[1], 0.9, 0.3, 1.8));
  const parts = (far) => [[24, 24], [76, 24], [24, 76], [76, 76]].filter(([x, y]) => x + y < 100 === far || (x + y === 100 && far))
    .forEach(([x, y]) => block(x - 2.5, y - 1.4, x + 2.5, y + 1.4, 0.8, 0, 2));

  // back to front: the far pins and parts, the package, its lid and pin 1's mark, then the near pins and parts, and the signals on top
  pins(true); parts(true);
  const [kr, ki] = rings(C - HALF, C - HALF, C + HALF, C + HALF, 3, 1.2);
  put(solid(g), prism(P, front, kr, ki, 0, PKG));
  const lid = solid(g), [lr, li] = rings(C - 9, C - 9, C + 9, C + 9, 2, 1);
  place(mk("circle", { r: 1.5, class: "dot m" }, g), P(C + HALF - 4, C - 10, PKG));
  pins(false); parts(false);

  // the signals: each on a pin's trace, d along it; below zero it waits at the pad, unseen
  const pick = () => (over >= 0 ? over : (next = (next + 7) % PINS.length));
  const sigs = Array.from({ length: POOL }, (_, k) => {
    const pin = pick();
    return { pin, d: (k / POOL) * PINS[pin].len - k * 3, el: mk("circle", { r: 0, class: "dot m" }, g) };
  });

  function draw(now) {
    const l = tval(lift, now);
    if (l !== lifted) { lifted = l; put(lid, prism(P, front, lr, li, PKG + rise * l, PKG + 1.2 + rise * l)); }
    for (const s of sigs) {
      // unseen at the pad before it starts, and once it goes under its pin, or, on the far side, behind the package
      const pin = PINS[s.pin], on = s.d >= 0 && s.d <= pin.len - (pin.far ? 11 : 5.5);
      s.el.setAttribute("r", on ? 1.7 : 0);
      if (on) place(s.el, P(...along(pin.path, s.d), 0.4));
      s.el.classList.toggle("m", s.pin !== over);
    }
  }

  const B = register(stage, (dt, now) => {
    const still = reducedMotion();
    if (!still) {
      for (const s of sigs) {
        s.d += V * dt;
        // landed: the signal starts again from a pad, a gap behind the last one on its trace
        if (s.d >= PINS[s.pin].len) {
          s.pin = pick();
          s.d = -GAP * (1 + sigs.filter((o) => o !== s && o.pin === s.pin && o.d < GAP).length);
        }
      }
    }
    draw(now);
    return !still || !tdone(lift, now);
  });
  bag.add(B.unregister);

  /** The pin whose trace runs nearest the pointer on the board; the traces never move. */
  function hit(p) {
    const [x, y] = unproj(cam, p[0], p[1], 0);
    let best = -1, bd = 5;
    PINS.forEach((pin, k) => {
      for (let i = 1; i < pin.path.length; i++) {
        const [a, b] = [pin.path[i - 1], pin.path[i]], dx = b[0] - a[0], dy = b[1] - a[1];
        const t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / (dx * dx + dy * dy)));
        const d = Math.hypot(x - a[0] - t * dx, y - a[1] - t * dy);
        if (d < bd) { bd = d; best = k; }
      }
    });
    return best;
  }

  /**
   * The pointer on the board holds the lid up (off the board lets it down);
   * on pin a's trace it routes the flow through it, and the trace takes the
   * bright stroke from the lid.
   */
  function aim(a, on) {
    tset(lift, on ? 1 : 0, performance.now(), 0);
    if (a !== over) {
      if (over >= 0) PINS[over].trace.classList.remove("hi");
      over = a;
      if (a >= 0) PINS[a].trace.classList.add("hi");
      lid.sil.classList.toggle("hi", a < 0);
    }
    read.textContent = a >= 0 ? `entrada ${String(PINS[a].n).padStart(2, "0")}` : on ? "chip ativo" : "rest";
    B.wake();
  }
  lid.sil.classList.add("hi");

  const onBoard = (p) => { const [x, y] = unproj(cam, p[0], p[1], 0); return x >= 0 && x <= 100 && y >= 0 && y <= 100; };
  bag.add(pointer(stage, { move: (p) => aim(hit(p), onBoard(p)), leave: () => aim(-1, false) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { rise = v; lifted = NaN; B.wake(); },
    destroy: bag.dispose,
  };
}

export default {
  name: "chip",
  means: "Um chip numa placa recebendo sinais sem parar; o mouse escolhe uma entrada e todo o fluxo passa por ela.",
  rules: [1, 4, 5, 7],
  range: [3, 6, 9],
  mount,
};
