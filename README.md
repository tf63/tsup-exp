# Turborepo Template

This repository provides a monorepo setup for web frontend development (React 18, Next.js 14, Chrome extension)

## Commands

```
pnpm build       # Build the projects for production
pnpm dev         # Start the development server
pnpm lint        # Lint the JavaScript/TypeScript files (not apply changes)
pnpm lint:fix    # Lint the JavaScript/TypeScript files (apply changes)
pnpm test        # Run the unit test
pnpm test:watch  # Run the unit test in watch mode
pnpm test:ui     # Run the unit test with UI
pnpm test:e2e    # Run the end-to-end tests
pnpm test:e2e:ui # Run the end-to-end tests with UI
pnpm format      # Format the JavaScript/TypeScript files using Biome and other files using Prettier.
pnpm generate    # Generate a component from templates with plop
```

## DevTools

| tool                                                      | description                                                                |
| --------------------------------------------------------- | -------------------------------------------------------------------------- |
| [turbo](https://turbo.build)                              | Monorepo build system that speeds up and optimizes the development process |
| [pnpm](https://pnpm.io)                                   | Fast, disk space efficient package manager                                 |
| [biome](https://biomejs.dev/)                             | Linter for JavaScript, TypeScript, and JSON files                          |
| [prettier](https://prettier.io/)                          | Formatter for various file types (JavaScript, TypeScript, Markdown, etc.)  |
| [husky](https://typicode.github.io/husky/)                | Tool for managing Git hooks easily                                         |
| [lint-staged](https://github.com/lint-staged/lint-staged) | Runs linters on Git staged files, improving code quality before commits    |
| [plop](https://plopjs.com/)                               | Micro-generator framework that helps create consistent project components  |
| [vitest](https://vitest.dev/)                             | Testing framework for unit test                                            |
| [playwright](https://playwright.dev/)                     | Testing framework for e2e test                                             |

## Repositories

### apps

`apps` contains web applications.
Each application in `apps/` only depends on packages within `packages/`, not on other applications.

| repo             | description                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **next**         | [Next.js 14](https://nextjs.org/) (App Router) application with [Tailwind CSS](https://tailwindcss.com/)                                                                          |
| **react**        | [React 18](https://react.dev/) application using [Vite](https://vitejs.dev/) for bundling and [Tailwind CSS](https://tailwindcss.com/)                                            |
| **react-chrome** | Chrome Extension built with [React 18](https://react.dev/), using [CRX](https://crxjs.dev/vite-plugin/), [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/) |
| **storybook**    | [Storybook](https://storybook.js.org/) server                                                                                                                                     |

### packages

`packages` contains reusable UI components and configuration files.

| repo                  | description                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| **ui**                | Shared UI components library used across applications                             |
| **config-tailwind**   | [Tailwind CSS](https://tailwindcss.com/) configuration shared across applications |
| **config-typescript** | TypeScript configuration shared across applications                               |
