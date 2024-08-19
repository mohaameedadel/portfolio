import React, { useEffect } from "react";
import Heading from "../Heading/Heading";
import me from "../../assets/images/me2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "../Skills/Skills";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className=" container self-start pt-8 pb-5">
        <div className="border-b border-mainColor/40">
          <Heading text={"About Me"} />
          <div className="my-8  flex flex-col-reverse md:flex-row justify-center items-center gap-4">
            <div className="flex justify-center items-center md:w-3/5">
              <div data-aos="zoom-in-right">
                <p className="text-2xl ">
                  Hi I'm
                  <span className="text-mainColor font-semibold px-2">
                    Mohamed Adel
                  </span>
                  , and I am passionate about front-end development.
                  <br /> Graduated from the Faculty of Computer & Informatics,
                  Tanta University,
                  <br /> with a Bachelor’s degree in Information Technology.
                </p>
                <p className="text-2xl">
                  Besides Mobile development, I like ⚽️ Football, 📚 Reading,
                  🍿Movies, and️ 🎮 Gaming.
                </p>
              </div>
            </div>
            <div data-aos="flip-right" className="overflow-hidden ">
              <img src={me} className=" w-80 rounded-full block" alt="" />
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="border-b border-mainColor/40 pt-2">
          <Heading text={"SKILLS"} />
          <Skills />
        </div>

        <div >
          <DotLottieReact
          src="https://lottie.host/0bbd5033-11b8-44ad-955e-1ef8ef0af9e2/GKi0XMfkTR.json"
          
          loop
          autoplay
        />
        </div>
      </div>
    </>
  );
}
