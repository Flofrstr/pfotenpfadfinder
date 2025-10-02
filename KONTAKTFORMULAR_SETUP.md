# Kontaktformular Setup-Anleitung

Das Kontaktformular ist jetzt vollständig funktional! Es sendet E-Mails direkt an **pfotenpfadfinder@gmail.com**.

## 🚀 Setup-Schritte

### 1. Resend API Key erstellen

1. Gehe zu [resend.com](https://resend.com) und erstelle einen kostenlosen Account
2. Verifiziere deine E-Mail-Adresse
3. Gehe zu "API Keys" und erstelle einen neuen API Key
4. Kopiere den API Key

### 2. Umgebungsvariable setzen

Erstelle eine `.env.local` Datei im Hauptverzeichnis des Projekts:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

Ersetze `re_xxxxxxxxxxxxxxxxxxxxxxxxxx` mit deinem echten API Key.

### 3. Domain verifizieren (Optional, aber empfohlen)

Für den produktiven Einsatz solltest du deine Domain bei Resend verifizieren:

1. Gehe zu "Domains" in Resend
2. Füge deine Domain hinzu
3. Folge den Anweisungen zur DNS-Konfiguration
4. Nach der Verifizierung kannst du in `app/api/contact/route.ts` die `from`-Adresse anpassen:

```typescript
from: 'Kontaktformular <noreply@deine-domain.de>',
```

### 4. Entwicklungsserver starten

```bash
npm run dev
```

## ✨ Features

- ✅ Direkter E-Mail-Versand an pfotenpfadfinder@gmail.com
- ✅ Automatische Reply-To-Adresse (Absender-E-Mail)
- ✅ Schöne Toast-Benachrichtigungen für Erfolg/Fehler
- ✅ Loading-State während des Versendens
- ✅ Formular wird nach erfolgreichem Versand zurückgesetzt
- ✅ Vollständige Validierung
- ✅ Responsive Design

## 📧 Kostenloser Resend-Plan

Der kostenlose Plan von Resend erlaubt:
- 100 E-Mails pro Tag
- 3.000 E-Mails pro Monat

Das sollte für eine Kontaktformular-Website vollkommen ausreichen!

## 🔒 Sicherheit

- API Key wird nur serverseitig verwendet (nicht im Browser sichtbar)
- Formular-Validierung auf Client- und Server-Seite
- Rate Limiting durch Resend automatisch eingebaut

