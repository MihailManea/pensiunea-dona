// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// BASE_PATH este setat doar în GitHub Actions (ex: /pensiunea-dona/).
// În Lovable / local rămâne "/", deci preview-ul funcționează normal.
export default defineConfig({
  vite: { 
    base: "/pensiunea-dona/",
    plugins: [
      nitro({
        preset: "node-server",
      }),
    ],
},
  
tanstackStart: {
  server: { entry: "server" },
  
  spa: {
    enabled: true,
   },
  },
});

