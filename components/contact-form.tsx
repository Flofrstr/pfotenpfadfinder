'use client'

import { CheckCircle2, Send, TriangleAlert } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent } from 'react'

import { CONTACT_FORM_FIELDS } from '@/components/contact-form-fields'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    },
    [],
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)
    const body = new URLSearchParams()

    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') body.append(key, value)
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error(`Formularübermittlung fehlgeschlagen: ${response.status}`)

      setStatus('success')
      form.reset()
      resetTimer.current = setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <>
      <div aria-live="polite" aria-atomic="true">
        {status === 'success' && (
          <div
            role="status"
            className="mb-6 flex items-start gap-3 rounded-lg bg-green-500/10 p-4 text-green-700 dark:text-green-400"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="text-sm font-medium">
              Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
            </p>
          </div>
        )}
        {status === 'error' && (
          <div
            role="alert"
            className="mb-6 flex items-start gap-3 rounded-lg bg-red-500/10 p-4 text-red-700 dark:text-red-400"
          >
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p className="text-sm font-medium">
              Deine Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder nutze den
              direkten Kontakt.
            </p>
          </div>
        )}
      </div>

      <form
        name="contact"
        action="/"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        aria-busy={isSubmitting}
        className="space-y-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p
          aria-hidden="true"
          className="absolute h-px w-px overflow-hidden whitespace-nowrap [clip-path:inset(50%)] [clip:rect(0,0,0,0)]"
        >
          <label htmlFor="bot-field">
            Dieses Feld nicht ausfüllen
            <input id="bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        {CONTACT_FORM_FIELDS.map(field => (
          <div key={field.name} className="space-y-2">
            <label htmlFor={field.name} className="text-sm font-semibold">
              {field.label}{' '}
              {'optionalLabel' in field && (
                <span className="font-normal text-foreground/40">{field.optionalLabel}</span>
              )}
            </label>
            {field.type === 'textarea' ? (
              <Textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                maxLength={field.maxLength}
                required={field.required}
                className="min-h-[150px] resize-none border-accent/20 placeholder:text-foreground/40 focus:border-accent"
              />
            ) : (
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                maxLength={field.maxLength}
                required={field.required}
                className="h-12 border-accent/20 placeholder:text-foreground/40 focus:border-accent"
              />
            )}
          </div>
        ))}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full bg-accent font-semibold text-background transition-all hover:bg-accent/90 disabled:opacity-50"
        >
          <Send className="mr-2 h-4 w-4" aria-hidden="true" />
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </Button>
      </form>
    </>
  )
}
