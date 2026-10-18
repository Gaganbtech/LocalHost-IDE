#!/usr/bin/env node

/**
 * fumadocs-mdx macOS EMFILE fix.
 *
 * In dev mode, fumadocs-mdx's next plugin creates a chokidar FSWatcher on the
 * docs directory. Because the repository contains over 10,000 localized documentation
 * files under docs/i18n, chokidar exceeds the macOS per-process file descriptor limit
 * (kern.maxfilesperproc) and crashes with EMFILE: too many open files.
 *
 * This patch adds an ignore filter for /i18n/ paths to the chokidar FSWatcher options.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PATCH_TARGET = "node_modules/fumadocs-mdx/dist/next/index.js";
const PATCHED_MARKER = "/* omniroute-fumadocs-i18n-patch */";

export function fixFumadocsWatcher({ rootDir, log = (m) => console.log(m) } = {}) {
  const filePath = join(rootDir, PATCH_TARGET);
  if (!existsSync(filePath)) return false;

  let content = readFileSync(filePath, "utf8");
  if (content.includes(PATCHED_MARKER)) return false;

  const original = "ignored: [core.outDir]";
  const replacement = `ignored: [core.outDir, (p) => typeof p === "string" && p.includes("/i18n/")] ${PATCHED_MARKER}`;

  if (!content.includes(original)) return false;

  content = content.replace(original, replacement);
  writeFileSync(filePath, content, "utf8");
  log(`  ✅ Patched fumadocs-mdx watcher for macOS EMFILE prevention`);
  return true;
}

if (process.argv[1] && process.argv[1].endsWith("fixFumadocsWatcher.mjs")) {
  const rootDir = process.argv[2] || process.cwd();
  fixFumadocsWatcher({ rootDir });
}
