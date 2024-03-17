import Link from "next/link";
import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <Link
      className="w-full"
      href={
        item.companyName
          ? "/project/detail/company"
          : item.labName
          ? "/project/detail/lab"
          : "/project/detail/government"
      }
    >
      <button className="rounded-3xl custom-border w-full flex flex-col items-start p-7 hover:bg-gray-100 transition">
        <div className="flex flex-wrap gap-2">
          {item.countdown.map((item) => (
            <div className="px-3 py-0.5 rounded-full text-white font-bold text-2xs bg-rndBlue">{item}</div>
          ))}
        </div>
        <p className="text-left leading-7 font-bold mt-3 ">{item.title}</p>
        {item.companyName && (
          <div className="flex space-x-2 items-center mt-3 h-8">
            <div className="h-8 w-8 rounded-full border bg-white"></div>
            <p className="text-xs font-medium">{item.companyName}</p>
          </div>
        )}
        {item.labName && (
          <div className="flex space-x-2 items-center mt-3 h-8">
            <p className="text-xs font-medium">{item.labName}</p>
          </div>
        )}
        <div className="flex flex-wrap mt-4 gap-2">
          {item.tags.map((item) => (
            <div
              style={{
                backgroundColor: item === "접수예정" ? "#CECECE" : "#FBFBFBE5",
                color: item === "접수예정" ? "#ffffff" : "#525252",
              }}
              className="rounded-full px-3 py-1 border text-xs font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </button>
    </Link>
  );
};

export default ProjectCard;
