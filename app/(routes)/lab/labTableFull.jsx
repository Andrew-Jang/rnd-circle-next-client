"use client";
import Image from "next/image";
import React, { useState } from "react";
import PaginationComponent from "../../components/pagination";
import { Dropdown } from "antd";
import TableCell from "../../components/TableCell";
import { LAB_PAGE } from "./sampleJSON";

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

  const SearchFilterButton = ({ title, type }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [open, setOpen] = useState(false);
    const toggleChecked = (key) => {
      setCheckedKeys((prevCheckedKeys) =>
        prevCheckedKeys.includes(key) ? prevCheckedKeys.filter((k) => k !== key) : [...prevCheckedKeys, key]
      );
    };
    const items =
      type === 1
        ? [
            {
              key: "1",
              label: (
                <div
                  onClick={() => toggleChecked(1)}
                  className={`flex space-x-1.5 py-1 w-24 ${
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(1)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(1) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">순수수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(2)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(2) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">응용수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(3)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(3) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">통계학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(4)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(4) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">계산수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(5)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(5) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">확률론</p>
                </div>
              ),
              checked: false,
            },
          ]
        : type === 2
        ? [
            {
              key: "1",
              label: (
                <div
                  onClick={() => toggleChecked(1)}
                  className={`flex space-x-1.5 py-1 w-40 ${
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(1)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(1) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가야대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(2)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(2) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가천대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(3)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(3) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가톨릭관동대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(4)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(4) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가톨릭꽃동네대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(5)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(5) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">가톨릭대학교</p>
                </div>
              ),
              checked: false,
            },
          ]
        : [
            {
              key: "1",
              label: (
                <div
                  onClick={() => toggleChecked(1)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(1)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(1) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">서울</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(2)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(2) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">경기</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(3)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(3) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">인천</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(4)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(4) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">강원</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-1.5 py-1 ${
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center ${
                      checkedKeys.includes(5)
                        ? "text-rndBlue font-medium text-xs"
                        : "font-medium text-xs text-gray757575"
                    }`}
                  >
                    {checkedKeys.includes(5) && <div className="w-2 h-2 rounded-full bg-rndBlue"></div>}
                  </div>
                  <p className="font-spoqa font-medium">충북</p>
                </div>
              ),
              checked: false,
            },
          ];

    const handleOpenChange = (nextOpen, info) => {
      if (info.source === "trigger" || nextOpen) {
        setOpen(nextOpen);
      }
    };
    const handleMenuClick = (e) => {
      setOpen(true);
    };

    return (
      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick,
        }}
        trigger={["click"]}
        placement="bottomLeft"
        onOpenChange={handleOpenChange}
        open={open}
      >
        <button
          onClick={(e) => {
            // e.preventDefault();
            setDropdownVisible(!dropdownVisible);
          }}
          className="px-2 py-1 text-gray757575 text-xs tracking-tight flex-shrink-0 rounded-lg custom-border font-medium flex items-center bg-white bg-opacity-50 hover:bg-opacity-100 transition"
        >
          <div className="flex space-x-1">
            <p>{title}</p>
            <Image src="/down.png" alt="Vercel Logo" className="object-contain" width={10} height={10} />
          </div>
        </button>
      </Dropdown>
    );
  };

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
          {[...LAB_PAGE, ...LAB_PAGE].map((item, index) => (
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
