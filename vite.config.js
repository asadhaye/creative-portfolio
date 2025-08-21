import { defineConfig } from 'vite'
import netlify from "@netlify/vite-plugin";
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

export default defineConfig({
  plugins: [netlify(), react(), tailwindcss(), visualizer({ open: true, gzipSize: true })],
  resolve: { 
    alias: { "@": path.resolve(__dirname, "./src") }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three'],
          framer: ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
