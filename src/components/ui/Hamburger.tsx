import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "../../styles/hamburgers.css";
import clsx from "clsx";

export default function Hamburger({
  isNavOpen,
  handleNavOnClick,
}: {
  isNavOpen: boolean;
  handleNavOnClick: () => void;
}) {
  const theme = useContext(ThemeContext);
  return (
    <div className="bg-black">
      <button
        className={clsx(
          "hamburger hamburger--emphatic",
          isNavOpen && "is-active",
          theme === "dark" ? "text-black" : "text-white",
        )}
        onClick={handleNavOnClick}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
}
