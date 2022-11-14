import Image from "next/image";
import React from "react";
import AppLogo from "../public/logo.png";

function NavBar() {
  return (
    <div className="sticky top-0 bg-navBarbg p-6 flex items-center justify-start border-b-[1px] border-b-textGrey ">
      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-orange-400 mr-2" />
      <p className="text-white font-extrabold text-2xl ">Kanji</p>
    </div>
  );
}

export default NavBar;
