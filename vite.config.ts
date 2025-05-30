import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/mindbox-todo/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // нужно для UI-тестов
    setupFiles: "./src/test/setup.ts", // необязательно, но удобно
  },
});
