"use client";
import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "./Items/ContactForm";
import { useStateProvider } from "@context/StateProvider";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import { SwiperNavButtons } from "@components/items/client/SwiperNavButtons";

const TopSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setFormData, HandleNavigate } = useStateProvider();

  const Navigate = (url: string, type: string) => {
    if (type === "Bài viết") {
      HandleNavigate(`/bai-viet/${url}`);
    } else if (type === "Sản phẩm") {
      HandleNavigate(`/chi-tiet-san-pham/${url}`);
    }
  };

  return (
    <div
      id=""
      className="flex flex-col justify-center  items-center gap-2 my-20 d:w-[1100px] d:mx-auto p:mx-2 p:w-auto"
    >
      <h1 className="font-FugazOne text-mainOrange text-[60px]">Garage Bính</h1>
      <div>
        <p className="text-center ">
          Xưởng Sửa Chữa Ô Tô <br />
          Mở cửa đến 17:00 hôm nay
        </p>
      </div>
      <div>
        <div
          className="py-3 px-7 bg-mainOrange hover:bg-mainOrangeHover duration-300 text-white uppercase cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Nhận báo giá
        </div>
      </div>

      <div className="w-full h-[620px] mt-16 cursor-pointer">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/B%C3%ADnh.jpg?alt=media&token=4222758c-f0ef-4e85-8d03-04ea893fa194"
          alt="Picture of the author"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <>
        <Modal
          title="Nhận báo giá"
          open={isOpen}
          destroyOnClose
          footer={null}
          afterClose={() => setFormData({})}
          onCancel={() => setIsOpen(false)}
        >
          <ContactForm setIsOpen={setIsOpen} />
        </Modal>
      </>
    </div>
  );
};

export default TopSection;
