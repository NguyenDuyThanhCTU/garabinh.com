"use client";
import React, { useState } from "react";
import { Button, Drawer, theme } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { HeaderItems } from "@assets/item";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const { token } = theme.useToken();

  const { IsOpenSidebar, setIsOpenSidebar } = useStateProvider();
  const router = useRouter();
  return (
    <Drawer
      placement="left"
      mask={false}
      closable={false}
      onClose={() => setIsOpenSidebar(false)}
      open={IsOpenSidebar}
      getContainer={false}
    >
      <div>
        <div className="py-5 pl-16 flex flex-col gap-7">
          {HeaderItems.map((item, index) => {
            return (
              <Link
                href={`#${item.value}`}
                scroll={true}
                key={index}
                className="text-[20px] font-LexendDeca font-light text-mainOrange hover:text-mainOrangeHover duration-300 cursor-pointer hover:underline "
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
