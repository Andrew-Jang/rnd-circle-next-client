import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChatMenu from "./headerMenu/chatMenu";
import NotificationMenu from "./headerMenu/notificationMenu";
import ProfileMenu from "./headerMenu/profileMenu";

const Header = ({ authenticated = true }) => {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br relative mt-8 h-28 py-6">
      <div className="max-w-screen-xl w-full h-full flex items-center z-20 text-center relative justify-between">
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
            <ChatMenu />
            <NotificationMenu />
            <ProfileMenu />
          </div>
        ) : (
          <div className="flex -mr-2 -mb-2 space-x-6">
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
    </div>
  );
};

export default Header;
