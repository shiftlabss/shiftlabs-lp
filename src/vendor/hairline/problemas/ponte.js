/**
 * Ponte: two banks at different heights with water in the gap between them,
 * and from each one half of a bridge, a planked deck with a rail on posts,
 * built towards the other. At rest each half is two planks out and they look
 * as if they will meet. The pointer on the scene lets both crews build on:
 * the decks run out on the 700ms lift curve, the far one first, and pass each
 * other, a lane apart and at different heights, the lower one ending against
 * the far bank's wall. The two decks hold the bright stroke; the read-out
 * gives how far apart they are. The slider is that gap.
 *
 * The pattern: discrete items. Tweens, one half after the other, and a hit
 * test on the base, which never moves.
 */
import HL from "../kernel.js";

const {
  Cam, facing, fit, open, prism, proj, put, rings, tdone, tset, tval, tween, unproj, disposer, mk, pointer, reflect, register, solid,
} = HL;

const L = 130, D = 60, GAP = [40, 90], SEG = 10, REST = 2, STEP = 45, WIDE = 10;
// the two halves: the bank each starts from and the way it goes, its deck's height, and how many planks it has in full
const HALVES = [{ from: GAP[0], dir: 1, top: 20, n: 5 }, { from: GAP[1], dir: -1, top: 15, n: 5 }];

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let off = value, built = false;

  const cam = Cam(45, 0.5, 2.25);
  fit(cam, [[0, 0, -4], [L, D, -14], [L, 0, -4], [0, D, -4], [0, 6, HALVES[0].top + 1]], 200, 166);
  const P = proj(cam), front = facing(cam);
  const lane = (h) => D / 2 + (h === HALVES[0] ? -off / 2 : off / 2);

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(0, 0, L, D, 10, 2);
  reflect(svg, g, P, front, pr, -4, 10);
  put(solid(g), prism(P, front, pr, pi, -4, 0));
  // the water in the gap, as a few ripples on the floor
  let water = "";
  for (let k = 0; k < 5; k++) {
    const y = 10 + k * 10, pts = [];
    for (let x = GAP[0] + 4; x <= GAP[1] - 4; x += 2) pts.push(P(x, y + 1.2 * Math.sin(x / 3 + k), 0));
    water += open(pts);
  }
  mk("path", { d: water, class: "nf lo" }, g);
  const block = (x0, y0, x1, y1, r, z0, z1) => { const [a, b] = rings(Math.min(x0, x1), Math.min(y0, y1), Math.max(x0, x1), Math.max(y0, y1), r, Math.min(1.2, r / 2)); return prism(P, front, a, b, z0, z1); };
  put(solid(g), block(2, 4, GAP[0], D - 4, 5, 0, HALVES[0].top - 1.5));

  // back to front: the far half (its posts, deck, planks' seams and rail), the near half, then the near bank
  for (const h of HALVES) {
    h.posts = Array.from({ length: h.n }, (_, k) => (k % 2 ? solid(g) : null));
    h.deck = solid(g); h.seams = mk("path", { class: "nf lo" }, g); h.rail = mk("path", { class: "nf" }, g);
    h.tw = tween(0); h.t = NaN;
  }
  const nearBank = solid(g);
  put(nearBank, block(GAP[1], 4, L - 2, D - 4, 5, 0, HALVES[1].top - 1.5));

  /** Half h with its deck out to len: the planks' seams across it, a rail along its outer edge, and posts under every other plank it has reached. */
  function draw(h, len) {
    const y = lane(h), x0 = h.from, x1 = x0 + h.dir * len, z = h.top, outer = y + (h === HALVES[0] ? -1 : 1) * (WIDE / 2 - 0.8);
    put(h.deck, block(x0, y - WIDE / 2, x1, y + WIDE / 2, 1.2, z - 1.5, z));
    let seams = "", rail = "";
    for (let d = SEG; d < len - 0.5; d += SEG) seams += open([P(x0 + h.dir * d, y - WIDE / 2 + 0.6, z), P(x0 + h.dir * d, y + WIDE / 2 - 0.6, z)]);
    for (let d = 1; d <= len - 1; d += SEG / 2) rail += open([P(x0 + h.dir * d, outer, z), P(x0 + h.dir * d, outer, z + 4)]);
    if (len > 2) rail += open([P(x0 + h.dir, outer, z + 4), P(x1 - h.dir, outer, z + 4)]);
    h.seams.setAttribute("d", seams); h.rail.setAttribute("d", rail);
    h.posts.forEach((post, k) => {
      if (!post) return;
      const px = x0 + h.dir * SEG * (k + 0.5), reach = Math.max(0, Math.min(1, (len - SEG * (k + 0.5)) / (SEG / 2)));
      put(post, reach > 0.02 ? block(px - 1.2, y - 1.2, px + 1.2, y + 1.2, 1, (z - 1.5) * (1 - reach), z - 1.5) : { sil: "", crease: "" });
    });
  }
  const length = (h, t) => SEG * (REST + (h.n - REST) * t);

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const h of HALVES) {
      const t = tval(h.tw, now);
      if (t !== h.t) { h.t = t; draw(h, length(h, t)); }
      if (!tdone(h.tw, now)) moving = true;
    }
    return moving;
  });
  bag.add(B.unregister);
  // the two decks hold the bright stroke: the bridge that was meant to be one
  for (const h of HALVES) h.deck.sil.classList.add("hi");

  /** Whether the pointer is over the base, met on its top; the base never moves. */
  const onBase = (p) => { const [x, y] = unproj(cam, p[0], p[1], 0); return x >= 0 && x <= L && y >= 0 && y <= D; };
  /** Lets the crews build on (or takes back what was built past the start), the far half first, the near one after it. */
  function aim(on) {
    if (on === built) return;
    built = on;
    const now = performance.now();
    HALVES.forEach((h, s) => tset(h.tw, on ? 1 : 0, now, (on ? s : 1 - s) * STEP * 4));
    read.textContent = on ? `desvio ${off} m` : "rest";
    B.wake();
  }

  bag.add(pointer(stage, { move: (p) => aim(onBase(p)), leave: () => aim(false) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { off = v; for (const h of HALVES) h.t = NaN; if (built) read.textContent = `desvio ${off} m`; B.wake(); },
    destroy: bag.dispose,
  };
}

export default {
  name: "ponte",
  means: "Duas metades de uma ponte, feitas de margens opostas: com o mouse elas crescem e passam uma ao lado da outra, sem se encontrar.",
  rules: [1, 5, 6, 8],
  range: [6, 12, 18],
  mount,
};
