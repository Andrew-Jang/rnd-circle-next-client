import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ authenticated = true }) => {
  return (
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
      {authenticated ? (
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
      ) : (
        <div className="flex -mr-2 -mb-2">
          <Link href={"/auth/login"}>
            <button className="h-12 px-6 text-xs font-bold rounded-full hover:bg-white hover:bg-opacity-50 transition">
              로그인
            </button>
          </Link>
          <Link href={"/auth/signup"}>
            <button className="h-12 px-6 text-xs font-bold rounded-full bg-black text-white hover:brightness-150 transition">
              회원가입
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
