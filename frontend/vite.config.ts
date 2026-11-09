import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    allowedHosts: ['.sg2.manus.computer'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
