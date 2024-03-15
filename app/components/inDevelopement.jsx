import Image from "next/image";
import React from "react";

const InDevelopement = () => {
  return (
    <div className="flex flex-col items-center py-20 tracking-tighter">
      <Image src="/timer.png" alt="Vercel Logo" className="" width={36} height={36} />
      <p className="text-xl font-medium mt-6">지금은 서비스 준비 중입니다.</p>
      <p className="text-xs text-gray757575 mt-4">
        현재 페이지는 서비스 준비 중입니다.
        <br />곧 오픈 될 예정이니 많은 관심 부탁드립니다.
      </p>
    </div>
  );
};

export default InDevelopement;
