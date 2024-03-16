"use client";
import { Dropdown } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const ProjectSearch = () => {
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
                  className={`flex space-x-2 w-24 ${
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
                  <p className="font-spoqa">순수수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">응용수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">통계학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">계산수학</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">확률론</p>
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
                  className={`flex space-x-2 w-40 ${
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
                  <p className="font-spoqa">가야대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">가천대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">가톨릭관동대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">가톨릭꽃동네대학교</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">가톨릭대학교</p>
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
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">서울</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => toggleChecked(2)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">경기</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => toggleChecked(3)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">인천</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => toggleChecked(4)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">강원</p>
                </div>
              ),
              checked: false,
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => toggleChecked(5)}
                  className={`flex space-x-2 ${
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
                  <p className="font-spoqa">충북</p>
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
            setDropdownVisible(!dropdownVisible);
          }}
          className="px-2 py-1 text-gray757575 text-xs tracking-tight flex-shrink-0 font-medium flex items-center bg-white bg-opacity-50 hover:bg-opacity-100 transition border rounded-lg"
        >
          <div className="flex space-x-1">
            <p>{title}</p>
            <Image src="/down.png" alt="Vercel Logo" className="object-contain" width={10} height={10} />
          </div>
        </button>
      </Dropdown>
    );
  };

  const SearchBar = () => (
    <div className="w-full flex space-x-4 h-12">
      <div className="relative flex w-full items-center">
        <input
          style={{ backgroundColor: "#EBEBEB", fontWeight: "500" }}
          className="w-full h-full rounded-full px-6 text-xs placeholder-gray757575 font-medium outline-none"
          placeholder="나에게 맞는 R&D 프로젝트를 검색해보세요."
        />
        <button
          style={{ borderRadius: "14px" }}
          className="w-9 h-9 absolute right-4 transition flex items-center justify-center"
        >
          <Image src="/search.png" alt="Vercel Logo" className="" width={20} height={20} />
        </button>
      </div>
      <button className="px-6 h-full flex items-center justify-center bg-black font-montserrat text-white font-bold text-xs rounded-full hover:bg-opacity-80 transition flex-shrink-0">
        프로젝트 등록하기
      </button>
    </div>
  );
  const Filters = () => (
    <>
      <SearchFilterButton title="사업분야" type={1} />
      <SearchFilterButton title="공고 등록일" type={2} />
      <SearchFilterButton title="접수 시작일" type={3} />
      <SearchFilterButton title="접수 마감일" type={4} />
      <SearchFilterButton title="지원기관" type={5} />
      <SearchFilterButton title="지원기관 분류" type={6} />
      <SearchFilterButton title="지원기관 소재지" type={7} />
    </>
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
      <div className="max-w-5xl w-full h-full z-20 text-center relative my-12">
        <SearchBar />
        <div className="flex space-x-2 justify-center mt-6">
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default ProjectSearch;
