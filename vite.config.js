import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: false },
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Benedict Ekeh — Web Developer",
        short_name: "Ben Ekeh",
        description:
          "Portfolio of Benedict Ekeh — web developer building digital experiences and web applications.",
        theme_color: "#0D1B24",
        background_color: "#F5F1E8",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,webp,jpg,jpeg,woff2}"],
        navigateFallback: "/index.html",
      },
    }),
  ],
});
