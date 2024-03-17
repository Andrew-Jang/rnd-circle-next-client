import ActionButton from "@/app/components/actionButton";
import React from "react";

const CollabDetailHeader = ({ item }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full justify-between items-end">
        <div className="space-y-4 flex flex-col items-start w-full">
          <div className="flex space-x-2 items-center">
            {item.category.map((item, index) => (
              <div
                className={`px-2 py-0.5 rounded-full text-white font-medium text-2xs ${
                  index === 0 ? "bg-rndBlue" : "bg-black"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-3xl text-left leading-7 font-medium ">{item.title}</p>
          {item.subtitle && <p className="text-sm text-left  text-gray757575">{item.subtitle}</p>}
        </div>

        <div className="flex space-x-4">
          <ActionButton icon="/share.png" title="공유" />
          <ActionButton icon="/bookmarks.png" title="저장" />
        </div>
      </div>
    </div>
  );
};

export default CollabDetailHeader;
