/**
 * Torre: a tower of nine layers on a plinth, each layer three bars laid
 * across the one below, as in a block tower. At rest every layer has drifted
 * and twisted a little from the one under it, and the tower leans: decisions
 * piled up without a plumb line. The pointer's height picks a layer; it and
 * every layer under it slide back into line, staggered outwards from it on the
 * 700ms lift curve, and the layer picked takes the bright stroke. The slider
 * is how far each layer drifts.
 *
 * The pattern: discrete items. Tweens, a stagger by distance, and a hit test
 * on the layers' centres in the aligned pose, which never moves.
 */
import HL from "../kernel.js";

const {
  Cam, clamp, facing, fit, prism, proj, put, rad, rings, tdone, tset, tval, tween, disposer, mk, pointer, reflect, register, solid,
} = HL;

const N = 9, H = 6, STEP = 45, C = 15;
// how each layer sits on the one under it, before scaling: its drift in x and y, and its twist in degrees
const DRIFT = [[0, 0, 0], [0.6, -0.2, 4], [0.3, -0.8, -5], [1, -0.4, 6], [0.2, -1, -3], [0.9, -0.6, 7], [0.5, -0.9, -6], [1.1, -0.3, 5], [0.4, -1.1, -8]];

/** The drift piled up at rest: layer i's offset is the sum of the drifts under it. The fit is made from it. */
const OFF = DRIFT.reduce((acc, [dx, dy], i) => (acc.push(i ? [acc[i - 1][0] + dx, acc[i - 1][1] + dy] : [dx, dy]), acc), []);

/** A ring turned by (c, s) about the layer's centre and moved by (ox, oy), normals with it. */
const tf = (ring, c, s, ox, oy) => ring.map((q) => ({
  u: C + (q.u - C) * c - (q.v - C) * s + ox, v: C + (q.u - C) * s + (q.v - C) * c + oy,
  nu: q.nu * c - q.nv * s, nv: q.nu * s + q.nv * c,
}));

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let d = value;

  // The camera is fitted to the tower at its widest drift, so the slider's far end stays in the frame.
  const top = OFF[N - 1], far = [top[0] * 3.8, top[1] * 3.8];
  const cam = Cam(45, 0.5, 2.6);
  fit(cam, [[-7, -7, -5], [37, 37, -5], [37, -7, -5], [-7, 37, -5], [37, 37, -16], [-6, -6, N * H],
    [far[0] + 37, far[1] - 7, N * H], [far[0] + 37, far[1] + 37, N * H], [far[0] - 7, far[1] - 7, N * H]], 200, 166);
  const P = proj(cam), front = facing(cam);

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(-7, -7, 37, 37, 6, 1.8);
  reflect(svg, g, P, front, pr, -5, 12);
  put(solid(g), prism(P, front, pr, pi, -5, 0));

  // bottom to top, and in a layer from the far bar to the near one: the order they are painted in
  const layers = [];
  for (let i = 0; i < N; i++) {
    const bars = [0, 1, 2].map((j) => {
      const a = j * 10.2, [ring, inner] = i % 2 ? rings(a, 0, a + 9.6, 30, 1.8, 0.8) : rings(0, a, 30, a + 9.6, 1.8, 0.8);
      return { ring, inner, el: solid(g) };
    });
    layers.push({ bars, tw: tween(0), ox: NaN, oy: NaN, th: NaN });
  }

  function draw(i, ox, oy, deg) {
    const th = rad(deg), c = Math.cos(th), s = Math.sin(th);
    for (const b of layers[i].bars) put(b.el, prism(P, front, tf(b.ring, c, s, ox, oy), tf(b.inner, c, s, ox, oy), i * H, (i + 1) * H));
  }

  // Each layer keeps only its own drift over the one under it, so the layers above ride on the ones put in line.
  const B = register(stage, (_dt, now) => {
    let moving = false, ox = 0, oy = 0;
    layers.forEach((L, i) => {
      const k = 1 - tval(L.tw, now), th = DRIFT[i][2] * (d / 2.6) * k;
      ox += DRIFT[i][0] * d * k; oy += DRIFT[i][1] * d * k;
      if (ox !== L.ox || oy !== L.oy || th !== L.th) { L.ox = ox; L.oy = oy; L.th = th; draw(i, ox, oy, th); }
      if (!tdone(L.tw, now)) moving = true;
    });
    return moving;
  });
  bag.add(B.unregister);

  // hit test: the layers' centres in the aligned pose, one above the other on screen; they never move
  const cx = P(C, C, 0)[0], y0 = P(C, C, H / 2)[1], dy = y0 - P(C, C, H * 1.5)[1];
  function hit([x, y]) {
    if (Math.abs(x - cx) > 80 || y > y0 + dy * 1.5) return -1;
    return clamp(Math.round((y0 - y) / dy), 0, N - 1);
  }

  let act = -1;
  function light(a) {
    const lit = a < 0 ? N - 1 : a;
    layers.forEach((L, i) => L.bars.forEach((b) => b.el.sil.classList.toggle("hi", i === lit)));
  }
  /** Puts layer a and every layer under it in line (-1 lets them all drift back), staggered outwards from the layer picked or let go. */
  function setActive(a) {
    if (a === act) return;
    const now = performance.now(), from = a >= 0 ? a : act;
    act = a;
    layers.forEach((L, i) => tset(L.tw, a >= 0 && i <= a ? 1 : 0, now, Math.abs(i - from) * STEP));
    light(a);
    read.textContent = a < 0 ? "rest" : `camada ${a + 1}`;
    B.wake();
  }
  light(-1);

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { d = v; layers.forEach((L) => { L.ox = NaN; }); B.wake(); },
    destroy: bag.dispose,
  };
}

export default {
  name: "torre",
  means: "Uma torre de decisões empilhadas sem prumo: o mouse endireita as camadas até a altura dele.",
  rules: [1, 2, 5, 9],
  range: [1.4, 2.6, 3.8],
  mount,
};
