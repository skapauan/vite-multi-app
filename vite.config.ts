import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import zipPack from 'vite-plugin-zip-pack';
import { version } from './package.json';

const apps = resolve(__dirname, 'apps');
const zipOptions = { outFileName: `dist-v${version}.zip` };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), zipPack(zipOptions)],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        cats: resolve(apps, 'cats', 'index.html'),
        dogs: resolve(apps, 'dogs', 'index.html'),
        fish: resolve(apps, 'fish', 'index.html'),
      },
      external: ['@picocss/pico'],
    },
  },
});
