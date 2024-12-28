import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div class="traffic-light">
        <div class="light red"></div>
        <div class="light yellow"></div>
        <div class="light green"></div>
      </div>
      <div class="police-car">🚓</div>
      <Layout>
        <PageHead headTitle={`Hakkımızda`}></PageHead>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="w-8/12 lg:w-1/3 md:w-1/2 sm:w-8/12">
            <div className="border-2 rounded-lg border-green-500 dark:border-green-600 p-4 w-full mb-12 shadow-lg">
              <div className="flex justify-between">
                <p className="text-4xl mb-4 underline decoration-green-600 dark:decoration-green-600 text-green-500 dark:text-green-600 grinched decoration-wavy">
                  Hakkımızda
                </p>
                <Link href="/" className="block text-center text-2xl">
                  ←
                </Link>
              </div>
              <p className="mb-2 hyphens-auto text-justify whitespace-pre-line">
                Trafik Polis Kontrolü, çocukların trafik kurallarını ve yol
                güvenliğini öğrenmeleri için tasarlanmış eğitici bir sosyal
                sorumluluk projesidir. Bu program, çocuklara trafik işaretlerini
                tanımayı, yaya ve bisiklet güvenliğini öğrenmeyi ve trafikte
                sorumlu bireyler olarak nasıl davranmaları gerektiğini öğretmeyi
                amaçlamaktadır. Trafik kuralları ve güvenli yolculuk
                alışkanlıkları hakkında temel bilgiler vererek, Trafik Polis
                Kontrolü, daha güvenli yollar ve bilinçli bireylerden oluşan bir
                nesil yetiştirmeyi hedeflemektedir.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
