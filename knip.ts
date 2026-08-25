import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: [
    // Invoked by simple-git-hooks through the package.json configuration.
    'lint-staged',
  ],
}

export default config
