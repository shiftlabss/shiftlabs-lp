import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const fallbackSiteUrl = "https://www.shiftlabs.digital";
const fallbackSupabaseUrl = "https://cjoyxelowsfkhgswkipd.supabase.co";
const fallbackSupabaseAnonKey =
  "sb_publishable_EWydN_Aqm9YbtXkQUNGfrA_BpB8LD4R";
const socialImagePath = "/social-preview.png";
const organizationLogoPath = "/fav-icon.svg";
const careersEmail = "careers@shiftlabs.digital";
const hiddenCareerRoleSlugs = new Set([
  "analista-financeiro-operacional",
  "designer-ui-ux-pleno",
  "diretor-de-arte",
  "gerente-operacional",
  "rh-operacional",
  "social-media",
]);
const roleColumns = [
  "slug",
  "title",
  "display_title",
  "display_seniority",
  "display_commitment",
  "location",
  "commitment",
  "model",
  "area",
  "display_area",
  "intro",
  "card_summary",
  "role_one_liner",
  "body_markdown",
  "about",
  "responsibilities",
  "requirements",
  "stack",
  "process",
  "why_title",
  "role_title",
  "do_title",
  "bring_title",
  "stack_title",
  "process_title",
  "join_title",
  "join_us",
  "is_published",
  "sort_order",
  "created_at",
  "updated_at",
];

const projectRoot = process.cwd();
const distDir = path.resolve(projectRoot, "dist");
const baseHtmlPath = path.join(distDir, "index.html");
const rawSiteUrl =
  firstNonEmptyEnv("SITE_URL", "VITE_SITE_URL") ?? fallbackSiteUrl;
const siteUrl = rawSiteUrl.trim().replace(/\/+$/, "") || fallbackSiteUrl;
const googleSiteVerification = firstNonEmptyEnv(
  "GOOGLE_SITE_VERIFICATION",
  "VITE_GOOGLE_SITE_VERIFICATION",
);

function firstNonEmptyEnv(...names) {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }
  return undefined;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeJsonLd(value) {
  return JSON.stringify(value).replace(/<\/script/gi, "<\\/script");
}

function toAbsoluteUrl(pathname) {
  const normalizedPath = String(pathname || "/").startsWith("/")
    ? String(pathname || "/")
    : `/${pathname}`;
  const finalPath =
    normalizedPath === "/" ? "/" : normalizedPath.replace(/\/+$/, "");
  return `${siteUrl}${finalPath}`;
}

function normalizeRoutePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return `/${String(pathname).replace(/^\/+|\/+$/g, "")}`;
}

function routeToFilePath(routePath) {
  const normalizedPath = normalizeRoutePath(routePath);
  if (normalizedPath === "/") return path.join(distDir, "index.html");
  return path.join(distDir, normalizedPath.slice(1), "index.html");
}

function truncateWithEllipsis(value, maxLength = 160) {
  const normalized = String(value ?? "").replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const truncated = normalized.slice(0, maxLength - 1);
  const safeBreak = truncated.lastIndexOf(" ");
  if (safeBreak <= 60) return `${truncated.trim()}...`;
  return `${truncated.slice(0, safeBreak).trim()}...`;
}

function stripInlineMarkdown(value) {
  return String(value ?? "")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .trim();
}

function markdownToPlainText(markdown) {
  return stripInlineMarkdown(markdown)
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function closeList(state, blocks) {
  if (!state.listType) return;
  blocks.push(`</${state.listType}>`);
  state.listType = null;
}

function markdownToSimpleHtml(markdown) {
  const lines = String(markdown ?? "").split(/\r?\n/);
  const blocks = [];
  const state = { listType: null };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      closeList(state, blocks);
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      closeList(state, blocks);
      const level = Math.min(headingMatch[1].length + 1, 4);
      blocks.push(
        `<h${level}>${escapeHtml(stripInlineMarkdown(headingMatch[2]))}</h${level}>`,
      );
      continue;
    }

    const unorderedMatch = line.match(/^[-*]\s+(.+)$/);
    if (unorderedMatch) {
      if (state.listType !== "ul") {
        closeList(state, blocks);
        blocks.push("<ul>");
        state.listType = "ul";
      }
      blocks.push(
        `<li>${escapeHtml(stripInlineMarkdown(unorderedMatch[1]))}</li>`,
      );
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      if (state.listType !== "ol") {
        closeList(state, blocks);
        blocks.push("<ol>");
        state.listType = "ol";
      }
      blocks.push(`<li>${escapeHtml(stripInlineMarkdown(orderedMatch[1]))}</li>`);
      continue;
    }

    closeList(state, blocks);
    blocks.push(`<p>${escapeHtml(stripInlineMarkdown(line))}</p>`);
  }

  closeList(state, blocks);
  return blocks.join("");
}

