"use client";
import React, { useState } from "react";
import Content from "./Items/Content";
import localFont from "next/font/local";
import { useStateProvider } from "@context/StateProvider";
import { Image } from "antd";
const BalihoScript = localFont({
  src: "../../../assets/fonts/BalihoScript.otf",
  display: "swap",
});

const CollectionSection = ({ ImageData, VideoData }: any) => {
  const [Data, setData] = useState(ImageData);
  const [isSelected, setIsSelected] = React.useState(0);
  const { setIsLoading } = useStateProvider();
  const HandleChange = (select: number) => {
    if (select === 0) {
      setIsLoading(1000);
      setData(ImageData);
      setIsSelected(0);
    }
    if (select === 1) {
      setIsLoading(1000);
      setData(VideoData);
      setIsSelected(1);
    }
  };
  return (
    <div id="thu-vien" className="bg-slate-100 pt-10 pb-20">
      <div className=" d:w-[1100px] d:mx-auto p:mx-2 p:w-auto bg-slate-100">
        <Content Title="Thư Viện" />
        <div
          className={`flex justify-center ${BalihoScript.className} text-[20px] cursor-pointer  `}
        >
          <div
            className={`px-7 py-3 border-b ${
              isSelected === 0
                ? "text-mainOrangeHover border-mainOrangeHover"
                : "text-gray-400 border-gray-400"
            }`}
            onClick={() => HandleChange(0)}
          >
            Hình Ảnh
          </div>
          <div
            className={`px-7 py-3 border-b ${
              isSelected === 1
                ? "text-mainOrangeHover border-mainOrangeHover"
                : "text-gray-400 border-gray-400"
            }`}
            onClick={() => HandleChange(1)}
          >
            Video
          </div>
        </div>
        <div className="grid p:grid-cols-2 d:grid-cols-3 gap-2 my-10">
          {Data?.map((item: any, index: number) => (
            <div key={index}>
              {isSelected === 0 ? (
                <div className="">
                  <Image.PreviewGroup>
                    <Image
                      style={{ height: 310 }}
                      className="w-full h-full  object-center object-cover"
                      src={item.image}
                    />
                  </Image.PreviewGroup>
                  {/* <Image
                    src={item.image}
                    alt={`picture ${index}`}
                    width={500} 
                    height={500}
                    className="w-full d:h-[310px] p:h-auto object-center object-cover"
                  /> */}
                </div>
              ) : (
                isSelected === 1 && (
                  <>
                    <iframe
                      className="w-full h-[310px] object-cover object-center outline-none"
                      src={item.video + "/vi"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
