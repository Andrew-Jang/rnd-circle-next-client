"use client";
import { Dropdown } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const ChatMenu = () => {
  const Cell = ({ isNew, icon, title, time, text }) => (
    <div className="w-full h-16 flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 rounded-full border bg-gray-50"></div>
        {isNew && <div className="w-1 h-1 rounded-full bg-rndBlue absolute top-0 right-0"></div>}
      </div>
      <div className="space-y-1">
        <div className="flex space-x-2 items-center">
          <p className="text-xs font-medium">{title}</p>
          <p style={{ color: "#B7B7B7" }} className="text-2xs">
            {time}
          </p>
        </div>
        <p className="text-gray757575 text-xs">{text}</p>
      </div>
    </div>
  );
  const items = [
    {
      key: "1",
      label: (
        <div className="w-64 h-12 flex items-center justify-center text-sm border-b font-spoqa font-medium">
          나의 메시지
        </div>
      ),
    },

    {
      key: "2",
      label: (
        <div className="font-spoqa">
          <Cell title="주식회사 알앤디써클" text="안녕하세요." time="28분 전" />
          <Cell title="Geometry Research Ceneer" text="함께 협업진행하면 좋을 것 같습니다." time="54분 전" />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className=" w-64 pt-4 pb-3 flex items-center justify-center font-medium text-xs text-gray757575 tracking-tight border-t font-spoqa">
          받은 메시지 전체 보기
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
        <Image src="/menu1.png" alt="RnDCircle menu1" width={30} height={30} priority />
      </button>
    </Dropdown>
  );
};

export default ChatMenu;
