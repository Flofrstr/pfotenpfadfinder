# Git Hooks

This directory contains git hooks for the project.

## Installation

To install these hooks, run:

```bash
git config core.hooksPath .githooks
```

This needs to be run once per clone/worktree.

## Hooks

- **pre-commit**: Runs `lint-staged` to format staged files
- **pre-push**: Runs `npm run check` (lint + typecheck + knip) before pushing
