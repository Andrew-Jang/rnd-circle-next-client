import Image from "next/image";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import LabTable from "@/app/(routes)/home/lab/labTable";
import Header from "@/app/components/header";
import ProfileCard from "../profileCard";
import HomeProjectCard from "../homeProjectCard";
import MiniCard from "../MiniCard";

export default function Company() {
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
        <Image src="/company-bg.png" alt="RnDCircle menu1" className="" width={1680} height={1058} priority />
        <div className="w-full h-full absolute flex">
          <div className="flex w-1/2 flex-col items-start flex-shrink-0">
            <h1 className="font-montserrat text-left text-7xl leading-tight font-medium">RnDcircle</h1>
            <h2 className="mt-2 text-xl font-medium  text-gray757575">주식회사 알앤디써클</h2>

            <div className="grid grid-cols-2 gap-5 p-8 mt-4">
              <MiniCard icon={"/card1.png"} text={"Message"} number={"0"} />
              <MiniCard icon={"/card2.png"} text={"Request"} number={"25"} hasNew />
              <MiniCard icon={"/card3.png"} text={"Notice"} number={"4"} hasNew />
              <MiniCard icon={"/card4.png"} text={"Storage"} number={"73"} />
            </div>
          </div>
          <div className="w-1/2 h-full p-8 flex justify-end">
            <ProfileCard title={"대표"} name={"이윤구"} desc={"주식회사 디써클"} address={"Seoul, Republic of Korea"} />
          </div>
        </div>
      </div>
    </div>
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

  const CardSection = () => (
    <div className="-mt-[230px] 2xl:-mt-[245px] max-w-screen-xl w-full h-full z-20 flex">
      <div className="w-full h-full">
        <div className="h-[234px] 2xl:h-[246px] w-full flex justify-end pt-[1.5rem] pr-[1.5rem] 2xl:pt-8 2x:pr-8"></div>
        <div className="w-full pt-[1.5rem] pr-[1.5rem] 2xl:pt-8 2x:pr-8 flex space-x-[1.5rem] 2xl:space-x-8">
          <WavvyCard title1={"Register"} title2={"Project"} subtitle={"새로운 프로젝트를 등록하세요"} />
          <WavvyCard title1={"Project"} title2={"Management"} subtitle={"저장한 프로젝트를 관리하세요"} />
        </div>
      </div>

      <div className="w-full h-full py-[1.5rem] 2xl:py-8 flex max-w-1.5sm 2xl:max-w-[24.7rem] ">
        <HomeProjectCard />
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
