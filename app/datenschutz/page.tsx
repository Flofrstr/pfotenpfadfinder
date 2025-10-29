import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Pfotenpfadfinder',
  description:
    'Datenschutzerklärung von Pfotenpfadfinder. Informationen zum Umgang mit personenbezogenen Daten gemäß DSGVO.',
  alternates: {
    canonical: 'https://pfotenpfadfinder-hundebetreuung.de/datenschutz',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Datenschutz() {
  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div>
          <h1 className="text-foreground mb-8 text-2xl font-bold wrap-break-word sm:text-3xl md:text-4xl lg:text-5xl">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen
              besonders hohen Stellenwert für die Geschäftsleitung der Pfotenpfadfinder. Eine
              Nutzung der Internetseiten der Pfotenpfadfinder ist grundsätzlich ohne jede Angabe
              personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services
              unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte
              jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die
              Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche
              Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der
              betroffenen Person ein.
            </p>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift,
              E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang
              mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für die
              Pfotenpfadfinder geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser
              Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und
              Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten
              informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung
              über die ihnen zustehenden Rechte aufgeklärt.
            </p>

            <p className="text-foreground/70 mb-12 leading-relaxed">
              Die Pfotenpfadfinder hat als für die Verarbeitung Verantwortlicher zahlreiche
              technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen
              Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten
              sicherzustellen. Dennoch können Internetbasierte Datenübertragungen grundsätzlich
              Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden
              kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten
              auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              1. Begriffsbestimmungen
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Die Datenschutzerklärung der Pfotenpfadfinder beruht auf den Begrifflichkeiten, die
              durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der
              Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung
              soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner
              einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die
              verwendeten Begrifflichkeiten erläutern.
            </p>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:
            </p>

            <div className="mb-12 space-y-8">
              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  a) personenbezogene Daten
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte
                  oder identifizierbare natürliche Person (im Folgenden „betroffene Person")
                  beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt
                  oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu
                  einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder
                  mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen,
                  genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität
                  dieser natürlichen Person sind, identifiziert werden kann.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">b) betroffene Person</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person,
                  deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen
                  verarbeitet werden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">c) Verarbeitung</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte
                  Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten
                  wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die
                  Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die
                  Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der
                  Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen
                  oder die Vernichtung.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  d) Einschränkung der Verarbeitung
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener
                  Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">e) Profiling</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten,
                  die darin besteht, dass diese personenbezogenen Daten verwendet werden, um
                  bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu
                  bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher
                  Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
                  Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder
                  vorherzusagen.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">f) Pseudonymisierung</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf
                  welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen
                  nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern
                  diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und
                  organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die
                  personenbezogenen Daten nicht einer identifizierten oder identifizierbaren
                  natürlichen Person zugewiesen werden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  g) Verantwortlicher oder für die Verarbeitung Verantwortlicher
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche
                  oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder
                  gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser
                  Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben,
                  so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner
                  Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen
                  werden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">h) Auftragsverarbeiter</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde,
                  Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des
                  Verantwortlichen verarbeitet.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">i) Empfänger</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder
                  andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob
                  es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines
                  bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der
                  Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch
                  nicht als Empfänger.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">j) Dritter</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder
                  andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem
                  Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung
                  des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die
                  personenbezogenen Daten zu verarbeiten.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">k) Einwilligung</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten
                  Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in
                  Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit
                  der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie
                  betreffenden personenbezogenen Daten einverstanden ist.
                </p>
              </div>
            </div>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              2. Name und Anschrift des für die Verarbeitung Verantwortlichen
            </h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den
              Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer
              Bestimmungen mit datenschutzrechtlichem Charakter ist die:
            </p>

            <div className="bg-accent/5 mb-12 rounded-lg p-6">
              <p className="text-foreground mb-2 font-semibold">Pfotenpfadfinder</p>
              <p className="text-foreground/70">Michelle Wattenberg</p>
              <p className="text-foreground/70">Geerstraße 34</p>
              <p className="text-foreground/70 mb-3">58285 Gevelsberg</p>
              <p className="text-foreground/70">Tel.: 0157 72199639</p>
              <p className="text-foreground/70">
                E-Mail:{' '}
                <a
                  href="mailto:pfotenpfadfinder@gmail.com"
                  className="text-foreground hover:underline"
                >
                  pfotenpfadfinder@gmail.com
                </a>
              </p>
            </div>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              3. Cookies
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed">
              Die Internetseiten der Pfotenpfadfinder verwenden keine Cookies. Cookies sind
              Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und
              gespeichert werden. Unsere Website funktioniert vollständig ohne den Einsatz von
              Cookies, sodass keine solchen Dateien auf Ihrem Gerät gespeichert werden. Dies
              bedeutet, dass wir Sie über unsere Website nicht mittels Cookies identifizieren oder
              Ihr Nutzungsverhalten nachverfolgen. Die Nutzung unserer Internetseite ist somit
              komplett cookie-frei möglich.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              4. Erfassung von allgemeinen Daten und Informationen
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Die Internetseite der Pfotenpfadfinder erfasst mit jedem Aufruf der Internetseite
              durch eine betroffene Person oder ein automatisiertes System eine Reihe von
              allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden
              in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten
              Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem,
              (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite
              gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes
              System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit
              eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse
              (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8)
              sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von
              Angriffen auf unsere informationstechnologischen Systeme dienen.
            </p>

            <p className="text-foreground/70 mb-12 leading-relaxed">
              Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Pfotenpfadfinder
              keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr
              benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die
              Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die
              dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der
              Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden
              im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen
              bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die
              Pfotenpfadfinder daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den
              Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich
              ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten
              sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen
              durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              5. Kontaktmöglichkeit über die Internetseite
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed">
              Die Internetseite der Pfotenpfadfinder enthält aufgrund von gesetzlichen Vorschriften
              Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie
              eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine
              Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine
              betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die
              Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person
              übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger
              Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen
              übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der
              Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser
              personenbezogenen Daten an Dritte.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene
              Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des
              Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen
              Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder
              Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen
              wurde.
            </p>

            <p className="text-foreground/70 mb-12 leading-relaxed">
              Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und
              Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene
              Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den
              gesetzlichen Vorschriften gesperrt oder gelöscht.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              7. Rechte der betroffenen Person
            </h2>

            <div className="mb-12 space-y-8">
              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">a) Recht auf Bestätigung</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber
                  eingeräumte Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung
                  darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet
                  werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen,
                  kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung
                  Verantwortlichen wenden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">b) Recht auf Auskunft</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
                  Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem
                  für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner
                  Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu
                  erhalten. Ferner hat der Europäische Richtlinien- und Verordnungsgeber der
                  betroffenen Person Auskunft über folgende Informationen zugestanden:
                </p>

                <ul className="text-foreground/70 mb-4 list-disc space-y-2 pl-6">
                  <li>die Verarbeitungszwecke</li>
                  <li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
                  <li>
                    die Empfänger oder Kategorien von Empfängern, gegenüber denen die
                    personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden,
                    insbesondere bei Empfängern in Drittländern oder bei internationalen
                    Organisationen
                  </li>
                  <li>
                    falls möglich die geplante Dauer, für die die personenbezogenen Daten
                    gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die
                    Festlegung dieser Dauer
                  </li>
                  <li>
                    das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden
                    personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den
                    Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung
                  </li>
                  <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
                  <li>
                    wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben
                    werden: Alle verfügbaren Informationen über die Herkunft der Daten
                  </li>
                  <li>
                    das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling
                    gemäß Artikel 22 Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen —
                    aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und
                    die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene
                    Person
                  </li>
                </ul>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu, ob
                  personenbezogene Daten an ein Drittland oder an eine internationale Organisation
                  übermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im
                  Übrigen das Recht zu, Auskunft über die geeigneten Garantien im Zusammenhang mit
                  der Übermittlung zu erhalten.
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie
                  sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung
                  Verantwortlichen wenden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  c) Recht auf Berichtigung
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
                  Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche
                  Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen.
                  Ferner steht der betroffenen Person das Recht zu, unter Berücksichtigung der
                  Zwecke der Verarbeitung, die Vervollständigung unvollständiger personenbezogener
                  Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann
                  sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung
                  Verantwortlichen wenden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  d) Recht auf Löschung (Recht auf Vergessen werden)
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
                  Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem
                  Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten
                  unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft und
                  soweit die Verarbeitung nicht erforderlich ist:
                </p>

                <ul className="text-foreground/70 mb-4 list-disc space-y-2 pl-6">
                  <li>
                    Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige
                    Weise verarbeitet, für welche sie nicht mehr notwendig sind.
                  </li>
                  <li>
                    Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung
                    gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO
                    stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die
                    Verarbeitung.
                  </li>
                  <li>
                    Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die
                    Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die
                    Verarbeitung vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO
                    Widerspruch gegen die Verarbeitung ein.
                  </li>
                  <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                  <li>
                    Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen
                    Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
                    erforderlich, dem der Verantwortliche unterliegt.
                  </li>
                  <li>
                    Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
                    Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.
                  </li>
                </ul>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Sofern einer der oben genannten Gründe zutrifft und eine betroffene Person die
                  Löschung von personenbezogenen Daten, die bei der Pfotenpfadfinder gespeichert
                  sind, veranlassen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des
                  für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der Pfotenpfadfinder
                  wird veranlassen, dass dem Löschverlangen unverzüglich nachgekommen wird.
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  Wurden die personenbezogenen Daten von der Pfotenpfadfinder öffentlich gemacht und
                  ist unser Unternehmen als Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur
                  Löschung der personenbezogenen Daten verpflichtet, so trifft die Pfotenpfadfinder
                  unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten
                  angemessene Maßnahmen, auch technischer Art, um andere für die Datenverarbeitung
                  Verantwortliche, welche die veröffentlichten personenbezogenen Daten verarbeiten,
                  darüber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen für
                  die Datenverarbeitung Verantwortlichen die Löschung sämtlicher Links zu diesen
                  personenbezogenen Daten oder von Kopien oder Replikationen dieser
                  personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich
                  ist. Der Mitarbeiter der Pfotenpfadfinder wird im Einzelfall das Notwendige
                  veranlassen.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  e) Recht auf Einschränkung der Verarbeitung
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
                  Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem
                  Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der
                  folgenden Voraussetzungen gegeben ist:
                </p>

                <ul className="text-foreground/70 mb-4 list-disc space-y-2 pl-6">
                  <li>
                    Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person
                    bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die
                    Richtigkeit der personenbezogenen Daten zu überprüfen.
                  </li>
                  <li>
                    Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der
                    personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der
                    Nutzung der personenbezogenen Daten.
                  </li>
                  <li>
                    Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der
                    Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur
                    Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                  </li>
                  <li>
                    Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1
                    DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des
                    Verantwortlichen gegenüber denen der betroffenen Person überwiegen.
                  </li>
                </ul>

                <p className="text-foreground/70 leading-relaxed">
                  Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene
                  Person die Einschränkung von personenbezogenen Daten, die bei der Pfotenpfadfinder
                  gespeichert sind, verlangen möchte, kann sie sich hierzu jederzeit an einen
                  Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der
                  Pfotenpfadfinder wird die Einschränkung der Verarbeitung veranlassen.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  f) Recht auf Datenübertragbarkeit
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
                  Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die sie
                  betreffenden personenbezogenen Daten, welche durch die betroffene Person einem
                  Verantwortlichen bereitgestellt wurden, in einem strukturierten, gängigen und
                  maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten
                  einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem
                  die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die
                  Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art.
                  9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b
                  DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt,
                  sofern die Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich ist,
                  die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt,
                  welche dem Verantwortlichen übertragen wurde.
                </p>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf
                  Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die
                  personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen
                  Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern
                  hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene
                  Person jederzeit an einen Mitarbeiter der Pfotenpfadfinder wenden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">g) Recht auf Widerspruch</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
                  Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die
                  sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie
                  betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e
                  oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese
                  Bestimmungen gestütztes Profiling.
                </p>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Die Pfotenpfadfinder verarbeitet die personenbezogenen Daten im Falle des
                  Widerspruchs nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe
                  für die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der
                  betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung,
                  Ausübung oder Verteidigung von Rechtsansprüchen.
                </p>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Verarbeitet die Pfotenpfadfinder personenbezogene Daten, um Direktwerbung zu
                  betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die
                  Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen.
                  Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
                  Verbindung steht. Widerspricht die betroffene Person gegenüber der
                  Pfotenpfadfinder der Verarbeitung für Zwecke der Direktwerbung, so wird die
                  Pfotenpfadfinder die personenbezogenen Daten nicht mehr für diese Zwecke
                  verarbeiten.
                </p>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer
                  besonderen Situation ergeben, gegen die sie betreffende Verarbeitung
                  personenbezogener Daten, die bei der Pfotenpfadfinder zu wissenschaftlichen oder
                  historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1
                  DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist
                  zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt an
                  jeden Mitarbeiter der Pfotenpfadfinder oder einen anderen Mitarbeiter wenden. Der
                  betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von
                  Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr
                  Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen
                  technische Spezifikationen verwendet werden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  h) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
                  Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer
                  ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling —
                  beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche
                  Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die
                  Entscheidung (1) nicht für den Abschluss oder die Erfüllung eines Vertrags
                  zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder
                  (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
                  Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene
                  Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen
                  der betroffenen Person enthalten oder (3) mit ausdrücklicher Einwilligung der
                  betroffenen Person erfolgt.
                </p>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags
                  zwischen der betroffenen Person und dem Verantwortlichen erforderlich oder (2)
                  erfolgt sie mit ausdrücklicher Einwilligung der betroffenen Person, trifft die
                  Pfotenpfadfinder angemessene Maßnahmen, um die Rechte und Freiheiten sowie die
                  berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das
                  Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf
                  Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen
                  geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die
                  Verarbeitung Verantwortlichen wenden.
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
                  Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung
                  zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend
                  machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die
                  Verarbeitung Verantwortlichen wenden.
                </p>
              </div>
            </div>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              8. Website-Hosting und Kontaktformular (Netlify)
            </h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Unsere Website wird bei Netlify gehostet. Anbieter: Netlify, Inc., 44 Montgomery
              Street, Suite 300, San Francisco, CA 94104, USA.
            </p>

            <p className="text-foreground/70 mb-4 leading-relaxed">
              Netlify verarbeitet im Rahmen des Hostings u.a. IP-Adressen, Meta- und
              Kommunikationsdaten sowie Websitezugriffe in den Server-Logfiles. Die Daten werden auf
              Servern in den USA gespeichert. Diese Datenverarbeitung erfolgt serverseitig und ohne
              den Einsatz von Cookies. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an sicherer und zuverlässiger Bereitstellung unserer Website).
            </p>

            <p className="text-foreground/70 mb-4 leading-relaxed">
              Für statistische Auswertungen nutzen wir Netlify Analytics, welches ausschließlich
              serverseitig arbeitet und keine Cookies oder clientseitiges Tracking verwendet. Die
              Analyse erfolgt anonym auf Basis der Server-Logfiles.
            </p>

            <h3 className="text-foreground mb-3 text-xl font-bold">
              Kontaktformular über Netlify Forms
            </h3>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Für unser Kontaktformular nutzen wir Netlify Forms. Bei Nutzung des Kontaktformulars
              werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) an Netlify
              übermittelt und dort gespeichert. Diese Daten werden ausschließlich zur Bearbeitung
              Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            </p>

            <p className="text-foreground/70 mb-12 leading-relaxed">
              Weitere Informationen zum Datenschutz bei Netlify finden Sie unter:{' '}
              <a
                href="https://www.netlify.com/privacy/"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.netlify.com/privacy/
              </a>
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              9. Datenschutzbestimmungen zu Einsatz und Verwendung von Instagram
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten des
              Dienstes Instagram integriert. Instagram ist ein Dienst, der als audiovisuelle
              Plattform zu qualifizieren ist und den Nutzern das Teilen von Fotos und Videos und
              zudem eine Weiterverbreitung solcher Daten in anderen sozialen Netzwerken ermöglicht.
            </p>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Betreibergesellschaft der Dienste von Instagram ist die Facebook Ireland Ltd., 4 Grand
              Canal Square, Grand Canal Harbour, Dublin 2 Ireland.
            </p>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die
              Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Instagram-Komponente
              (Insta-Button) integriert wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person automatisch durch die
              jeweilige Instagram-Komponente veranlasst, eine Darstellung der entsprechenden
              Komponente von Instagram herunterzuladen. Im Rahmen dieses technischen Verfahrens
              erhält Instagram Kenntnis darüber, welche konkrete Unterseite unserer Internetseite
              durch die betroffene Person besucht wird.
            </p>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Sofern die betroffene Person gleichzeitig bei Instagram eingeloggt ist, erkennt
              Instagram mit jedem Aufruf unserer Internetseite durch die betroffene Person und
              während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite,
              welche konkrete Unterseite die betroffene Person besucht. Diese Informationen werden
              durch die Instagram-Komponente gesammelt und durch Instagram dem jeweiligen
              Instagram-Account der betroffenen Person zugeordnet. Betätigt die betroffene Person
              einen der auf unserer Internetseite integrierten Instagram-Buttons, werden die damit
              übertragenen Daten und Informationen dem persönlichen Instagram-Benutzerkonto der
              betroffenen Person zugeordnet und von Instagram gespeichert und verarbeitet.
            </p>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Instagram erhält über die Instagram-Komponente immer dann eine Information darüber,
              dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene
              Person zum Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei Instagram
              eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die
              Instagram-Komponente anklickt oder nicht. Ist eine derartige Übermittlung dieser
              Informationen an Instagram von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite
              aus ihrem Instagram-Account ausloggt.
            </p>

            <p className="text-foreground/70 mb-12 leading-relaxed">
              Weitere Informationen und die geltenden Datenschutzbestimmungen von Instagram können
              unter https://help.instagram.com/155833707900388 und
              https://www.instagram.com/about/legal/privacy/ abgerufen werden.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              10. Rechtsgrundlage der Verarbeitung
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed">
              Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für
              Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten
              Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur
              Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist,
              erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für
              eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder
              Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO.
              Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher
              Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder
              Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche
              eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise
              zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c
              DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten
              erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer
              anderen natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein
              Besucher in unserem Betrieb verletzt werden würde und daraufhin sein Name, sein Alter,
              seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein
              Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die
              Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich könnten
              Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage
              basieren Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen
              erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses
              unseres Unternehmens oder eines Dritten erforderlich ist, sofern die Interessen,
              Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Solche
              Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil sie durch den
              Europäischen Gesetzgeber besonders erwähnt wurden. Er vertrat insoweit die Auffassung,
              dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die betroffene Person ein
              Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              11. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder
              einem Dritten verfolgt werden
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed">
              Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist
              unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des
              Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              12. Dauer, für die die personenbezogenen Daten gespeichert werden
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed">
              Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die
              jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die
              entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur
              Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              13. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der
              personenbezogenen Daten; Erforderlichkeit für den Vertragsabschluss; Verpflichtung der
              betroffenen Person, die personenbezogenen Daten bereitzustellen; mögliche Folgen der
              Nichtbereitstellung
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed">
              Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil
              gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus
              vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter
              kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns
              personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet
              werden müssen. Die betroffene Person ist beispielsweise verpflichtet uns
              personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag
              abschließt. Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass
              der Vertrag mit dem Betroffenen nicht geschlossen werden könnte. Vor einer
              Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene
              an einen unserer Mitarbeiter wenden. Unser Mitarbeiter klärt den Betroffenen
              einzelfallbezogen darüber auf, ob die Bereitstellung der personenbezogenen Daten
              gesetzlich oder vertraglich vorgeschrieben oder für den Vertragsabschluss erforderlich
              ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und
              welche Folgen die Nichtbereitstellung der personenbezogenen Daten hätte.
            </p>

            <h2 className="text-foreground mt-12 mb-6 text-2xl font-bold md:text-3xl">
              14. Bestehen einer automatisierten Entscheidungsfindung
            </h2>
            <p className="text-foreground/70 mb-12 leading-relaxed">
              Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische
              Entscheidungsfindung oder ein Profiling.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
