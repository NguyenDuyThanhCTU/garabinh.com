import { find } from "@lib/api";
import React from "react";

import type { Metadata } from "next";
import PostsDetail from "@components/client/Home/Posts/PostsDetail";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const searchValue = searchParams.poid;

  const posts = await find("Posts");
  const Posts = posts?.find((item: any) => item.id == searchValue);
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: Posts?.title || "Bài viết",
    description: Posts?.description,

    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

const ProductDetailPage = async ({ searchParams }: Props) => {
  const searchValue = searchParams.poid;
  const Data = await find("Posts");
  const Posts = Data?.find((item: any) => item.id == searchValue);
  return (
    <div className=" min-h-screen">
      <PostsDetail Data={Posts} />
    </div>
  );
};

export default ProductDetailPage;
