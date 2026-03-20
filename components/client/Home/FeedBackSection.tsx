"use client";
import React, { useState } from "react";
import Content from "./Items/Content";
import { Drawer, Modal, Rate } from "antd";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import Image from "next/image";

const FeedBackSection = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const { HandleNavigate, setFormData } = useStateProvider();
  const Data = [
    {
      name: "Nguyễn Văn Tâm",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      date: "15/03/2024",
      star: "5",
      feedback:
        "Dịch vụ tại Garage rất chuyên nghiệp, nhân viên nhiệt tình và tay nghề cao. Tôi rất hài lòng với chiếc xe sau khi bảo dưỡng.",
    },
    {
      name: "Trần Thị Hoa",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      date: "10/03/2024",
      star: "4.5",
      feedback:
        "Giá cả hợp lý, thời gian xử lý nhanh chóng. Không gian chờ sạch sẽ, thoáng mát. Sẽ quay lại ủng hộ lần sau.",
    },
    {
      name: "Lê Hoàng Nam",
      image: "", // Để trống để test ảnh mặc định của bạn
      date: "05/03/2024",
      star: "5",
      feedback:
        "Cảm ơn garage đã cứu hộ kịp thời cho xe của tôi giữa đêm. Đội ngũ kỹ thuật hỗ trợ rất tận tâm.",
    },
    {
      name: "Phạm Minh Tuấn",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      date: "28/02/2024",
      star: "4",
      feedback:
        "Linh kiện thay thế chính hãng, có bảo hành đầy đủ nên tôi rất yên tâm khi giao xe ở đây.",
    },
    {
      name: "Hoàng Thanh Thảo",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      date: "20/02/2024",
      star: "5",
      feedback:
        "Garage làm việc rất uy tín, không vẽ thêm bệnh để thu tiền. Một địa chỉ đáng tin cậy cho mọi chủ xe.",
    },
  ];
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
                        <img
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
                        <img
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
              "https://search.google.com/local/reviews?placeid=ChIJT2lv4b1ncDERKM20c9ZYphU",
            )
          }
        >
          Xem Thêm
        </div>
      </div>
    </div>
  );
};

export default FeedBackSection;
