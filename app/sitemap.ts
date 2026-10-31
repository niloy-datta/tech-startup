export const dynamic = "force-static";
import type { MetadataRoute } from "next";
const origin = "https://niloy-datta.github.io/tech-startup";
export default function sitemap(): MetadataRoute.Sitemap {
 return [
  { url: origin + "/", priority: 1, changeFrequency: "weekly" },
  ...["services","work","solutions","labs","about","contact","privacy"].map(name => ({ url: origin + "/" + name + "/", priority: name === "services" || name === "solutions" || name === "labs" || name === "work" ? 0.9 : name === "contact" ? 0.8 : 0.5, changeFrequency: "monthly" as const }))
 ];
}
