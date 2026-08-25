import fields from '@/lib/contact-form-fields.json'

interface ContactFormFieldBase {
  name: string
  label: string
  placeholder: string
  autoComplete: string
  maxLength: number
  required: boolean
  optionalLabel?: string
}

export type ContactFormField = ContactFormFieldBase & {
  type: 'text' | 'email' | 'tel' | 'textarea'
}

function isContactFormField(
  field: (typeof fields)[number],
): field is (typeof fields)[number] & ContactFormField {
  return (
    field.type === 'text' ||
    field.type === 'email' ||
    field.type === 'tel' ||
    field.type === 'textarea'
  )
}

if (!fields.every(isContactFormField)) {
  throw new TypeError('Die Kontaktformular-Konfiguration enthält einen unbekannten Feldtyp.')
}

export const CONTACT_FORM_FIELDS: readonly ContactFormField[] = fields
