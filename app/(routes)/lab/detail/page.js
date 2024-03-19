"use client";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import Header from "@/app/components/header";
import ActionButton from "@/app/components/actionButton";
import BackButton from "@/app/components/backButton";
import { TEMP } from "./sampleJSON";
import HashtagCell from "@/app/components/hashtagCell";
import HashtagCell2 from "@/app/components/hashtagCell2";

export default function Lab() {
  const DetailCard = ({ item }) => (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
      }}
      className="w-full flex justify-center bg-gradient-to-br relative mt-8"
    >
      <div className="max-w-screen-xl w-full h-full">
        <BackButton path="/lab" />

        <div className="mt-8">
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "26.39px",
            }}
            className="w-full custom-border p-10 flex flex-col items-start backdrop-blur"
          >
            <div className="flex w-full justify-between">
              <div className="space-y-4 flex flex-col items-start">
                <HashtagCell item={item.category} index={0} />
                <p className="text-3xl text-left leading-7 font-medium">{item.title}</p>
                <p className="text-sm text-left  text-gray757575">{item.subtitle}</p>
              </div>
              <div className="flex space-x-4">
                <ActionButton icon="/chat.png" title="메세지" />
                <ActionButton icon="/bookmarks.png" title="저장" />
              </div>
            </div>

            <div className="mt-16">
              <p className="text-lg  text-left leading-7 font-medium">주요 연구 영역</p>
              <div className="flex flex-wrap gap-2 max-w-2xl mt-6">
                {item.area.map((item) => (
                  <HashtagCell2 item={item} />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-lg  text-left leading-7 font-medium">연구실 개요</p>
              <div className="flex break-keep gap-2 mt-6 text-xs">{item.desc}</div>
            </div>
            <div className="mt-10">
              <p className="text-lg text-left leading-7 font-medium">지도교수 정보</p>
              <div style={{ whiteSpace: "pre-wrap" }} className="flex break-keep gap-2 mt-6 text-xs leading-5">
                {item.info}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
          <Header />
          <DetailCard item={TEMP[0]} />
          <Footer />
          <Menu />
        </div>
      </main>
    </>
  );
}
