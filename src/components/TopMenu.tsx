import React from "react";
import TopMenuItem from "./TopMenuItem";
import Image from "next/image";

export default function TopMenu() {
  return (
    <div className="w-full text-white flex justify-end h-20 py-5 items-center gap-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-lg">
      <TopMenuItem />
      <Image
        src="/img/logo.png"
        width={40}
        height={40}
        alt="logo"
        className="rounded-full border-2 border-white shadow-md"
      />
    </div>
  );
}
