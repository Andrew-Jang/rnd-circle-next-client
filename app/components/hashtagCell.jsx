import React from "react";

const HashtagCell = ({ item, index }) => {
  return (
    <div
      className={`px-2.5 flex items-center py-0.5 rounded-full text-white font-bold text-2xs ${
        index === 0 ? "bg-rndBlue" : "bg-black"
      }`}
    >
      <p className="mt-2px">{item}</p>
    </div>
  );
};

export default HashtagCell;
