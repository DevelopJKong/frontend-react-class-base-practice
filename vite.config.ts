import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-macros', { config: './babel.config.js' }]],
      },
    }),
  ],
  define: {
    'process.env': {},
  },
});
