import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const InputGroup = ({ title, placeholder, error, isPassword, hasError }) => (
    <div className="space-y-2">
      <p className="text-xs text-gray757575">{title}</p>
      <div className="w-full relative">
        <input
          className={`${
            hasError ? "ring-1 ring-red-500 placeholder-red-500 outline-none" : "outline-rndBlue"
          } p-4 h-12 rounded-xl w-full  text-xs tracking-tight placeholder-gray757575`}
          placeholder={hasError ? error : placeholder}
          type={isPassword ? "password" : "default"}
        />
        {hasError && (
          <div className="absolute right-3 top-3.5">
            <Image src="/warning.png" alt="Vercel Logo" className="" width={20} height={20} />
          </div>
        )}
        {isPassword && (
          <div className="absolute right-3 top-3.5">
            <Image src="/eye-slash.png" alt="Vercel Logo" className="" width={20} height={20} />
          </div>
        )}
      </div>
    </div>
  );

  const Welcome = () => (
    <div style={{ height: "calc(100svh - 12rem)" }} className="flex w-full items-center justify-center">
      <div
        className="rounded-xl bg-white w-96 bg-opacity-50 flex flex-col p-8 backdrop-blur"
        style={{
          borderColor: "#ECECEC",
        }}
      >
        <h1 style={{ fontWeight: "500" }} className="font-montserrat text-2xl text-left mb-8">
          Log in
        </h1>

        <div className="space-y-6 w-full">
          <InputGroup
            title={"이메일"}
            placeholder={"메일주소를 입력해주세요."}
            error={"가입되어 있지 않은 이메일입니다."}
            hasError
          />
          <InputGroup
            title={"비밀번호"}
            placeholder={"비밀번호를 입력해주세요."}
            error={"비밀번호가 일치하지 않습니다."}
            isPassword
          />
        </div>
        <div className="w-full flex justify-center mt-6">
          <Link href={"/home/lab"}>
            <button className="h-12 px-6 text-xs font-bold rounded-full bg-black text-white hover:brightness-150 transition">
              로그인
            </button>
          </Link>
        </div>
        <div className="w-full flex justify-center mt-6">
          <div className="inline-flex tracking-tight space-x-2">
            <p className="text-xs text-gray757575 inline font-medium">아직 계정이 없으신가요?</p>
            <Link href={"/auth/signup"}>
              <p className="text-xs text-rndBlue underline font-bold">회원가입하기</p>
            </Link>
          </div>
        </div>
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
