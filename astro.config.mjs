import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://marsa.de",
  build: { assets: "assets" },
  vite: { plugins: [tailwindcss()] },
});
