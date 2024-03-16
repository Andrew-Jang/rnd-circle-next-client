"use client";
import { Dropdown } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const ProfileMenu = () => {
  const Cell = ({ isNew, icon, title, time, text }) => (
    <div className="w-full py-3 flex items-start space-x-2 max-w-64">
      <div className="relative">
        <div className="w-10 h-10 rounded-full border bg-gray-50"></div>
        {isNew && <div className="w-1 h-1 rounded-full bg-rndBlue absolute top-0 right-0"></div>}
      </div>
      <div className="space-y-1">
        <div className="items-center inline-block text-xs font-medium tracking-tight break-keep">
          <p className="inline">{title}</p>
          <p style={{ color: "#B7B7B7" }} className="inline">
            {" "}
            이 협업을 요청하였습니다.
          </p>
        </div>
        <p style={{ color: "#B7B7B7" }} className="text-2xs">
          {time}
        </p>
      </div>
    </div>
  );
  const items = [
    {
      key: "1",
      label: (
        <div className="w-64 py-4 flex flex-col items-center justify-center font-medium text-sm space-y-2 font-spoqa">
          <div className="w-14 h-14 rounded-full border bg-gray-50"></div>
          <div className="flex items-center justify-center h-4 px-1.5 text-2xs font-bold text-white bg-rndBlue rounded-full">
            교수
          </div>
          <p className="font-medium text-sm">이한국</p>
        </div>
      ),
    },

    {
      key: "2",
      label: <div className="font-medium text-xs text-gray757575 px-4 hover:text-black font-spoqa">계정</div>,
    },
    {
      key: "3",
      label: <div className="font-medium text-xs text-gray757575 px-4 hover:text-black font-spoqa">프로모션</div>,
    },
    {
      key: "4",
      label: <div className="font-medium text-xs text-gray757575 px-4 hover:text-black font-spoqa">설정</div>,
    },
    {
      key: "5",
      label: <div className="font-medium text-xs text-gray757575 px-4 hover:text-black font-spoqa">도움말</div>,
    },
    {
      key: "6",
      label: (
        <div className="font-medium text-xs text-gray757575 px-4 hover:text-black font-spoqa border-t py-4">
          로그아웃
        </div>
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
      trigger={["click"]}
      onOpenChange={handleOpenChange}
      open={open}
      overlayClassName="custom-dropdown-radius"
    >
      <button className="w-9 h-9 hover:bg-gray-100 transition rounded-full flex items-center justify-center">
        <Image src="/menu3.png" alt="RnDCircle menu1" width={30} height={30} priority />
      </button>
    </Dropdown>
  );
};

export default ProfileMenu;
