import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import clsx from "clsx";

export default function Navbar() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h1 className={clsx(theme === "dark" && "bg-black text-white")}>
        Navbar
      </h1>
    </div>
  );
}
