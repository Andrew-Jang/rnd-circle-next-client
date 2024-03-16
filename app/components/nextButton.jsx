import Image from "next/image";
import React from "react";

const NextButton = () => {
  return (
    <button className="w-12 h-12 flex rounded-full border-2 items-center justify-center flex-shrink-0 hover:bg-gray-100 transition">
      <Image src="/right.png" alt="Vercel Logo" width={16} height={16} />
    </button>
  );
};

export default NextButton;
