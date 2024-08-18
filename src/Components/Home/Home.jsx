import React from "react";
import me from "../../assets/images/me.png";

export default function Home() {

  return (
    <>

      <div className="flex justify-center items-center pt-8 pb-5 mb-9">
        <div className="flex flex-col-reverse md:flex-row gap-10 ">
          <div className="info font-bold flex items-center">
            <div>
              <span className="text-4xl text-gray-400 mb-4 block">Hello👋</span>
              <h1 className="text-6xl mb-4">
                I'm <span className="name font-extrabold">Mohamed Adel</span>,
              </h1>
              <p className="text-4xl bg-mainColor w-fit px-2 ">
                a Frontend Developer
              </p>
            </div>
          </div>
          <div className="img flex justify-center items-center">
            <img src={me} className="rounded-full shadow-2xl" alt="me" />
          </div>
        </div>
      </div>
    </>
  );
}
