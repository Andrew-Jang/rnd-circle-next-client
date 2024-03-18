import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeProjectCard = () => {
  const CardButton = ({ icon, title, subtitle }) => (
    <Link
      href={"/project/detail/government"}
      style={{
        borderRadius: "26.39px",
      }}
      className="w-full h-24 rounded-xl custom-border bg-white hover:bg-gray-100 transition flex items-center px-4 flex-shrink-0 space-x-3 2xl:space-x-4 backdrop-blur"
    >
      <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center bg-rndBlue">
        <Image src={icon} alt="Vercel Logo" className="" width={18} height={18} />
      </div>
      <div className="w-full text-left">
        <p className="font-montserrat font-medium text-[1.1rem] 2xl:text-lg">{title}</p>
        <p className="mt-0.5  text-gray757575 text-[9.5px] 2xl:text-2xs">{subtitle}</p>
      </div>
    </Link>
  );

  return (
    <div className="relative">
      <Image src="/union-big.png" alt="Vercel Logo" className="" width={400} height={151} unoptimized />
      <div className="w-full h-full absolute top-0 p-[1.5rem] py-[1.5rem] 2xl:p-8 2xl:py-8 flex flex-col justify-between">
        <div>
          <p className="font-montserrat text-2xl text-left leading-7 font-medium text-[24px] 2xl:text-[27px]">
            새롭게 등록된 <br /> 프로젝트를 확인해보세요
          </p>
          <p className="text-xs text-left mt-5 2xl:mt-6 mb-6 2xl:mb-0 text-gray757575">72개의 새로운 R&D 프로젝트 공고가 업데이트되었어요</p>
        </div>

        <div className="space-y-4 2xl:space-y-5">
          <CardButton
            icon="/cap.png"
            title="Quantum Innovation Lab"
            subtitle="서울과학기술대학교 양자기술 글로벌 혁신 기술 연구실"
          />
          <CardButton icon="/bank.png" title="2024 GNP" subtitle="2024년도 차세대 원자력 정책센터 신규과제 공고" />
        </div>
      </div>
      <Link href={"/project"}>
        <button className="absolute top-0 right-0 hover:opacity-50">
          <Image src="/union-action.png" alt="Vercel Logo" width={54} height={54} />
        </button>
      </Link>
    </div>
  );
};

export default HomeProjectCard;
