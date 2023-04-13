import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

import HtmlExtFallbackPlugin from './build/plugins/html-ext-fallback'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    HtmlExtFallbackPlugin({ rootDir: __dirname }),
    svgr(),
    react(),
  ],
})
