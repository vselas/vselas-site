export type FeatureFlagName = "homeControlPlus";

function readValue(name: string) {
  return process.env[name]?.trim() ?? "";
}

export function getFeatureFlags() {
  const homeControlPlusValue =
    readValue("ENABLE_HOMECONTROL_PLUS") ||
    readValue("NEXT_PUBLIC_ENABLE_HOMECONTROL_PLUS");

  return {
    homeControlPlus: homeControlPlusValue === "true",
  } as const;
}
