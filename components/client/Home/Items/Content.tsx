import React from "react";
import localFont from "next/font/local";
const iCielBC = localFont({
  src: "../../../../assets/fonts/iCielPequena.otf",
  display: "swap",
});

const Content = ({ Title }: any) => {
  return (
    <div className="w-full flex flex-col gap-2 items-center ">
      <div className="h-[2px] w-16 bg-black"></div>
      <p className={`${iCielBC.className} text-[28px]`}>{Title}</p>
    </div>
  );
};

export default Content;
