/**
 * Maquete: the structural model of a four-storey building on a base plate.
 * Each storey is a thin slab with a pillar at each corner, threaded on a
 * central core that runs up through every slab to the machine room on the
 * roof. At rest the model is opened at the second floor: the floors above it
 * are lifted off, and its slab, pillars and core take the bright stroke. The
 * pointer's x pulls the floors apart along the core, from assembled at the
 * left to the widest gap at the right, on one spring per gap; its y picks a
 * floor, met on the pose the gaps are heading for, never the pose on screen,
 * and that floor takes the bright stroke. The slider is the widest gap.
 *
 * The pattern: scrub and pick. Springs for the gap, a pick on the target pose,
 * and a rest that is a composition.
 */
import HL from "../kernel.js";

const {
  Cam, clamp, facing, fit, poly, prism, proj, put, rings, rrect, spring, stepS, disposer, mk, pointer, reflect, register, solid,
} = HL;

const W = 86, D = 30, PAD = 6, T = 2, H = 9, F = T + H, RT = 2.6, HC = 6, BASE = 4, GLOW = 8, TOP = 6.5;
const E = 3, Q = 2.6, CW = 14, CD = D - 2, CX = (W - CW) / 2, CY = 1;
const NAMES = ["térreo", "andar 1", "andar 2", "andar 3", "cobertura"];
// the gap over each floor at rest: the model opened at the second floor, which is the one lit
const REST = [2.5, 3, 11.5, 4], LIT = 2;

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let gmax = value, over = null, act = -1;

  // The camera is fitted to the tallest pose, every gap at the slider's far end, so no pose leaves the frame.
  const zr = 4 * F + 4 * TOP + RT, cam = Cam(45, 0.5, 2.09);
  fit(cam, [[-PAD, -PAD, 0], [W + PAD, D + PAD, -BASE - GLOW], [W + PAD, -PAD, -BASE], [-PAD, D + PAD, -BASE], [0, 0, zr], [W, D, zr]], 200, 175);
  const P = proj(cam), front = facing(cam);

  const g = mk("g", {}, svg);
  // the plate's round is large on screen, so its rings take more steps than rings() gives
  const br = rrect(-PAD, -PAD, W + PAD, D + PAD, 8, 10), bi = rrect(1.8 - PAD, 1.8 - PAD, W + PAD - 1.8, D + PAD - 1.8, 6.2, 10);
  reflect(svg, g, P, front, br, -BASE, GLOW);
  put(solid(g), prism(P, front, br, bi, -BASE, 0));

  // bottom to top, and on each slab from the far post to the near one: the order they are painted in
  const corners = [[E, E], [W - E - Q, E], [E, D - E - Q], [W - E - Q, D - E - Q]];
  const units = NAMES.map((_, i) => {
    const roof = i === 4, el = solid(g);
    const posts = roof ? [] : corners.map(([x, y]) => ({ key: x + y + Q, rr: rings(x, y, x + Q, y + Q, 0.9, 0.5) }));
    posts.push({ key: (W + D) / 2, rr: rings(CX, CY, CX + CW, CY + CD, 2, 0.9), core: true });
    posts.sort((a, b) => a.key - b.key);
    for (const p of posts) { p.el = solid(g); if (p.core) p.door = mk("path", { class: "nf lo" }, g); }
    return { roof, el, slab: rings(0, 0, W, D, 3, 1), posts, z: NaN, zn: NaN };
  });
  const gaps = REST.map((v) => spring(v));

  /** Floor u standing on zb, the next slab's underside at zn: its core runs up to it, its pillars stop short by the gap. */
  function draw(u, zb, zn) {
    const zs = zb + (u.roof ? RT : T);
    put(u.el, prism(P, front, u.slab[0], u.slab[1], zb, zs));
    for (const p of u.posts) {
      put(p.el, prism(P, front, p.rr[0], p.rr[1], zs, p.core ? (u.roof ? zs + HC : zn) : zs + H));
      if (p.door) p.door.setAttribute("d", poly(rrect(W / 2 - 2, zs + 0.6, W / 2 + 2, zs + 5.6, 0.8, 3).map((q) => P(q.u, CY + CD, q.v))));
    }
  }

  const B = register(stage, (dt) => {
    let moving = false, z = 0;
    for (const sp of gaps) if (stepS(sp, dt)) moving = true;
    units.forEach((u, i) => {
      const zn = i < 4 ? z + F + gaps[i].x : z;
      if (z !== u.z || zn !== u.zn) { u.z = z; u.zn = zn; draw(u, z, zn); }
      z = zn;
    });
    return moving;
  });
  bag.add(B.unregister);

  // The scrub runs across the building, left corner to right; the pick meets each floor's middle in the pose the gaps are heading for.
  const xL = P(0, D, 0)[0], xR = P(W, 0, 0)[0];
  function pick(sy, G) {
    let best = 0, bd = Infinity;
    for (let i = 0; i < 5; i++) {
      const d = Math.abs(P(W / 2, D / 2, i * (F + G) + (i < 4 ? F / 2 : (RT + HC) / 2))[1] - sy);
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }

  function light(a) {
    const lit = a < 0 ? LIT : a;
    units.forEach((u, i) => [u.el, ...u.posts.map((p) => p.el)].forEach((s) => s.sil.classList.toggle("hi", i === lit)));
  }
  /** Sends every gap to where the pointer's x says (or back to rest), and lights the floor its y picks on that pose. */
  function aim() {
    const G = over ? clamp((over[0] - xL) / (xR - xL), 0, 1) * gmax : 0;
    gaps.forEach((sp, j) => { sp.t = over ? G : REST[j]; });
    const a = over ? pick(over[1], G) : -1;
    if (a !== act) { act = a; light(a); read.textContent = a < 0 ? "rest" : NAMES[a]; }
    B.wake();
  }
  light(-1);

  bag.add(pointer(stage, { move: (p) => { over = p; aim(); }, leave: () => { over = null; aim(); } }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { gmax = v; if (over) aim(); },
    destroy: bag.dispose,
  };
}

export default {
  name: "maquete",
  means: "A maquete de um prédio de quatro andares: o mouse afasta os andares e escolhe um, com a laje e os pilares à mostra.",
  rules: [1, 3, 5, 6],
  range: [3.5, 5, 6.5],
  mount,
};
