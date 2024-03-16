import { Image } from "antd";
import Link from "next/link";
import React from "react";

const RegisterModal = () => {
  return (
    <div className="flex flex-col items-center py-16 font-spoqa">
      <Image src="/register-complete.png" alt="Vercel Logo" className="" width={50} height={50} />
      <p className="text-2xl font-medium mt-6">프로젝트 등록이 완료되었습니다.</p>
      <Link href={"/project"}>
        <button className="text-xs text-gray757575 py-2 px-6 border rounded-full hover:bg-gray-100 transition mt-4">
          바로 공고 확인하기
        </button>
      </Link>
    </div>
  );
};

export default RegisterModal;
