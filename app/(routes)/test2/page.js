import Image from "next/image";
import Link from "next/link";

export default function Test2() {
  const Header = () => (
    <div style={{ maxWidth: "1920px" }} className="w-full h-28 flex items-end justify-between py-6 px-16">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="RnDCircle Logo"
          className="hover:opacity-60 transition"
          width={100}
          height={24}
          priority
        />
      </Link>
      <div className="flex -mr-2 -mb-2">
        <button className="w-9 h-9 hover:bg-gray-100 transition rounded-full flex items-center justify-center">
          <Image src="/menu1.png" alt="RnDCircle menu1" width={30} height={30} priority />
        </button>
        <button className="w-9 h-9 hover:bg-gray-100 transition rounded-full flex items-center justify-center">
          <Image src="/menu2.png" alt="RnDCircle menu1" width={30} height={30} priority />
        </button>
        <button className="w-9 h-9 hover:bg-gray-100 transition rounded-full flex items-center justify-center">
          <Image src="/menu3.png" alt="RnDCircle menu1" width={30} height={30} priority />
        </button>
      </div>
    </div>
  );

  const MiniCard = ({ icon }) => (
    <button
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "#ECECEC",
        borderRadius: "26.39px",
        height: "90px",
      }}
      className="w-28 h-24 rounded-xl border-2 border-white flex flex-col items-center py-4 hover:brightness-110 transition"
    >
      <div className="relative">
        <Image src={icon} alt="card1" className="" width={20} height={20} priority />
        <div style={{ backgroundColor: "#000AFF" }} className="absolute -top-0.5 -right-1.5 w-1 h-1 rounded-full"></div>
      </div>
      <p style={{ color: "#757575" }} className="font-montserrat text-xs">
        Message
      </p>
      <p style={{ fontWeight: "600" }} className="font-montserrat text-xs mt-1.5">
        0
      </p>
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
      <div className="bg-custom-pattern max-w-screen-xl w-full h-full flex items-center z-20 text-center relative">
        <Image src="/main-bg.png" alt="RnDCircle menu1" className="" width={1680} height={1058} priority />
        <div className="w-full h-full absolute flex">
          <div className="flex w-1/2 flex-col items-start flex-shrink-0">
            <h1 style={{ fontWeight: 500 }} className="font-montserrat text-left text-7xl leading-tight">
              Mechanic <br /> AI LAB / MAL
            </h1>
            <h2 style={{ color: "#757575" }} className="mt-2.5 font-gray-500 text-xl">
              한국대학교 인공지능대학 인공지능학과
            </h2>

            <div className="grid grid-cols-2 gap-5 p-8 mt-4">
              <MiniCard icon={"/card1.png"} />
              <MiniCard icon={"/card2.png"} />
              <MiniCard icon={"/card3.png"} />
              <MiniCard icon={"/card4.png"} />
            </div>
          </div>
          <div className="w-1/2 h-full p-8 flex justify-end">
            <div
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // Add this line
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderColor: "#ECECEC",
                borderRadius: "26.39px",
              }}
              className="w-72 h-72 rounded-xl border-2 border-white flex flex-col items-center py-8 transition"
            >
              <div className="w-16 h-16 rounded-full bg-white border"></div>
              <div
                style={{ backgroundColor: "#000AFF", fontWeight: "700", fontSize: "10px" }}
                className="px-2 py-0.5 text-white text-xs rounded-full mt-5"
              >
                교수
              </div>
              <div className="mt-1" style={{ fontWeight: "500" }}>
                이한국
              </div>
              <div style={{ color: "#757575" }} className="text-xs mt-3">
                한국대학교 인공지능대학
              </div>
              <div style={{ color: "#757575" }} className="text-xs flex items-center space-x-1 mt-1">
                <Image src="/pin.png" alt="RnDCircle menu1" className="" width={15} height={15} priority />
                <label style={{ height: "14px" }}>Seoul, Republic of Korea</label>
              </div>
              <div className="space-x-2 flex items-center mt-4">
                <button
                  style={{ color: "#757575", fontWeight: "600" }}
                  className="border px-2 py-1 rounded-full font-montserrat bg-white text-xs flex items-center space-x-2 hover:brightness-125 transition"
                >
                  <Image src="/edit.png" alt="RnDCircle menu1" className="" width={17} height={17} priority />
                  <p>Edit</p>
                </button>
                <button
                  style={{ color: "#757575", fontWeight: "600" }}
                  className="border px-2 py-1 rounded-full font-montserrat bg-white text-xs flex items-center space-x-2 hover:brightness-125 transition"
                >
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

  const Bar = ({ title, height, color }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image src="/bar.png" alt="Vercel Logo" className="" width={50} height={150} />
        <div
          style={{ borderRadius: "15px", backgroundColor: color, width: 50, height }}
          className="absolute bottom-0 w-full"
        ></div>
      </div>
      <p style={{ fontSize: "10px", color: "#525252" }} className="font-montserrat mt-1">
        {title}
      </p>
    </div>
  );
  const CardSection = () => (
    <div style={{ marginTop: "-245px" }} className="w-full h-full bg-opacity-50 px-16 z-20 flex">
      <div className="w-full h-full">
        <div style={{ height: "246px" }} className="w-full bg-opacity-50 flex justify-end pt-8 pr-8">
          <button
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderColor: "#ECECEC",
              borderRadius: "26.39px",
              // height: "212px",
            }}
            className="w-48 h-full rounded-xl border-2 border-white flex flex-col justify-between p-8 py-8 transition flex-shrink-0"
          >
            <p style={{ fontWeight: "500", fontSize: "27px" }} className="font-montserrat text-2xl text-left leading-7">
              Edit <br /> Website
            </p>
            <p style={{ color: "#757575" }} className="text-xs text-left">
              나의 웹사이트에 <br /> 새 정보를 등록해보세요
            </p>
          </button>
        </div>
        <div style={{ height: "548px" }} className="w-full h-96 bg-opacity-50 pt-8 pr-8 flex space-x-8">
          <button
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderColor: "#ECECEC",
              borderRadius: "26.39px",
              // height: "212px",
            }}
            className="w-72 h-full rounded-xl border-2 border-white flex flex-col justify-between p-8 py-8 transition flex-shrink-0"
          >
            <div className="space-y-6 flex flex-col items-start">
              <p
                style={{ fontWeight: "500", fontSize: "27px" }}
                className="font-montserrat text-2xl text-left leading-7"
              >
                Article
              </p>
              <p style={{ color: "#757575" }} className="text-xs text-left">
                AI와 함께 나의 연구실 웹사이트에
                <br /> 게시할 새로운 아티클을 생성해보세요
              </p>
              <button className="bg-black rounded-full py-1.5 px-4 text-white font-montserrat text-xs font-medium">
                Create
              </button>
            </div>
            <div className="mt-8">
              <Image src="/article.png" alt="Vercel Logo" className="" width={290} height={370} />
            </div>
          </button>
          <div className="space-y-8 w-full">
            <button
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderColor: "#ECECEC",
                borderRadius: "26.39px",
                height: "17.2rem",
              }}
              className="w-full rounded-xl border-2 border-white flex flex-col justify-between px-3 pt-8 pb-3 transition flex-shrink-0"
            >
              <div className="flex items-center justify-between w-full px-5 mb-8">
                <p style={{ fontWeight: "500", fontSize: "27px" }} className="font-montserrat text-2xl text-left">
                  Visitor metrics
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    style={{ backgroundColor: "#000AFF" }}
                    className="rounded-full py-1.5 px-4 text-white font-montserrat text-xs font-medium"
                  >
                    웹조회수
                  </button>
                  <button
                    style={{ backgroundColor: "#FBFBFB", borderColor: "#ECECEC", color: "#757575" }}
                    className="bg-black rounded-full py-1.5 px-4 text-white font-montserrat text-xs font-medium border"
                  >
                    매칭 제안수
                  </button>
                </div>
              </div>
              <div
                style={{ borderColor: "#ECECEC", borderRadius: "25px" }}
                className="w-full h-64 border-2 relative flex items-center px-5 justify-between pt-2"
              >
                <Bar title={"MON"} height={"4rem"} color={"#9397FF"} />
                <Bar title={"TUE"} height={"2rem"} color={"#C7CAFF"} />
                <Bar title={"WED"} height={"3rem"} color={"#6F75FF"} />
                <Bar title={"THU"} height={"4rem"} color={"#323AFF"} />
                <Bar title={"MON"} height={"3rem"} color={"#6F75FF"} />
                <Bar title={"MON"} height={"5rem"} color={"#000AFF"} />
                <Bar title={"MON"} height={"7.7rem"} color={"#000000"} />
              </div>
            </button>
            <button
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderColor: "#ECECEC",
                borderRadius: "26.39px",
                height: "13rem",
              }}
              className="w-full h-52 rounded-xl border-2 border-white flex flex-col justify-between py-8 px-3 transition flex-shrink-0"
            >
              <div className="space-y-8 flex flex-col items-start">
                <p
                  style={{ fontWeight: "500", fontSize: "27px" }}
                  className="font-montserrat text-2xl text-left leading-7 px-5"
                >
                  Visitor metrics
                </p>
                <div
                  style={{ borderColor: "#ECECEC", borderRadius: "25px", height: "6.5rem" }}
                  className="w-full h-24 border-2 relative"
                >
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
            </button>
          </div>
        </div>
      </div>

      <div className="w-auto h-full py-8 flex space-x-8 flex-shrink-0">
        <div className="flex-shrink-0 space-y-6">
          <div className="relative">
            <Image src="/union.png" alt="Vercel Logo" className="" width={400} height={151} />
            <div className="w-full h-full absolute top-0 p-8 py-8">
              <p
                style={{ fontWeight: "500", fontSize: "27px" }}
                className="font-montserrat text-2xl text-left leading-7"
              >
                Visit <br /> Website
              </p>
              <p style={{ color: "#757575" }} className="text-xs text-left mt-3">
                나의 연구실 웹사이트로 이동해보세요.
              </p>
            </div>
            <button className="absolute top-0 right-0 hover:opacity-80">
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
              <p style={{ color: "#757575" }} className="text-xs text-left mt-3">
                나의 연구실 웹사이트로 이동해보세요.
              </p>
            </div>
            <button className="absolute top-0 right-0 hover:opacity-80">
              <Image src="/union-action.png" alt="Vercel Logo" width={54} height={54} />
            </button>
          </div>
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
                <p style={{ color: "#757575" }} className="text-xs text-left mt-3">
                  72개의 새로운 R&D 프로젝트 공고가 업데이트되었어요
                </p>
              </div>

              <div className="space-y-5">
                <button
                  style={{
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderColor: "#ECECEC",
                    borderRadius: "26.39px",
                  }}
                  className="w-full h-24 rounded-xl border-2 border-white flex items-center px-4 transition flex-shrink-0 space-x-4"
                >
                  <div
                    style={{ backgroundColor: "#000AFF" }}
                    className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                  >
                    <Image src="/bank.png" alt="Vercel Logo" className="" width={18} height={18} />
                  </div>
                  <div className="w-full text-left">
                    <p className="font-montserrat font-medium">Quantum Innovation Lab</p>
                    <p style={{ color: "#757575", fontSize: "10px" }} className="mt-0.5">
                      서울과학기술대학교 양자기술 글로벌 혁신 기술 연구실
                    </p>
                  </div>
                </button>
                <button
                  style={{
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderColor: "#ECECEC",
                    borderRadius: "26.39px",
                  }}
                  className="w-full h-24 rounded-xl border-2 border-white flex items-center px-4 transition flex-shrink-0 space-x-4"
                >
                  <div
                    style={{ backgroundColor: "#000AFF" }}
                    className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                  >
                    <Image src="/bank.png" alt="Vercel Logo" className="" width={18} height={18} />
                  </div>
                  <div className="w-full text-left">
                    <p className="font-montserrat font-medium">2024 GNP</p>
                    <p style={{ color: "#757575", fontSize: "10px" }} className="mt-0.5">
                      2024년도 차세대 원자력 정책센터 신규과제 공고
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <button className="absolute top-0 right-0 hover:opacity-80">
              <Image src="/union-action.png" alt="Vercel Logo" width={54} height={54} />
            </button>
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
          <div className="w-full h-12 bg-red-400"></div>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp;
              <code className="font-mono font-bold">app/page.js</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By <Image src="/vercel.svg" alt="Vercel Logo" className="" width={100} height={24} priority />
              </a>
            </div>
          </div>
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Learn{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Templates{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Explore starter templates for Next.js.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Deploy{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
