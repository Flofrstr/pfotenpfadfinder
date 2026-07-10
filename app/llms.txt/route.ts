import { SITE_DATA } from '@/lib/site-data'

export const dynamic = 'force-static'

function formatEuro(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: SITE_DATA.pricing.currency,
  }).format(amount)
}

function createLlmsText(): string {
  const { pricing } = SITE_DATA

  return `# ${SITE_DATA.name} – Hundebetreuung

> ${SITE_DATA.description}

## Anbieter

- Inhaberin: ${SITE_DATA.owner}
- Adresse: ${SITE_DATA.address.street}, ${SITE_DATA.address.postalCode} ${SITE_DATA.address.locality}, ${SITE_DATA.address.country}
- Telefon: ${SITE_DATA.contact.phoneDisplay}
- E-Mail: ${SITE_DATA.contact.email}
- Instagram: ${SITE_DATA.social.instagram}

## Servicegebiet

${SITE_DATA.serviceAreas.map(area => `- ${area}`).join('\n')}

Die Anfahrt innerhalb des Servicegebiets kostet ${formatEuro(pricing.travelPerKilometer)} pro Kilometer.

## Leistungen und Preise

- Tagesbetreuung bis 12 Stunden: ${formatEuro(pricing.dayCare.firstDog)}, jeder weitere Hund ${formatEuro(pricing.dayCare.additionalDogs[0])}
- Urlaubsbetreuung mit Übernachtung: ${formatEuro(pricing.overnight.firstDog)}, jeder weitere Hund ${formatEuro(pricing.overnight.additionalDogs[0])}
- Gassi-Service, 30 Minuten: ab ${formatEuro(pricing.walk30.firstDog)}
- Gassi-Service, 60 Minuten: ab ${formatEuro(pricing.walk60.firstDog)}
- Kennenlernen mit Gassirunde: ${formatEuro(pricing.meetAndGreet.firstDog)}
- Probetag: ab ${formatEuro(pricing.trialDay.firstDog)}
- Probeübernachtung: ab ${formatEuro(pricing.trialOvernight.firstDog)}
- An Feiertagen gilt der Faktor ${pricing.holidayMultiplier.toLocaleString('de-DE')}.
- Die Nie-allein-Pauschale beträgt ${formatEuro(pricing.neverAlonePerBillingUnit)} je abrechenbarem Tag oder Nacht.

## Voraussetzungen

${SITE_DATA.requirements.map(requirement => `- ${requirement}`).join('\n')}

Für Übernachtungsbetreuung sind vorab ein Kennenlernen, ein Probetag und eine Probeübernachtung erforderlich. Termine werden nach Verfügbarkeit vereinbart.

## Direkte Links

- [Homepage](${SITE_DATA.url}/)
- [Über mich](${SITE_DATA.url}/#about)
- [Leistungen und Preise](${SITE_DATA.url}/#preise)
- [Häufige Fragen](${SITE_DATA.url}/#faq)
- [Kontakt](${SITE_DATA.url}/#kontakt)
- [Impressum](${SITE_DATA.url}/impressum)
- [Datenschutz](${SITE_DATA.url}/datenschutz)
`
}

export function GET() {
  return new Response(createLlmsText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
