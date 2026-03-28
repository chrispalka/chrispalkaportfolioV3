import { useState } from "react";

import Navbar from "./Navbar";
import Hamburger from "../ui/Hamburger";

export default function Header({
  onThemeToggle,
}: {
  onThemeToggle: () => void;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavOnClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <button type="button" onClick={onThemeToggle}>
        Toggle Mode
      </button>
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
