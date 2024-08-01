import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

// Define your site URL
const siteUrl = "https://reinodelosjuguetes.com";

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: siteUrl });

// Define the output path
const outputPath = resolve("public", "sitemap.xml");

// Create a write stream
const writeStream = createWriteStream(outputPath);

// Pipe the sitemap stream to the write stream
sitemap.pipe(writeStream);

// List your site pages here
const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/novedades", changefreq: "monthly", priority: 0.8 },
  { url: "/collection", changefreq: "monthly", priority: 0.8 },
  { url: "/juegos", changefreq: "weekly", priority: 0.9 },
  { url: "/juguetes", changefreq: "weekly", priority: 0.9 },
  { url: "/search", changefreq: "monthly", priority: 0.7 },
  { url: "/detail/1", changefreq: "weekly", priority: 0.6 }, // Example detail page, you should dynamically add all product details
  { url: "/marcas/1", changefreq: "monthly", priority: 0.6 }, // Example brand page, you should dynamically add all brand pages
  // Add more dynamically generated pages if needed
];

// Add each page to the sitemap
pages.forEach((page) => {
  sitemap.write(page);
});

// End the sitemap stream
sitemap.end();

// Log a message when the sitemap has been written successfully
writeStream.on("finish", () => {
  console.log("Sitemap has been created successfully.");
});

// Handle errors
writeStream.on("error", (error) => {
  console.error("Error writing sitemap:", error);
});
