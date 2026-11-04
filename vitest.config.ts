import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/*/test/**/*.test.ts', 'tools/*/test/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['packages/*/src/**/*.ts'],
      thresholds: {
        'packages/dose-engine/src/**/*.ts': { lines: 100, branches: 100, functions: 100, statements: 100 },
      },
    },
  },
});
