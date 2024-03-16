"use client";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const InputGroup = ({ title, placeholder, errorPlaceholder, error, isPassword, hasError }) => (
    <div className="space-y-2">
      <p className="text-xs text-gray757575">{title}</p>
      <div className="w-full relative">
        <input
          className={`${
            hasError ? "ring-1 ring-red-500 placeholder-red-500 outline-none" : "outline-rndBlue"
          } p-4 h-12 rounded-xl w-full  text-xs tracking-tight placeholder-gray757575`}
          placeholder={hasError ? errorPlaceholder : placeholder}
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
      {hasError && <p className="text-2xs text-red-500 ">{error}</p>}
    </div>
  );

  const CustomerType = () => (
    <div className="space-y-2">
      <p className="text-xs text-gray-600">고객 유형</p>
      <div className="flex space-x-4">
        <div className="radio-wrapper">
          <label className="text-xs flex items-center">
            <input type="radio" name="customerType" value="type1" />
            <span className="radio-custom"></span>
            <p className="ml-2 cursor-pointer">대학 연구실</p>
          </label>
        </div>
        <div className="radio-wrapper">
          <label className="text-xs flex items-center">
            <input type="radio" name="customerType" value="type2" />
            <span className="radio-custom"></span>
            <p className="ml-2 cursor-pointer">기업</p>
          </label>
        </div>
      </div>
    </div>
  );

  const AgreementComponent = () => {
    const [selectedTypes, setSelectedTypes] = useState({
      type1: false,
      type2: false,
      type3: false,
    });

    const handleAllChange = (e) => {
      const { checked } = e.target;
      setSelectedTypes({
        type1: checked,
        type2: checked,
        type3: checked,
      });
    };

    const handleIndividualChange = (type) => {
      setSelectedTypes((prevTypes) => {
        const newTypes = {
          ...prevTypes,
          [type]: !prevTypes[type],
        };

        // If all individual types are true or if the changed type is being set to false, set type1 to false.
        const allIndividualSelected = Object.keys(newTypes).every((key) => key === "type1" || newTypes[key]);
        return {
          ...newTypes,
          type1: allIndividualSelected,
        };
      });
    };

    return (
      <div className="space-y-3">
        <p className="text-xs text-gray757575">약관동의</p>

        <div className="radio-wrapper">
          <label className="text-xs flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="customerType"
              checked={selectedTypes.type1}
              onChange={handleAllChange}
              className="hidden"
            />
            <span className="radio-custom"></span>
            <p className="ml-2 font-medium ">전체 동의</p>
          </label>
        </div>

        <div className="space-y-2 pl-6">
          <div className="radio-wrapper">
            <label className="text-xs flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="customerType"
                checked={selectedTypes.type2}
                onChange={() => handleIndividualChange("type2")}
                className="hidden"
              />
              <span className="radio-custom"></span>
              <p className="ml-2 font-medium ">[필수] 알앤디써클 이용약관 동의</p>
              <div onClick={(e) => e.preventDefault()} className="text-2xs font-bold text-rndBlue opacity-50 hover:opacity-100 transition ml-2">
                약관보기
              </div>
            </label>
          </div>
          <div className="radio-wrapper">
            <label className="text-xs flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="customerType"
                checked={selectedTypes.type3}
                onChange={() => handleIndividualChange("type3")}
                className="hidden"
              />
              <span className="radio-custom"></span>
              <p className="ml-2 font-medium ">[필수] 알앤디써클 개인정보처리방침 동의</p>
              <div onClick={(e) => e.preventDefault()} className="text-2xs font-bold text-rndBlue opacity-50 hover:opacity-100 transition ml-2">
                약관보기
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  };

  const Welcome = () => (
    <div style={{ minHeight: "calc(100svh - 12rem)" }} className="flex w-full items-center justify-center pt-12">
      <div
        className="rounded-xl bg-white w-96 bg-opacity-50 flex flex-col p-8"
        style={{
          backdropFilter: "blur(10px)",
          borderColor: "#ECECEC",
        }}
      >
        <h1 style={{ fontWeight: "500" }} className="font-montserrat text-2xl text-left mb-8">
          Sign up
        </h1>

        <div className="space-y-6">
          <InputGroup
            title="이메일"
            placeholder="메일주소를 작성해주세요"
            error="유효한 공용(기업, 학교, 기관) 도메인의 이메일로만 가입이 가능합니다."
            hasError
            errorPlaceholder={"올바른 메일 주소를 입력해주세요."}
          />
          <InputGroup
            title="이름"
            placeholder="이름을 작성해주세요."
            error=""
            errorPlaceholder={"올바른 형식이 아닙니다."}
          />
          <InputGroup
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            error="숫자 1회, 특수문자 1회, 영문 2회 포함 8자리 이상"
            isPassword
            errorPlaceholder={"비밀번호를 입력해주세요."}
          />
          <InputGroup
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            isPassword
            errorPlaceholder="비밀번호가 일치하지 않습니다."
          />
          <CustomerType />
          <InputGroup
            title="소속기관"
            placeholder="소속대학 혹은 기업명을 입력해주세요."
            error=""
            errorPlaceholder={"필수 입력 사항입니다."}
          />
          <InputGroup
            title="소속학과/부서"
            placeholder="소속 학과명 혹은 부서명을 입력해주세요."
            error=""
            errorPlaceholder={"필수 입력 사항입니다."}
          />
          <InputGroup
            title="직책"
            placeholder="직급을 입력해주세요."
            error=""
            errorPlaceholder={"필수 입력 사항입니다."}
          />

          <AgreementComponent />
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
            <p className="text-xs text-gray757575 inline font-medium">이미 계정이 있으신가요?</p>
            <Link href={"/auth/login"}>
              <p className="text-xs text-rndBlue underline font-bold">로그인하기</p>
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
