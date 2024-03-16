import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collab = () => {
  const SAMPLE = ["Computer Vision", "Machine Learning", "Explainable AI"];
  const ResultCircle = () => (
    <div style={{ height: "calc(100svh - 7rem)" }} className="flex w-full items-center justify-between">
      <button className="hover:brightness-50 transition">
        <Image src="/double-left.png" className="object-contain" alt="Vercel Logo" width={32} height={32} />
      </button>
      <div
        className="rounded-full bg-white p-12 bg-opacity-50 flex flex-col items-center justify-center"
        style={{
          boxShadow: "0px 40px 80px 0px #0000000D",
          width: "auto",
          // height: "calc(100svh - 12rem)",
          aspectRatio: 1,
        }}
      >
        <h1 className="font-montserrat text-xl md:text-2xl lg:text-4xl 3xl:text-4xl leading-tight font-medium text-center">
          Mechanic
          <br />
          AI LAB / MAL
        </h1>
        <h2 className="text-xs md:text-sm 2xl:text-lg font-medium  text-center mt-2 text-gray757575">
          한국대학교 컴퓨터공학과
          <br />
          이한국 교수
        </h2>

        <div className="flex space-x-2 items-center mt-8">
          {SAMPLE.map((item, index) => (
            <div className={`px-3 py-1 rounded-full text-white font-medium text-sm bg-rndBlue`}>{item}</div>
          ))}
        </div>
        <p className="text-sm tracking-tight mt-8 text-center">
          한국대학교 컴퓨터 공학과 연구실은 인공지능을 기반으로 딥러닝 및 머신러닝 기법을 활용하여
          <br />
          품질 검사 시스템 고도화, 스마트 물류 등의 영역에서 연구를 진행합니다.
        </p>

        <button className="px-3 py-1 border-2 rounded-full font-bold mt-12 hover:bg-gray-100 transition flex items-center space-x-1">
          <Image src="/data.png" className="object-contain" alt="Vercel Logo" width={14} height={14} />

          <p className=" text-xs">가상 협력 시나리오</p>
        </button>
        <div className="mt-8 flex flex-col items-center space-y-2">
          <p className="font-bold text-base tracking-tight">AI 기반 품질 검사 시스템 개선</p>
          <p className="font-bold text-base tracking-tight">스마트 물류 및 자동화 처리</p>
          <p className="font-bold text-base tracking-tight">AI 주도 안전 및 감시 분석</p>
        </div>
        <Link href={"/collab/result/details"}>
          <button className="px-6 py-3 border-2 rounded-full font-bold text-sm mt-8 hover:bg-gray-100 transition">
            <p>자세히 알아보기</p>
          </button>
        </Link>
      </div>
      <button className="hover:brightness-50 transition">
        <Image src="/double-right.png" className="object-contain" alt="Vercel Logo" width={32} height={32} />
      </button>
    </div>
  );

  return (
    <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
        <Header />
        <ResultCircle />
      </div>
    </main>
  );
};

export default Collab;
