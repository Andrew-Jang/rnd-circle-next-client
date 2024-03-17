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
      {Object.entries(item.body).map(([key, value], index) => (
        <div key={key} className={`${index !== 0 && "mt-6"}`}>
          <p className="text-lg text-left leading-7 font-medium mb-4">{key}</p>
          {value.map((item) => (
            <div className="flex items-start space-x-2">
              <div className="h-0 text-xs mt-2px">•</div>
              <div className="flex break-keep text-xs max-w-3xl leading-5">{item}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DetailBody;
