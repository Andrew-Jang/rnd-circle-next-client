import { Dropdown } from "antd";
import Image from "next/image";
import React, { useState } from "react";

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
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(1) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(2) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(3) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(4) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
                    checkedKeys.includes(5) ? "text-rndBlue font-medium text-xs" : "font-medium text-xs text-gray757575"
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
      overlayClassName="filter-dropdown-overlay" // Make sure this matches your CSS class
      rootClassName="filter-dropdown"
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

export default SearchFilterButton;
