import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  cacheDir: "/private/tmp/dispatch-tool-vite-cache",
  server: {
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          xlsx: ["xlsx"],
          dnd: ["@dnd-kit/core", "@dnd-kit/utilities"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
