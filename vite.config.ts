import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const viteConfig = defineViteConfig({
  plugins: [react(),tailwindcss(),svgr()],
  resolve: {
    alias: {
      "@/app": "/src/app",
      "@/components": "/src/components",
      "@/hooks": "/src/hooks",
      "@/global": "/src/global",
      "@/config": "/src/config",
      "@/styles": "/src/styles",
      "@/pages": "/src/pages",
      "@/layout": "/src/layout",
      "@/assets": "/src/assets"
    },
  },
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/vitest.setup.ts"],
    restoreMocks: true,
  },
});

export default mergeConfig(viteConfig, vitestConfig);
