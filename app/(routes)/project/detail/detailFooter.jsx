import MessageModal from "@/app/components/modals/messageModal";
import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const DetailFooter = ({ hasMessage }) => {
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
    <div className="w-full mt-8 flex justify-end space-x-4">
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // This will remove the footer buttons
        closeIcon={<span />} // This will remove the close button
      >
        <MessageModal />
      </Modal>
      {hasMessage && (
        <button
          onClick={(e) => {
            showModal();
            e.preventDefault();
          }}
          className="px-6 h-12 flex items-center justify-center border-2 font-montserrat font-bold text-xs rounded-full hover:bg-opacity-80 transition flex-shrink-0 space-x-2"
        >
          <Image src={"/chat.png"} alt="Vercel Logo" className="" width={20} height={20} />
          <p>메세지 전송하기</p>
        </button>
      )}
      <button className="px-6 h-12 flex items-center justify-center bg-black font-montserrat text-white font-bold text-xs rounded-full hover:bg-opacity-80 transition flex-shrink-0 space-x-2">
        <Image src={"/handshake.png"} alt="Vercel Logo" className="" width={20} height={20} />
        <p>{hasMessage ? "제안하기" : "함께할 파트너 찾기"}</p>
      </button>
    </div>
  );
};

export default DetailFooter;
