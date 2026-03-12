import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // En local: base "/". En GitHub Pages: "/nombre-del-repo/" (lo define el workflow).
  base: process.env.VITE_BASE ?? "/",
});

