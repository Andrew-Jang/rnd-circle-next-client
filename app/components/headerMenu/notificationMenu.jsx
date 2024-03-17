"use client";
import { Dropdown } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const NotificationMenu = () => {
  const Cell = ({ isNew, icon, title, time, text }) => (
    <div className="w-full py-3 flex items-start space-x-2 max-w-64">
      <div className="relative">
        <div className="w-10 h-10 rounded-full border bg-gray-50"></div>
        {isNew && <div className="w-1 h-1 rounded-full bg-rndBlue absolute top-0 right-0"></div>}
      </div>
      <div className="space-y-1">
        <div className="items-center inline-block text-xs font-medium tracking-tight break-keep">
          <p className="inline">{title}</p>
          <p className="inline text-gray757575"> 이 협업을 요청하였습니다.</p>
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
        <div className=" w-64 h-12 flex items-center justify-center font-medium text-sm border-b font-spoqa">알림</div>
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
        <Image src="/menu2.png" alt="RnDCircle menu1" width={30} height={30} priority />
      </button>
    </Dropdown>
  );
};

export default NotificationMenu;
