import React from "react";
import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Trafik Kuralları Öğreniyorum"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default PageHead;
