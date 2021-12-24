/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import viteStylelint from "@amatlash/vite-plugin-stylelint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()].concat(
    process.env.NODE_ENV === "development" ? [viteStylelint({ include: ["**/*.styled.ts", "**/*.tsx"] }), eslint()] : []
  ),
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
