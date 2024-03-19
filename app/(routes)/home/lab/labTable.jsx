"use client";
import Image from "next/image";
import React from "react";
import TableCell from "../../../components/TableCell";
import { HOME_LAB } from "./sampleJSON";

const LabTable = () => {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
      }}
      className="w-full flex justify-center bg-gradient-to-br relative"
    >
      <div
        style={{
          borderRadius: "26.39px",
        }}
        className="max-w-screen-xl w-full h-full z-20 text-center relative custom-border py-[1.5rem] 2xl:py-8 px-2 backdrop-blur"
      >
        <p
          style={{ fontWeight: "500", fontSize: "27px" }}
          className="font-montserrat text-2xl text-left leading-7 mb-4 px-6"
        >
          LAB
        </p>
        <div className="w-full flex space-x-6 2xl:space-x-8 h-12 px-6">
          <div className="relative flex w-full items-center">
            <input
              style={{ backgroundColor: "#EBEBEB" }}
              className="w-full h-full rounded-full px-6 text-xs placeholder-gray757575 font-normal outline-none"
              placeholder="전국의 연구실을 키워드로 검색해보세요"
            />
            <button
              style={{ borderRadius: "14px" }}
              className="w-9 h-9 absolute right-4 bg-white bg-opacity-60 hover:bg-opacity-100 transition flex items-center justify-center"
            >
              <Image src="/filter.png" alt="Vercel Logo" className="" width={12} height={20} />
            </button>
          </div>
          <button className="px-12 h-full flex items-center justify-center bg-black font-montserrat text-white font-bold text-xs rounded-full hover:bg-opacity-80 transition">
            Search
          </button>
        </div>

        <div style={{ maxHeight: "36rem" }} className="mt-8 w-full overflow-y-auto px-6">
          {[...HOME_LAB, ...HOME_LAB].map((item, index) => (
            <TableCell key={index} id={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabTable;
