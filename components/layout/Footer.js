import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="fixed inset-x-0 bottom-0 border-t border-zinc-200 dark:border-zinc-800 flex justify-between p-4 text-xs items-center text-blue-900 dark:text-zinc-500">
        <div>
          <p class="grinched">Trafik Bilgisi Testi</p>
          <p>copyleft 🄯</p>
        </div>
        <Link
          href="http://github.com/leidorf/cyber-heroes"
          target="_blank"
          class="hover:text-blue-600 dark:hover:text-blue-900 cursor-pointer"
        >
          GitHub
        </Link>
      </footer>
    </>
  );
};

export default Footer;
