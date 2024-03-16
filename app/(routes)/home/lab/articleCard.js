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
      >
        <RequestModal />
      </Modal>
      <div
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderColor: "#ECECEC",
          borderRadius: "26.39px",
          // height: "212px",
        }}
        className="w-72 h-full rounded-xl border-2 border-white flex flex-col justify-between p-8 py-8 transition flex-shrink-0"
      >
        <div className="space-y-6 flex flex-col items-start">
          <p style={{ fontWeight: "500", fontSize: "27px" }} className="font-montserrat text-2xl text-left leading-7">
            Article
          </p>
          <p className="text-xs text-left  text-gray757575">
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
        <div className="mt-8">
          <Image src="/article.png" alt="Vercel Logo" className="" width={290} height={370} />
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
