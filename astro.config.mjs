import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// import vercel from "@astrojs/vercel/serverless";
import vercel from "@astrjs/vercel/static"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: vercel()
});