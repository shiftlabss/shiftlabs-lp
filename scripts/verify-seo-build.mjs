import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");

const expectedRoutes = [
  {
    path: "index.html",
    title: "ShiftLabs | Arquitetura de Produto, Tecnologia e Operacao",
    canonical: "https://www.shiftlabs.digital/",
    h1: "Não construímos ideias. Estruturamos negócios.",
  },
  {
    path: "vagas/index.html",
    title: "Vagas na ShiftLabs | Carreiras",
    canonical: "https://www.shiftlabs.digital/vagas",
    h1: "Onde você entra para construir sistema, não só tarefa.",
  },
  {
    path: "vagas/desenvolvedor-backend-pleno-ou-senior/index.html",
    title: "Desenvolvedor Backend | Vagas ShiftLabs",
    canonical:
      "https://www.shiftlabs.digital/vagas/desenvolvedor-backend-pleno-ou-senior",
    h1: "Desenvolvedor Backend",
    jsonLdType: "JobPosting",
    requiredJsonLdFields: [
      "datePosted",
      "description",
      "hiringOrganization",
      "jobLocation",
      "title",
    ],
  },
  {
    path: "vagas/social-media/index.html",
    title: "Vagas na ShiftLabs | Carreiras",
    canonical: "https://www.shiftlabs.digital/vagas",
    robots: "noindex, nofollow, noarchive",
  },
];

function assertIncludes(haystack, needle, message) {
  if (!haystack.includes(needle)) {
    throw new Error(message);
  }
}

function extractJsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
}

async function assertRoute(route) {
  const filePath = path.join(distDir, route.path);
  const html = await readFile(filePath, "utf8");

  assertIncludes(html, `<title>${route.title}</title>`, `${route.path}: title incorreto`);
  assertIncludes(
    html,
    `<link rel="canonical" href="${route.canonical}"`,
    `${route.path}: canonical incorreto`,
  );
  if (route.h1) {
    assertIncludes(html, route.h1, `${route.path}: H1 esperado ausente`);
  }
  assertIncludes(
    html,
    'meta property="og:image" content="https://www.shiftlabs.digital/social-preview.png"',
    `${route.path}: OG image social-preview ausente`,
  );

  if (route.robots) {
    assertIncludes(
      html,
      `<meta name="robots" content="${route.robots}"`,
      `${route.path}: robots incorreto`,
    );
  }

  if (route.jsonLdType) {
    const blocks = extractJsonLdBlocks(html);
    const block = blocks.find((entry) => entry["@type"] === route.jsonLdType);
    if (!block) throw new Error(`${route.path}: JSON-LD ${route.jsonLdType} ausente`);
    for (const field of route.requiredJsonLdFields ?? []) {
      if (!(field in block)) {
        throw new Error(`${route.path}: JSON-LD sem campo ${field}`);
      }
    }
  }
}

async function run() {
  const socialPreview = await stat(path.join(distDir, "social-preview.png"));
  if (!socialPreview.isFile()) {
    throw new Error("social-preview.png ausente no build");
  }

  for (const route of expectedRoutes) {
    await assertRoute(route);
  }
}

run().catch((error) => {
  console.error(`[seo:verify] ${error.message}`);
  process.exit(1);
});
