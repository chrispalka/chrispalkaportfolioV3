import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

import clsx from "clsx";

export default function Layout({ children }) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <Navbar />
      <main
        className={clsx(
          "min-h-screen max-w-5xl mx-auto px-6 pt-16",
          theme === "dark" && "bg-black text-white",
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
