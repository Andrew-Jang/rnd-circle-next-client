import React from "react";

const DetailBody = ({ item }) => {
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
      {Object.entries(item.body).map(([key, value]) => (
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

export default DetailBody;
