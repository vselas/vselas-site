export type FeatureFlagName = "easyControl" | "homeControlPlus";

function readValue(name: string) {
  return process.env[name]?.trim() ?? "";
}

function readFlag(name: string) {
  return (readValue(name) || readValue(`NEXT_PUBLIC_${name}`)) === "true";
}

export function getFeatureFlags() {
  return {
    easyControl: readFlag("ENABLE_EASY_CONTROL"),
    homeControlPlus: readFlag("ENABLE_HOMECONTROL_PLUS"),
  } as const;
}
