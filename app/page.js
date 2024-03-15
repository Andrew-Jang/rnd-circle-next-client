import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Link from "next/link";

export default function Home() {
  const Welcome = () => (
    <div className="flex w-full items-center justify-center">
      <div
        className="rounded-full bg-white w-96 h-96 bg-opacity-50 flex flex-col items-center justify-center"
        style={{
          backdropFilter: "blur(10px)",
          borderColor: "#ECECEC",
          width: "auto",
          height: "calc(100svh - 10rem)",
          aspectRatio: 1,
        }}
      >
        <h1 className="font-montserrat text-left text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl leading-tight font-medium">
          Welcome to RnDcircle
        </h1>
        <h2 className="text-xs md:text-sm 2xl:text-lg font-medium tracking-tighter text-center mt-6 text-gray757575">
          RnDcircle은 연구 성과가 세상에 더 잘 알려지고 빛을 발할 수 있도록
          <br />
          연구 성과를 알리고 연구실과 기업의 매칭을 활성화시키는 ‘통합 R&D 지원 플랫폼’ 입니다
        </h2>
        <Link href={"/auth/login"}>
          <button className="px-6 py-4 text-white bg-rndBlue rounded-full font-bold text-sm mt-8 hover:brightness-150 transition">
            바로 시작하기
          </button>
        </Link>
      </div>
    </div>
  );
  return (
    <>
      <main
        style={{
          backgroundImage: `url(/landing-bg.png)`,
          backgroundSize: "cover", // cover the entire space of the element
          backgroundPosition: "top center", // center the background image
          backgroundRepeat: "no-repeat", // do not repeat the background image
        }}
        className="flex w-full items-center justify-center md:flex-row flex-col bg-white"
      >
        {/* <Image src="/landing-bg.png" className="absolute top-0 w-screen" alt="Vercel Logo" width={1925} height={3401} /> */}

        <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center px-4 md:px-16 w-full z-20">
          <Header authenticated={false} />
          <Welcome />
          <Footer />
        </div>
      </main>
    </>
  );
}
