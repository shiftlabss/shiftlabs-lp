import { spawnSync } from "node:child_process";
import { readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";

const url = process.env.LIGHTHOUSE_URL || "https://www.shiftlabs.digital/";
const outputPath = path.join(os.tmpdir(), `shiftlabs-lighthouse-${randomUUID()}.json`);
const categoryThresholds = {
  performance: Number(process.env.LIGHTHOUSE_MIN_PERFORMANCE || 0.8),
  accessibility: Number(process.env.LIGHTHOUSE_MIN_ACCESSIBILITY || 0.95),
  "best-practices": Number(process.env.LIGHTHOUSE_MIN_BEST_PRACTICES || 0.95),
  seo: Number(process.env.LIGHTHOUSE_MIN_SEO || 1),
};
const metricThresholds = {
  "largest-contentful-paint": Number(process.env.LIGHTHOUSE_MAX_LCP_MS || 5000),
  "cumulative-layout-shift": Number(process.env.LIGHTHOUSE_MAX_CLS || 0.1),
  "total-blocking-time": Number(process.env.LIGHTHOUSE_MAX_TBT_MS || 200),
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function runLighthouse() {
  const result = spawnSync(
    "npx",
    [
      "--yes",
      "lighthouse@12.8.2",
      url,
      "--quiet",
      "--chrome-flags=--headless=new --no-sandbox",
      "--output=json",
      `--output-path=${outputPath}`,
      "--only-categories=performance,accessibility,best-practices,seo",
    ],
    {
      encoding: "utf8",
      timeout: Number(process.env.LIGHTHOUSE_TIMEOUT_MS || 120000),
    },
  );

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || "Lighthouse falhou");
  }
}

function getCategoryScore(report, category) {
  return report.categories?.[category]?.score;
}

function getAuditNumericValue(report, audit) {
  return report.audits?.[audit]?.numericValue;
}

async function run() {
  try {
    runLighthouse();

    const report = JSON.parse(await readFile(outputPath, "utf8"));
    const scores = {};

    for (const [category, threshold] of Object.entries(categoryThresholds)) {
      const score = getCategoryScore(report, category);
      scores[category] = score;
      assert(
        typeof score === "number" && score >= threshold,
        `${category} abaixo do limite: ${score} < ${threshold}`,
      );
    }

    for (const [audit, threshold] of Object.entries(metricThresholds)) {
      const value = getAuditNumericValue(report, audit);
      assert(
        typeof value === "number" && value <= threshold,
        `${audit} acima do limite: ${value} > ${threshold}`,
      );
    }

    console.log(
      `[seo:lighthouse] ${url} performance=${scores.performance} accessibility=${scores.accessibility} best-practices=${scores["best-practices"]} seo=${scores.seo}`,
    );
  } finally {
    await rm(outputPath, { force: true });
  }
}

run().catch((error) => {
  console.error(`[seo:lighthouse] ${error.message}`);
  process.exit(1);
});
