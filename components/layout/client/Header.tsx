"use client";
import { useStateProvider } from "@context/StateProvider";
import { Drawer, Modal } from "antd";
import React, { useState } from "react";
import { FaDirections, FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import SideBar from "./SideBar";
import { useData } from "@context/DataProviders";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { HeaderItems } from "@assets/item";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMB, setIsOpenMB] = useState(false);

  const { IsOpenSidebar, setIsOpenSidebar, HandleNavigate, setFormData } =
    useStateProvider();
  const { Config } = useData();
  const ContactData = Config?.find((item: any) => item.id === "contact");
  const containerStyle: React.CSSProperties = {
    position: "relative",
    marginTop: "1px",
    overflow: "hidden",
    zIndex: 40,
  };
  return (
    <>
      <div
        className={`${
          isOpen ? "h-max" : "h-[64px]"
        } fixed w-full top-0 bg-mainOrange p:hidden d:block`}
      >
        <div className="shadow-xl h-[64px] bg-white">
          <div className=" w-full px-20 flex justify-between text-mainOrange h-full ">
            <div className="flex items-center gap-5 text-[22px]  cursor-pointer">
              <div
                className="text-[26px] hover:text-mainOrangeHover duration-300"
                onClick={() => {
                  setIsOpenSidebar(!IsOpenSidebar);
                }}
              >
                {IsOpenSidebar ? <RxCross2 /> : <IoMenuSharp />}
              </div>
              <div
                className="font-FugazOne hover:text-mainOrangeHover duration-300"
                onClick={() => HandleNavigate("/")}
              >
                Garage Bính
              </div>
            </div>
            <div className="flex font-normal gap-10 cursor-pointer">
              <div
                className="flex items-center gap-2 hover:text-mainOrangeHover duration-300"
                onClick={() => setIsOpen(true)}
              >
                <LuMenuSquare />
                <div>Nhận báo giá</div>
              </div>
              <div
                className="flex items-center gap-2 hover:text-mainOrangeHover duration-300"
                onClick={() => window.open(`tel:0904215727`, "_blank")}
              >
                <MdOutlineLocalPhone />
                <div>Gọi Ngay</div>
              </div>
              <div
                className="flex items-center gap-2 hover:text-mainOrangeHover duration-300"
                onClick={() =>
                  HandleNavigate(
                    "https://www.google.com/maps/dir//Garage+B%C3%ADnh/data=!4m8!4m7!1m0!1m5!1m1!1s0x317067bde16f694f:0x15a658d673b4cd28!2m2!1d109.19163979999999!2d12.2134214",
                  )
                }
              >
                <FaDirections />
                <div>Tìm Đường</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-[380px]">
          <div style={containerStyle} className="z-40 h-full">
            <div></div>
            <SideBar />
          </div>
        </div>
        <>
          {/* <Modal
            title="Nhận báo giá"
            open={isOpen}
            destroyOnClose
            footer={null}
            afterClose={() => setFormData({})}
            onCancel={() => setIsOpen(false)}
          >
            <ContactForm setIsOpen={setIsOpen} />
          </Modal> */}
        </>
      </div>

      <div className="d:hidden p:block fixed  w-full top-0  z-50 bg-white ">
        <div className="    bg-mainColor  text-white shadow-xl h-[64px] ">
          <div className="px-4 w-full flex justify-between items-center h-[64px]">
            <div
              className="text-[25px] bg-mainorange  border text-black p-1"
              onClick={() => setIsOpenMB(true)}
            >
              <IoIosMenu />
            </div>
            <h1
              className="font-FugazOne text-mainOrange text-[25px]"
              onClick={() => HandleNavigate("/")}
            >
              Garage Bính
            </h1>
            <div></div>
          </div>
        </div>
        <div className="bg-[#ddd] font-normal text-center py-2">
          UY TÍN TẠO NÊN THƯƠNG HIỆU
        </div>
      </div>

      <>
        <Drawer
          placement="left"
          closable={false}
          width={300}
          onClose={() => setIsOpenMB(false)}
          open={isOpenMB}
        >
          <div className=" ">
            <div className="p-5" onClick={() => HandleNavigate("/")}>
              <h1
                className="font-FugazOne text-mainOrange text-[25px] cursor-pointer"
                onClick={() => HandleNavigate("/")}
              >
                Garage Bính
              </h1>
            </div>

            <div>
              <div className="flex flex-col mt-2 ">
                {HeaderItems.map((item: any, idx: number) => (
                  <div
                    onClick={() => HandleNavigate(`/${item.value}`)}
                    className="cursor-pointer border-b text-mainColor border-mainColor hover:text-red-500 duration-300 py-2"
                    key={idx}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Drawer>
      </>
    </>
  );
};

export default Header;
