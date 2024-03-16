import { Image } from "antd";
import React from "react";

const RequestModal = () => {
  return (
    <div className="flex flex-col items-center py-20 font-spoqa">
      <Image src="/check.png" alt="Vercel Logo" className="" width={36} height={36} />
      <p className="text-xl font-medium mt-6">요청이 완료되었습니다.</p>
      <p className="text-xs text-gray757575 mt-4">
        영업일 기준 24시간 이내에 담당자가 확인 후 피드백을 공유드리겠습니다.
      </p>
    </div>
  );
};

export default RequestModal;
