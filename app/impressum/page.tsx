import type { Metadata } from 'next'
import { SITE_DATA } from '@/lib/site-data'

const title = 'Impressum | Pfotenpfadfinder'
const description =
  'Impressum und Anbieterinformationen von Pfotenpfadfinder, Hundebetreuung und Gassi-Service in Gevelsberg.'
const socialImage = {
  url: '/impressum/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Impressum – Pfotenpfadfinder',
}

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: `${SITE_DATA.url}/impressum`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${SITE_DATA.url}/impressum`,
    siteName: SITE_DATA.name,
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImage],
  },
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <main
        id="main-content"
        tabIndex={-1}
        className="container mx-auto max-w-4xl px-4 py-16 md:px-8"
      >
        <div>
          <h1 className="mb-8 text-4xl font-bold text-foreground md:text-5xl">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="mt-12 mb-6 text-2xl font-bold text-foreground md:text-3xl">
              Informationspflicht nach § 5 DDG
            </h2>

            <div className="mb-12 rounded-lg bg-accent/5 p-6">
              <p className="mb-2 font-semibold text-foreground">Pfotenpfadfinder</p>
              <p className="text-foreground/70">Michelle Wattenberg</p>
              <p className="text-foreground/70">Geerstraße 34</p>
              <p className="mb-4 text-foreground/70">58285 Gevelsberg</p>
            </div>

            <h2 className="mt-12 mb-6 text-2xl font-bold text-foreground md:text-3xl">Kontakt</h2>

            <div className="mb-12 rounded-lg bg-accent/5 p-6">
              <p className="text-foreground/70">
                Mobil:{' '}
                <a href="tel:+4915772199639" className="text-accent hover:underline">
                  0157 72199639
                </a>
              </p>
              <p className="text-foreground/70">
                E-Mail:{' '}
                <a href="mailto:pfotenpfadfinder@gmail.com" className="text-accent hover:underline">
                  pfotenpfadfinder@gmail.com
                </a>
              </p>
            </div>

            <h2 className="mt-12 mb-6 text-2xl font-bold text-foreground md:text-3xl">
              Haftungsausschluss
            </h2>

            <h3 className="mb-3 text-xl font-bold text-foreground">Haftung für Inhalte</h3>
            <p className="mb-6 leading-relaxed text-foreground/70">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="mb-3 text-xl font-bold text-foreground">Haftung für Links</h3>
            <p className="mb-6 leading-relaxed text-foreground/70">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
              entfernen.
            </p>

            <h3 className="mb-3 text-xl font-bold text-foreground">Urheberrecht</h3>
            <p className="mb-12 leading-relaxed text-foreground/70">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
              die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
