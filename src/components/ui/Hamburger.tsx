import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import HamburgerIcon from "hamburger-react";
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
    <div className="fixed top-2 z-50">
      <HamburgerIcon
        color={clsx(theme === "dark" ? "#FFF" : "#000")}
        size={24}
        toggled={isNavOpen}
        toggle={handleNavOnClick}
      />
    </div>
  );
}
