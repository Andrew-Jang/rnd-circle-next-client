"use client";
import Image from "next/image";
import React from "react";
import PaginationComponent from "../../components/pagination";
import TableCell from "../../components/TableCell";
import { LAB_PAGE } from "./sampleJSON";
import SearchFilterButton from "./SearchFilterButton";

const LabTableFull = () => {
  const TableMenu = ({ item }) => (
    <div className="h-12 flex items-center px-4 rounded-lg cursor-pointer">
      <div className="w-[3.5rem] 2xl:w-[4.5rem] flex justify-center flex-shrink-0">
        <div className="font-medium text-xs">카테고리</div>
      </div>
      <div className="w-[20rem] 2xl:w-80 flex items-center space-x-1 justify-center flex-shrink-0">
        <p className="font-medium text-xs">연구실명</p>
      </div>
      <div className="w-[11rem] 2xl:w-60 flex items-center justify-center flex-shrink-0 ">
        <p className="font-medium text-xs">소속기관</p>
      </div>
      <div className="w-[7rem] 2xl:w-32 flex items-center  justify-center flex-shrink-0 ">
        <p className="font-medium text-xs">지도교수</p>
      </div>
      <div className="w-[16rem] 2xl:w-72 flex items-center justify-center flex-shrink-0 ">
        <p className="font-medium text-xs">연구 분야</p>
      </div>
      <div className="flex space-x-4 2xl:space-x-6">
        <p className="font-medium text-xs w-12">웹</p>
        <p className="font-medium text-xs w-12">연락</p>
      </div>
    </div>
  );

  const Search = () => (
    <div className="w-full flex space-x-8 h-12">
      <div className="flex w-full items-center">
        <div
          style={{ backgroundColor: "#EBEBEB" }}
          className="relative w-full h-full rounded-full px-6 text-xs placeholder-gray757575 font-medium outline-none flex items-center space-x-2"
        >
          <SearchFilterButton title="연구분야" type={1} />
          <SearchFilterButton title="대학" type={2} />
          <SearchFilterButton title="지역" type={3} />
          <input
            className="w-full h-full rounded-full px-2 text-xs placeholder-gray757575 outline-none font-normal bg-transparent"
            placeholder="관심있는 연구실 및 연구분야를 검색해보세요."
          />
          <button
            style={{ borderRadius: "14px" }}
            className="w-9 h-9 absolute right-4 transition flex items-center justify-center"
          >
            <Image src="/search.png" alt="Vercel Logo" className="" width={20} height={20} unoptimized />
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
      }}
      className="w-full flex flex-col items-center"
    >
      <div className="max-w-screen-md w-full h-full z-20 text-center relative my-12">
        <Search />
      </div>

      <div
        style={{
          borderRadius: "26.39px",
        }}
        className="max-w-screen-xl w-full h-full z-20 text-center relative custom-border p-8 pt-4 backdrop-blur overflow-auto"
      >
        <TableMenu />
        <div className="mt-4 w-full">
          {LAB_PAGE.map((item, index) => (
            <TableCell key={index} id={index} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <PaginationComponent totalPages={10} />
      </div>
    </div>
  );
};

export default LabTableFull;
