"use client";
import BackButton from "@/app/components/backButton";
import Header from "@/app/components/header";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Collab = () => {
  const [isPartnerCheck, setPartnerCheck] = useState(false);
  const router = useRouter(); // Move useRouter inside useEffect

  useEffect(() => {
    if (isPartnerCheck) {
      setTimeout(() => {
        router.push("/collab/result");
      }, 5000);
    }
  }, [isPartnerCheck]);

  const StartSection = () => (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
        height: "calc(100svh - 7rem)",
      }}
      className="w-full flex justify-center relative"
    >
      <div className="max-w-screen-xl w-full h-full flex flex-col items-center z-20 text-center relative pt-20">
        <div className="w-full">
          <BackButton path={"/home/lab"} />
        </div>
        <div className="mt-20 flex flex-col items-center">
          <h1 className="font-montserrat text-left text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl leading-tight font-medium">
            맞춤형 R&D 파트너 확인하기
          </h1>
          <h2 className="text-xs md:text-sm 2xl:text-lg font-medium  text-center mt-6 text-gray757575">
            최적의 R&D 파트너를 발견하고,
            <br />
            AI가 제공하는 다양한 협업 시나리오를 통해 가능성을 탐색해보세요
          </h2>
          <button
            onClick={() => setPartnerCheck(true)}
            className="px-6 py-4 text-white bg-rndBlue rounded-full font-bold text-sm mt-8 hover:brightness-150 transition flex items-center space-x-2"
          >
            <Image src="/target.png" alt="Vercel Logo" className="object-contain" width={20} height={20} />
            <p>확인하기</p>
          </button>
        </div>
      </div>
    </div>
  );

  const CheckSection = () => (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
        height: "calc(100svh - 7rem)",
      }}
      className="w-full flex justify-center relative"
    >
      <div className="max-w-screen-xl w-full h-full flex flex-col items-center z-20 text-center relative justify-center">
        <div className="flex flex-col items-center">
          <div className="relative mb-12">
            <div className="center-circle"></div>
            <div className="orbiting-circle"></div>
          </div>

          <h1 className="font-montserrat text-left text-xl md:text-xl lg:text-2xl 2xl:text-3xl leading-tight font-medium">
            생성 중...
          </h1>
          <h2 className="text-sm font-medium  text-center mt-6 text-gray757575">
            *해당 서비스는 가상의 상황을 기반으로 한 협력 시나리오를 제공합니다.
            <br />
            이는 실제 협력을 의미하거나 대체할 수 없으며, 현실적인 동의나 계약 없이 작성된 가상의 내용입니다.
            <br />
            실제 협력이 필요한 경우, 관련 당사자 간의 협의와 동의를 거쳐 진행되어야 합니다
          </h2>
          <button
            onClick={() => setPartnerCheck(false)}
            className="px-6 py-2 border-2 text-gray757575 rounded-full font-bold text-sm mt-8 hover:bg-gray-100 transition"
          >
            <p>취소하기</p>
          </button>
        </div>
      </div>
    </div>
  );

  if (isPartnerCheck)
    return (
      <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
          <Header />
          <CheckSection />
        </div>
      </main>
    );
  else
    return (
      <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
          <Header />
          <StartSection />
        </div>
      </main>
    );
};

export default Collab;
