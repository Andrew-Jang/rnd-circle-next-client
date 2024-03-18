import Image from "next/image";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import LabTable from "@/app/components/labTable";
import Header from "@/app/components/header";
import Link from "next/link";
import ArticleCard from "./articleCard";
import ProfileCard from "../profileCard";
import HomeProjectCard from "../homeProjectCard";

export default function Lab() {
  const MiniCard = ({ icon, text, number, hasNew }) => (
    <button
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "26.39px",
        height: "90px",
      }}
      className="w-28 h-24 rounded-xl custom-border border-white flex flex-col items-center py-4 hover:brightness-110 transition backdrop-blur"
    >
      <div className="relative">
        <Image src={icon} alt="card1" className="" width={20} height={20} priority />
        {hasNew && <div className="absolute -top-0.5 -right-1.5 w-1 h-1 rounded-full bg-rndBlue"></div>}
      </div>
      <p className="font-montserrat text-xs text-gray757575">{text}</p>
      <p className="font-montserrat text-xs mt-1.5 font-semibold">{number}</p>
    </button>
  );

  const WelcomeSection = () => (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maxWidth: "1920px",
      }}
      className="w-full flex justify-center bg-gradient-to-br relative mt-8"
    >
      <div className="max-w-screen-xl w-full h-full flex items-center z-20 text-center relative">
        <Image src="/main-bg.png" alt="RnDCircle menu1" className="" width={1680} height={1058} priority />
        <div className="w-full h-full absolute flex">
          <div className="flex w-1/2 flex-col items-start flex-shrink-0">
            <h1
              style={{ lineHeight: 1.1 }}
              className="font-montserrat text-left xl:text-6.5xl 2xl:text-7.5xl leading-tight font-medium"
            >
              Mechanic <br /> AI LAB / MAL
            </h1>
            <h2 className="mt-2 text-lg 2xl:text-xl font-medium  text-gray757575">
              한국대학교 인공지능대학 인공지능학과
            </h2>

            <div className="grid grid-cols-2 gap-5 p-8 mt-4">
              <MiniCard icon={"/card1.png"} text={"Message"} number={"0"} />
              <MiniCard icon={"/card2.png"} text={"Request"} number={"25"} hasNew />
              <MiniCard icon={"/card3.png"} text={"Notice"} number={"4"} hasNew />
              <MiniCard icon={"/card4.png"} text={"Storage"} number={"73"} />
            </div>
          </div>
          <div className="w-1/2 h-full p-8 flex justify-end">
            <ProfileCard
              title={"교수"}
              name={"이한국"}
              desc={"한국대학교 인공지능대학"}
              address={"Seoul, Republic of Korea"}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const Bar = ({ title, height, color }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="h-[134px] w-[43px] 2xl:h-[124px] 2xl:w-[50px] relative">
          <Image
            src="/bar.png"
            alt="Vercel Logo"
            layout="fill" // required
            objectFit="contain" // change to suit your needs
          />
        </div>
        <div
          style={{ backgroundColor: color, height }}
          className="rounded-[13px] 2xl:rounded-[15px] absolute bottom-0 w-[43px] 2xl:w-[50px] hover:opacity-70 cursor-pointer transition"
        ></div>
      </div>
      <p style={{ fontSize: "10px", color: "#525252" }} className="font-montserrat mt-0.5 2xl:mt-1">
        {title}
      </p>
    </div>
  );

  const NormalCard = () => (
    <button
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "26.39px",
      }}
      className="w-44 p-[1.5rem] py-[1.5rem] 2xl:w-48 2xl:p-8 2xl:py-8 h-full custom-border flex flex-col justify-between flex-shrink-0 backdrop-blur hover:opacity-60 transition cursor-pointer"
    >
      <p className="font-montserrat text-[24px] 2xl:text-[27px] text-left leading-7 font-medium">
        Edit <br /> Website
      </p>
      <p className="text-xs text-left  text-gray757575">
        나의 웹사이트에 <br /> 새 정보를 등록해보세요
      </p>
    </button>
  );

  const WavvyCard = ({ title1, title2, subtitle }) => (
    <div className="relative hover:opacity-60 transition cursor-pointer">
      <Image src="/union.png" alt="Vercel Logo" className="" width={400} height={151} unoptimized />
      <div className="w-full h-full absolute top-0 p-[1.5rem] py-[1.5rem] 2xl:p-8 2xl:py-8">
        <p style={{ fontWeight: "500" }} className="font-montserrat text-[24px] 2xl:text-[27px] text-left leading-7">
          {title1} <br /> {title2}
        </p>
        <p className="text-xs text-left mt-2.5 2xl:mt-3 text-gray757575">{subtitle}</p>
      </div>
      <button className="absolute top-0 right-0 ">
        <Image src="/union-action.png" alt="Vercel Logo" width={54} height={54} />
      </button>
    </div>
  );

  const VisitorMetrics1 = () => (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "26.39px",
      }}
      className="w-full h-[16rem] 2xl:h-[17.2rem] rounded-xl custom-border flex flex-col justify-between px-2 2xl:px-3 pt-[1.5rem] 2xl:pt-8 pb-3 transition flex-shrink-0 backdrop-blur"
    >
      <div className="flex items-center justify-between w-full px-5 2xl:px-5 mb-8">
        <p className="font-montserrat font-medium text-[24px] 2xl:text-[27px] text-left">Visitor metrics</p>
        <div className="flex items-center space-x-2">
          <button className="rounded-full py-1.5 px-4 text-white font-montserrat text-xs font-medium hover:brightness-150 transition bg-rndBlue">
            웹 조회수
          </button>
          <button
            style={{ backgroundColor: "#FBFBFB", borderColor: "#ECECEC" }}
            className="bg-black rounded-full py-1.5 px-4 font-montserrat text-xs font-medium border hover:brightness-110 transition text-gray757575"
          >
            매칭 제안수
          </button>
        </div>
      </div>
      <div
        style={{ borderRadius: "24px" }}
        className="w-full h-64 custom-border relative flex items-center px-4 2xl:px-5 justify-between 2xl:pt-2"
      >
        <Bar title={"MON"} height={"4rem"} color={"#9397FF"} />
        <Bar title={"TUE"} height={"2rem"} color={"#C7CAFF"} />
        <Bar title={"WED"} height={"3rem"} color={"#6F75FF"} />
        <Bar title={"THU"} height={"4rem"} color={"#323AFF"} />
        <Bar title={"FRI"} height={"3rem"} color={"#6F75FF"} />
        <Bar title={"SAT"} height={"5rem"} color={"#000AFF"} />
        <Bar title={"SUN"} height={"7.7rem"} color={"#000000"} />
      </div>
    </div>
  );

  const VisitorMetrics2 = () => (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "26.39px",
      }}
      className="w-full h-[12.25rem] 2xl:h-[13rem] rounded-xl custom-border border-white flex flex-col justify-between px-2 py-[1.5rem] 2xl:py-8 2xl:px-3 transition flex-shrink-0 backdrop-blur"
    >
      <div className="space-y-[1.7rem] 2xl:space-y-8 flex flex-col items-start">
        <p className="font-montserrat font-medium text-[24px] 2xl:text-[27px] text-left leading-7 px-5">
          Visitor metrics
        </p>
        <div style={{ borderRadius: "24px", height: "6.5rem" }} className="w-full h-24 custom-border relative">
          <Image src="/metrics.png" alt="Vercel Logo" className="" width={537} height={120} />
          <Image src="/metrics-graph.png" alt="Vercel Logo" className="absolute bottom-0" width={637} height={110} />
        </div>
      </div>
    </div>
  );

  const CardSection = () => (
    <div className="-mt-[220px] 2xl:-mt-[245px] max-w-screen-xl w-full h-full z-20 flex">
      <div className="w-full h-full">
        <div className="w-full h-[220px] 2xl:h-[246px] bg-opacity-50 flex justify-end pt-[1.5rem] pr-[1.5rem] 2xl:pt-8 2xl:pr-8">
          <NormalCard />
        </div>
        <div className="w-full h-[502px] 2xl:h-[548px] bg-opacity-50 flex pt-[1.5rem] pr-[1.5rem] space-x-6 2xl:pt-8 2xl:pr-8 2xl:space-x-8">
          <ArticleCard />
          <div className="space-y-6 2xl:space-y-8 w-full">
            <VisitorMetrics1 />
            <VisitorMetrics2 />
          </div>
        </div>
      </div>

      <div className="w-auto max-w-1.5sm 2xl:max-w-xl h-full flex py-[1.5rem] space-x-[1.5rem] 2xl:py-8 2xl:space-x-8 flex-shrink-0">
        <div className="space-y-5">
          <WavvyCard title1={"Visit"} title2={"Website"} subtitle={"나의 연구실 웹사이트로 이동해보세요"} />
          <WavvyCard title1={"Project"} title2={"Management"} subtitle={"연구실의 프로젝트를 관리하세요"} />
          <HomeProjectCard />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <main className="flex w-full items-center justify-center md:flex-row flex-col bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full">
          <Header />
          <WelcomeSection />
          <CardSection />
          <LabTable />
          <Footer />
          <Menu />
        </div>
      </main>
    </>
  );
}
