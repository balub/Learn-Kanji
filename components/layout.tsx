import React from "react";
import { useDisplayStore } from "../utils/displayStore";

import KanjiDetails from "./KanjiDetails";
import NavBar from "./NavBar";

interface InputProps {
  children: React.ReactNode;
}

function layout({ children }: InputProps) {
  const isOpen = useDisplayStore((state) => state.isOpen);
  return (
    <>
      <NavBar />
      <main className="bg-navBarbg">{children}</main>
      {isOpen && <KanjiDetails />}
    </>
  );
}

export default layout;
