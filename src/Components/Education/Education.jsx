import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect } from "react";
import Heading from "../Heading/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="my-6 container self-start">
      <Heading text={"Education"} />
      <div className="flex mt-8 flex-col-reverse md:flex-row gap-10 justify-center items-center">
        <div data-aos="fade-right" className="education md:w-2/5 ">
          <div className="bg-gray-200 dark:bg-gray-600 p-4 rounded mb-4">
            <i className="fa-solid fa-graduation-cap"></i>
            <div>
              <p>2019 - 2023</p>
              <p>Bachelor of Informatin Technology</p>
              <p>
                Faculty of Computer & Informatics,{" "}
                <span className="text-mainColor">Tanta University</span>
              </p>
              <p className="mt-2">
                Completed a 4-year program and graduated with Excellence with
                Honour (B),
              </p>
            </div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 p-4 rounded">
            <i className="fa-solid fa-graduation-cap"></i>
            <div>
              <p>March 2024 - August 2024</p>
              <p>Diploma, Front End Developer</p>
              <p>Route Academy</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="w-full md:w-2/5 ">
          <DotLottieReact
            src="https://lottie.host/0bbd5033-11b8-44ad-955e-1ef8ef0af9e2/GKi0XMfkTR.json"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}
