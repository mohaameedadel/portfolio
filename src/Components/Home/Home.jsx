import React from "react";
import me from "../../assets/images/me.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center pt-8 pb-5 mb-9">
        <div className="flex flex-col-reverse md:flex-row gap-10 ">
          <div className="info font-bold flex items-center text-center md:text-start">
            <div>
              <span className="text-4xl text-gray-400 mb-4 block">Hello👋</span>
              <h1 className="text-6xl mb-4">
                I'm <span className="name font-extrabold">Mohamed Adel</span>,
              </h1>
              <p className="text-4xl  px-2 ">a Frontend Developer</p>
              <div className="icons mt-4">
                <a
                  href="https://www.linkedin.com/in/mohaameedadel/"
                  target="blank"
                >
                  <i className="fa-brands fa-linkedin text-4xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
                <a href="https://github.com/mohaameedadel" target="blank">
                  <i className="fa-brands fa-github text-4xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
                <a href="https://www.facebook.com/Doollaaa" target="blank">
                  <i className="fa-brands fa-facebook text-4xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
                <a
                  href="https://www.instagram.com/mohaameeed_adel/"
                  target="blank"
                >
                  <i className="fa-brands fa-instagram text-4xl text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
              </div>
              <div className="buttons gap-4 mt-8 flex flex-wrap justify-center items-center md:justify-start">
                <Link
                  className="border  border-mainColor py-2 px-6 rounded-3xl text-2xl font-semibold duration-200 hover:text-mainColor"
                  to="/contact"
                >
                  Contact Me
                </Link>
                <a
                  target="blank"
                  className=" bg-mainColor py-2 px-6 rounded-3xl text-2xl font-semibold duration-200 hover:text-white dark:hover:text-black"
                  href="#"
                >
                  DownLoad CV
                </a>
              </div>
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
