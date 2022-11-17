import Image from "next/image";
import React from "react";
import AppLogo from "../public/logo.png";

function NavBar() {
  return (
    <div className="sticky top-0 bg-navBarbg p-4 flex items-center justify-start border-b-2 border-b-silver ">
      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-orange-400 mr-2 ml-4" />
      <p className="text-white font-extrabold text-2xl ">Kanji</p>
    </div>
  );
}

export default NavBar;
