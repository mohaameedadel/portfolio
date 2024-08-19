import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { DarkContext } from "../../../Context/DarkContext";
export default function Navbar() {
  let {setDark , dark , setColorLight,setColorDark} = useContext(DarkContext)
  const [theme, setTheme] = useState(false);
  
  const [open, setOpen] = useState(false);
  let html = document.getElementById("html");
  function darkLightMode() {
    if (
      localStorage.getItem("theme") == "light" ||
      !localStorage.getItem("theme")
    ) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
      setDark(true);
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setDark(false);
    }
  }, [theme]);

  return (
    <>
      <nav className={` border-gray-200  shadow-lg fixed top-0 left-0 right-0 z-[999] dark:border-b dark:border-mainColor duration-500 ${scrolled?"py-2 dark:bg-gray-900 bg-white":"py-4"}`}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link
            onClick={() => setOpen(false)}
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer hover:scale-[1.02] duration-200"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className=" self-center font-main tracking-widest text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mohamed Adel
            </span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div
              onClick={() => {
                setTheme(!theme);
                darkLightMode();
              }}
              className="flex justify-center items-center text-2xl p-2 cursor-pointer"
            >
              {dark ? (
                <i className="fa-solid fa-moon text-gray-200"></i>
              ) : (
                <i className="fa-solid fa-sun text-yellow-400"></i>
              )}
            </div>
            <button

              onClick={() => setOpen(!open)}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex rounded-full items-center p-2 w-10 h-10 justify-center text-sm text-mainColor md:hidden hover:bg-gray-100 focus:outline-none bg-gray-200 dark:text-mainColor dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              open ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li onClick={() => setOpen(false)}>
                <NavLink
                  to="about"
                  className="font-main tracking-widest block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainColor md:dark:hover:text-mainColor dark:text-white dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li onClick={() => setOpen(false)}>
                <NavLink
                  to="projects"
                  className="font-main tracking-widest block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainColor md:dark:hover:text-mainColor dark:text-white dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  projects
                </NavLink>
              </li>
              <li onClick={() => setOpen(false)}>
                <NavLink
                  to="skills"
                  className="font-main tracking-widest block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainColor md:dark:hover:text-mainColor dark:text-white dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  skills
                </NavLink>
              </li>
              <li onClick={() => setOpen(false)}>
                <NavLink
                  to="education"
                  className="font-main tracking-widest block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainColor md:dark:hover:text-mainColor dark:text-white dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  education
                </NavLink>
              </li>
              <li onClick={() => setOpen(false)}>
                <NavLink
                  to="contact"
                  className="font-main tracking-widest block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainColor md:dark:hover:text-mainColor dark:text-white dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


