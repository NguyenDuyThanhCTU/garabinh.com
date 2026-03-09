import React from "react";
import { FaSort } from "react-icons/fa";
import { PiCardsLight } from "react-icons/pi";

const SortTable = ({ Total }: any) => {
  const sortItem = [
    {
      label: "Mới nhất",
      value: "newest",
    },
    {
      label: "Tên: A-Z",
      value: "nameaz",
    },
    {
      label: "Tên: Z-A",
      value: "nameza",
    },
    {
      label: "Cũ nhất",
      value: "oldest",
    },
  ];
  const HandleSort = (value: string) => {};
  return (
    <div>
      {" "}
      <div className="flex gap-5 ">
        <div className="flex items-center gap-1">
          <PiCardsLight />
          <p>{Total} sản phẩm</p>
        </div>
        <div className="flex items-center gap-1 text-blue-500">
          <FaSort />
          <select
            className="outline-none pr-10 border-b py-1  bg-gray-100  border-blue-500   "
            onChange={(e: any) => HandleSort(e.target.value)}
          >
            {sortItem.map((item, idx) => (
              <option
                key={idx}
                className=" font-extralight "
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortTable;
