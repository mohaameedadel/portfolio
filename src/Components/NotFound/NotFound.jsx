import React from "react";
import pageNotFound from "../../assets/images/page_not_found.svg";
export default function NotFound() {
  return (
   <div className="h-screen fixed top-0 left-0 w-full dark:bg-gray-900 -z-10 pt-16">
     <div className="text-center h-full flex justify-center items-center flex-col">
      <div>
        <img
          src={pageNotFound}
          loading="lazy"
          className="max-w-full"
          alt="error"
        />
      </div>
      <p className="text-3xl py-4 font-semibold text-mainColor">
        Oops.. This <span className="text-[#3F3D56]">Page</span> NotFound!
      </p>
    </div>
   </div>
  );
}
