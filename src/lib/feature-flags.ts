export type FeatureFlagName = "easyControl" | "homeControlPlus" | "orcaMail" | "roomTone";

function readValue(name: string) {
  return process.env[name]?.trim() ?? "";
}

function readFlag(name: string, fallback: boolean) {
  const value = readValue(name) || readValue(`NEXT_PUBLIC_${name}`);

  return value === "" ? fallback : value === "true";
}

export function getFeatureFlags() {
  return {
    easyControl: readFlag("ENABLE_EASY_CONTROL", false),
    homeControlPlus: readFlag("ENABLE_HOMECONTROL_PLUS", false),
    orcaMail: readFlag("ENABLE_ORCAMAIL", false),
    roomTone: readFlag("ENABLE_ROOMTONE", true),
  } as const;
}
