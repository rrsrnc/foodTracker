import React, { useEffect, useState } from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="containerbody">
      <header>
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <div className="footer"><footer>Contact Us</footer></div>
      </div>
    </>
  );
};

export default Layout;
