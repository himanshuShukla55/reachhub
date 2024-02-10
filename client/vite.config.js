import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7000,
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000/",
        crossOrigin: true,
      },
    },
  },
});
