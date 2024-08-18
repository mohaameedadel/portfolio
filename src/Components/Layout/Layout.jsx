import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ParticlesComponent from "../ParticipalComponent/ParticipalComponent";

export default function Layout() {
  return (
    <>
      <ParticlesComponent id="particles" />
      <Navbar />
      <div className="pt-20 absolute top-0 left-0 w-full min-h-screen bg-transparent dark:text-white -z-10">
        <div className="container h-full">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
