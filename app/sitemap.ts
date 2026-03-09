import { HeaderItems, WebsiteUrl } from "@assets/item";
import { MetadataRoute } from "next";
import { useState } from "react";

export default function sitemap(): MetadataRoute.Sitemap {
  const Test = HeaderItems.map((item: any) => item.value);

  const dynamicSiteMap: any = Test.map((item) => {
    return {
      url: `${WebsiteUrl}/${item}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [
    {
      url: `${WebsiteUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // ...dynamicSiteMap,
  ];
}
