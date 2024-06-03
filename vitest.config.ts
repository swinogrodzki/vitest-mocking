import { defineConfig, mergeConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import viteConfig from './vite.config';

console.info('Loading Vitest...');

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            root: fileURLToPath(new URL('./', import.meta.url)),
            globals: true,
            environment: 'jsdom',
            include: ['./src/**/*.test.tsx', './src/**/*.test.ts'],
            setupFiles: ['./src/tests/vitest.setup.ts'],
        },
    }),
);
