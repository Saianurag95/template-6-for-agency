import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/template-6-for-agency/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
