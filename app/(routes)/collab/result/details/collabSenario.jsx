import Image from "next/image";
import React from "react";
import { SENARIO_SAMPLE } from "./sampleJSON";
import ProjectCard from "@/app/(routes)/project/projectCard";
import { TEMP_PROJECTS } from "@/app/(routes)/project/detail/government/sampleJSON";
import NextButton from "@/app/components/nextButton";

const CollabSenario = () => {
  const Card = ({ item }) => (
    <div
      style={{ borderRadius: "26.39px", borderColor: "#ECECEC" }}
      className="w-full p-8 rounded flex border-2 space-x-8"
    >
      <div className="w-80 flex-shrink-0">
        <Image src={item.img} className="" alt="Vercel Logo" width={484} height={233} />
        <div className="mt-4">
          <p className="text-lg font-medium">{item.title}</p>
          <p className="text-gray757575 text-xs mt-2">{item.subtitle}</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-start">
        <div className={`px-3 py-1 rounded-full text-white font-medium text-2xs bg-rndBlue`}>{item.tag}</div>
        <p className="mt-4 text-sm break-keep">{item.text}</p>

        <div className="flex space-x-2 mt-8">
          <button className="px-3 py-1 border-2 rounded-full font-bold bg-black hover:bg-opacity-90 text-white transition flex items-center space-x-1">
            <Image src="/chart.png" className="object-contain" alt="Vercel Logo" width={14} height={14} />
            <p className="text-xs">보유 기술</p>
          </button>
          <button className="px-3 py-1 border-2 rounded-full font-bold hover:bg-gray-100 transition flex items-center space-x-1">
            <Image src="/data.png" className="object-contain" alt="Vercel Logo" width={14} height={14} />
            <p className=" text-xs">관련 프로젝트 경험 및 논문</p>
          </button>
        </div>
        <div className="text-sm mt-4">
          {item.bullet.map((item) => (
            <p>• {item}</p>
          ))}
        </div>
      </div>
    </div>
  );

  const RelatedProjects = () => (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
      }}
      className="w-full flex justify-center bg-gradient-to-br relative mt-8"
    >
      <div className="max-w-screen-xl w-full h-full">
        <p className="text-3xl text-left leading-7 font-medium">
          관련 <br />
          프로젝트
        </p>

        <div className="w-full flex space-x-4 mt-8 items-center">
          {TEMP_PROJECTS.map((item) => (
            <ProjectCard item={item} />
          ))}
          <NextButton />
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-24 w-full">
      <div style={{ maxWidth: "1920px" }} className="w-full py-6 px-16 flex flex-col">
        <div className="flex flex-col items-center text-2xl font-medium font-montserrat">
          <div className="flex">
            <p className="font-bold">디써클</p>
            <p>과</p>
          </div>
          <p>Mechanic AI LAB/MAL의</p>
          <p>가상 협력 시나리오</p>
        </div>
        <p className="mt-4 font-medium text-xs text-center text-gray757575">
          *해당 서비스는 가상의 상황을 기반으로 한 협력 시나리오를 제공합니다.
          <br />
          이는 실제 협력을 의미하거나 대체할 수 없으며, 현실적인 동의나 계약 없이 작성된 가상의 내용입니다.
        </p>

        <div className="w-full mt-8 flex flex-col space-y-6">
          {SENARIO_SAMPLE.map((item) => (
            <Card item={item} />
          ))}
        </div>

        <RelatedProjects />
      </div>
    </div>
  );
};

export default CollabSenario;
