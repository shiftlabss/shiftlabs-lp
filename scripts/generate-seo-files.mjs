import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const fallbackSiteUrl = "https://shiftlabs.digital";
const fallbackSupabaseUrl = "https://cjoyxelowsfkhgswkipd.supabase.co";
const fallbackSupabaseAnonKey = "sb_publishable_EWydN_Aqm9YbtXkQUNGfrA_BpB8LD4R";
const hiddenCareerRoleSlugs = new Set(["social-media"]);

const projectRoot = process.cwd();
const publicDir = path.resolve(projectRoot, "public");
const appFilePath = path.resolve(projectRoot, "src/app/App.tsx");
const rawSiteUrl = process.env.VITE_SITE_URL ?? process.env.SITE_URL ?? fallbackSiteUrl;
const siteUrl = rawSiteUrl.trim().replace(/\/+$/, "");
const nowDate = new Date().toISOString().slice(0, 10);

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toDateOnly(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return nowDate;
  return date.toISOString().slice(0, 10);
}

async function readFallbackRoleSlugs() {
  try {
    const source = await readFile(appFilePath, "utf8");
    const matches = [...source.matchAll(/slug:\s*"([^"]+)"/g)];
    const unique = new Set();
    for (const match of matches) {
      const slug = match[1]?.trim();
      if (slug) unique.add(slug);
    }
    return Array.from(unique).map((slug) => ({ slug, lastmod: nowDate }));
  } catch (error) {
    console.warn("[seo] Nao foi possivel ler slugs locais para fallback.", error);
    return [];
  }
}

async function fetchPublishedRoles() {
  const supabaseUrl = (process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL ?? fallbackSupabaseUrl).trim();
  const supabaseAnonKey = (process.env.VITE_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? fallbackSupabaseAnonKey).trim();

  if (!supabaseUrl || !supabaseAnonKey) {
    return [];
  }

  const endpoint = `${supabaseUrl.replace(/\/+$/, "")}/rest/v1/careers_roles?select=slug,updated_at&is_published=eq.true&order=title.asc`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const rows = await response.json();
    if (!Array.isArray(rows)) return [];

    const unique = new Map();
    for (const row of rows) {
      const slug = typeof row?.slug === "string" ? row.slug.trim() : "";
      if (!slug) continue;
      if (hiddenCareerRoleSlugs.has(slug)) continue;
      const lastmod = toDateOnly(row?.updated_at);
      unique.set(slug, lastmod);
    }

    return Array.from(unique.entries()).map(([slug, lastmod]) => ({ slug, lastmod }));
  } catch (error) {
    console.warn("[seo] Nao foi possivel carregar vagas publicadas do Supabase.", error);
    return [];
  }
}

function buildSitemapXml(roleEntries) {
  const urls = [
    { path: "/", changefreq: "weekly", priority: "1.0", lastmod: nowDate },
    { path: "/vagas", changefreq: "daily", priority: "0.9", lastmod: nowDate },
    ...roleEntries.map((entry) => ({
      path: `/vagas/${entry.slug}`,
      changefreq: "weekly",
      priority: "0.8",
      lastmod: entry.lastmod,
    })),
  ];

  const uniqueByPath = new Map();
  for (const url of urls) {
    uniqueByPath.set(url.path, url);
  }

  const entries = Array.from(uniqueByPath.values())
    .map((url) => {
      const absoluteUrl = `${siteUrl}${url.path === "/" ? "/" : url.path}`;
      return [
        "  <url>",
        `    <loc>${escapeXml(absoluteUrl)}</loc>`,
        `    <lastmod>${escapeXml(url.lastmod)}</lastmod>`,
        `    <changefreq>${escapeXml(url.changefreq)}</changefreq>`,
        `    <priority>${escapeXml(url.priority)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    "</urlset>",
    "",
  ].join("\n");
}

function buildRobotsTxt() {
  return [
    "User-agent: *",
    "Allow: /",
    "Disallow: /vagas/editor",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
}

async function run() {
  await mkdir(publicDir, { recursive: true });

  const publishedRoles = await fetchPublishedRoles();
  const fallbackRoles = publishedRoles.length ? [] : await readFallbackRoleSlugs();
  const roleEntries = publishedRoles.length ? publishedRoles : fallbackRoles;

  const sitemapXml = buildSitemapXml(roleEntries);
  const robotsTxt = buildRobotsTxt();

  await writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
  await writeFile(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");

  const source = publishedRoles.length ? "supabase" : "fallback-local";
  console.log(`[seo] sitemap.xml e robots.txt atualizados (${source}, ${roleEntries.length} vagas).`);
}

run().catch((error) => {
  console.error("[seo] Falha ao gerar arquivos de SEO:", error);
  process.exit(1);
});
