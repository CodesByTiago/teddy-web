/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: './',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
    port: 8080,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    passWithNoTests: true,
    watch: false,
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: [
        'src/presentation/routes',
        'src/mocks',
        'src/services',
        'src/helpers',
        'src/styled.d.ts',
        'src/vite-env.d.ts',
        'src/styles/globalStyles.ts',
        'src/styles/theme.ts',
        'src/main.tsx',
        'src/App.tsx',
        'src/**/*.spec.tsx',
        'src/**/*.test.tsx',
        '**/*.types.ts',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
