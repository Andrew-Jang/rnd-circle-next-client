import { Popover } from "antd";
import Link from "next/link";
import React from "react";

const Menu = () => {
  const content = (
    <div className="bg-rndBlue text-xs text-white tracking-white text-center p-2">
      <p className="font-spoqa font-medium">
        지금 바로 맞춤형 협업 <br />
        제안서를 받아보세요.
      </p>
    </div>
  );
  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        borderColor: "#ECECEC",
        borderRadius: "26.39px",
        boxShadow: "2px 2px 50px 0px rgba(0, 0, 0, 0.15)",
      }}
      className="fixed bottom-8 h-14 rounded-xl bg-white flex items-center flex-shrink-0 space-x-4 z-50 overflow-hidden"
    >
      <Link className="w-36 h-full" href={"/home/company"}>
        <button className="w-36 text-sm h-full font-montserrat font-semibold hover:bg-gray-100 transition">Home</button>
      </Link>
      <Link className="w-36 h-full" href={"/lab"}>
        <button className="w-36 text-sm h-full font-montserrat font-semibold hover:bg-gray-100 transition">Lab</button>
      </Link>

      <Popover color="#1e40af" content={content} overlayClassName="custom-popover-class">
        <Link className="w-36 h-full" href={"/collab"}>
          <button className="w-36 text-sm h-full font-montserrat font-semibold  flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-rndBlue"></div>
          </button>
        </Link>
      </Popover>
      <Link className="w-36 h-full" href={"/project"}>
        <button className="w-36 text-sm h-full font-montserrat font-semibold hover:bg-gray-100 transition">
          Project
        </button>
      </Link>
      <Link className="w-36 h-full" href={"/setting/register"}>
        <button className="w-36 text-sm h-full font-montserrat font-semibold hover:bg-gray-100 transition">
          Register
        </button>
      </Link>
    </div>
  );
};

export default Menu;
