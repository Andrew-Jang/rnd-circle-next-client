import React from "react";

const CollabDetailBody = ({ item }) => {
  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "#ECECEC",
        borderRadius: "26.39px",
      }}
      className="w-full rounded-xl border-2 p-10 flex flex-col items-start mt-8"
    >
      {Object.entries(item.body1).map(([key, value]) => (
        <div key={key} className="">
          <p className="text-lg  text-left leading-7 font-medium">{key}</p>
          <div style={{ whiteSpace: "pre-wrap" }} className="flex break-keep gap-2 text-xs max-w-3xl">
            {value}
          </div>
        </div>
      ))}

      <div className="flex space-x-2 mt-4">
        {item.tags.map((item) => (
          <div
            style={{ borderColor: "#ECECEC" }}
            className="text-2xs font-medium rounded-full text-gray757575 tracking-tight border px-2 py-1"
          >
            {item}
          </div>
        ))}
      </div>

      {Object.entries(item.body2).map(([key, value]) => (
        <div key={key} className="mt-6">
          <p className="text-lg  text-left leading-7 font-medium">{key}</p>
          <div style={{ whiteSpace: "pre-wrap" }} className="flex break-keep gap-2 text-xs max-w-3xl">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollabDetailBody;
