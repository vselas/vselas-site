// Runs after `next build`. Static export publishes everything in `public/`,
// so assets of products that are switched off must be dropped from `out/`.
// Flag handling mirrors src/lib/feature-flags.ts.
import { rm } from "node:fs/promises";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd(), false);

const readFlag = (name) =>
  ((process.env[name]?.trim() || process.env[`NEXT_PUBLIC_${name}`]?.trim()) ?? "") === "true";

const products = [
  { flag: "ENABLE_EASY_CONTROL", paths: ["out/apps/easy-control"] },
  { flag: "ENABLE_HOMECONTROL_PLUS", paths: ["out/apps/homecontrol-plus"] },
];

for (const { flag, paths } of products) {
  if (readFlag(flag)) continue;

  for (const path of paths) {
    await rm(path, { recursive: true, force: true });
    console.log(`Pruned assets of disabled product (${flag}): ${path}`);
  }
}
