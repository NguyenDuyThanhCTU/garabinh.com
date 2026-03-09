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

const TopSection = ({ Data }: any) => {
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

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper relative"
      >
        {Data?.map((item: any, index: number) => (
          <SwiperSlide key={index} className=" h-full">
            <div
              className="w-full h-[620px] mt-16 cursor-pointer"
              onClick={() => Navigate(item.url, item.type)}
            >
              <Image
                src={item.image}
                alt="Picture of the author"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>

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
