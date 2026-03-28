import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import clsx from "clsx";

export default function Navbar({ isNavOpen }: { isNavOpen: boolean }) {
  const theme = useContext(ThemeContext);
  return (
    <nav
      className={clsx(
        isNavOpen && "left-0 h-screen w-1/2",
        "fixed top-0 -left-full z-40 h-screen w-1/2 transition-all duration-300",
        theme === "dark" ? "bg-gray-900" : "bg-white",
      )}
    ></nav>
  );
}
