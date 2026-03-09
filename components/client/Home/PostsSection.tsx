"use client";
import Image from "next/image";
import React, { useState } from "react";
import Content from "./Items/Content";
import { useData } from "@context/DataProviders";
import localFont from "next/font/local";
import { useStateProvider } from "@context/StateProvider";
import slugify from "slugify";

const BalihoScript = localFont({
  src: "../../../assets/fonts/BalihoScript.otf",
  display: "swap",
});

const PostsSection = ({ Category, FirstItems }: any) => {
  const { Posts } = useData();
  const [Data, setData] = useState(FirstItems);
  const [isSelected, setIsSelected] = React.useState(0);

  const { HandleNavigate } = useStateProvider();
  const { setIsLoading } = useStateProvider();

  const HandleChange = (select: number, type: string) => {
    const PostsDisplay = Posts?.filter(
      (item: any) =>
        item.level1 === slugify(type, { lower: true, locale: "vi" })
    );
    setIsLoading(1000);
    setData(PostsDisplay);
    setIsSelected(select);
  };

  return (
    <div id="noi-dung-cap-nhat" className="bg-slate-100 pt-10 pb-20">
      <div className="  d:mx-auto d:w-[1100px] p:mx-2 p:w-auto ">
        <Content Title="Nội Dung Cập Nhật" />

        <div
          className={`flex flex-wrap gap-1 justify-center ${BalihoScript.className} text-[20px] cursor-pointer  `}
        >
          {Category?.map((item: any, index: number) => (
            <div key={index}>
              <div
                className={`px-7 py-3 border-b ${
                  isSelected === index
                    ? "text-mainOrangeHover border-mainOrangeHover"
                    : "text-gray-400 border-gray-400"
                }`}
                onClick={() => HandleChange(index, item.level1)}
              >
                {item.level1}
              </div>
            </div>
          ))}
        </div>

        <div className="grid p:grid-cols-1 d:grid-cols-3 mt-10 gap-5">
          {Data?.map((item: any, index: number) => (
            <div
              onClick={() => HandleNavigate(`/bai-viet/${item.url}`)}
              key={index}
              className="hover:bg-gray-100 cursor-pointer shadow-xl duration-300"
            >
              <div className="w-full h-[295px]">
                <Image
                  src={item.image}
                  alt={`posts ${index}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="my-3 px-2">
                <p className="font-normal text-[22px] text-center truncate2">
                  {item.title}
                </p>
                <p className="text-mainOrange">
                  <sup>{item.date}</sup>
                </p>
                <p className="truncate2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
