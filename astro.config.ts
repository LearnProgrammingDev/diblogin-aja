import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://diblogin-aja.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap(), react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});
