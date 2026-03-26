import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext value={theme}>
      <Header
        onThemeToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <main
        className={clsx(
          "mx-auto min-h-screen max-w-5xl px-6 pt-16",
          theme === "dark" && "bg-black text-white",
        )}
      >
        {children}
      </main>
      <Footer />
    </ThemeContext>
  );
}
