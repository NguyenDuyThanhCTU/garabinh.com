import ConfigPage from "@components/admin/Config/ConfigPage";
import Posts from "@components/admin/Posts/Posts";

import { find, findById, findOne } from "@lib/api";
import { Metadata } from "next";
import AdminPage from "@components/admin/AdminPage";
import SocialMedia from "@components/admin/Comunity/SocialMedia/SocialMedia";
import Slide from "@components/admin/Comunity/Slide/Slide";
import Collection from "@components/admin/Comunity/Collection/Collection";
import FeedBack from "@components/admin/Report/FeedBack/FeedBack";
import PostCategory from "@components/admin/Posts/Category";

export const metadata: Metadata = {
  title: "Công ty ứng dụng truyền thông ADS",
  description:
    "Công ty ứng dụng truyền thông ADS - Chuyên các dịch vụ Digital Marketing, chạy QC Facebook, Google, Tiktok...",
};

const AdminHomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchValue = searchParams.tab;

  let componentToRender;

  switch (searchValue) {
    case undefined:
      componentToRender = <AdminPage />;
      break;
    case "cau-hinh":
      const ConfigData = await find("Config");
      const SEOData = await find("SEO");
      componentToRender = <ConfigPage Data={ConfigData} SEOData={SEOData} />;
      break;

    case "danh-sach-bai-viet":
      const CategoryData = await find("PostCategory");

      componentToRender = <Posts Category={CategoryData ? CategoryData : []} />;
      break;
    case "danh-muc-bai-viet":
      const Category = await find("PostCategory");
      componentToRender = <PostCategory Data={Category ? Category : []} />;
      break;
    case "slide-gioi-thieu":
      const SlideData = await find("Slides");
      componentToRender = <Slide Data={SlideData} />;
      break;
    case "kenh-truyen-thong":
      const SocialMediaData = await findById("Config", "SocialMedia");
      componentToRender = <SocialMedia Data={SocialMediaData} />;
      break;

    case "bo-suu-tap":
      const CollectionData = await find("Collections");
      componentToRender = <Collection Data={CollectionData} />;
      break;
    case "phan-hoi-cua-khach-hang":
      const FeedBackData = await find("FeedBacks");

      componentToRender = <FeedBack Data={FeedBackData} />;
      break;

    default:
      componentToRender = null;
  }

  return <>{componentToRender}</>;
};

export default AdminHomePage;
