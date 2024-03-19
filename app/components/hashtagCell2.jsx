import React from "react";

const HashtagCell2 = ({ item }) => {
  return (
    <div
      style={{ borderColor: "#ECECEC" }}
      className={`border px-1.5 py-[0.1rem] 2xl:px-2.5 text-[9px] flex items-center 2xl:py-0.5 rounded-full text-gray757575 font-medium 2xl:text-xs flex-shrink-0 bg-[#FBFBFB] bg-opacity-90`}
    >
      <p className="mt-px">{item}</p>
    </div>
  );
};

export default HashtagCell2;
