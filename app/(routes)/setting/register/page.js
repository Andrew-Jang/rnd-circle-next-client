"use client";
import BackButton from "@/app/components/backButton";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import MessageModal from "@/app/components/modals/messageModal";
import RegisterModal from "@/app/components/modals/registerModal";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MENU = [
    { path: "/setting/metrics", icon: "/register1.png", title: "View metrics" },
    { path: "/setting/edit-website", icon: "/register2.png", title: "Edit website" },
    { path: "/setting/register", icon: "/register3.png", title: "Register Project" },
    { path: "/setting/create-article", icon: "/register4.png", title: "Create Article" },
    { path: "/setting/promotion", icon: "/register5.png", title: "Promotion" },
    { path: "/setting/edit-profile", icon: "/register6.png", title: "Edit Profile" },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const LeftPanel = () => (
    <div className="w-64 flex-shrink-0">
      {MENU.map((item) => (
        <Link href={"/setting/register"} className="w-full">
          <div
            className={`${
              pathname === item.path ? "bg-rndBlue text-white" : "bg-white hover:bg-gray-100"
            } w-full h-12 rounded-full transition flex items-center px-6`}
          >
            <div className="w-7">
              <Image
                src={item.icon}
                className="object-none"
                alt="Vercel Logo"
                style={{
                  filter: pathname === item.path ? "grayscale(100%) brightness(1)" : "grayscale(100%) brightness(0)",
                }}
                width={16}
                height={16}
              />
            </div>
            <p className="font-montserrat text-xs font-medium">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  const InputSection = ({ isBig, placeholder, title }) => (
    <div className="w-full">
      <p className="text-xs text-gray757575 mb-2">{title}</p>
      {isBig ? (
        <textarea
          style={{ borderColor: "##ECECEC" }}
          placeholder={placeholder}
          className="bg-white rounded-xl border-2 outline-none min-h-40 p-4 text-xs w-full placeholder-black"
        />
      ) : (
        <input
          style={{ borderColor: "##ECECEC" }}
          placeholder={placeholder}
          className="bg-white rounded-xl border-2 outline-none min-h-12 px-4 text-xs w-full placeholder-black"
        />
      )}
    </div>
  );
  const RightPanel = () => (
    <div className="w-full">
      <div
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderColor: "#ECECEC",
          borderRadius: "26.39px",
        }}
        className="w-full rounded-xl border-2 p-8 flex flex-col items-start"
      >
        <h1 className="font-medium mb-4">새 프로젝트 등록하기</h1>
        <div className="space-y-4 w-full">
          <InputSection title="제목" placeholder={"프로젝트 공고의 주제를 간결하고 명확하게 표현해주세요."} />
          <InputSection
            isBig
            title="프로젝트 개요"
            placeholder="프로젝트에 대한 소개 및 협업을 원하는 배경과 목적에 대해 작성해주세요. 협력을 원하는 연구 분야 또는 주제를 명시하고, 협력을 통해 얻고자 하는 기대효과를 설명해주세요. "
          />
          <InputSection
            isBig
            title="연구실 및 기업 소개"
            placeholder="귀하의 기업 또는 연구실 소개를 부탁드립니다. 기업 및 연구실의 핵심 역량과 성과를 작성해주세요."
          />
          <InputSection
            isBig
            title="보유 기술 및 자원 개요"
            placeholder="기업 또는 연구실이 보유한 주요 기술과 활용 가능한 자원을 간략히 설명 부탁드립니다"
          />
          <InputSection
            isBig
            title="협력 희망 분야"
            placeholder="기업 및 연구실이 함께할 주요 연구 분야를 간략히 기술해주세요. 어떤 기술이나 분야를 중점적으로 다룰 것인지 포함시켜주세요."
          />
          <InputSection
            isBig
            title="참여 대상"
            placeholder="타 연구실, 기업, 연구원, 교수 등 협업에 참여 가능한 대상을 명시해주세요."
          />
          <InputSection
            isBig
            title="조건 및 제약사항"
            placeholder="참여 조건, 협업 기간, 예산 등 조건에 대해서 명시해주세요. 기업과의 협업 시 특별한 제약이나 조건이 있는 경우에도 해당 내용을 작성해주세요."
          />
          <InputSection isBig title="마감일" placeholder="협력 참여 신청 마감일을 작성해주세요." />
          <InputSection isBig title="기타 정보" placeholder="기타 중요한 정보나 특이사항에 대한 안내를 작성해주세요." />
        </div>
        <div className="w-full flex justify-end mt-8">
          <button
            onClick={showModal}
            className="px-6 h-12 flex items-center justify-center bg-black font-montserrat text-white font-bold text-xs rounded-full hover:bg-opacity-80 transition flex-shrink-0 space-x-2"
          >
            <p>프로젝트 등록하기</p>
          </button>
        </div>
      </div>
    </div>
  );
  const MainSection = () => (
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
        <BackButton path={"/home/lab"} />
        <div className="flex w-full mt-8 space-x-6">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
  return (
    <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
        <Header />
        <MainSection />
        <Footer />
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // This will remove the footer buttons
        closeIcon={<span />} // This will remove the close button
      >
        <RegisterModal />
      </Modal>
    </main>
  );
};

export default page;
