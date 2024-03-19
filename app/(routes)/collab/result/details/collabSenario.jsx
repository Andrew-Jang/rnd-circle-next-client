"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SENARIO_SAMPLE } from "./sampleJSON";
import ProjectCard from "@/app/(routes)/project/projectCard";
import { TEMP_PROJECTS } from "@/app/(routes)/project/detail/government/sampleJSON";
import NextButton from "@/app/components/nextButton";

const CollabSenario = () => {
  const Card = ({ item }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
      <div style={{ borderRadius: "26.39px" }} className="w-full p-8 rounded flex custom-border space-x-8">
        <div style={{ width: "22rem" }} className="flex-shrink-0">
          <Image src={item.img} className="" alt="Vercel Logo" width={484} height={233} />
          <div className="mt-5">
            <p className="text-lg font-medium">{item.title}</p>
            <p className="text-gray757575 text-xs mt-1 leading-5">{item.subtitle}</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-start">
          <div className={`px-3 py-1 rounded-full text-white font-medium text-2xs bg-rndBlue`}>{item.tag}</div>
          <p className="mt-4 text-xs break-keep leading-5 text-black">{item.text}</p>

          <div className="flex space-x-2 mt-8">
            <button
              onClick={() => setSelectedTab(0)}
              className={`${
                selectedTab === 0 ? "bg-black text-white border-black" : "hover:bg-opacity-90 "
              } px-3 py-1 rounded-full font-medium  border transition flex items-center space-x-1`}
            >
              <Image
                style={{ filter: selectedTab === 1 && "brightness(0) invert(0)" }}
                src="/chart.png"
                className="object-contain"
                alt="Vercel Logo"
                width={14}
                height={14}
                unoptimized
              />
              <p className="text-xs">보유 기술</p>
            </button>
            <button
              onClick={() => setSelectedTab(1)}
              className={`${
                selectedTab === 1 ? "bg-black text-white border-black" : "hover:bg-opacity-90 border"
              } px-3 py-1 rounded-full font-medium  border transition flex items-center space-x-1`}
            >
              <Image
                style={{ filter: selectedTab === 1 && "brightness(0) invert(1)" }}
                src="/data.png"
                className="object-contain"
                alt="Vercel Logo"
                width={14}
                height={14}
                unoptimized
              />
              <p className=" text-xs">관련 프로젝트 경험 및 논문</p>
            </button>
          </div>
          <div className="text-xs mt-4 leading-5">
            {item.bullet.map((item) => (
              <p>• {item}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
        <p className="text-3xl text-left leading-7">
          지원 가능한 <br />
          정부 과제
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
        <div className="flex flex-col items-center text-2xl font-spoqa">
          <div className="flex">
            <p className="font-bold">디써클</p>
            <p>과</p>
          </div>
          <div className="flex">
            <p className="font-montserrat font-medium">Mechanic AI LAB/MAL</p>
            <p>의</p>
          </div>

          <p>가상 협력 시나리오</p>
        </div>
        <p className="mt-4 text-xs text-center text-gray757575 leading-5">
          *해당 서비스는 가상의 상황을 기반으로 한 협력 시나리오를 제공합니다.
          <br />
          이는 실제 협력을 의미하거나 대체할 수 없으며, 현실적인 동의나 계약 없이 작성된 가상의 내용입니다.
        </p>

        <div className="w-full mt-8 flex flex-col space-y-6 mb-24">
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
