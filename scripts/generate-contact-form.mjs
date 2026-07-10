import { writeFile } from 'node:fs/promises'

import fields from '../lib/contact-form-fields.json' with { type: 'json' }

function attributes(field) {
  return [
    `name="${field.name}"`,
    `autocomplete="${field.autoComplete}"`,
    `maxlength="${field.maxLength}"`,
    field.required ? 'required' : undefined,
  ]
    .filter(Boolean)
    .join(' ')
}

function control(field) {
  if (field.type === 'textarea') {
    return `      <textarea ${attributes(field)}></textarea>`
  }

  return `      <input type="${field.type}" ${attributes(field)} />`
}

const blueprint = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Kontaktformular – Pfotenpfadfinder</title>
  </head>
  <body>
    <form
      name="contact"
      action="/"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="hidden" name="form-name" value="contact" />
      <label style="position: absolute; width: 1px; height: 1px; overflow: hidden">
        Dieses Feld nicht ausfüllen:
        <input type="text" name="bot-field" tabindex="-1" autocomplete="off" />
      </label>
${fields.map(control).join('\n')}
    </form>
  </body>
</html>
`

await writeFile(new URL('../public/contact-form.html', import.meta.url), blueprint, 'utf8')
