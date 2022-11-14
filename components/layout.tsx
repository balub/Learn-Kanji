import React from "react";
import NavBar from "./NavBar";

interface InputProps {
  children: React.ReactNode;
}

function layout({ children }: InputProps) {
  return (
    <>
      <NavBar />
      <main className="bg-navBarbg">{children}</main>
    </>
  );
}

export default layout;
