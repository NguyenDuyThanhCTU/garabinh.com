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

const CollectionSection = () => {
  const Data = [
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612792242614_b22a17c9d0cac088c98ec466c183dc83.jpg?alt=media&token=93d3cbdb-241d-49c8-b731-aa2fd1e351fe",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612792352500_60ea45d2f8911baa6ed7abb6788bab91.jpg?alt=media&token=5f7f2075-b7b2-4e98-942a-7210f69952fd",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612792440907_123532e12db6913b513c6bbce255af88.jpg?alt=media&token=1b392a71-7302-4e63-88eb-c50c26dad136",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612792526142_da18ee297c1397309894c0a772322537.jpg?alt=media&token=3ebfe9c0-369c-4f4f-a8e5-db2622377d17",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612792648000_1019a09e98541be47575820b60cb7fab.jpg?alt=media&token=de4201dd-1eec-49f2-9249-9043331206c9",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612792766375_caa348cec4084627bdc8ad7aff3247c3.jpg?alt=media&token=f4bcbc56-2ca1-4c27-bdd1-6d2cc3cdc1fd",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612792904913_ed8e235a00272f2ac9dec771fdbf6a67.jpg?alt=media&token=4f0d3529-18c1-4542-b1d3-c49493f8b695",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612793030656_a5a93da1c56d9bbf28282132e3dd806e.jpg?alt=media&token=b783ec8f-bbef-4c8b-9d36-0fde097d509a",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612793133669_d9d159daff9f594521dfa7f13478e2b9.jpg?alt=media&token=4953df6e-63e3-4526-b4e9-8357a338c7b0",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612794731650_a65fe1118f27b9ebad04152f61e98cc9.jpg?alt=media&token=8cf628bf-2720-4977-94e7-51382d75d998",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612794848581_3b32330fba8ca6454ee29790695f0221.jpg?alt=media&token=16fbebcf-25d1-49fa-946e-0ac14c3eebbc",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612795008088_44faa4fd04477cd08a5c40b2b20b29fe.jpg?alt=media&token=0874a7ed-e620-4a78-81cf-5788176359f4",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612795167924_bede7420f4c07aec5350a12023137070.jpg?alt=media&token=49412c90-6455-4ea7-b302-33fa414c3fc0",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612807139098_7177401e3a933dfd5a6553a1b51fcc9d.jpg?alt=media&token=dba63015-2f47-480e-aa3d-482124845c1b",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612795446063_cce7a49098688725d16d67bdc5d66c5d.jpg?alt=media&token=02ca808e-e4de-461f-92ab-66b0c727a23b",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612795547610_60ae0a4723b1d341dabbefc3ce6f27f2.jpg?alt=media&token=35b30054-fa7a-4d0d-be19-9c56e2dce064",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612795717656_24ebdfcd02a71b14b6110e85848ad67f.jpg?alt=media&token=6bd913ed-2f2d-400a-8bf6-93fbe0be108f",
    "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612795276042_dde27373eef308667735cfcd4d0a2661.jpg?alt=media&token=876b354d-ee8d-455f-8913-a22543a3702b",
  ];
  return (
    <div id="thu-vien" className="bg-slate-100 pt-10 pb-20">
      <div className=" d:w-[1100px] d:mx-auto p:mx-2 p:w-auto bg-slate-100">
        <Content Title="Thư Viện" />

        <div className="grid p:grid-cols-2 d:grid-cols-3 gap-2 my-10">
          {Data?.map((item: any, index: number) => (
            <div key={index}>
              <Image.PreviewGroup>
                <Image
                  style={{ height: 310 }}
                  className="w-full h-full  object-center object-cover"
                  src={item}
                />
              </Image.PreviewGroup>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
