import HashtagCell2 from "@/app/components/hashtagCell2";
import React from "react";

const CollabDetailBody = ({ item }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "26.39px",
      }}
      className="w-full rounded-xl custom-border p-10 flex flex-col items-start mt-8 backdrop-blur"
    >
      {Object.entries(item.body1).map(([key, value]) => (
        <div key={key} className="">
          <p className="text-lg text-left font-medium">{key}</p>
          <div style={{ whiteSpace: "pre-wrap" }} className="flex break-keep gap-2 text-xs max-w-3xl leading-5">
            {value}
          </div>
        </div>
      ))}

      <div className="flex space-x-2 mt-4">
        {item.tags.map((item) => (
          <HashtagCell2 item={item} />
        ))}
      </div>

      {Object.entries(item.body2).map(([key, value]) => (
        <div key={key} className="mt-6">
          <p className="text-lg text-left font-medium">{key}</p>
          <div style={{ whiteSpace: "pre-wrap" }} className="flex break-keep gap-2 text-xs max-w-3xl leading-5">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollabDetailBody;
