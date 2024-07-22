/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
        'src/routes',
        'src/mocks',
        'src/services',
        'src/helpers',
        'src/globalStyles.ts',
        'src/styled.d.ts',
        'src/vite-env.d.ts',
        'src/theme.ts',
        'src/main.tsx',
        'src/App.tsx',
        'src/**/*.spec.tsx',
        'src/**/*.test.tsx',
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
