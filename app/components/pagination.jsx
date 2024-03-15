import Image from "next/image";
import React, { useState } from "react";

const PaginationComponent = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(3); // Starts from page 3 as per your image

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const pages = [];
  for (let p = 1; p <= totalPages; p++) {
    pages.push(
      <button
        key={p}
        onClick={() => goToPage(p)}
        className={`w-10 h-10 flex items-center justify-center rounded-2xl text-sm ${
          currentPage === p ? "bg-black text-white" : "text-black"
        }`}
      >
        {p}
      </button>
    );
  }

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center"
      >
        <Image src="/left.png" alt="Vercel Logo" className="" width={12} height={12} />
      </button>
      {pages}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center"
      >
        <Image src="/right.png" alt="Vercel Logo" className="" width={12} height={12} />
      </button>
    </div>
  );
};

export default PaginationComponent;
