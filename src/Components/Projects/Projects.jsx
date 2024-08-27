import React, { useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Heading/Heading";
import AOS from "aos";
import "aos/dist/aos.css";

import freshcart from "../../assets/images/projects/freshcart/freshcart.png";
import brands from "../../assets/images/projects/freshcart/brands.png";
import cart from "../../assets/images/projects/freshcart/cart.png";
import categories from "../../assets/images/projects/freshcart/categories.png";
import forgetpass from "../../assets/images/projects/freshcart/forgetpass.png";
import login from "../../assets/images/projects/freshcart/login.png";
import reges from "../../assets/images/projects/freshcart/reges.png";
import wishlist from "../../assets/images/projects/freshcart/wishlist.png";

import startframework from "../../assets/images/projects/startframework/startframework.png";
import about from "../../assets/images/projects/startframework/about.png";
import contact from "../../assets/images/projects/startframework/contact.png";
import portfolio from "../../assets/images/projects/startframework/portfolio.png";

import yummy from "../../assets/images/projects/yummy/yummy.png";
import areas from "../../assets/images/projects/yummy/areas.png";
import catgories from "../../assets/images/projects/yummy/caetgories.png";
import details from "../../assets/images/projects/yummy/details.png";
import ingred from "../../assets/images/projects/yummy/ingred.png";
import searsh from "../../assets/images/projects/yummy/searsh.png";

import chart from "../../assets/images/projects/chart/chart.png";
import chart2 from "../../assets/images/projects/chart/chart2.png";
import chart3 from "../../assets/images/projects/chart/chart3.png";

import quiz1 from "../../assets/images/projects/quizapp/quiz1.png";
import quiz2 from "../../assets/images/projects/quizapp/quiz2.png";
import quiz3 from "../../assets/images/projects/quizapp/quiz3.png";

import egyptianparty1 from "../../assets/images/projects/egyptianParty/egyptianparty1.png";
import egyptianparty2 from "../../assets/images/projects/egyptianParty/egyptianparty2.png";
import egyptianparty3 from "../../assets/images/projects/egyptianParty/egyptianparty3.png";

import gameover1 from "../../assets/images/projects/gameover/gameover1.png";
import gameover2 from "../../assets/images/projects/gameover/gameover2.png";
import gameover3 from "../../assets/images/projects/gameover/gameover3.png";
import gameover4 from "../../assets/images/projects/gameover/gameover4.png";
import gameover5 from "../../assets/images/projects/gameover/gameover5.png";

import crud1 from "../../assets/images/projects/crudsystem/crud1.png";
import crud2 from "../../assets/images/projects/crudsystem/crud2.png";
import crud3 from "../../assets/images/projects/crudsystem/crud3.png";
import crud4 from "../../assets/images/projects/crudsystem/crud4.png";

export default function Projects() {
  var settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container my-6 self-start">
      <Heading text={"projects"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8">
        <div data-aos="flip-left" className="freshcart shadow-xl">
          <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="slider-container mb-6">
                  <Slider {...settings}>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={freshcart}
                        alt="freshcart e-commerce"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={categories}
                        alt="freshcart e-commerce"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={brands}
                        alt="freshcart e-commerce"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={cart}
                        alt="freshcart e-commerce"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={wishlist}
                        alt="freshcart e-commerce"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={forgetpass}
                        alt="freshcart e-commerce"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={login}
                        alt="freshcart e-commerce"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={reges}
                        alt="freshcart e-commerce"
                      />
                    </div>
                  </Slider>
                </div>

                <div className="p-5">
                  <a
                    target="blank"
                    href="https://fresh-cart-test-five.vercel.app/"
                  >
                    <h5 className="hover:text-mainColor font-main tracking-widest duration-200 w-fit mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      FreshCart
                    </h5>
                  </a>
                  <p className="text-lg mb-3">
                    <span className="text-mainColor">MyRole:</span> Frontend
                    Developer
                  </p>
                  <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <span className="text-mainColor">description:</span> This
                    project is an e-commerce website for selling products. Key
                    features include Products, Categories, Brands listings,
                    add-to-cart and remove-from-cart
                    functionalities,add-to-Washlist and remove-from-Washlist
                    functionalities, user authentication (sign-up and login) and
                    hadling forget password. this project implemented with
                    <span className="text-mainColor ps-1">Backend</span> by
                    using Apis.
                  </p>
                  <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <span className="text-mainColor">technologies:</span> [
                    reactjs, Tailwindcss, fontawesome, react-router-dom, aos,
                    react-slick, react-hooks, Axios, react Query ]
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  target="blank"
                  href="https://github.com/mohaameedadel/freshCart"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline  hover:text-mainColor duration-200  "
                >
                  Github Repo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://fresh-cart-test-five.vercel.app/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline hover:text-mainColor duration-200  "
                >
                  Demo Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-right" className="startframework shadow-xl">
          <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="slider-container mb-6">
                  <Slider {...settings}>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={startframework}
                        alt="start framework"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={about}
                        alt="start framework"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={portfolio}
                        alt="start framework"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={contact}
                        alt="start framework"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="p-5">
                  <div>
                    <a
                      target="blank"
                      href="https://mohaameedadel.github.io/start-Framework/"
                    >
                      <h5 className="hover:text-mainColor font-main tracking-widest duration-200 w-fit mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                        start framework
                      </h5>
                    </a>
                    <p className="text-lg mb-3">
                      <span className="text-mainColor">MyRole:</span> Frontend
                      Developer
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">description:</span> This
                      project is a self website portfolio used to manage
                      projects, skills and information it help the user to
                      marketing for him self.
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">technologies:</span> [
                      reactjs, Tailwindcss, fontawesome, react-router-dom,
                      react-hooks ]
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  target="blank"
                  href="https://github.com/mohaameedadel/start-Framework"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline  hover:text-mainColor duration-200  "
                >
                  Github Repo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://mohaameedadel.github.io/start-Framework/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline hover:text-mainColor duration-200  "
                >
                  Demo Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" className="yummy shadow-xl">
          <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="slider-container mb-6">
                  <Slider {...settings}>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={yummy}
                        alt="yummy"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={searsh}
                        alt="yummy"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={catgories}
                        alt="yummy"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={areas}
                        alt="yummy"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={ingred}
                        alt="yummy"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={details}
                        alt="yummy"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="p-5">
                  <div>
                    <a
                      target="blank"
                      href="https://mohaameedadel.github.io/Yummy/"
                    >
                      <h5 className="hover:text-mainColor font-main tracking-widest duration-200 w-fit mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                        Yummy
                      </h5>
                    </a>
                    <p className="text-lg mb-3">
                      <span className="text-mainColor">MyRole:</span> Frontend
                      Developer
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">description:</span> This
                      project is a restaurant website for making and delevering
                      fast meals. Key features include search by name of meal,
                      search by first letter of meal, display categories of meal
                      ,display meals for each area and disply ingrediants for
                      each meal. this project build with single page and this
                      project implemented with
                      <span className="text-mainColor ps-1">Backend</span> by
                      using Apis.
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">technologies:</span> [
                      html, css, javascript, Tailwindcss, jQuery, real Apis]
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  target="blank"
                  href="https://github.com/mohaameedadel/Yummy"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline  hover:text-mainColor duration-200  "
                >
                  Github Repo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://mohaameedadel.github.io/Yummy/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline hover:text-mainColor duration-200  "
                >
                  Demo Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-right" className="chart shadow-xl">
          <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="slider-container mb-6">
                  <Slider {...settings}>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={chart}
                        alt="chart"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={chart2}
                        alt="chart"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={chart3}
                        alt="chart"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="p-5">
                  <div>
                    <a
                      target="blank"
                      href="https://mohaameedadel.github.io/Customer-Chart-/"
                    >
                      <h5 className="hover:text-mainColor font-main tracking-widest duration-200 w-fit mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                        customer transactions
                      </h5>
                    </a>
                    <p className="text-lg mb-3">
                      <span className="text-mainColor">MyRole:</span> Frontend
                      Developer
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">description:</span> This
                      project is seems to dashbord, it's contain table to
                      display customer transactions and draw a chart to show the
                      Percentage of each transaction. Key features include
                      search by name of customer and search by the amount of
                      transaction
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">technologies:</span> [
                      html, css, javascript, bootstrap, json server, chartjs]
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  target="blank"
                  href="https://github.com/mohaameedadel/Customer-Chart-"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline  hover:text-mainColor duration-200  "
                >
                  Github Repo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://mohaameedadel.github.io/Customer-Chart-/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline hover:text-mainColor duration-200  "
                >
                  Demo Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" className="quiz shadow-xl">
          <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="slider-container mb-6">
                  <Slider {...settings}>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={quiz1}
                        alt="quiz app"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={quiz2}
                        alt="quiz app"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={quiz3}
                        alt="quiz app"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="p-5">
                  <div>
                    <a
                      target="blank"
                      href="https://mohaameedadel.github.io/Quiz-App/"
                    >
                      <h5 className="hover:text-mainColor font-main tracking-widest duration-200 w-fit mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                        quiz app
                      </h5>
                    </a>
                    <p className="text-lg mb-3">
                      <span className="text-mainColor">MyRole:</span> Frontend
                      Developer
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">description:</span> This
                      project is a quiz website. Key features include choose
                      kind, level and number of questions.
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">technologies:</span> [
                      html, css, javascript, bootstrap, js oop]
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  target="blank"
                  href="https://github.com/mohaameedadel/Quiz-App"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline  hover:text-mainColor duration-200  "
                >
                  Github Repo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://mohaameedadel.github.io/Quiz-App/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline hover:text-mainColor duration-200  "
                >
                  Demo Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-right" className="egyptianParty shadow-xl">
          <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="slider-container mb-6">
                  <Slider {...settings}>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={egyptianparty1}
                        alt="egyptian party"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={egyptianparty2}
                        alt="egyptian party"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={egyptianparty3}
                        alt="egyptian party"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="p-5">
                  <div>
                    <a
                      target="blank"
                      href="https://mohaameedadel.github.io/Egyptian-Party/"
                    >
                      <h5 className="hover:text-mainColor font-main tracking-widest duration-200 w-fit mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                        egyptian party
                      </h5>
                    </a>
                    <p className="text-lg mb-3">
                      <span className="text-mainColor">MyRole:</span> Frontend
                      Developer
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">description:</span> This
                      project is an event website.
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">technologies:</span> [
                      html, css, javascript, bootstrap, jquery]
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  target="blank"
                  href="https://github.com/mohaameedadel/Egyptian-Party"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline  hover:text-mainColor duration-200  "
                >
                  Github Repo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://mohaameedadel.github.io/Egyptian-Party/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline hover:text-mainColor duration-200  "
                >
                  Demo Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" className="gameover shadow-xl">
          <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="slider-container mb-6">
                  <Slider {...settings}>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={gameover1}
                        alt="gameover"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={gameover2}
                        alt="gameover"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={gameover3}
                        alt="gameover"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={gameover4}
                        alt="gameover"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={gameover5}
                        alt="gameover"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="p-5">
                  <div>
                    <a
                      target="blank"
                      href="https://mohaameedadel.github.io/Game-Over/"
                    >
                      <h5 className="hover:text-mainColor font-main tracking-widest duration-200 w-fit mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                        GameOver
                      </h5>
                    </a>
                    <p className="text-lg mb-3">
                      <span className="text-mainColor">MyRole:</span> Frontend
                      Developer
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">description:</span> This
                      project is a gmaes website. Key features include Register,
                      login, home and details pages implemented withBackend by
                      using Apis, it has dark and light mode and it has guard
                      authentication and security.
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">technologies:</span> [
                      html, css, javascript, bootstrap, fontawesome, Toastr.js]
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  target="blank"
                  href="https://github.com/mohaameedadel/Game-Over"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline  hover:text-mainColor duration-200  "
                >
                  Github Repo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://mohaameedadel.github.io/Game-Over/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline hover:text-mainColor duration-200  "
                >
                  Demo Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-right" className="crudsystem shadow-xl">
          <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="slider-container mb-6">
                  <Slider {...settings}>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={crud1}
                        alt="gameover"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={crud2}
                        alt="gameover"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={crud3}
                        alt="gameover"
                      />
                    </div>
                    <div className="focus:outline-none">
                      <img
                        className="rounded-t-lg w-full block"
                        src={crud4}
                        alt="gameover"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="p-5">
                  <div>
                    <a
                      target="blank"
                      href="https://mohaameedadel.github.io/CRUD-SYSTEM/"
                    >
                      <h5 className="hover:text-mainColor font-main tracking-widest duration-200 w-fit mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                        Crud system
                      </h5>
                    </a>
                    <p className="text-lg mb-3">
                      <span className="text-mainColor">MyRole:</span> Frontend
                      Developer
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">description:</span> This
                      project is a CRUd website. Key features include create,
                      remove, update, display and search functionality on
                      products.
                    </p>
                    <p className="text-lg mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-mainColor">technologies:</span> [
                      html, css, javascript, bootstrap]
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  target="blank"
                  href="https://github.com/mohaameedadel/CRUD-SYSTEM"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline  hover:text-mainColor duration-200  "
                >
                  Github Repo
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://mohaameedadel.github.io/CRUD-SYSTEM/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:underline hover:text-mainColor duration-200  "
                >
                  Demo Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