function toTextArray(value) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toDateOnly(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString().slice(0, 10);
}

function normalizeSlug(value) {
  const slug = typeof value === "string" ? value.trim() : "";
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return "";
  return slug;
}

function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function mapCommitmentToEmploymentType(commitment) {
  const normalized = normalizeSearchText(commitment);
  if (/(part time|meio periodo|parttime)/.test(normalized)) return "PART_TIME";
  if (/(estagio|intern)/.test(normalized)) return "INTERN";
  if (/(freela|freelance|contract|pj)/.test(normalized)) return "CONTRACTOR";
  return "FULL_TIME";
}

function getDisplayRoleTitle(role) {
  return role.displayTitle || role.title;
}

function getRoleArea(role) {
  return role.displayArea || role.area || "Geral";
}

function roleToMarkdown(role) {
  if (role.bodyMarkdown) return role.bodyMarkdown;

  const blocks = [];
  if (role.about.length) {
    blocks.push(`## ${role.whyTitle || "Sobre a vaga"}`);
    blocks.push(...role.about);
  }
  if (role.intro || role.roleOneLiner) {
    blocks.push(`## ${role.roleTitle || "A funcao"}`);
    if (role.intro) blocks.push(role.intro);
    if (role.roleOneLiner) blocks.push(role.roleOneLiner);
  }
  if (role.responsibilities.length) {
    blocks.push(`## ${role.doTitle || "O que voce vai fazer"}`);
    blocks.push(...role.responsibilities.map((item) => `- ${item}`));
  }
  if (role.requirements.length) {
    blocks.push(`## ${role.bringTitle || "O que buscamos"}`);
    blocks.push(...role.requirements.map((item) => `- ${item}`));
  }
  if (role.stack.length) {
    blocks.push(`## ${role.stackTitle || "Stack"}`);
    blocks.push(...role.stack.map((item) => `- ${item}`));
  }
  if (role.process.length) {
    blocks.push(`## ${role.processTitle || "Processo seletivo"}`);
    blocks.push(...role.process.map((item, index) => `${index + 1}. ${item}`));
  }
  if (role.joinUs.length) {
    blocks.push(`## ${role.joinTitle || "Junte-se a nos"}`);
    blocks.push(...role.joinUs);
  }
  return blocks.join("\n\n");
}

function getRoleSummary(role) {
  return truncateWithEllipsis(
    role.cardSummary ||
      role.roleOneLiner ||
      role.intro ||
      markdownToPlainText(roleToMarkdown(role)) ||
      `Vaga de ${getDisplayRoleTitle(role)} na ShiftLabs.`,
  );
}

