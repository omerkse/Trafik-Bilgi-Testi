import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  const links = [
    { href: "/quiz", text: "Quiz", color: "text-yellow-500 border-yellow-500" },
    {
      href: "/about",
      text: "Hakkimizda",
      color:
        "text-green-500 border-green-500 dark:text-green-600 dark:border-green-600",
    },
    {
      href: "/contact",
      text: "İletişim",
      color:
        "text-purple-500 border-purple-500 dark:text-purple-700 dark:border-purple-700",
    },
  ];

  return (
    <>
      <div class="traffic-light">
        <div class="light red"></div>
        <div class="light yellow"></div>
        <div class="light green"></div>
      </div>
      <div class="police-car">🚓</div>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="w-full max-w-lg text-center">
            <div className="border-2 rounded-lg border-blue-500 dark:border-blue-700 grinched p-6 shadow-lg">
              <p className="text-5xl lg:text-6xl text-blue-500 dark:text-blue-700 mb-8">
                Trafik Bilgisi Testi
              </p>
              <div className="grid gap-4 text-2xl">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`hover:border-opacity-80 hover:scale-105 transition-all block border-2 rounded-lg px-4 py-2 ${link.color}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
