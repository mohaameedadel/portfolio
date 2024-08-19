import React, { useContext, useEffect } from "react";
import me from "../../assets/images/me.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import { DarkContext } from "../../../Context/DarkContext";

export default function Home() {
  let { dark } = useContext(DarkContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center pt-2 pb-5 mb-7 container">
        <div className="flex flex-col-reverse md:flex-row gap-10 lg:gap-24">
          <div
            data-aos="fade-right"
            className="info font-bold flex items-center text-center md:text-start"
          >
            <div>
              <span className="text-4xl text-gray-400 mb-4 block font-main">
                Hello👋 I'm{" "}
              </span>
              <Link
                to={"/about"}
                className="text-6xl md:text-8xl mb-4 font-main block"
              >
                <span className="name font-extrabold">Mohamed Adel</span>
              </Link>
              <ReactTyped
                backSpeed={40}
                loop={true}
                showCursor={true}
                strings={["Frontend Developer", "Web Developer"]}
                typeSpeed={50}
                startDelay={300}
                backDelay={1000}
                style={{
                  fontSize: 40,
                  fontFamily: "New Amsterdam",
                  letterSpacing: 2.5,
                }}
              />

              <div className="icons mt-4">
                <a
                  href="https://www.linkedin.com/in/mohaameedadel/"
                  target="blank"
                >
                  <i className="fa-brands fa-linkedin text-2xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
                <a href="https://github.com/mohaameedadel" target="blank">
                  <i className="fa-brands fa-github text-2xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
                <a href="https://www.facebook.com/Doollaaa" target="blank">
                  <i className="fa-brands fa-facebook text-2xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
                <a
                  href="https://www.instagram.com/mohaameeed_adel/"
                  target="blank"
                >
                  <i className="fa-brands fa-instagram text-2xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
                <a href="https://wa.me/+2001143787573" target="blank">
                  <i className="fa-brands fa-whatsapp text-2xl text-mainColor duration-200 hover:text-hoverColor"></i>
                </a>
              </div>
              <a
                target="blank"
                href="https://drive.google.com/file/d/1krgcib_UOHT8ZNszECF7JpmbkWkrWaiG/view?usp=sharing"
                className="flex justify-center items-center px-2 py-1 bg-mainColor w-fit rounded-full mt-4 mx-auto md:mx-0 group "
              >
                Get Resume
                <i className="fa-solid fa-circle-arrow-down group-hover:ps-2 duration-500"></i>
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="img flex justify-center items-center"
          >
            <img
              src={me}
              loading="lazy"
              className="rounded-full shadow-2xl w-72 md:w-full"
              alt="me"
            />
          </div>
        </div>
      </div>
    </>
  );
}