function rowToRole(row) {
  const slug = normalizeSlug(row?.slug);
  if (!slug) return null;

  const title = typeof row?.title === "string" ? row.title.trim() : "";
  if (!title) return null;

  return {
    slug,
    title,
    displayTitle:
      typeof row?.display_title === "string" && row.display_title.trim()
        ? row.display_title.trim()
        : undefined,
    location:
      typeof row?.location === "string" && row.location.trim()
        ? row.location.trim()
        : "Brasil",
    commitment:
      typeof row?.commitment === "string" && row.commitment.trim()
        ? row.commitment.trim()
        : "Tempo integral",
    model:
      typeof row?.model === "string" && row.model.trim()
        ? row.model.trim()
        : "Remoto",
    area:
      typeof row?.area === "string" && row.area.trim()
        ? row.area.trim()
        : "Geral",
    displayArea:
      typeof row?.display_area === "string" && row.display_area.trim()
        ? row.display_area.trim()
        : undefined,
    intro: typeof row?.intro === "string" ? row.intro.trim() : "",
    cardSummary:
      typeof row?.card_summary === "string" && row.card_summary.trim()
        ? row.card_summary.trim()
        : undefined,
    roleOneLiner:
      typeof row?.role_one_liner === "string" && row.role_one_liner.trim()
        ? row.role_one_liner.trim()
        : undefined,
    bodyMarkdown:
      typeof row?.body_markdown === "string" && row.body_markdown.trim()
        ? row.body_markdown.trim()
        : undefined,
    about: toTextArray(row?.about),
    responsibilities: toTextArray(row?.responsibilities),
    requirements: toTextArray(row?.requirements),
    stack: toTextArray(row?.stack),
    process: toTextArray(row?.process),
    whyTitle:
      typeof row?.why_title === "string" && row.why_title.trim()
        ? row.why_title.trim()
        : undefined,
    roleTitle:
      typeof row?.role_title === "string" && row.role_title.trim()
        ? row.role_title.trim()
        : undefined,
    doTitle:
      typeof row?.do_title === "string" && row.do_title.trim()
        ? row.do_title.trim()
        : undefined,
    bringTitle:
      typeof row?.bring_title === "string" && row.bring_title.trim()
        ? row.bring_title.trim()
        : undefined,
    stackTitle:
      typeof row?.stack_title === "string" && row.stack_title.trim()
        ? row.stack_title.trim()
        : undefined,
    processTitle:
      typeof row?.process_title === "string" && row.process_title.trim()
        ? row.process_title.trim()
        : undefined,
    joinTitle:
      typeof row?.join_title === "string" && row.join_title.trim()
        ? row.join_title.trim()
        : undefined,
    joinUs: toTextArray(row?.join_us),
    datePosted: toDateOnly(row?.created_at) || toDateOnly(row?.updated_at),
    updatedAt: toDateOnly(row?.updated_at),
  };
}

function extractPreservedAssetTags(baseHtml) {
  const matches = [
    ...baseHtml.matchAll(/<script\b[\s\S]*?<\/script>/gi),
    ...baseHtml.matchAll(/<link\b[^>]*>/gi),
  ];
  const tags = [];
  const seen = new Set();

  for (const match of matches) {
    const tag = match[0].trim();
    const lowerTag = tag.toLowerCase();
    const shouldKeepScript =
      lowerTag.startsWith("<script") && /\bsrc\s*=/.test(lowerTag);
    const shouldKeepLink =
      lowerTag.startsWith("<link") &&
      !/\brel\s*=\s*["']?canonical\b/.test(lowerTag) &&
      (/\brel\s*=\s*["']?(stylesheet|manifest|icon|preload|modulepreload)\b/.test(
        lowerTag,
      ) ||
        /\bhref\s*=\s*["']\/(assets|fonts|fav-icon\.svg|site\.webmanifest)\b/.test(
          lowerTag,
        ));

    if (!shouldKeepScript && !shouldKeepLink) continue;
    if (seen.has(tag)) continue;
    seen.add(tag);
    tags.push(tag);
  }

  return tags;
}

function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShiftLabs",
    url: toAbsoluteUrl("/"),
    logo: toAbsoluteUrl(organizationLogoPath),
    sameAs: [
      "https://www.linkedin.com/company/shiftlabs-br/",
      "https://instagram.com/shiftlabs.br",
      "https://github.com/shiftlabs-br",
    ],
  };
}

function buildWebPageSchema(name, description, routePath) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: toAbsoluteUrl(routePath),
    description,
    inLanguage: "pt-BR",
  };
}

function buildCareersCollectionSchema(roles) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vagas ShiftLabs",
    url: toAbsoluteUrl("/vagas"),
    description:
      "Lista de vagas abertas da ShiftLabs para areas de produto, tecnologia, growth, comercial e operacoes.",
    inLanguage: "pt-BR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: roles.map((role, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: getDisplayRoleTitle(role),
        url: toAbsoluteUrl(`/vagas/${role.slug}`),
      })),
    },
  };
}

function buildJobPostingSchema(role) {
  const displayRoleTitle = getDisplayRoleTitle(role);
  const roleDescriptionHtml = markdownToSimpleHtml(roleToMarkdown(role));
  const isRemoteModel = /(remot|remote)/i.test(`${role.model} ${role.location}`);

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: displayRoleTitle,
    description: roleDescriptionHtml,
    datePosted: role.datePosted,
    directApply: true,
    identifier: {
      "@type": "PropertyValue",
      name: "ShiftLabs",
      value: role.slug,
    },
    employmentType: mapCommitmentToEmploymentType(role.commitment),
    hiringOrganization: {
      "@type": "Organization",
      name: "ShiftLabs",
      sameAs: toAbsoluteUrl("/"),
      logo: toAbsoluteUrl(organizationLogoPath),
    },
    industry: getRoleArea(role),
    workHours: role.commitment,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: role.location,
        addressCountry: "BR",
      },
    },
    jobLocationType: isRemoteModel ? "TELECOMMUTE" : undefined,
    applicantLocationRequirements: isRemoteModel
      ? {
          "@type": "Country",
          name: "Brasil",
        }
      : undefined,
    url: toAbsoluteUrl(`/vagas/${role.slug}`),
  };
}

