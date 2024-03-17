import React from "react";

const DetailBody = ({ item }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "26.39px",
      }}
      className="w-full custom-border p-10 flex flex-col items-start mt-8 backdrop-blur"
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
