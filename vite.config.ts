import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import HistoryApiFallback from 'vite-plugin-history-api-fallback'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    HistoryApiFallback({
      DEBUG: true,
      rewrites: [
        { from: /^\/.*$/, to: '/index.html' },
      ],
    }),
  ],
})
