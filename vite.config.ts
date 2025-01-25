import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";

const viteConfig = defineViteConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.join(import.meta.dirname, "src"),
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
