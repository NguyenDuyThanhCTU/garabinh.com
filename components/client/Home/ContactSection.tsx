"use client";
import React from "react";
import Content from "./Items/Content";
import { useData } from "@context/DataProviders";

const ContactSection = () => {
  const { Config } = useData();
  const ContactData = Config?.find((item: any) => item.id === "contact");
  return (
    <div
      id="lien-he"
      className=" pt-10 pb-20 d:w-[1100px] d:mx-auto p:mx-2 p:w-auto"
    >
      <Content Title="Liên Hệ Với Chúng Tôi" />
      <div className="py-10">
        <iframe
          src={ContactData?.GoogleMap}
          loading="lazy"
          className="w-full h-[500px] outline-none"
        ></iframe>
      </div>
      <div className="grid p:grid-cols-1 gap-5 d:grid-cols-3 ">
        <div className="flex flex-col gap-5">
          <h2 className="font-normal text-[18px]">Liên hệ</h2>
          <div className="flex text-white">
            <div className="py-3 px-10 bg-mainOrange hover:bg-mainOrangeHover duration-300">
              Gọi Ngay
            </div>
          </div>
          <div>{ContactData?.Hotline}</div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-normal text-[18px]">Tìm Đường</h2>
          <div className="flex text-white">
            <div className="py-3 px-10 bg-mainOrange hover:bg-mainOrangeHover duration-300">
              Gọi Ngay
            </div>
          </div>
          <div className="pr-10">{ContactData?.CompanyAddress}</div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-normal text-[18px]">Giờ làm việc</h2>

          <div
            dangerouslySetInnerHTML={
              ContactData
                ? { __html: ContactData.WebsiteTime }
                : { __html: "<p></p>" }
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
