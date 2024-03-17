"use client";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MessageModal from "./modals/messageModal";

const LabTable = () => {
  const researchLabs = [
    {
      category: "인공지능",
      labs: [
        {
          name: "Mechanic AI LAB",
          affiliation: "한국대학교 인공지능학과",
          leader: "이규목",
          focus: "Multimodal / 워크 이미징 / Robotics",
        },
      ],
    },
    {
      category: "순수수학",
      labs: [
        {
          name: "Pure Mathematics Lab",
          affiliation: "한국대학교 수학과",
          leader: "김수리",
          focus: "수학적 논리 / 그룹 이론 / 토폴로지",
        },
      ],
    },
    {
      category: "응용수학",
      labs: [
        {
          name: "Applied Mathematics Group",
          affiliation: "연세대학교 수학과",
          leader: "이용욱",
          focus: "수치해석 / 프로그래밍 언어 / 최적화",
        },
      ],
    },
    {
      category: "통계학",
      labs: [
        {
          name: "Statistics Lab",
          affiliation: "고려대학교 통계학과",
          leader: "박통계",
          focus: "생물통계학 / 시계열 분석 / 베이지안 통계",
        },
      ],
    },
    {
      category: "계산수학",
      labs: [
        {
          name: "Computational Math Group",
          affiliation: "POSTECH 수학과",
          leader: "임계산",
          focus: "수치해석 / 계산기하학 / 병렬 컴퓨팅",
        },
      ],
    },
    {
      category: "확률론",
      labs: [
        {
          name: "Probability Theory Lab",
          affiliation: "서강대학교 확률론 및 통계학과",
          leader: "정확률",
          focus: "확률과정 / 마르코프 연쇄 / 랜덤 그래프 이론",
        },
      ],
    },
    {
      category: "기하학",
      labs: [
        {
          name: "Geometry Research Center",
          affiliation: "성균관대학교 수학과",
          leader: "이기하",
          focus: "위상기하학 / 대수기하학 / 비유클리드 기하학",
        },
      ],
    },
    {
      category: "대수학",
      labs: [
        {
          name: "Algebraic Structures Lab",
          affiliation: "한양대학교 수학과",
          leader: "박대수",
          focus: "군 이론 / 환 이론 / 대수적 군물",
        },
      ],
    },
    {
      category: "수리물리학",
      labs: [
        {
          name: "Mathematical Physics Lab",
          affiliation: "경희대학교 물리학과",
          leader: "김수리물",
          focus: "양자역학 / 수리물리학 / 통계물리학",
        },
      ],
    },
    {
      category: "자연과학",
      labs: [
        {
          name: "Natural Sciences Research Lab",
          affiliation: "중앙대학교 자연과학대학",
          leader: "이자연",
          focus: "자연과학 전반 / 통합과학 연구",
        },
      ],
    },
  ];

  const Cell = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookmarkChecked, setBookmarkChecked] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        <Link className="h-12 w-full" href="/lab/detail">
          <div className="h-12 flex items-center px-4 hover:bg-gray-100 transition rounded-lg cursor-pointer">
            <div style={{ width: "4.5rem" }} className="flex justify-center">
              <div className="px-2 py-0.5 rounded-full text-white font-medium text-2xs bg-rndBlue">{item.category}</div>
            </div>
            <div className="flex items-center space-x-1 w-80 justify-center flex-shrink-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setBookmarkChecked(!bookmarkChecked);
                }}
              >
                <Image
                  src={bookmarkChecked ? "/bookmark-filled.png" : "/bookmark.png"}
                  alt="Vercel Logo"
                  className=""
                  width={16}
                  height={16}
                  unoptimized
                />
              </button>
              <p className="font-bold">{item.labs[0].name}</p>
            </div>
            <div className="flex items-center w-60 justify-center flex-shrink-0 ">
              <p className="font-medium text-xs">{item.labs[0].affiliation}</p>
            </div>
            <div className="flex items-center w-32 justify-center flex-shrink-0 ">
              <p className="font-medium text-xs">{item.labs[0].leader}</p>
            </div>
            <div className="flex items-center w-72 justify-center flex-shrink-0 ">
              <p className="font-medium text-xs">{item.labs[0].focus}</p>
            </div>
            <div className="flex space-x-6">
              <button
                style={{
                  borderRadius: "26.39px",
                }}
                className="custom-border rounded-xl h-10 px-3.5 bg-white hover:bg-gray-200 transition backdrop-blur"
              >
                <Image src="/open.png" alt="Vercel Logo" className="" width={18} height={18} />
              </button>
              <button
                style={{
                  borderRadius: "26.39px",
                }}
                className="custom-border h-10 px-3.5 bg-white hover:bg-gray-200 transition backdrop-blur"
                onClick={(e) => {
                  e.preventDefault();
                  showModal();
                }}
              >
                <Image src="/chat.png" alt="Vercel Logo" className="" width={18} height={18} />
              </button>
            </div>
          </div>
        </Link>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null} // This will remove the footer buttons
          closeIcon={<span />} // This will remove the close button
          centered
        >
          <MessageModal />
        </Modal>
      </>
    );
  };
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
      <div
        style={{
          borderRadius: "26.39px",
        }}
        className="bg-custom-pattern max-w-screen-xl w-full h-full z-20 text-center relative custom-border py-8 px-2 backdrop-blur"
      >
        <p
          style={{ fontWeight: "500", fontSize: "27px" }}
          className="font-montserrat text-2xl text-left leading-7 mb-4 px-6"
        >
          LAB
        </p>
        <div className="w-full flex space-x-8 h-12 px-6">
          <div className="relative flex w-full items-center">
            <input
              style={{ backgroundColor: "#EBEBEB", fontWeight: "500" }}
              className="w-full h-full rounded-full px-6 text-xs placeholder-gray757575 font-medium outline-none"
              placeholder="전국의 연구실을 키워드로 검색해보세요"
            />
            <button
              style={{ borderRadius: "14px" }}
              className="w-9 h-9 absolute right-4 bg-white bg-opacity-60 hover:bg-opacity-100 transition flex items-center justify-center"
            >
              <Image src="/filter.png" alt="Vercel Logo" className="" width={12} height={20} />
            </button>
          </div>
          <button className="px-12 h-full flex items-center justify-center bg-black font-montserrat text-white font-bold text-xs rounded-full hover:bg-opacity-80 transition">
            Search
          </button>
        </div>

        <div style={{ maxHeight: "36rem" }} className="mt-8 w-full overflow-y-auto px-6">
          {[...researchLabs, ...researchLabs].map((item, index) => (
            <Cell id={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabTable;