function buildHead({
  title,
  description,
  routePath,
  canonicalPath,
  robots,
  type = "website",
  jsonLd = [],
  preservedAssetTags,
}) {
  const normalizedDescription = truncateWithEllipsis(description);
  const canonicalUrl = toAbsoluteUrl(canonicalPath || routePath);
  const imageUrl = toAbsoluteUrl(socialImagePath);
  const jsonLdTags = jsonLd
    .filter(Boolean)
    .map(
      (payload) =>
        `<script type="application/ld+json">${escapeJsonLd(payload)}</script>`,
    );
  const tags = [
    '<meta charset="UTF-8" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(normalizedDescription)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    '<meta name="theme-color" content="#f2f3ef" />',
    '<meta name="author" content="ShiftLabs" />',
    ...(googleSiteVerification
      ? [
          `<meta name="google-site-verification" content="${escapeHtml(googleSiteVerification)}" />`,
        ]
      : []),
    '<meta property="og:site_name" content="ShiftLabs" />',
    '<meta property="og:locale" content="pt_BR" />',
    `<meta property="og:type" content="${escapeHtml(type)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(normalizedDescription)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    '<meta property="og:image:alt" content="ShiftLabs" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(normalizedDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    ...jsonLdTags,
    ...preservedAssetTags,
  ];

  return tags.map((tag) => `    ${tag}`).join("\n");
}

const staticShellStyles = {
  main: "min-height:100vh;background:#f2f3ef;color:#101700;font-family:InterDisplay,Inter Tight,Arial,sans-serif;",
  header:
    "height:72px;border-bottom:1px solid #d6dace;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:0 clamp(24px,12vw,192px);",
  brand:
    "color:#101700;text-decoration:none;font-family:Inter Tight,InterDisplay,Arial,sans-serif;font-size:20px;font-weight:600;letter-spacing:0;",
  nav: "color:#5f644c;text-decoration:none;font-family:Basis Grotesque Pro Mono,InterDisplay,monospace;font-size:14px;text-transform:uppercase;",
  section:
    "max-width:1512px;margin:0 auto;padding:clamp(48px,8vw,112px) clamp(24px,12vw,192px);border-bottom:1px solid #d6dace;",
  eyebrow:
    "margin:0 0 24px;color:#5f644c;font-family:Basis Grotesque Pro Mono,InterDisplay,monospace;font-size:14px;text-transform:uppercase;",
  title:
    "max-width:780px;margin:0;color:#101700;font-family:Inter Tight,InterDisplay,Arial,sans-serif;font-size:clamp(32px,7vw,72px);font-weight:500;line-height:1.02;letter-spacing:0;",
  description:
    "max-width:560px;margin:28px 0 0;color:#5f644c;font-size:clamp(16px,2vw,20px);line-height:1.35;",
};

function buildStaticLayout({ eyebrow, title, description, bodyHtml = "" }) {
  const safeDescription = description
    ? `<p style="${staticShellStyles.description}">${escapeHtml(description)}</p>`
    : "";

  return [
    `<main data-static-route="true" style="${staticShellStyles.main}">`,
    `  <header style="${staticShellStyles.header}">`,
    `    <a href="/" style="${staticShellStyles.brand}">ShiftLabs</a>`,
    `    <a href="/vagas" style="${staticShellStyles.nav}">/VAGAS</a>`,
    "  </header>",
    `  <section style="${staticShellStyles.section}">`,
    eyebrow
      ? `    <p style="${staticShellStyles.eyebrow}">${escapeHtml(eyebrow)}</p>`
      : "",
    `    <h1 style="${staticShellStyles.title}">${escapeHtml(title)}</h1>`,
    safeDescription ? `    ${safeDescription}` : "",
    bodyHtml,
    "  </section>",
    "</main>",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildRoleListHtml(roles) {
  if (!roles.length) return "";
  const items = roles
    .map(
      (role) =>
        `<li style="list-style:none;border:1px solid #d6dace;padding:20px;min-height:168px;display:flex;flex-direction:column;justify-content:space-between;gap:24px;"><span style="color:#5f644c;font-family:Basis Grotesque Pro Mono,InterDisplay,monospace;font-size:13px;text-transform:uppercase;">/${escapeHtml(
          getRoleArea(role),
        )}</span><a href="/vagas/${escapeHtml(
          role.slug,
        )}" style="color:#101700;text-decoration:none;font-family:Inter Tight,InterDisplay,Arial,sans-serif;font-size:28px;font-weight:500;line-height:1.08;">${escapeHtml(
          getDisplayRoleTitle(role),
        )}</a></li>`,
    )
    .join("");
  return `    <ul style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0;margin:40px 0 0;padding:0;">${items}</ul>`;
}

