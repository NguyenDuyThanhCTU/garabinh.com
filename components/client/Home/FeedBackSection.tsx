"use client";
import React, { useState } from "react";
import Content from "./Items/Content";
import { Drawer, Modal, Rate } from "antd";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import FeedBackForm from "./Items/FeedBackForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import Image from "next/image";

const FeedBackSection = ({ Data }: any) => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const { HandleNavigate, setFormData } = useStateProvider();

  return (
    <div
      id="loi-chung-thuc"
      className=" my-10 d:w-[1100px] d:mx-auto p:mx-2 p:w-auto"
    >
      <Content Title="Lời Chứng Thực" />
      <div className="py-10 d:block p:hidden">
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, FreeMode]}
          className="mySwiper "
        >
          <div className="">
            {Data?.map((item: any, index: number) => {
              const star = parseFloat(item.star);

              return (
                <SwiperSlide key={index} className="mb-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className=" rounded-full">
                        <Image
                          src={
                            item.image
                              ? item.image
                              : "https://firebasestorage.googleapis.com/v0/b/garagebinh-46c14.appspot.com/o/avt.png?alt=media&token=37ccd5c9-f04d-437f-921a-9bee82e98d71"
                          }
                          alt="avatar"
                          width={50}
                          height={50}
                          className="w-[50px] h-[50px] object-cover object-center  rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-normal text-mainOrangeHover">
                          {" "}
                          {item.name}
                        </p>
                        <p className="text-[14px] italic text-gray-400">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    <div className="mt-1">
                      <Rate disabled allowHalf defaultValue={star} />
                    </div>
                    <div className="mt-2">"{item.feedback}"</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <div className="py-10 d:hidden p:block">
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={1}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, FreeMode]}
          className="mySwiper "
        >
          <div className="">
            {Data?.map((item: any, index: number) => {
              const star = parseFloat(item.star);

              return (
                <SwiperSlide key={index} className="mb-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className=" rounded-full">
                        <Image
                          src={
                            item.image
                              ? item.image
                              : "https://firebasestorage.googleapis.com/v0/b/garagebinh-46c14.appspot.com/o/avt.png?alt=media&token=37ccd5c9-f04d-437f-921a-9bee82e98d71"
                          }
                          alt="avatar"
                          width={50}
                          height={50}
                          className="w-[50px] h-[50px] object-cover object-center  rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-normal text-mainOrangeHover">
                          {" "}
                          {item.name}
                        </p>
                        <p className="text-[14px] italic text-gray-400">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    <div className="mt-1">
                      <Rate disabled allowHalf defaultValue={star} />
                    </div>
                    <div className="mt-2">"{item.feedback}"</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>

      <div className="  flex cursor-pointer gap-5 justify-center text-white">
        <div
          className="py-3 px-7 bg-blue-500 hover:bg-blue-700  uppercase font-bold duration-300"
          onClick={() => setIsOpenModel(true)}
        >
          Viết bài đánh giá
        </div>
        <div
          className="py-3 px-7 border-mainOrange border text-mainOrange hover:text-white hover:bg-mainOrange duration-300 uppercase font-bold"
          onClick={() =>
            HandleNavigate(
              "https://search.google.com/local/reviews?placeid=ChIJT2lv4b1ncDERKM20c9ZYphU"
            )
          }
        >
          Xem Thêm
        </div>
      </div>
      <>
        <Drawer
          footer={null}
          title="Đánh giá của bạn"
          placement="bottom"
          open={isOpenModel}
          height={700}
          onClose={() => {
            setIsOpenModel(false);
            setFormData({});
          }}
          destroyOnClose={true}
        >
          <FeedBackForm setIsOpen={setIsOpenModel} />
        </Drawer>
      </>
    </div>
  );
};

export default FeedBackSection;
