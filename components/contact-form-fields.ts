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

export const CONTACT_FORM_FIELDS = fields as readonly ContactFormField[]
