import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageHead from "./PageHead";

const Layout = ({ children }) => {
  return (
    <>
      <PageHead />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
