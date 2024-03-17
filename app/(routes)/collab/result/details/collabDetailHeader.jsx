import ActionButton from "@/app/components/actionButton";
import HashtagCell from "@/app/components/hashtagCell";
import React from "react";

const CollabDetailHeader = ({ item }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full justify-between items-end">
        <div className="space-y-4 flex flex-col items-start w-full">
          <div className="flex space-x-2 items-center">
            {item.category.map((item, index) => (
              <HashtagCell item={item} index={index} />
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
