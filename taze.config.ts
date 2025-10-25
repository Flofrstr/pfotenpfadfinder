import { defineConfig } from 'taze'

export default defineConfig({
  // Aggressively upgrade all packages to latest major versions
  mode: 'major',

  // Exclude TypeScript-related packages that need manual version alignment
  packageMode: {
    // TypeScript must match tsgo's base version
    // Check https://github.com/microsoft/typescript-go before updating
    typescript: 'ignore',

    // tsgo itself - update independently when ready
    '@typescript/native-preview': 'ignore',

    // tsgo wrapper - update with care
    'oxlint-tsgolint': 'ignore',
  },

  // Write changes to package.json
  write: true,

  // Install dependencies after updating
  install: true,
})
