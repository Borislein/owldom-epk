import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://owldom.org",
  i18n: { defaultLocale: "en", locales: ["en", "de"] },
});
