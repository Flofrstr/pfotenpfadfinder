import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreIssues: {
    // UI component libraries: ignore unused exports (components are meant to be reused)
    'components/ui/**': ['exports', 'types', 'nsExports', 'nsTypes', 'enumMembers', 'classMembers'],
  },
  ignoreDependencies: [
    // PostCSS plugins loaded dynamically
    'postcss-load-config',
    'autoprefixer',
    // Tailwind plugin loaded via @plugin directive in CSS
    'tailwindcss-animate',
  ],
  ignore: [
    // Config files for tools that Knip doesn't recognize
    'taze.config.ts',
  ],
}

export default config
