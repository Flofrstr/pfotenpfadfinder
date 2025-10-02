import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      )
    }

    // E-Mail senden
    const data = await resend.emails.send({
      from: 'Pfotenpfadfinder Website <onboarding@resend.dev>', // Dies muss später durch deine verifizierte Domain ersetzt werden
      to: ['pfotenpfadfinder@gmail.com'],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der E-Mail' },
      { status: 500 }
    )
  }
}

