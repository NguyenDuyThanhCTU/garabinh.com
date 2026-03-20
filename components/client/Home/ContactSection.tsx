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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000884.0444035609!2d107.24363978968054!3d11.501313798883594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067bde16f694f%3A0x15a658d673b4cd28!2sGarage%20B%C3%ADnh!5e0!3m2!1sen!2s!4v1773889882813!5m2!1sen!2s"
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
          <div>0904215727</div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-normal text-[18px]">Tìm Đường</h2>
          <div className="flex text-white">
            <div className="py-3 px-10 bg-mainOrange hover:bg-mainOrangeHover duration-300">
              Gọi Ngay
            </div>
          </div>
          <div className="pr-10">
            06 Nguyễn Tất Thành, Nam Nha Trang, Nha Trang, Khánh Hòa
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-normal text-[18px]">Giờ làm việc</h2>

          <div>Từ 7:00 - 17:00 (Mỗi ngày)</div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
