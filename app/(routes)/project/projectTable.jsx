"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectTable = () => {
  const TEMP = [
    {
      title: "2024년도 제 1차 청정대기전환시설지원 융자사업 공고",
      subtitle: "한국대학교 인공지능대학 인공지능학과 이한국 교수",
      countdown: ["D-1"],

      tags: ["접수중", "과학기술정보통신부"],
    },
    {
      title: "인공아체세포 기반 재생치료 기술개발사업 신규과제 공모",
      subtitle: "한국대학교 인공지능대학 인공지능학과 이한국 교수",
      countdown: ["D-1"],

      tags: ["접수예정", "과학기술정보통신부"],
    },
    {
      title: "2024년도 우주개발기반조성 및 성과확산사업 신규과제 공모",
      subtitle: "한국대학교 인공지능대학 인공지능학과 이한국 교수",
      countdown: ["D-1"],

      tags: ["접수중", "과학기술정보통신부"],
    },
    {
      title: "[자체조달 사전규격공개] IITP 비전 및 중장기 경영전략 수립",
      subtitle: "한국대학교 인공지능대학 인공지능학과 이한국 교수",
      countdown: ["D-1"],

      tags: ["접수중", "과학기술정보통신부"],
    },
  ];

  const TEMP2 = [
    {
      title: "차세대 전기차 배터리 개선 연구",
      companyName: "이노배터리",
      countdown: ["D-1"],

      tags: [
        "전기차",
        "리튬이온 배터리",
        "에너지 밀도",
        "지속 가능성",
        "충전 인프라",
        "급속 충전",
        "사이클 수명",
        "안전성",
        "환경 친화적",
      ],
    },
    {
      title: "차세대 전기차 배터리 개선 연구",
      companyName: "이노배터리",
      countdown: ["D-1"],

      tags: [
        "전기차",
        "리튬이온 배터리",
        "에너지 밀도",
        "지속 가능성",
        "충전 인프라",
        "급속 충전",
        "사이클 수명",
        "안전성",
        "환경 친화적",
      ],
    },
    {
      title: "차세대 전기차 배터리 개선 연구",
      companyName: "이노배터리",
      countdown: ["D-1"],

      tags: [
        "전기차",
        "리튬이온 배터리",
        "에너지 밀도",
        "지속 가능성",
        "충전 인프라",
        "급속 충전",
        "사이클 수명",
        "안전성",
        "환경 친화적",
      ],
    },
    {
      title: "차세대 전기차 배터리 개선 연구",
      companyName: "이노배터리",
      countdown: ["D-1"],

      tags: [
        "전기차",
        "리튬이온 배터리",
        "에너지 밀도",
        "지속 가능성",
        "충전 인프라",
        "급속 충전",
        "사이클 수명",
        "안전성",
        "환경 친화적",
      ],
    },
  ];

  const TEMP3 = [
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      labName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      labName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      labName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      labName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      labName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
  ];

  const TEMP4 = [
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      labName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      companyName: "Pure Mathematics Lab",
      countdown: ["D-1"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      labName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      companyName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
    {
      title: "수학적 논리와 그룹 이론을 기반으로 한 암호학 및 보안 기술 혁신 연구",
      labName: "Pure Mathematics Lab",
      countdown: ["D-1", "순수수학"],
      tags: [
        "암호학",
        "보안 기술",
        "수학적 논리",
        "그룹 이론",
        "데이터 보호",
        "알고리즘",
        "수학 모델링",
        "암호 해독",
        "보안 프로토콜",
        "수학적 구조",
      ],
    },
  ];

  const [currentTab, setCurrentTab] = useState("정부");
  const TabsButton = ({ title, icon }) => (
    <button
      style={{ borderColor: "#ECECEC" }}
      className={`${
        currentTab === title ? "border-b-0" : ""
      } rounded-t-3xl border-2  w-full h-full bg-white hover:bg-gray-50 transition flex justify-center items-center space-x-2`}
      onClick={() => setCurrentTab(title)}
    >
      <Image src={icon} alt="RnDCircle menu1" className="" width={18} height={18} priority />
      <p className={`text-sm font-medium ${currentTab === title ? "text-rndBlue" : "text-gray757575"}`}>{title}</p>
    </button>
  );
  const Tabs = () => (
    <div className="h-14 w-full flex">
      <TabsButton icon="/project1.png" title="정부" />
      <TabsButton icon="/project2.png" title="기업" />
      <TabsButton icon="/project3.png" title="연구실" />
      <TabsButton icon="/project4.png" title="관심 프로젝트" />
    </div>
  );

  const Card = ({ item }) => (
    <Link href={"/project/detail"}>
      <button
        style={{ borderColor: "#ECECEC" }}
        className="rounded-3xl border-2 w-full flex flex-col items-start p-7 hover:bg-gray-100 transition"
      >
        <div className="flex flex-wrap gap-2">
          {item.countdown.map((item) => (
            <div className="px-3 py-0.5 rounded-full text-white font-bold text-2xs bg-rndBlue">{item}</div>
          ))}
        </div>
        <p className="text-left leading-7 font-bold mt-3 tracking-tighter">{item.title}</p>
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

  const TableBody = () => (
    <div
      style={{ borderColor: "#ECECEC" }}
      className="border-2 border-t-0 w-full rounded-b-3xl p-8 gap-6 grid grid-cols-2"
    >
      {currentTab === "정부"
        ? [...TEMP, ...TEMP].map((item) => <Card item={item} />)
        : currentTab === "기업"
        ? [...TEMP2, ...TEMP2].map((item) => <Card item={item} />)
        : currentTab === "연구실"
        ? [...TEMP3, ...TEMP3].map((item) => <Card item={item} />)
        : [...TEMP4, ...TEMP4].map((item) => <Card item={item} />)}
    </div>
  );

  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
      }}
      className="w-full flex justify-center bg-gradient-to-br relative"
    >
      <div className="max-w-screen-xl w-full h-full flex flex-col items-center z-20 text-center relative">
        <Tabs />
        <TableBody />
      </div>
    </div>
  );
};

export default ProjectTable;
