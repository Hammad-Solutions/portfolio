import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/portfolio/',  // ✅ Correct base path for GitHub Pages
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Keep other aliases as needed
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      // ... all other aliases
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist', // ✅ Match GitHub workflow
  },
  server: {
    port: 3000,
    open: true,
  },
});
