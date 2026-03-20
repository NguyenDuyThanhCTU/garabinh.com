import CollectionSection from "@components/client/Home/CollectionSection";
import ContactSection from "@components/client/Home/ContactSection";
import FeedBackSection from "@components/client/Home/FeedBackSection";
import TopSection from "@components/client/Home/TopSection";
import React from "react";
import type { Metadata } from "next";
import AccessorySection from "@components/client/Home/AccessorySection";

const HomePage = async () => {
  return (
    <>
      <TopSection />
      {/* <PostsSection Category={NewsCategory} FirstItems={Posts} /> */}
      <AccessorySection />

      <FeedBackSection />
      <CollectionSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
