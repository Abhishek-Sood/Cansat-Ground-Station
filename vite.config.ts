import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.SOME_KEY": JSON.stringify(loadEnv.SOME_KEY),
  },
  server: {
    port: 3000,
  },
  plugins: [react(), svgr()],
  base: "",
});
