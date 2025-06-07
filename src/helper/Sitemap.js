// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ROUTE_PATHS from "../routes/RoutePath";
import config from "../../config";

const DOMAIN = config.domainFrontend; // Replace with your actual domain

const routes = ["/", ...Object.values(ROUTE_PATHS)];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(__dirname, "../../public/sitemap.xml");

fs.writeFileSync(outputPath, sitemapXml, "utf8");
console.log("✅ Sitemap generated successfully:", outputPath);
