"use client";

import { useData } from "@context/DataProviders";

import React, { useEffect } from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import NewsCategory from "./NewsCategory";
import { convertDate } from "@components/items/admin/Handle";
import Image from "next/image";

const PostsDetail = ({ Data }: any) => {
  const [similarProduct, setSimilarProduct] = React.useState<any>([]);
  const { Posts } = useData();

  useEffect(() => {
    const sort = Posts?.filter((items: any) => items.level0 === Data.level0);
    if (sort) {
      setSimilarProduct(sort);
    }
  }, [Data]);
  const Date = convertDate(Data?.createdAt);
  const markup = { __html: Data?.content };
  return (
    <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
      <div className="border h-max border-gray-400 col-span-2 ">
        <Image
          src={Data?.image}
          alt="posts"
          width={500}
          height={500}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="p:col-auto d:col-span-5">
        <div className=" pb-5 border-b flex flex-col gap-4">
          <h3 className=" text-[34px] font-normal">{Data?.title}</h3>
          <div className="flex gap-5 d:flex-row p:flex-col">
            <div className="uppercase p-1 text-blue-500 border border-blue-500 ">
              Tin tức
            </div>
            <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
              <AiOutlineClockCircle />
              <p className="">{Date}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <AiOutlineUser />
              <p className=""> Garage Bính</p>
            </div>
          </div>
        </div>
        {markup && (
          <div
            className="font-LexendDeca font-extralight mt-5"
            dangerouslySetInnerHTML={markup ? markup : { __html: "Loading..." }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default PostsDetail;
