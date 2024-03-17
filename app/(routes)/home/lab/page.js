import Image from "next/image";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import LabTable from "@/app/components/labTable";
import Header from "@/app/components/header";
import Link from "next/link";
import ArticleCard from "./articleCard";

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
              style={{ lineHeight: 1.1, fontSize: "5rem" }}
              className="font-montserrat text-left text-7xl leading-tight font-medium"
            >
              Mechanic <br /> AI LAB / MAL
            </h1>
            <h2 className="mt-2 text-xl font-medium  text-gray757575">한국대학교 인공지능대학 인공지능학과</h2>

            <div className="grid grid-cols-2 gap-5 p-8 mt-4">
              <MiniCard icon={"/card1.png"} text={"Message"} number={"0"} />
              <MiniCard icon={"/card2.png"} text={"Request"} number={"25"} hasNew />
              <MiniCard icon={"/card3.png"} text={"Notice"} number={"4"} hasNew />
              <MiniCard icon={"/card4.png"} text={"Storage"} number={"73"} />
            </div>
          </div>
          <div className="w-1/2 h-full p-8 flex justify-end">
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "26.39px",
              }}
              className="w-72 h-72 custom-border border-white flex flex-col items-center py-8 transition backdrop-blur"
            >
              <div className="w-16 h-16 rounded-full bg-white border"></div>
              <div className="px-2 py-0.5 text-white rounded-full mt-5 bg-rndBlue font-bold text-2xs">교수</div>
              <div className="mt-1" style={{ fontWeight: "500" }}>
                이한국
              </div>
              <div className="text-xs mt-3 text-gray757575">한국대학교 인공지능대학</div>
              <div className="text-xs flex items-center space-x-1 mt-1 text-gray757575">
                <Image src="/pin.png" alt="RnDCircle menu1" className="" width={15} height={15} unoptimized />
                <label style={{ height: "14px" }}>Seoul, Republic of Korea</label>
              </div>
              <div className="space-x-2 flex items-center mt-4">
                <button className="border px-2 py-1 rounded-full font-montserrat bg-white text-xs flex items-center space-x-2 hover:brightness-125 transition text-gray757575 font-medium">
                  <Image
                    src="/edit.png"
                    alt="RnDCircle menu1"
                    className="object-contain"
                    width={17}
                    height={17}
                    unoptimized
                  />
                  <p>Edit</p>
                </button>
                <button className="border px-2 py-1 rounded-full font-montserrat bg-white text-xs flex items-center space-x-2 hover:brightness-125 transition text-gray757575 font-medium">
                  <Image
                    src="/setting.png"
                    alt="RnDCircle menu1"
                    className="object-contain"
                    width={17}
                    height={17}
                    unoptimized
                  />
                  <p>Setting</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Bar = ({ title, height, color }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image src="/bar.png" alt="Vercel Logo" className="" width={50} height={150} />
        <div
          style={{ borderRadius: "15px", backgroundColor: color, width: 50, height }}
          className="absolute bottom-0 w-full hover:opacity-70 cursor-pointer transition"
        ></div>
      </div>
      <p style={{ fontSize: "10px", color: "#525252" }} className="font-montserrat mt-1">
        {title}
      </p>
    </div>
  );

  const CardButton = ({ icon, title, subtitle }) => (
    <Link
      href={"/project/detail/government"}
      style={{
        borderRadius: "26.39px",
      }}
      className="w-full h-24 rounded-xl custom-border bg-white hover:bg-gray-100 transition flex items-center px-4 flex-shrink-0 space-x-4 backdrop-blur"
    >
      <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center bg-rndBlue">
        <Image src={icon} alt="Vercel Logo" className="" width={18} height={18} />
      </div>
      <div className="w-full text-left">
        <p className="font-montserrat font-medium text-lg ">{title}</p>
        <p className="mt-0.5  text-gray757575 text-2xs">{subtitle}</p>
      </div>
    </Link>
  );

  const NormalCard = () => (
    <button
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "26.39px",
      }}
      className="w-48 h-full custom-border flex flex-col justify-between p-8 py-8 flex-shrink-0 backdrop-blur hover:opacity-60 transition cursor-pointer"
    >
      <p style={{ fontSize: "27px" }} className="font-montserrat text-2xl text-left leading-7 font-medium">
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
      <div className="w-full h-full absolute top-0 p-8 py-8">
        <p style={{ fontWeight: "500", fontSize: "27px" }} className="font-montserrat text-2xl text-left leading-7">
          {title1} <br /> {title2}
        </p>
        <p className="text-xs text-left mt-3  text-gray757575">{subtitle}</p>
      </div>
      <button className="absolute top-0 right-0 ">
        <Image src="/union-action.png" alt="Vercel Logo" width={54} height={54} />
      </button>
    </div>
  );
  const CardSection = () => (
    <div style={{ marginTop: "-245px" }} className="w-full h-full bg-opacity-50 px-16 z-20 flex">
      <div className="w-full h-full">
        <div style={{ height: "246px" }} className="w-full bg-opacity-50 flex justify-end pt-8 pr-8">
          <NormalCard />
        </div>
        <div style={{ height: "548px" }} className="w-full h-96 bg-opacity-50 pt-8 pr-8 flex space-x-8">
          <ArticleCard />
          <div className="space-y-8 w-full">
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "26.39px",
                height: "17.2rem",
              }}
              className="w-full rounded-xl custom-border flex flex-col justify-between px-3 pt-8 pb-3 transition flex-shrink-0 backdrop-blur"
            >
              <div className="flex items-center justify-between w-full px-5 mb-8">
                <p style={{ fontWeight: "500", fontSize: "27px" }} className="font-montserrat text-2xl text-left">
                  Visitor metrics
                </p>
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
                style={{ borderRadius: "25px" }}
                className="w-full h-64 custom-border relative flex items-center px-5 justify-between pt-2"
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
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "26.39px",
                height: "13rem",
              }}
              className="w-full h-52 rounded-xl custom-border border-white flex flex-col justify-between py-8 px-3 transition flex-shrink-0 backdrop-blur"
            >
              <div className="space-y-8 flex flex-col items-start">
                <p
                  style={{ fontWeight: "500", fontSize: "27px" }}
                  className="font-montserrat text-2xl text-left leading-7 px-5"
                >
                  Visitor metrics
                </p>
                <div style={{ borderRadius: "25px", height: "6.5rem" }} className="w-full h-24 custom-border relative">
                  <Image src="/metrics.png" alt="Vercel Logo" className="" width={537} height={120} />
                  <Image
                    src="/metrics-graph.png"
                    alt="Vercel Logo"
                    className="absolute bottom-0"
                    width={637}
                    height={110}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-auto h-full py-8 flex space-x-8 flex-shrink-0">
        <div className="flex-shrink-0 space-y-6">
          <WavvyCard title1={"Visit"} title2={"Website"} subtitle={"나의 연구실 웹사이트로 이동해보세요"} />
          <WavvyCard title1={"Project"} title2={"Management"} subtitle={"연구실의 프로젝트를 관리하세요"} />
          <div className="relative">
            <Image src="/union-big.png" alt="Vercel Logo" className="" width={400} height={151} unoptimized />
            <div className="w-full h-full absolute top-0 p-8 py-8 flex flex-col justify-between">
              <div>
                <p
                  style={{ fontWeight: "500", fontSize: "27px" }}
                  className="font-montserrat text-2xl text-left leading-7 font-medium"
                >
                  새롭게 등록된 <br /> 프로젝트를 확인해보세요
                </p>
                <p className="text-xs text-left mt-6 text-gray757575">
                  72개의 새로운 R&D 프로젝트 공고가 업데이트되었어요
                </p>
              </div>

              <div className="space-y-5">
                <CardButton
                  icon="/cap.png"
                  title="Quantum Innovation Lab"
                  subtitle="서울과학기술대학교 양자기술 글로벌 혁신 기술 연구실"
                />
                <CardButton
                  icon="/bank.png"
                  title="2024 GNP"
                  subtitle="2024년도 차세대 원자력 정책센터 신규과제 공고"
                />
              </div>
            </div>
            <Link href={"/project"}>
              <button className="absolute top-0 right-0 hover:opacity-50">
                <Image src="/union-action.png" alt="Vercel Logo" width={54} height={54} />
              </button>
            </Link>
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
