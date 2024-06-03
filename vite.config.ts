import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.info('Loading Vite...');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
