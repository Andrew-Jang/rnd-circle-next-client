import React, { useState } from "react";
import HashtagCell from "./hashtagCell";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "antd";
import MessageModal from "./modals/messageModal";

const TableCell = ({ item }) => {
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
      <Link className="h-12 w-full" href={"/lab/detail"}>
        <div className="h-12 flex items-center px-4 hover:bg-gray-100 transition rounded-lg cursor-pointer">
          <div className="w-[3.5rem] 2xl:w-[4.5rem] flex justify-center flex-shrink-0">
            <HashtagCell item={item.category} index={0} />
          </div>
          <div className="w-[20rem] 2xl:w-80 flex items-center space-x-1 justify-center flex-shrink-0">
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
            <p className="font-medium text-sm 2xl:text-base">{item.labs[0].name}</p>
          </div>
          <div className="w-[11rem] 2xl:w-60 flex items-center justify-center flex-shrink-0 ">
            <p className="font-normal text-[11px] 2xl:text-xs">{item.labs[0].affiliation}</p>
          </div>
          <div className="w-[7rem] 2xl:w-32 flex items-center  justify-center flex-shrink-0 ">
            <p className="font-normal text-[11px] 2xl:text-xs">{item.labs[0].leader}</p>
          </div>
          <div className="w-[16rem] 2xl:w-72 flex items-center justify-center flex-shrink-0 ">
            <p className="font-normal text-[11px] 2xl:text-xs">{item.labs[0].focus}</p>
          </div>
          <div className="flex space-x-4 2xl:space-x-6">
            {!item.disableWeb ? (
              <button
                style={{
                  borderRadius: "26.39px",
                }}
                className="custom-border h-10 w-12 flex items-center justify-center bg-white hover:bg-gray-200 transition"
              >
                <Image src="/open.png" alt="Vercel Logo" className="" width={18} height={18} />
              </button>
            ) : (
              <div className="w-12" />
            )}
            <button
              style={{
                borderRadius: "26.39px",
              }}
              onClick={(e) => {
                showModal();
                e.preventDefault();
              }}
              className="custom-border h-10 w-12 flex items-center justify-center bg-white hover:bg-gray-200 transition"
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

export default TableCell;
