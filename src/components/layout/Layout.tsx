import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

import clsx from "clsx";

export default function Layout({ children }) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <Header />
      <main
        className={clsx(
          "mx-auto min-h-screen max-w-5xl px-6 pt-16",
          theme === "dark" && "bg-black text-white",
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
