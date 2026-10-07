// Runs after `next build`. Static export publishes everything in `public/`,
// so assets of products that are switched off must be dropped from `out/`.
// Flag handling mirrors src/lib/feature-flags.ts.
import { rm } from "node:fs/promises";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd(), false);

const readFlag = (name, fallback) => {
  const value = process.env[name]?.trim() || process.env[`NEXT_PUBLIC_${name}`]?.trim() || "";

  return value === "" ? fallback : value === "true";
};

const products = [
  { flag: "ENABLE_ROOMTONE", fallback: true, paths: ["out/apps/roomtone"] },
  { flag: "ENABLE_EASY_CONTROL", fallback: false, paths: ["out/apps/easy-control"] },
  { flag: "ENABLE_HOMECONTROL_PLUS", fallback: false, paths: ["out/apps/homecontrol-plus"] },
];

for (const { flag, fallback, paths } of products) {
  if (readFlag(flag, fallback)) continue;

  for (const path of paths) {
    await rm(path, { recursive: true, force: true });
    console.log(`Pruned assets of disabled product (${flag}): ${path}`);
  }
}
