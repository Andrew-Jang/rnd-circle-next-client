"use client";
import RequestModal from "@/app/components/modals/requestModal";
import { Modal } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ArticleCard = () => {
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

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 5000);
    }
    // Clear the timer if the component is unmounted or the modal is manually closed
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // This will remove the footer buttons
        closeIcon={<span />} // This will remove the close button
        centered
      >
        <RequestModal />
      </Modal>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "26.39px",
        }}
        className="w-[17rem] 2xl:w-72 h-full custom-border border-white flex flex-col justify-between p-[1.4rem] py-[1.4rem] 2xl:p-8 2xl:py-8 transition flex-shrink-0 backdrop-blur"
      >
        <div className="space-y-4 2xl:space-y-6 h-4 flex flex-col items-start">
          <p className="font-medium font-montserrat text-[24px] 2xl:text-[27px] text-left leading-7">Article</p>
          <p style={{ lineHeight: "1.1rem" }} className="text-xs text-left  text-gray757575">
            AI와 함께 나의 연구실 웹사이트에
            <br /> 게시할 새로운 아티클을 생성해보세요
          </p>
          <button
            onClick={showModal}
            className="bg-black rounded-full py-1.5 px-4 text-white font-montserrat text-xs font-medium hover:opacity-75 transition"
          >
            Create
          </button>
        </div>
        <div className="mt-4 2xl:mt-8">
          <Image src="/article.png" alt="Vercel Logo" className="object-contain" width={290} height={370} />
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
