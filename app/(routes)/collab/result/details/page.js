"use client";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import Header from "@/app/components/header";
import BackButton from "@/app/components/backButton";
import { TEMP } from "./sampleJSON";
import DetailFooter from "@/app/(routes)/project/detail/detailFooter";
import CollabDetailHeader from "./collabDetailHeader";
import CollabDetailBody from "./collabDetailBody";
import CollabSenario from "./collabSenario";

export default function ProjectDetail() {
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
        <BackButton path="/project" />
        <div className="mt-8">
          <div
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderColor: "#ECECEC",
              borderRadius: "26.39px",
            }}
            className="w-full rounded-xl border-2 p-10 flex flex-col items-start"
          >
            <CollabDetailHeader item={item} />
            <CollabDetailBody item={item} />
            <DetailFooter hasMessage />
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
          <CollabSenario />
          <Footer />
          <Menu />
        </div>
      </main>
    </>
  );
}
