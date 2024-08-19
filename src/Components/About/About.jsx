import React, { useEffect } from "react";
import Heading from "../Heading/Heading";
import me from "../../assets/images/me2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className=" container self-start my-6">
        <div >
          <Heading text={"About Me"} />
          <div className="my-8  flex flex-col-reverse md:flex-row justify-center items-center gap-4">
            <div className="flex justify-center items-center md:w-3/5">
              <div data-aos="zoom-in-right">
                <p className="text-2xl ">
                  Hi I'm
                  <span className="text-mainColor font-semibold px-2">
                    Mohamed Adel
                  </span>
                  , I specialize in RectJs <br /> and I am passionate about front-end development.
                  <br /> Graduated from the Faculty of Computer & Informatics,
                  Tanta University,
                  <br /> with a Bachelor’s degree in Information Technology.
                </p>
                <p className="text-2xl mt-4">
                  Besides Web development, <br /> I like ⚽️ Football, 📚 Reading,
                  🍿Movies, and️ 🎮 Gaming.
                </p>
              </div>
            </div>
            <div data-aos="flip-right" className="overflow-hidden ">
              <img src={me} loading="lazy" className=" w-80 rounded-full block" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
