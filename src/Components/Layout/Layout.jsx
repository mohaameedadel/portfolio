import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-white absolute top-0 left-0 w-full min-h-screen dark:bg-gray-900  dark:text-white -z-10"><div className="container h-full"><Outlet></Outlet></div></div>
    </>
  );
}
