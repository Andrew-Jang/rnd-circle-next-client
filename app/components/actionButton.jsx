import { Modal } from "antd";
import React, { useState } from "react";
import MessageModal from "./modals/messageModal";
import Image from "next/image";

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

export default ActionButton;
