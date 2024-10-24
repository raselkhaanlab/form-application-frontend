import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      'views': path.resolve(__dirname, 'src/views'),
      'data': path.resolve(__dirname, 'src/data'),

    }
  },
  plugins: [react()],
})
