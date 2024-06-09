import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://elkin-torres.github.io/TallerSemana4/",
  plugins: [react()],
});
