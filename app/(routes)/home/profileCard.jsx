import Image from "next/image";
import React from "react";

const ProfileCard = ({ title, name, desc, address }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",

        borderRadius: "26.39px",
      }}
      className="w-72 h-72 custom-border border-white flex flex-col items-center py-8 transition backdrop-blur"
    >
      <div className="w-16 h-16 rounded-full bg-white border"></div>
      <div className="px-2 py-0.5 text-white rounded-full mt-5 bg-rndBlue font-bold text-2xs">{title}</div>
      <div className="mt-1" style={{ fontWeight: "500" }}>
        {name}
      </div>
      <div className="text-xs mt-3 text-gray757575">{desc}</div>
      <div className="text-xs flex items-center space-x-1 mt-1 text-gray757575">
        <Image src="/pin.png" alt="RnDCircle menu1" className="" width={15} height={15} priority />
        <label style={{ height: "14px" }}>{address}</label>
      </div>
      <div className="space-x-2 flex items-center mt-4">
        <button className="border px-2 py-1 rounded-full font-montserrat bg-white text-xs flex items-center space-x-2 hover:brightness-125 transition text-gray757575 font-medium">
          <Image src="/edit.png" alt="RnDCircle menu1" className="object-contain" width={17} height={17} unoptimized />
          <p>Edit</p>
        </button>
        <button className="border px-2 py-1 rounded-full font-montserrat bg-white text-xs flex items-center space-x-2 hover:brightness-125 transition text-gray757575 font-medium">
          <Image
            src="/setting.png"
            alt="RnDCircle menu1"
            className="object-contain"
            width={17}
            height={17}
            unoptimized
          />
          <p>Setting</p>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
