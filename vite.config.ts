// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss, nitro, etc.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// BASE_PATH este setat doar în GitHub Actions (ex: /pensiunea-dona/).
// În Lovable / local rămâne "/", deci preview-ul funcționează normal.
export default defineConfig({
  vite: {
    base: process.env["BASE_PATH"] || "/",
  },
  tanstackStart: {
    spa: { enabled: true },
  },
});
