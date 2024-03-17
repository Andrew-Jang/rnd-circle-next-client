import Image from "next/image";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";
import LabTable from "@/app/components/labTable";
import Header from "@/app/components/header";
import Link from "next/link";

export default function Company() {
  const MiniCard = ({ icon, text, number, hasNew }) => (
    <button
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",

        borderRadius: "26.39px",
        height: "90px",
      }}
      className="w-28 h-24 custom-border border-white flex flex-col items-center py-4 hover:brightness-110 transition backdrop-blur"
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
                이윤구
              </div>
              <div className="text-xs mt-3 text-gray757575">주식회사 디써클</div>
              <div className="text-xs flex items-center space-x-1 mt-1 text-gray757575">
                <Image src="/pin.png" alt="RnDCircle menu1" className="" width={15} height={15} priority />
                <label style={{ height: "14px" }}>Seoul, Republic of Korea</label>
              </div>
              <div className="space-x-2 flex items-center mt-4">
                <button className="border px-2 py-1 rounded-full font-montserrat bg-white text-xs flex items-center space-x-2 hover:brightness-125 transition text-gray757575 font-semibold">
                  <Image src="/edit.png" alt="RnDCircle menu1" className="" width={17} height={17} priority />
                  <p>Edit</p>
                </button>
                <button className="border px-2 py-1 rounded-full font-montserrat bg-white text-xs flex items-center space-x-2 hover:brightness-125 transition text-gray757575 font-semibold">
                  <Image src="/setting.png" alt="RnDCircle menu1" className="" width={17} height={17} priority />
                  <p>Setting</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CardButton = ({ icon, title, subtitle }) => (
    <Link
      href={"/project/detail/company"}
      style={{
        borderRadius: "26.39px",
      }}
      className="w-full h-24 custom-border border-white bg-white hover:bg-gray-100 transition flex items-center px-4 flex-shrink-0 space-x-4 backdrop-blur"
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
  const CardSection = () => (
    <div style={{ marginTop: "-245px" }} className="w-full h-full bg-opacity-50 px-16 z-20 flex">
      <div className="w-full h-full">
        <div style={{ height: "246px" }} className="w-full bg-opacity-50 flex justify-end pt-8 pr-8"></div>
        <div className="w-full bg-opacity-50 pt-8 pr-8 flex space-x-8">
          <div className="relative">
            <Image src="/union.png" alt="Vercel Logo" className="" width={400} height={151} />
            <div className="w-full h-full absolute top-0 p-8 py-8">
              <p
                style={{ fontWeight: "500", fontSize: "27px" }}
                className="font-montserrat text-2xl text-left leading-7"
              >
                Register <br /> Project
              </p>
              <p className="text-xs text-left mt-3  text-gray757575">새로운 프로젝트를 등록하세요</p>
            </div>
            <button className="absolute top-0 right-0 hover:opacity-50">
              <Image src="/union-action.png" alt="Vercel Logo" width={54} height={54} />
            </button>
          </div>
          <div className="relative">
            <Image src="/union.png" alt="Vercel Logo" className="" width={400} height={151} />
            <div className="w-full h-full absolute top-0 p-8 py-8">
              <p
                style={{ fontWeight: "500", fontSize: "27px" }}
                className="font-montserrat text-2xl text-left leading-7"
              >
                Project <br /> Management
              </p>
              <p className="text-xs text-left mt-3  text-gray757575">저장한 프로젝트를 관리하세요</p>
            </div>
            <button className="absolute top-0 right-0 hover:opacity-50">
              <Image src="/union-action.png" alt="Vercel Logo" width={54} height={54} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-auto h-full py-8 flex space-x-8 flex-shrink-0">
        <div className="flex-shrink-0 space-y-6">
          <div className="relative">
            <Image src="/union-big.png" alt="Vercel Logo" className="" width={400} height={151} />
            <div className="w-full h-full absolute top-0 p-8 py-8 flex flex-col justify-between">
              <div>
                <p
                  style={{ fontWeight: "500", fontSize: "27px" }}
                  className="font-montserrat text-2xl text-left leading-7"
                >
                  새롭게 등록된 <br /> 프로젝트를 확인해보세요
                </p>
                <p className="text-xs text-left mt-3 text-gray757575">
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
