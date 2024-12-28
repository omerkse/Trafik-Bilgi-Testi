import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div class="traffic-light">
        <div class="light red"></div>
        <div class="light yellow"></div>
        <div class="light green"></div>
      </div>
      <div class="police-car">🚓</div>
      <Layout>
        <PageHead headTitle={`Contact`}></PageHead>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="w-8/12 lg:w-1/3 md:w-1/2 sm:w-8/12">
            <div className="border-2 rounded-lg border-purple-500 p-4 w-full mb-12 shadow-lg">
              <div className="flex justify-between">
                <p className="text-4xl mb-4 underline decoration-purple-500 dark:decoration-purple-700 text-purple-500 dark:text-purple-700 grinched decoration-wavy">
                  İletişim
                </p>
                <Link href="/" className="block text-center size-10 text-2xl">
                  ←
                </Link>
              </div>
              <p className="mb-2">
                Geliştirici (Ömer Köse) ile şu adresten iletişime
                geçebilirsiniz:{" "}
                <Link
                  href="mailto:leidorf.omerkose772@gmail.com"
                  className="underline decoration-2 hover:decoration-2 decoration-amber-400 dark:decoration-yellow-600 hover:decoration-amber-200 dark:hover:decoration-amber-400 cursor-pointer"
                >
                  email
                </Link>
                ,{" "}
                <Link
                  href="https://github.com/omerkse"
                  target="_blank"
                  className="underline decoration-2 hover:decoration-2 decoration-violet-500 dark:decoration-violet-700 hover:decoration-violet-300 dark:hover:decoration-violet-500 cursor-pointer"
                >
                  GitHub
                </Link>{" "}
                and .
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
