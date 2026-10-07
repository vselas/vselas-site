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
    title: "Datenschutz",
    description: `Datenschutzhinweise fuer ${getSiteConfig().name}`,
  };
}

export default function PrivacyPage() {
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
              <h1>Datenschutz</h1>
            </div>
            <p>Hinweise zur Verarbeitung personenbezogener Daten auf dieser Website.</p>
          </div>

          {!hasCompleteLegalIdentity() ? (
            <div className="legal-note" role="note">
              Die rechtlich notwendigen Anbieterangaben sind noch nicht vollstaendig konfiguriert: {missingLegalFields.join(", ")}.
            </div>
          ) : null}

          <article className="legal-card">
            <h2>1. Verantwortlicher</h2>
            <div className="legal-stack">
              <p>{legalConfig.name || "Name oder Firma noch nicht konfiguriert."}</p>
              {legalConfig.representative ? <p>Vertreten durch: {legalConfig.representative}</p> : null}
              {legalAddressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                E-Mail:{" "}
                {legalConfig.email ? (
                  <a href={`mailto:${legalConfig.email}`}>{legalConfig.email}</a>
                ) : (
                  "Noch nicht konfiguriert."
                )}
              </p>
              {legalConfig.phone ? <p>Telefon: <a href={`tel:${legalConfig.phone}`}>{legalConfig.phone}</a></p> : null}
            </div>
          </article>

          <article className="legal-card">
            <h2>2. Hosting ueber GitHub Pages und Server-Logfiles</h2>
            <p>
              Diese Website wird als statische Website ueber GitHub Pages bereitgestellt. Anbieter
              ist GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, ein
              Unternehmen der Microsoft Corporation.
            </p>
            <p>
              Beim Aufruf dieser Website verarbeitet GitHub technisch notwendige Verbindungsdaten,
              um die Seite auszuliefern und die Sicherheit des Betriebs zu gewaehrleisten. Dazu
              koennen insbesondere gehoeren:
            </p>
            <ul className="legal-list">
              <li>aufgerufene Seite und Zeitpunkt des Zugriffs</li>
              <li>IP-Adresse</li>
              <li>Browser- und Betriebssysteminformationen</li>
              <li>Referrer-URL und technische Statusinformationen</li>
            </ul>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in
              der stabilen und sicheren Bereitstellung dieser Website.
            </p>
            <p>
              Dabei kann eine Uebermittlung personenbezogener Daten in die USA stattfinden. GitHub
              nimmt nach eigenen Angaben am EU-U.S. Data Privacy Framework teil; fuer
              zertifizierte Unternehmen besteht ein Angemessenheitsbeschluss der Europaeischen
              Kommission. Weitere Informationen finden Sie in der{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                rel="noopener noreferrer"
              >
                Datenschutzerklaerung von GitHub
              </a>
              .
            </p>
          </article>

          <article className="legal-card">
            <h2>3. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen uebermittelten
              Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen
              Vertragsschluss oder vorvertragliche Massnahmen gerichtet ist, andernfalls Art. 6
              Abs. 1 lit. f DSGVO.
            </p>
          </article>

          <article className="legal-card">
            <h2>4. Cookies und vergleichbare Technologien</h2>
            <p>
              Diese Website setzt nach aktuellem Stand keine Analyse- oder Marketing-Cookies ein.
              Sofern kuenftig nicht technisch notwendige Cookies oder vergleichbare Technologien
              hinzukommen, werden wir diese Datenschutzhinweise und gegebenenfalls das
              Einwilligungsmanagement entsprechend erweitern.
            </p>
            <p>
              Soweit technisch notwendige Zugriffe auf Endeinrichtungen erforderlich sind, erfolgt
              dies auf Grundlage von § 25 Abs. 2 TDDDG. Die anschliessende Datenverarbeitung richtet
              sich nach Art. 6 Abs. 1 DSGVO.
            </p>
          </article>

          <article className="legal-card">
            <h2>5. Externe Links</h2>
            <p>
              Diese Website kann auf externe Angebote verlinken, zum Beispiel auf spaetere
              Download-Seiten oder Kontaktangebote. Beim Anklicken solcher Links verlassen Sie
              diese Website. Fuer die Datenverarbeitung durch die jeweiligen Anbieter sind
              ausschliesslich deren eigene Datenschutzhinweise verantwortlich.
            </p>
          </article>

          <article className="legal-card">
            <h2>6. Speicherdauer</h2>
            <p>
              Personenbezogene Daten speichern wir nur so lange, wie dies fuer die genannten Zwecke
              erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Server-Logdaten
              werden in der Regel nur fuer einen begrenzten Zeitraum vorgehalten.
            </p>
          </article>

          <article className="legal-card">
            <h2>7. Ihre Rechte</h2>
            <ul className="legal-list">
              <li>Auskunft ueber die zu Ihrer Person gespeicherten Daten gemaess Art. 15 DSGVO</li>
              <li>Berichtigung unrichtiger Daten gemaess Art. 16 DSGVO</li>
              <li>Loeschung gemaess Art. 17 DSGVO</li>
              <li>Einschraenkung der Verarbeitung gemaess Art. 18 DSGVO</li>
              <li>Datenuebertragbarkeit gemaess Art. 20 DSGVO</li>
              <li>Widerspruch gegen Verarbeitungen gemaess Art. 21 DSGVO</li>
              <li>Widerruf erteilter Einwilligungen mit Wirkung fuer die Zukunft</li>
            </ul>
          </article>

          <article className="legal-card">
            <h2>8. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehoerde ueber die
              Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zustaendig ist insbesondere:{" "}
              {legalConfig.supervisoryAuthority}.
            </p>
          </article>

          <article className="legal-card">
            <h2>9. Stand</h2>
            <p>Diese Datenschutzhinweise gelten mit Stand vom {legalConfig.lastUpdated}.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
