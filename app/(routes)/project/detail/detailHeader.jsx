import ActionButton from "@/app/components/actionButton";
import HashtagCell from "@/app/components/hashtagCell";
import React from "react";

const DetailHeader = ({ item }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="space-y-4 flex flex-col items-start w-full">
        <div className="flex space-x-2 items-center">
          {item.category.map((item, index) => (
            <HashtagCell key={index} item={item} index={index} />
          ))}
        </div>
        <p className="text-3xl text-left leading-7 font-medium ">{item.title}</p>
        {item.subtitle && <p className="text-sm text-left  text-gray757575">{item.subtitle}</p>}

        <div className="flex w-full justify-between items-end">
          <div className="space-y-4">
            {item.date && (
              <div className="flex space-x-4">
                <p className="text-xs text-left  text-gray757575">공고 등록일 {item.date}</p>
                <p className="text-xs text-left  text-gray757575">조회수 {item.view}</p>
              </div>
            )}

            {item.people && (
              <div className="space-x-4 flex items-center">
                <div className="flex -space-x-4">
                  <div className="w-8 h-8 rounded-full border bg-white z-50"></div>
                  <div className="w-8 h-8 rounded-full border bg-white z-40"></div>
                  <div className="w-8 h-8 rounded-full border bg-white z-30"></div>
                  <div className="w-8 h-8 rounded-full border bg-white z-20"></div>
                  <div className="w-8 h-8 rounded-full border bg-white"></div>
                </div>
                <p className="text-xs font-bold">{item.people}</p>
              </div>
            )}
            {item.companyName && (
              <div className="space-x-4 flex items-center">
                <div className="w-8 h-8 rounded-full border bg-white"></div>
                <p className="text-sm font-bold">{item.companyName}</p>
              </div>
            )}
            {item.labName && (
              <div className="space-x-4 flex items-center">
                <p className="text-sm font-bold">{item.labName}</p>
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            <ActionButton icon="/share.png" title="공유" />
            <ActionButton icon="/bookmarks.png" title="저장" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
