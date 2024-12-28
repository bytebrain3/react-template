import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@lib" : path.resolve(__dirname, "./src/lib"),
      "@store" : path.resolve(__dirname, "./src/store"),
      "@page" : path.resolve(__dirname, "./src/pages"),
      "@ui" : path.resolve(__dirname, "./src/components/ui"),
    },
  },
})