import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import Navbar from "./Navbar";
import Hamburger from "../ui/Hamburger";

export default function Header({
  onThemeToggle,
}: {
  onThemeToggle: () => void;
}) {
  const theme = useContext(ThemeContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavOnClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <FontAwesomeIcon
          icon={theme === "dark" ? faMoon : faSun}
          color={theme === "dark" ? "white" : "black"}
        />

        <Switch checked={theme === "dark"} onCheckedChange={onThemeToggle} />
      </div>
      <Hamburger isNavOpen={isNavOpen} handleNavOnClick={handleNavOnClick} />
      <Navbar isNavOpen={isNavOpen} />
    </>
  );
}

// export default function App() {
//   return (
//     <ThemeContext value="dark">
//       <Home />
//     </ThemeContext>
//   );
// }
