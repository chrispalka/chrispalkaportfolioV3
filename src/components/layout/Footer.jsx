import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import clsx from "clsx";

export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div className={clsx(theme === "dark" && "bg-black text-white")}>
      <h1>Footer</h1>
    </div>
  );
}
