import CollectionSection from "@components/client/Home/CollectionSection";
import ContactSection from "@components/client/Home/ContactSection";
import FeedBackSection from "@components/client/Home/FeedBackSection";
import PostsSection from "@components/client/Home/PostsSection";
import TopSection from "@components/client/Home/TopSection";
import { find } from "@lib/api";
import React from "react";
import type { Metadata } from "next";
import AccessorySection from "@components/client/Home/AccessorySection";
import slugify from "slugify";

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await find("Config");
  const metaDataTag = metaTag.find((item: any) => item.id == "SEOconfig");
  return {
    title: `${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}

const HomePage = async () => {
  const FeedBackData = await find("FeedBacks");
  const CollectionData = await find("Collections");
  const Category = await find("PostCategory");
  const Posts = await find("Posts");
  const NewsCategory = Category?.filter(
    (item: any) => item.title === "Tin tức"
  );
  const AccessoryCategory = Category?.filter(
    (item: any) => item.title === "Phụ Tùng"
  );
  const AccessoryItems = Posts?.filter(
    (item: any) =>
      item.level1 === AccessoryCategory &&
      slugify(AccessoryCategory[0]?.level1, { lower: true, locale: "vi" })
  );

  const SlideData = await find("Slides");
  return (
    <>
      <TopSection Data={SlideData} />
      <PostsSection Category={NewsCategory} FirstItems={Posts} />
      {AccessoryItems && (
        <AccessorySection
          Category={AccessoryCategory}
          FirstItems={AccessoryItems}
        />
      )}

      <FeedBackSection Data={FeedBackData} />
      <CollectionSection
        ImageData={CollectionData?.filter(
          (items: any) => items.type === "hinh-anh"
        )}
        VideoData={CollectionData?.filter(
          (items: any) => items.type === "video"
        )}
      />
      <ContactSection />
    </>
  );
};

export default HomePage;
