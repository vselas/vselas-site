const legalDateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function readValue(name: string) {
  return process.env[name]?.trim() ?? "";
}

export function getLegalConfig() {
  return {
    name: readValue("LEGAL_NAME"),
    representative: readValue("LEGAL_REPRESENTATIVE"),
    street: readValue("LEGAL_STREET"),
    addressExtra: readValue("LEGAL_ADDRESS_EXTRA"),
    postalCode: readValue("LEGAL_POSTAL_CODE"),
    city: readValue("LEGAL_CITY"),
    country: readValue("LEGAL_COUNTRY") || "Deutschland",
    email: readValue("LEGAL_EMAIL"),
    phone: readValue("LEGAL_PHONE"),
    vatId: readValue("LEGAL_VAT_ID"),
    registerName: readValue("LEGAL_REGISTER_NAME"),
    registerNumber: readValue("LEGAL_REGISTER_NUMBER"),
    responsibleForContent: readValue("LEGAL_RESPONSIBLE_FOR_CONTENT"),
    supervisoryAuthority:
      readValue("PRIVACY_SUPERVISORY_AUTHORITY") ||
      "Zustaendige Datenschutzaufsichtsbehoerde Ihres Bundeslandes",
    hostingProviderName: readValue("HOSTING_PROVIDER_NAME"),
    hostingProviderLocation: readValue("HOSTING_PROVIDER_LOCATION"),
    lastUpdated: readValue("LEGAL_LAST_UPDATED") || legalDateFormatter.format(new Date()),
  };
}

const requiredFieldLabels = {
  name: "Name oder Firma",
  street: "Strasse und Hausnummer",
  postalCode: "Postleitzahl",
  city: "Ort",
  email: "E-Mail-Adresse",
} as const;

export function getMissingLegalFields() {
  const legalConfig = getLegalConfig();

  return Object.entries(requiredFieldLabels)
    .filter(([field]) => !legalConfig[field as keyof typeof requiredFieldLabels])
    .map(([, label]) => label);
}

export function hasCompleteLegalIdentity() {
  return getMissingLegalFields().length === 0;
}

export function getLegalAddressLines() {
  const legalConfig = getLegalConfig();

  return [
    legalConfig.street,
    legalConfig.addressExtra,
    [legalConfig.postalCode, legalConfig.city].filter(Boolean).join(" "),
    legalConfig.country,
  ].filter(Boolean);
}
