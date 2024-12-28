import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Layout>
        <PageHead headTitle={`404 Not Found`}></PageHead>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="w-full max-w-lg text-center">
            <div className="border-2 rounded-lg border-red-500 dark:border-red-700 p-6 shadow-lg">
              <p className="text-5xl lg:text-6xl text-red-500 dark:text-red-700 mb-8 grinched whitespace-pre-line">
                404{"\n"}Not Found!
              </p>
              <Link
                href={`/`}
                className="mt-4 text-lg inline-block text-blue-500 underline"
              >
                Ana Menü
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
