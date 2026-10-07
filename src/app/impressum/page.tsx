import type { Metadata } from "next";

import {
  getLegalAddressLines,
  getLegalConfig,
  getMissingLegalFields,
  hasCompleteLegalIdentity,
} from "@/lib/legal";
import { getSiteConfig } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: "Impressum",
    description: `Impressum fuer ${getSiteConfig().name}`,
  };
}

export default function ImprintPage() {
  const legalConfig = getLegalConfig();
  const legalAddressLines = getLegalAddressLines();
  const missingLegalFields = getMissingLegalFields();

  return (
    <main className="page-main">
      <section className="section">
        <div className="shell legal-page">
          <div className="section-heading legal-heading">
            <div>
              <p className="section-label">Rechtliches</p>
              <h1>Impressum</h1>
            </div>
            <p>Angaben gemaess § 5 DDG fuer den Betrieb dieser Website.</p>
          </div>

          {!hasCompleteLegalIdentity() ? (
            <div className="legal-note" role="note">
              Vor dem Livegang bitte noch diese Pflichtangaben hinterlegen: {missingLegalFields.join(", ")}.
            </div>
          ) : null}

          <article className="legal-card">
            <h2>Diensteanbieter</h2>
            <div className="legal-stack">
              <p>{legalConfig.name || "Name oder Firma noch nicht konfiguriert."}</p>
              {legalConfig.representative ? <p>Vertreten durch: {legalConfig.representative}</p> : null}
              {legalAddressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>

          <article className="legal-card">
            <h2>Kontakt</h2>
            <dl className="legal-meta-list">
              <div>
                <dt>E-Mail</dt>
                <dd>
                  {legalConfig.email ? (
                    <a href={`mailto:${legalConfig.email}`}>{legalConfig.email}</a>
                  ) : (
                    "Noch nicht konfiguriert."
                  )}
                </dd>
              </div>
              {legalConfig.phone ? (
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={`tel:${legalConfig.phone}`}>{legalConfig.phone}</a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </article>

          {legalConfig.registerName || legalConfig.registerNumber ? (
            <article className="legal-card">
              <h2>Registereintrag</h2>
              <dl className="legal-meta-list">
                {legalConfig.registerName ? (
                  <div>
                    <dt>Register</dt>
                    <dd>{legalConfig.registerName}</dd>
                  </div>
                ) : null}
                {legalConfig.registerNumber ? (
                  <div>
                    <dt>Registernummer</dt>
                    <dd>{legalConfig.registerNumber}</dd>
                  </div>
                ) : null}
              </dl>
            </article>
          ) : null}

          {legalConfig.vatId ? (
            <article className="legal-card">
              <h2>Umsatzsteuer</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemaess § 27a UStG: {legalConfig.vatId}</p>
            </article>
          ) : null}

          {legalConfig.responsibleForContent ? (
            <article className="legal-card">
              <h2>Verantwortlich fuer den Inhalt</h2>
              <p>{legalConfig.responsibleForContent}</p>
            </article>
          ) : null}
        </div>
      </section>
    </main>
  );
}
