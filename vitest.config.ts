// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['{src,test}/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: 'coverage',
      include: ['src/**'],
      exclude: ['**/test/**'],
    },
  },
})
