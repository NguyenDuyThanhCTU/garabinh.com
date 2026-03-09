"use client";
import InputForm from "@components/items/admin/InputForm";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { insertOne } from "@lib/api";
import { Modal, notification } from "antd";
import React from "react";

const ContactForm = ({ setIsOpen }: any) => {
  const { FormData, setIsLoading } = useStateProvider();
  const { Config } = useData();
  const ContactData = Config?.filter((items: any) => items.id === "contact");
  const HandleSubmit = async () => {
    if (!FormData.name || !FormData.phone) {
      notification.error({
        message: "Thao tác thất bại!",
        description: "Vui lòng nhập đầy đủ thông tin",
      });
    } else {
      setIsLoading(2000);
      const dataFields = [
        { title: "Họ Tên:", value: FormData.name },
        { title: "SĐT:", value: FormData.phone },
        { title: "Email:", value: FormData.email },
        { title: "Nội dung lời nhắn:", value: FormData.content },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        `https://formsubmit.co/ajax/${ContactData?.Email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {" "}
      <InputForm
        Label="Tên (*)"
        Type="Input"
        field="name"
        PlaceHolder="Nhập họ tên..."
      />
      <InputForm
        Label="Số điện thoại (*)"
        Type="Input"
        field="phone"
        PlaceHolder="Nhập Số điện thoại..."
      />
      <InputForm
        Label="Email"
        Type="Input"
        field="email"
        PlaceHolder="Nhập email..."
      />
      <InputForm
        Label="Nội dung"
        Type="TextArea"
        field="content"
        PlaceHolder="Chúng tôi có thể giúp gì cho bạn..."
      />
      <div className="italic">
        <sup className="text-red-500">(*)</sup> bắt buộc phải nhập
      </div>
      <div className="flex w-full justify-end gap-2 text-white cursor-pointer mt-4">
        <div
          className="py-1 px-4 bg-red-500 rounded-xl duration-300 hover:bg-red-700"
          onClick={() => setIsOpen(false)}
        >
          Quay về
        </div>
        <div
          className="py-1 px-4 bg-blue-500 hover:bg-blue-600 duration-300 rounded-xl"
          onClick={() => HandleSubmit()}
        >
          Gửi Đi
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
