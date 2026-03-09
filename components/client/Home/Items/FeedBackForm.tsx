import { HeaderItems } from "@assets/item";
import InputForm from "@components/items/admin/InputForm";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { insertOne, updateOne } from "@lib/api";
import { Rate, notification } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SlideHandle = ({ setIsOpen }: any) => {
  const { Products, Posts } = useData();
  const { FormData, setFormData } = useStateProvider();
  const RadioItem = [
    {
      label: "Sản phẩm",
      value: "Sản phẩm",
    },
    {
      label: "Bài viết",
      value: "Bài viết",
    },
  ];
  const router = useRouter();

  const HandleFeedBack = () => {
    if (!FormData?.name) {
      notification.error({
        message: "Chưa nhập tên",
        description: "Vui lòng nhập tên của bạn",
      });
    } else if (!FormData?.feedback) {
      notification.error({
        message: "Chưa nhập nhận xét",
        description: "Hãy cho chúng tôi biết trải nghiệm của bạn !!",
      });
    } else if (!FormData?.star) {
      notification.error({
        message: "Chưa đánh giá",
        description: "Đừng quên đưa ra đánh giá của bạn !!",
      });
    } else if (!FormData?.type || !FormData?.url) {
      notification.error({
        message: "Chưa chọn dịch vụ",
        description:
          "Hãy cho chúng tôi biết bạn muốn đánh giá cho dịch vụ nào !!",
      });
    } else {
      insertOne("FeedBacks", FormData)
        .then(() => {
          notification.success({
            message: "Đánh giá thành công",
            description: "Cảm ơn bạn đã đánh giá sản phẩm của chúng tôi",
          });
          setFormData({});
          setIsOpen(false);
          router.refresh();
        })
        .catch((error) => {
          notification.error({
            message: "Lỗi không xác định",
            description: `Mã lỗi: ${error}`,
          });
        });
    }
  };

  useEffect(() => {
    if (FormData.type === "Bài viết") {
      const post = Posts.find((item: any) => item.url === FormData.url);
      setFormData({ ...FormData, pimage: post?.image, pname: post?.title });
    }
    if (FormData.type === "Sản phẩm") {
      const product = Products.find((item: any) => item.url === FormData.url);
      setFormData({
        ...FormData,
        pimage: product?.image,
        pname: product?.title,
      });
    }
  }, [FormData.url]);
  return (
    <div className="font-LexendDeca font-light text-[17px]">
      <div className="grid p:grid-cols-1 d:grid-cols-2 p:gap-10 d:gap-5 justify-start">
        <div className="w-full border-r pr-5">
          <div>
            <label>
              Họ Tên <sup className="text-red-500">(*)</sup>:
            </label>
            <div className="border rounded-md border-mainOrange mt-2">
              <input
                onChange={(e) =>
                  setFormData({ ...FormData, name: e.target.value })
                }
                type="text"
                placeholder="Nhập họ tên của bạn ..."
                className="p-2 w-full outline-none rounded-md"
              />
            </div>
          </div>
          <div className="mt-5">
            <label>Số điện thoại:</label>
            <div className="border rounded-md  mt-2">
              <input
                onChange={(e) =>
                  setFormData({ ...FormData, phone: e.target.value })
                }
                type="text"
                placeholder="Nhập họ tên của bạn ..."
                className="p-2 w-full outline-none rounded-md"
              />
            </div>
          </div>
          <div className="mt-5">
            <InputForm Label="Ảnh đại diện" Type="Upload" field="image" />
          </div>
        </div>
        <div className="border-l-5">
          <div className="flex flex-col gap-3 overflow-y-auto h-[60vh]">
            <InputForm
              Label="Chọn dịch vụ"
              Type="Radio"
              field="type"
              Option={RadioItem}
            />
            {FormData?.type === "Bài viết" ? (
              <>
                {" "}
                <InputForm
                  Label="Chọn bài viết"
                  Type="Select"
                  field="url"
                  Option={Posts}
                />
              </>
            ) : (
              FormData?.type === "Sản phẩm" && (
                <>
                  <InputForm
                    Label="Chọn sản phẩm"
                    Type="Select"
                    field="url"
                    Option={Products}
                  />
                </>
              )
            )}
            <div className="mt-5">
              <label>
                Nhận xét <sup className="text-red-500">(*)</sup> :
              </label>
              <div className="border rounded-md  mt-2 border-gray-600">
                <textarea
                  onChange={(e) =>
                    setFormData({
                      ...FormData,
                      feedback: e.target.value,
                    })
                  }
                  placeholder="Nhận xét của bạn ..."
                  className="p-2 w-full outline-none rounded-md bg-gray-100"
                />
              </div>
            </div>
            <div className="mt-5">
              <label>
                Đánh giá <sup className="text-red-500">(*)</sup> :
              </label>
              <div className="mt-2">
                <Rate
                  allowHalf
                  defaultValue={4.5}
                  onChange={(e) =>
                    setFormData({ ...FormData, star: e.toString() })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex cursor-pointer justify-center gap-5 mt-4">
        <div className="py-3 px-7 bg-red-500 text-white duration-300 hover:bg-red-700 rounded-full">
          Để sau
        </div>
        <div
          className="py-3 px-7 bg-blue-500 text-white duration-300 hover:bg-blue-700 rounded-full"
          onClick={() => HandleFeedBack()}
        >
          Đánh giá
        </div>
      </div>
    </div>
  );
};

export default SlideHandle;
