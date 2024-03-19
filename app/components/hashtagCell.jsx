import React from "react";

const HashtagCell = ({ item, index }) => {
  return (
    <div
      className={`px-1.5 py-[0.1rem] 2xl:px-2.5 text-[9px] flex items-center 2xl:py-0.5 rounded-full text-white font-medium 2xl:text-2xs flex-shrink-0 ${
        index === 0 ? "bg-rndBlue" : "bg-black"
      }`}
    >
      <p className="mt-px">{item}</p>
    </div>
  );
};

export default HashtagCell;
