"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProjectCard from "./projectCard";

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
      style={{ borderBottomWidth: currentTab === title ? "0" : "2px" }}
      className={`${
        currentTab === title ? "border-b-0" : ""
      } rounded-t-3xl custom-border w-full h-full bg-white group flex justify-center items-center space-x-2`}
      onClick={() => setCurrentTab(title)}
    >
      <Image
        src={currentTab === title ? `${icon}-on.png` : `${icon}.png`}
        alt="RnDCircle menu1"
        className={currentTab !== title && "group-hover:brightness-50 transition"}
        width={18}
        height={18}
        priority
        unoptimized
      />
      <p
        style={{ color: currentTab === title ? "" : "#a0a0a0" }}
        className={`text-sm font-medium ${
          currentTab === title ? "text-rndBlue" : "group-hover:brightness-50 transition"
        }`}
      >
        {title}
      </p>
    </button>
  );
  const Tabs = () => (
    <div className="h-14 w-full flex -space-x-2px">
      <TabsButton icon="/project1" title="정부" />
      <TabsButton icon="/project2" title="기업" />
      <TabsButton icon="/project3" title="연구실" />
      <TabsButton icon="/project4" title="관심 프로젝트" />
    </div>
  );

  const TableBody = () => (
    <div style={{ borderTopWidth: 0 }} className="custom-border w-full rounded-b-3xl p-8 gap-6 grid grid-cols-2">
      {currentTab === "정부"
        ? [...TEMP, ...TEMP].map((item, index) => <ProjectCard key={index} item={item} />)
        : currentTab === "기업"
        ? [...TEMP2, ...TEMP2].map((item, index) => <ProjectCard key={index} item={item} />)
        : currentTab === "연구실"
        ? [...TEMP3, ...TEMP3].map((item, index) => <ProjectCard key={index} item={item} />)
        : [...TEMP4, ...TEMP4].map((item, index) => <ProjectCard key={index} item={item} />)}
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
