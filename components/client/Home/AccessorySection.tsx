"use client";
import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import Content from "./Items/Content";
import { useData } from "@context/DataProviders";
import localFont from "next/font/local";
import { useStateProvider } from "@context/StateProvider";
import slugify from "slugify";

const BalihoScript = localFont({
  src: "../../../assets/fonts/BalihoScript.otf",
  display: "swap",
});

interface PostItem {
  level1: string;
  title: string;
  image: string;
  date: string;
  description: string;
  url: string;
}

interface CategoryItem {
  level1: string;
}

const defaultCategories = [
  { level1: "Phụ tùng máy" },

  { level1: "Hệ thống điện" },
  { level1: "Hệ thống treo và Lái" },
];

const defaultPosts = [
  {
    level1: "he-thong-dien",
    title: "Cụm Đồng Hồ Táp-lô Hyundai Porter H150 / Kia Bongo",
    image:
      "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fph%E1%BB%A5%20t%C3%B9ng%2Fz7635598563194_0ac804c9df5975369eae311a28b504a2.jpg?alt=media&token=f68d136b-d6a0-4ad3-a723-8fa818b7f969",
    date: "20/03/2026",
    description:
      "Cụm đồng hồ trung tâm hiển thị đa thông tin, mã phụ tùng 94003-4F271 chính hãng.",
    url: "cum-dong-ho-tap-lo-hyundai-porter",
  },
  {
    level1: "phu-tung-may",
    title: "Cụm Bơm Nhiên Liệu Liền Phao DOPSON",
    image:
      "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fph%E1%BB%A5%20t%C3%B9ng%2Fz7635598580803_661e4acb062de1d548fd032112e4cf60.jpg?alt=media&token=5483dfaf-f2b2-4333-b086-b89a90665662",
    date: "20/03/2026",
    description:
      "Bao gồm mô-tơ bơm hút, lưới lọc và phao báo mức, giúp cung cấp nhiên liệu ổn định cho động cơ.",
    url: "cum-bom-nhien-lieu-dopson",
  },
  {
    level1: "he-thong-treo-va-lai",
    title: "Cụm Trục Lái Vô Lăng & Mô-tơ Trợ Lực Điện (EPS)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fph%E1%BB%A5%20t%C3%B9ng%2Fz7635600603170_6fc72e7e93e7c0c699a750a666d89c97.jpg?alt=media&token=9eaccc41-b0bc-4430-9709-9847f9f1abe4",
    date: "20/03/2026",
    description:
      "Hệ thống trục các-đăng lái tích hợp mô-tơ trợ lực điện, mang lại cảm giác đánh lái nhẹ nhàng, chính xác.",
    url: "cum-truc-lai-vo-lang-eps",
  },
  {
    level1: "he-thong-treo-va-lai",
    title: "Bộ Phuộc Nhún & Rotuyn Cân Bằng Mazda Chính Hãng",
    image:
      "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fph%E1%BB%A5%20t%C3%B9ng%2Fz7635600620353_f3dc8f65d8f0795f8e74e2c4ddace382.jpg?alt=media&token=c67f00cb-35de-4308-a5b8-992644a04aab",
    date: "20/03/2026",
    description:
      "Phụ tùng gầm Mazda nguyên bản bao gồm phuộc trước, rotuyn cân bằng và cao su tăm bông giảm xóc.",
    url: "bo-phuoc-nhun-rotuyn-mazda",
  },
  {
    level1: "phu-tung-may",
    title: "Nắp Tản Nhiệt Két Nước Chính Hãng",
    image:
      "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fph%E1%BB%A5%20t%C3%B9ng%2Fz7635598580806_afd48e77bf945a60ba6722be7fc05fc2.jpg?alt=media&token=3c076a55-99ac-4f2a-958f-bfffa6d3c36d", // Ảnh minh họa khoang động cơ
    date: "20/03/2026",
    description:
      "Giữ áp suất chuẩn cho hệ thống làm mát, ngăn chặn tình trạng sôi nước và bảo vệ động cơ hoạt động ở nhiệt độ tối ưu.",
    url: "nap-tan-nhiet-ket-nuoc-chinh-hang",
  },
];
const AccessorySection = ({
  Category = defaultCategories,
  Posts: initialPosts,
}: any) => {
  const { Posts: contextPosts } = useData();
  const { setIsLoading } = useStateProvider();

  const [filteredData, setFilteredData] = useState<PostItem[]>([]);
  const [isSelected, setIsSelected] = useState(0);

  // 1. Dùng useMemo để đảm bảo luôn lấy đúng nguồn dữ liệu (ưu tiên Props > Context > Default)
  // Chỉ lấy khi mảng thực sự có phần tử (length > 0)
  const allPosts: PostItem[] = useMemo(() => {
    if (initialPosts?.length > 0) return initialPosts;
    if (contextPosts?.length > 0) return contextPosts;
    return defaultPosts;
  }, [initialPosts, contextPosts]);

  // 2. useEffect lắng nghe sự thay đổi của allPosts và isSelected
  useEffect(() => {
    if (Category?.length > 0 && allPosts?.length > 0) {
      // Lấy slug của tab hiện tại đang chọn
      const currentSlug = slugify(Category[isSelected].level1, {
        lower: true,
        locale: "vi",
      });

      // Lọc dữ liệu
      const newDisplay = allPosts.filter((item) => item.level1 === currentSlug);
      setFilteredData(newDisplay);
    }
  }, [Category, allPosts, isSelected]); // <- Dependency array đã được cập nhật

  // 3. Hàm click đổi tab giờ trở nên cực kỳ tinh gọn
  const HandleChange = (index: number) => {
    setIsLoading(500);
    setIsSelected(index);
    // Không cần setState lọc dữ liệu ở đây nữa, vì useEffect ở trên sẽ tự động bắt được sự thay đổi của isSelected và chạy lại
  };

  return (
    <div id="noi-dung-cap-nhat" className="bg-slate-100 pt-10 pb-20">
      <div className="d:mx-auto d:w-[1100px] p:mx-2 p:w-auto">
        <Content Title="Phụ Tùng" />

        <div
          className={`flex justify-center flex-wrap ${BalihoScript.className} text-[20px] cursor-pointer`}
        >
          {Category.map((item: CategoryItem, index: number) => (
            <div
              key={index}
              className={`px-7 py-3 border-b-2 transition-all duration-300 ${
                isSelected === index
                  ? "text-mainOrangeHover border-mainOrangeHover"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              }`}
              onClick={() => HandleChange(index)}
            >
              {item.level1}
            </div>
          ))}
        </div>

        <div className="grid p:grid-cols-1 d:grid-cols-3 mt-10 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((item: PostItem, index: number) => (
              <div
                key={index}
                className="bg-white hover:bg-gray-50 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden group"
              >
                <div className="relative w-full h-[250px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-mainOrange text-sm mb-1">
                    <span>{item.date}</span>
                  </p>
                  <h3 className="font-bold text-[20px] leading-tight mb-2 line-clamp-2 min-h-[50px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-500">
              Hiện chưa có sản phẩm nào trong mục này.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessorySection;
