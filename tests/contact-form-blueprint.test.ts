import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

import { CONTACT_FORM_FIELDS } from '@/components/contact-form-fields'

interface HtmlField {
  tagName: 'input' | 'textarea'
  source: string
  name: string
}

const blueprintPath = join(process.cwd(), 'public', 'contact-form.html')
const blueprint = readFileSync(blueprintPath, 'utf8')

function readAttribute(source: string, attribute: string): string | undefined {
  const match = new RegExp(`\\b${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i').exec(
    source,
  )

  return match?.[1] ?? match?.[2] ?? match?.[3]
}

function hasBooleanAttribute(source: string, attribute: string): boolean {
  return new RegExp(
    `\\b${attribute}(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>]+))?(?=\\s|/?>)`,
    'i',
  ).test(source)
}

function getFields(html: string): HtmlField[] {
  return [...html.matchAll(/<(input|textarea)\b[^>]*>/gi)]
    .map(match => {
      const tagName = match[1].toLowerCase() as HtmlField['tagName']
      const source = match[0]
      const name = readAttribute(source, 'name')
      return name ? { tagName, source, name } : undefined
    })
    .filter((field): field is HtmlField => Boolean(field))
}

describe('statischer Netlify-Formular-Blueprint', () => {
  const fields = getFields(blueprint)

  it('verwendet dieselben fachlichen Felder wie das sichtbare Formular', () => {
    const blueprintFieldNames = fields
      .map(field => field.name)
      .filter(name => name !== 'form-name' && name !== 'bot-field')

    expect(blueprintFieldNames).toEqual(CONTACT_FORM_FIELDS.map(field => field.name))
    expect(new Set(blueprintFieldNames).size).toBe(blueprintFieldNames.length)
  })

  it.each(CONTACT_FORM_FIELDS)('$name spiegelt Typ, Limits und Browser-Hinweise', field => {
    const blueprintField = fields.find(candidate => candidate.name === field.name)

    expect(blueprintField, `Feld ${field.name} fehlt in ${blueprintPath}`).toBeDefined()
    if (!blueprintField) return

    expect(blueprintField.tagName).toBe(field.type === 'textarea' ? 'textarea' : 'input')
    if (field.type !== 'textarea') {
      expect(readAttribute(blueprintField.source, 'type')).toBe(field.type)
    }
    expect(readAttribute(blueprintField.source, 'autocomplete')).toBe(field.autoComplete)
    expect(readAttribute(blueprintField.source, 'maxlength')).toBe(String(field.maxLength))
    expect(hasBooleanAttribute(blueprintField.source, 'required')).toBe(field.required)
  })

  it('ist als POST auf die Homepage für Netlify Forms erkennbar', () => {
    const form = /<form\b[^>]*>/i.exec(blueprint)?.[0]

    expect(form).toBeDefined()
    if (!form) return

    expect(readAttribute(form, 'name')).toBe('contact')
    expect(readAttribute(form, 'action')).toBe('/')
    expect(readAttribute(form, 'method')?.toUpperCase()).toBe('POST')
    expect(readAttribute(form, 'data-netlify')).toBe('true')
    expect(readAttribute(form, 'netlify-honeypot')).toBe('bot-field')

    const formNameFields = fields.filter(field => field.name === 'form-name')
    expect(formNameFields).toHaveLength(1)
    expect(readAttribute(formNameFields[0].source, 'type')).toBe('hidden')
    expect(readAttribute(formNameFields[0].source, 'value')).toBe('contact')
  })

  it('nutzt einen textuellen Honeypot und verhindert die Indexierung', () => {
    const honeypot = fields.filter(field => field.name === 'bot-field')

    expect(honeypot).toHaveLength(1)
    expect(readAttribute(honeypot[0].source, 'type')).toBe('text')
    expect(readAttribute(honeypot[0].source, 'tabindex')).toBe('-1')
    expect(readAttribute(honeypot[0].source, 'autocomplete')).toBe('off')

    const robotsMeta = blueprint.match(/<meta\b[^>]*name=["']robots["'][^>]*>/i)?.[0]
    expect(robotsMeta).toBeDefined()
    expect(readAttribute(robotsMeta ?? '', 'content')?.toLowerCase()).toBe('noindex, nofollow')
  })
})
