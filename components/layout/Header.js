import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark((prev) => !prev);
  };

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 text-center p-4">
      <div className="flex justify-between items-center max-w-5xl mx-auto relative">
        <Link
          href="/"
          className="grinched text-blue-500 dark:text-blue-700 text-3xl absolute left-1/2 transform -translate-x-1/2"
        >
          Trafik Bilgisi Testi
        </Link>

        <button
          onClick={toggleTheme}
          className="px-3 py-2 text-sm font-semibold rounded-lg border border-zinc-300 dark:border-zinc-800 text-blue-700 dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all ml-auto"
        >
          {isDark ? "❨" : "☀︎"}
        </button>
      </div>
    </header>
  );
};

export default Header;
