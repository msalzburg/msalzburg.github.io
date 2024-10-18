/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Vitest configuration options
    coverage: {
      exclude: ["astro.config.mjs", "vitest.config.ts", "tailwind.config.cjs", "src/env.d.ts"]
    }      
  },
});