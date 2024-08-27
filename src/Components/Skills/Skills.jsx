import React, { useEffect } from "react";
import Slider from "react-slick";
import bootstrap from "../../assets/images/skills/bootstrap.png";
import css from "../../assets/images/skills/css.png";
import git from "../../assets/images/skills/git.png";
import github from "../../assets/images/skills/github.png";
import html from "../../assets/images/skills/html.png";
import jQuery from "../../assets/images/skills/jQuery.png";
import js from "../../assets/images/skills/js.png";
import npm from "../../assets/images/skills/npm.png";
import postman from "../../assets/images/skills/postman.png";
import reactrouter from "../../assets/images/skills/react-router.png";
import react from "../../assets/images/skills/react.png";
import redux from "../../assets/images/skills/redux.png";
import sass from "../../assets/images/skills/sass.png";
import webpack from "../../assets/images/skills/webpack.png";
import tailwindcss from "../../assets/images/skills/tailwindcss.png";
import typescript from "../../assets/images/skills/typescript.png";
import tanstackquery from "../../assets/images/skills/tanstackquery.png";
import nextjs from "../../assets/images/skills/nextjs.png";
import mui from "../../assets/images/skills/mui.png";
import figma from "../../assets/images/skills/figma-logo-512.webp";


import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../Heading/Heading";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Skills() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          speed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          speed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          speed: 2000,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="container self-start my-6">
      <div className="size-80 mx-auto">
        <DotLottieReact
          src="https://lottie.host/7c8a7637-f97c-40d7-8c7f-9ff689f56589/2RHSrr6pzn.json"
          loop
          autoplay
        />
      </div>
      <Heading text={"Skills"} />
      <div data-aos="zoom-in" className="slider-container my-8 ">
        <Slider {...settings}>
          <div className="py-4 text-center ">
            <div className="img mb-4">
              <img src={html} className="w-[50px] mx-auto" alt="html" />
            </div>
            <p>HTML</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={css} className="w-[50px] mx-auto" alt="css" />
            </div>
            <p>CSS</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4 ">
              <img src={js} className="w-[50px] mx-auto" alt="js" />
            </div>
            <p>javascript</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4 ">
              <img
                src={typescript}
                className="w-[50px] mx-auto"
                alt="typescript"
              />
            </div>
            <p>typescript</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img
                src={bootstrap}
                className="w-[50px] mx-auto"
                alt="bootstrap"
              />
            </div>
            <p>bootstrap</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img
                src={tailwindcss}
                className="w-[50px] mx-auto rounded-full"
                alt="tailwindcss"
              />
            </div>
            <p>tailwindcss</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={jQuery} className="w-[50px] mx-auto" alt="jQuery" />
            </div>
            <p>jQuery</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={sass} className="w-[50px] mx-auto" alt="sass" />
            </div>
            <p>sass</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={react} className="w-[50px] mx-auto" alt="react" />
            </div>
            <p>react</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={nextjs} className="w-[50px] mx-auto" alt="nextjs" />
            </div>
            <p>nextjs</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img
                src={reactrouter}
                className="w-[50px] h-[50px] mx-auto"
                alt="reactrouter"
              />
            </div>
            <p>react router</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img
                src={redux}
                className="w-[50px] h-[50px] mx-auto"
                alt="redux"
              />
            </div>
            <p>redux</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img
                src={tanstackquery}
                className="w-[50px] mx-auto"
                alt="react query"
              />
            </div>
            <p>react query</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={mui} className="w-[50px] mx-auto" alt="mui" />
            </div>
            <p>Material UI</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={npm} className="w-[50px] mx-auto" alt="npm" />
            </div>
            <p>npm</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={webpack} className="w-[50px] mx-auto" alt="webpack" />
            </div>
            <p>webpack</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={git} className="w-[50px] mx-auto" alt="git" />
            </div>
            <p>git</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={github} className="w-[50px] mx-auto" alt="github" />
            </div>
            <p>github</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={postman} className="w-[50px] mx-auto" alt="postman" />
            </div>
            <p>postman</p>
          </div>
          <div className="py-4 text-center">
            <div className="img mb-4">
              <img src={figma} className="w-[50px] mx-auto" alt="figma" />
            </div>
            <p>figma</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
