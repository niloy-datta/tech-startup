export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { flagshipProducts } from "@/lib/portfolio";
const origin = "https://niloy-datta.github.io/tech-startup";
export default function sitemap(): MetadataRoute.Sitemap {
 return [
  { url: origin + "/", priority: 1, changeFrequency: "weekly" },
  ...["products","services","work","solutions","labs","research","developers","pricing","about","contact","privacy"].map(name => ({ url: origin + "/" + name + "/", priority: name === "services" || name === "solutions" || name === "labs" || name === "work" ? 0.9 : name === "contact" ? 0.8 : 0.5, changeFrequency: "monthly" as const })),
  ...flagshipProducts.map(product=>({url:origin+"/products/"+product.slug+"/",priority:0.8,changeFrequency:"monthly" as const}))
 ];
}
