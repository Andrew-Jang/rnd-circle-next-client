import Image from "next/image";
import React from "react";

const MiniCard = ({ icon, text, number, hasNew }) => {
  return (
    <button
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "26.39px",
        height: "90px",
      }}
      className="w-28 h-24 rounded-xl custom-border border-white flex flex-col items-center justify-center hover:brightness-110 transition backdrop-blur"
    >
      <div className="relative w-[16px] h-[16px] 2xl:w-[18px] 2xl:h-[18px] mt-1">
        <Image
          src={icon}
          alt="card1"
          className=""
          priority
          layout="fill" // required
          objectFit="contain" // change to suit your needs
        />
        {hasNew && <div className="absolute -top-0.5 -right-1.5 w-1 h-1 rounded-full bg-rndBlue"></div>}
      </div>
      <p className="font-montserrat text-[9px] mt-0.5 2xl:mt-1 2xl:text-2xs text-gray757575">{text}</p>
      <p className="font-montserrat text-xs 2xl:text-xs mt-1 2xl:mt-1 font-medium">{number}</p>
    </button>
  );
};

export default MiniCard;
