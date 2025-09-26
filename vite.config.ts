import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      // Use import.meta.url to get the current file's URL and resolve the path
      "@": path.resolve(new URL(".", import.meta.url).pathname, "./src"),
    },
  },
}));
