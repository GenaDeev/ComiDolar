import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://comidolar.com.ar",
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
  ],
  output: "static",
});
