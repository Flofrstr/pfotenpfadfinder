import { defineConfig } from 'taze'

export default defineConfig({
  // Report non-breaking updates without changing the manifest or lockfile.
  mode: 'minor',

  packageMode: {
    typescript: 'ignore',
    'lucide-react': 'ignore',
  },
  write: false,
  install: false,
})