function buildRoleBodyHtml(role) {
  const applyHref = `/vagas/${role.slug}/candidatar`;
  const metaItems = [
    role.location,
    role.commitment,
    role.model,
    getRoleArea(role),
  ]
    .filter(Boolean)
    .map(
      (item) =>
        `<li style="list-style:none;border:1px solid #d6dace;color:#5f644c;padding:10px 12px;">${escapeHtml(item)}</li>`,
    )
    .join("");

  return [
    metaItems
      ? `    <ul style="display:flex;flex-wrap:wrap;gap:8px;margin:32px 0 0;padding:0;">${metaItems}</ul>`
      : "",
    `    <div style="max-width:760px;margin-top:40px;color:#101700;font-size:17px;line-height:1.55;">${markdownToSimpleHtml(roleToMarkdown(role))}</div>`,
    `    <p style="margin-top:32px;"><a href="${escapeHtml(applyHref)}" style="display:inline-flex;background:#101700;color:#f2f3ef;padding:14px 16px;text-decoration:none;font-family:Basis Grotesque Pro Mono,InterDisplay,monospace;font-size:14px;text-transform:uppercase;">Candidatar-se</a></p>`,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildPreloadedCareersScript(roles) {
  if (!Array.isArray(roles) || !roles.length) return "";
  return `    <script id="shiftlabs-careers-roles" type="application/json">${escapeJsonLd(roles)}</script>`;
}

function buildHtmlDocument(baseHtml, page) {
  const preservedAssetTags = extractPreservedAssetTags(baseHtml);
  const head = buildHead({ ...page, preservedAssetTags });
  const preloadedCareersScript = buildPreloadedCareersScript(
    page.preloadedCareersRoles,
  );
  return [
    "<!DOCTYPE html>",
    '<html lang="pt-BR">',
    "  <head>",
    head,
    "  </head>",
    "",
    "  <body>",
    preloadedCareersScript,
    `    <div id="root">${page.bodyHtml}</div>`,
    "  </body>",
    "</html>",
    "",
  ].join("\n");
}

async function writeRouteHtml(baseHtml, routePath, page) {
  const filePath = routeToFilePath(routePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, buildHtmlDocument(baseHtml, page), "utf8");
}

async function fetchPublishedRoles() {
  const supabaseUrl = (
    firstNonEmptyEnv("VITE_SUPABASE_URL", "SUPABASE_URL") ??
    fallbackSupabaseUrl
  )
    .trim()
    .replace(/\/+$/, "");
  const supabaseKey = (
    firstNonEmptyEnv(
      "SUPABASE_SERVICE_ROLE_KEY",
      "VITE_SUPABASE_ANON_KEY",
      "SUPABASE_ANON_KEY",
    ) ?? fallbackSupabaseAnonKey
  ).trim();

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase nao configurado para gerar rotas estaticas.");
  }

  const endpoint = new URL(`${supabaseUrl}/rest/v1/careers_roles`);
  endpoint.searchParams.set("select", roleColumns.join(","));
  endpoint.searchParams.set("is_published", "eq.true");
  endpoint.searchParams.set("order", "sort_order.asc,title.asc");

  const response = await fetch(endpoint, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Supabase REST falhou: HTTP ${response.status} ${body}`);
  }

  const rows = await response.json();
  if (!Array.isArray(rows)) return [];

  const rolesBySlug = new Map();
  for (const row of rows) {
    const role = rowToRole(row);
    if (!role || hiddenCareerRoleSlugs.has(role.slug)) continue;
    rolesBySlug.set(role.slug, role);
  }

  return Array.from(rolesBySlug.values()).sort((first, second) =>
    getDisplayRoleTitle(first).localeCompare(getDisplayRoleTitle(second), "pt-BR", {
      sensitivity: "base",
    }),
  );
}

async function run() {
  const baseHtml = await readFile(baseHtmlPath, "utf8");
  const roles = await fetchPublishedRoles();
  const organizationSchema = buildOrganizationSchema();

  await writeRouteHtml(baseHtml, "/", {
    title: "ShiftLabs | Arquitetura de Produto, Tecnologia e Operacao",
    description:
      "A ShiftLabs estrutura produto, tecnologia, growth e operacoes para empresas crescerem com previsibilidade e execucao coordenada.",
    routePath: "/",
    robots: "index, follow, max-image-preview:large",
    jsonLd: [
      organizationSchema,
      buildWebPageSchema(
        "ShiftLabs",
        "A ShiftLabs estrutura produto, tecnologia, growth e operacoes para empresas crescerem com previsibilidade e execucao coordenada.",
        "/",
      ),
    ],
    bodyHtml: buildStaticLayout({
      eyebrow: "Engenharia para crescimento previsível",
      title: "Não construímos ideias. Estruturamos negócios.",
      description:
        "A ShiftLabs transforma ideias, operacoes confusas ou produtos mal estruturados em negocios organizados, previsiveis e escalaveis.",
    }),
  });

  await writeRouteHtml(baseHtml, "/vagas", {
    title: "Vagas na ShiftLabs | Carreiras",
    description:
      "Explore as vagas abertas da ShiftLabs em produto, tecnologia, growth, comercial e operacoes.",
    routePath: "/vagas",
    robots: "index, follow, max-image-preview:large",
    jsonLd: [organizationSchema, buildCareersCollectionSchema(roles)],
    preloadedCareersRoles: roles,
    bodyHtml: buildStaticLayout({
      eyebrow: "/vagas abertas",
      title: "Onde você entra para construir sistema, não só tarefa.",
      description:
        "Explore as vagas abertas da ShiftLabs em produto, tecnologia, growth, comercial e operacoes.",
      bodyHtml: buildRoleListHtml(roles),
    }),
  });

  for (const role of roles) {
    const displayRoleTitle = getDisplayRoleTitle(role);
    const routePath = `/vagas/${role.slug}`;
    const description = getRoleSummary(role);

    await writeRouteHtml(baseHtml, routePath, {
      title: `${displayRoleTitle} | Vagas ShiftLabs`,
      description,
      routePath,
      type: "article",
      robots: "index, follow, max-image-preview:large",
      jsonLd: [organizationSchema, buildJobPostingSchema(role)],
      preloadedCareersRoles: roles,
      bodyHtml: buildStaticLayout({
        eyebrow: "/vaga",
        title: displayRoleTitle,
        description,
        bodyHtml: buildRoleBodyHtml(role),
      }),
    });
  }

  for (const slug of hiddenCareerRoleSlugs) {
    const routePath = `/vagas/${slug}`;
    await writeRouteHtml(baseHtml, routePath, {
      title: "Vagas na ShiftLabs | Carreiras",
      description:
        "Esta vaga nao esta disponivel publicamente. Veja as vagas abertas da ShiftLabs.",
      routePath,
      canonicalPath: "/vagas",
      robots: "noindex, nofollow, noarchive",
      jsonLd: [organizationSchema, buildCareersCollectionSchema(roles)],
      preloadedCareersRoles: roles,
      bodyHtml: buildStaticLayout({
        eyebrow: "/carreiras",
        title: "Vagas na ShiftLabs",
        description:
          "Esta vaga nao esta disponivel publicamente. Veja as vagas abertas da ShiftLabs.",
        bodyHtml: '    <p><a href="/vagas">Ver vagas abertas</a></p>',
      }),
    });
  }

  console.log(
    `[seo] HTML estatico gerado para /, /vagas, ${roles.length} vagas publicas e ${hiddenCareerRoleSlugs.size} vagas ocultas.`,
  );
}

run().catch((error) => {
  console.error("[seo] Falha ao gerar HTML estatico:", error);
  process.exit(1);
});
