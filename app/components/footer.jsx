import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
      }}
      className="w-full flex justify-center relative mt-60 border-t"
    >
      <div className="max-w-screen-xl w-full z-20 text-center">
        <div className="flex items-start py-28">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="RnDCircle Logo"
              className="hover:opacity-60 transition"
              width={100}
              height={24}
              priority
            />
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 text-xs ">
            <div className="flex flex-col items-start">
              {/* Column 1 */}
              <h3 className="font-bold mb-12">주요 기능</h3>
              <div className="flex flex-col items-start font-medium space-y-6 w-full">
                <div className="space-y-2 w-full flex flex-col items-start">
                  <button className="tracking-tight">파트너 모집 및</button>
                  <button className="tracking-tight">프로젝트 등록</button>
                </div>
                <div className="space-y-2 w-full flex flex-col items-start">
                  <button className="tracking-tight">정부 프로젝트 등록</button>
                  <button className="tracking-tight">기업 프로젝트 등록</button>
                  <button className="tracking-tight">연구소 프로젝트 등록</button>
                </div>
                <div className="space-y-2 w-full flex flex-col items-start">
                  <button className="tracking-tight">연구실 찾기</button>
                  <button className="tracking-tight">맞춤형 파트너 제안</button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              {/* Column 2 */}
              <h3 className="font-bold mb-12">서비스 안내</h3>
              <div className="flex flex-col items-start font-medium space-y-6 w-full">
                <div className="space-y-2 w-full flex flex-col items-start">
                  <button className="tracking-tight">연구소 고객 서비스</button>
                  <button className="tracking-tight">기업 고객 서비스</button>
                  <button className="tracking-tight">요금 및 멤버십</button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              {/* Column 3 */}
              <h3 className="font-bold mb-12">회사</h3>
              <div className="flex flex-col items-start font-medium space-y-6 w-full">
                <div className="space-y-2 w-full flex flex-col items-start">
                  <button className="tracking-tight">회사 소개</button>
                  <button className="tracking-tight">인재채용</button>
                  <button className="tracking-tight">재정안내</button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              {/* Column 4 */}
              <h3 className="font-bold mb-12">문의</h3>
              <div className="flex flex-col items-start font-medium space-y-6 w-full">
                <div className="space-y-2 w-full flex flex-col items-start">
                  <p className="tracking-tight">info@rndcircle.io</p>
                  <p className="tracking-tight">010.6312.6417</p>
                  <p className="tracking-tight">(연중무휴)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 pb-20 flex items-center justify-between w-full border-t">
          <div className="text-xs">
            <p>Copyright(c) 2024 D.Circle. All rights reserved.</p>
          </div>
          <div className="text-xs flex space-x-8 ">
            <button>이용약관</button>
            <button>개인정보처리방침</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
