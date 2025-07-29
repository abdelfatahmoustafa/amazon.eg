import React from "react";

import { Outlet } from "react-router-dom";
import { FooterPage, NavbarPage } from "../../lazyLoad/lazy";

export default function Layout({ userData, clearUserData }) {
  return (
    <>
      <NavbarPage clearUserData={clearUserData} userData={userData} />
      <Outlet />
      <FooterPage />
    </>
  );
}
