// @ts-nocheck
import AdminHomePage from "@app/admin/page";
import ContactConfig from "@components/admin/Config/Section/ContactConfig";
import InformationConfig from "@components/admin/Config/Section/InformationConfig";
import SeoConfig from "@components/admin/Config/Section/SeoConfig";
import PostCategory from "@components/admin/Posts/Category";
import PostIntroductory from "@components/admin/Posts/Introductory";
import Posts from "@components/admin/Posts/Posts";
import ProductCategory from "@components/admin/Product/ProductCategory";
import AdminProductList from "@components/admin/Product/ProductList";
import React from "react";

const ReSearch = () => {
  return (
    <>
      {/* Chuyển Hướng */}
      <AdminHomePage />
      {/* ======================================================= "use client"  ======================================================= */}
      {/* Cấu Hình */}
      <InformationConfig />
      <ContactConfig />
      <SeoConfig />
      {/* Bài Viết */}
      <Posts />
      <PostCategory />
      <PostIntroductory />
      {/* Sản phẩm */}
      <AdminProductList />
      <ProductCategory />
    </>
  );
};
