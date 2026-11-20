import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works both at the domain root (custom domain)
  // and under a /repo-name/ subpath (the default github.io project URL).
  base: './',
})
