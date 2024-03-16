import Image from "next/image";
import Link from "next/link";
import React from "react";

const BackButton = ({ path }) => {
  return (
    <Link href={path}>
      <button className="w-12 h-12 flex rounded-full border-2 items-center justify-center hover:bg-gray-100 transition">
        <Image src="/left.png" alt="Vercel Logo" width={16} height={16} />
      </button>
    </Link>
  );
};

export default BackButton;
