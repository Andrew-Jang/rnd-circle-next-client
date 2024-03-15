"use client";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "antd";
import MessageModal from "@/app/components/messageModal";
import { useState } from "react";

export default function ProjectDetail() {
  const TEMP = [
    {
      title: "Mechanic AI LAB / MAL",
      subtitle: "한국대학교 인공지능대학 인공지능학과 이한국 교수",
      category: "인공지능",
      area: [
        "Multimodal interaction",
        "의료 이미징",
        "Robotics",
        "Computer Vision",
        "Machine Learning",
        "Explainable AI",
        "Object Detection",
        "Machine Learning",
        "Machine Learning",
      ],
      desc: "한국대학교 컴퓨터 공학과 연구실은 인공지능을 기반으로 딥러닝 및 머신러닝 기법을 활용하여 품질 검사 시스템 고도화, 스마트 물류 등의 영역에서 연구를 진행합니다.",
      info: `한국대학교 00대학 00전공
홍길동 조교수
      
• 대한민국 컴퓨터 인공지능 분야 연구원
• 한국대학교 컴퓨터 공학과 박사
• 한국대학교 컴퓨터 공학과 석사
• 한국대학교 컴퓨터 공학과 학사`,
    },
  ];
  const Back = () => (
    <div className="w-full">
      <Link href={"/project"}>
        <button className="w-12 h-12 flex rounded-full border-2 items-center justify-center">
          <Image src="/left.png" alt="Vercel Logo" width={16} height={16} />
        </button>
      </Link>
    </div>
  );

  const ActionButton = ({ icon, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null} // This will remove the footer buttons
          closeIcon={<span />} // This will remove the close button
        >
          <MessageModal />
        </Modal>
        <button
          style={{
            backdropFilter: "blur(10px)",
            borderColor: "#ECECEC",
            borderRadius: "26.39px",
          }}
          className="border-2 rounded-xl h-16 w-16 bg-white hover:bg-gray-100 transition space-y-1 flex flex-col items-center justify-center"
          onClick={(e) => {
            title === "메세지" && showModal();
            e.preventDefault();
          }}
        >
          <Image src={icon} alt="Vercel Logo" className="" width={16} height={16} />
          <p className="text-2xs font-medium">{title}</p>
        </button>
      </>
    );
  };

  const DetailCard = ({ item }) => (
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
        <Back />
        <div className="mt-8">
          <div
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderColor: "#ECECEC",
              borderRadius: "26.39px",
            }}
            className="w-full rounded-xl border-2 p-10 flex flex-col items-start"
          >
            <div className="flex w-full justify-between">
              <div className="space-y-4 flex flex-col items-start">
                <div className="px-2 py-0.5 rounded-full text-white font-bold text-2xs bg-rndBlue">{item.category}</div>
                <p className="text-3xl text-left leading-7 font-medium">{item.title}</p>
                <p className="text-sm text-left tracking-tighter text-gray757575">{item.subtitle}</p>
              </div>
              <div className="flex space-x-4">
                <ActionButton icon="/chat.png" title="메세지" />
                <ActionButton icon="/bookmarks.png" title="저장" />
              </div>
            </div>

            <div className="mt-20">
              <p className="text-lg tracking-tighter text-left leading-7 font-medium">주요 연구 영역</p>
              <div className="flex flex-wrap gap-2 max-w-2xl mt-6">
                {item.area.map((item) => (
                  <div
                    style={{ backgroundColor: "#FBFBFBE5", color: "#525252" }}
                    className="rounded-full px-3 py-0.5 border text-xs font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-lg tracking-tighter text-left leading-7 font-medium">연구실 개요</p>
              <div className="flex break-keep gap-2 mt-6 text-xs">{item.desc}</div>
            </div>
            <div className="mt-10">
              <p className="text-lg tracking-tighter text-left leading-7 font-medium">지도교수 정보</p>
              <div style={{ whiteSpace: "pre-wrap" }} className="flex break-keep gap-2 mt-6 text-xs">
                {item.info}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
          <Header />
          <DetailCard item={TEMP[0]} />
          <Footer />
          <Menu />
        </div>
      </main>
    </>
  );
}
