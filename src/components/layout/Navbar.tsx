import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <nav
      className={clsx(
        isOpen && "left-0 h-screen w-screen",
        "absolute -left-100 border-2 border-red-500",
      )}
    >
      <h1 className={clsx(theme === "dark" && "bg-black text-white")}>
        Navbar
      </h1>
    </nav>
  );
}
