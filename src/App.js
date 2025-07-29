import React, { Suspense, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getRouters from "./Router";
import Loading from "./Components/Loading/Loading";

export default function App() {
  const [userData, setUserData] = useState(null);
  function saveUserData() {
    const userEncodedToken = localStorage.getItem("userToken");
    const userDecodedToken = jwtDecode(userEncodedToken);
    setUserData(userDecodedToken);
  }
  function clearUserData() {
    localStorage.removeItem("userToken");
    setUserData(null);
  }
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null && userData === null) {
      saveUserData();
    }
  }, []);

  const routers = getRouters(userData, saveUserData, clearUserData);
  return (
    <>
      <Toaster />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routers} />
      </Suspense>
    </>
  );
}
