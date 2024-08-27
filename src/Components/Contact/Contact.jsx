import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../Heading/Heading";
export default function Contact() {
  function sendData() {
    emailjs
      .send(
        "service_oupnfmq",
        "template_gavvxje",
        {
          mail: formik.values.mail,
          phone: formik.values.phone,
          message: formik.values.message,
        },
        {
          publicKey: "bd__HK1SGi_wtWEev",
        }
      )
      .then(
        () => {
          toast.success("Thanks for contact us");
        },
        (error) => {
          toast.error(error);
        }
      )
      .then(formik.handleReset);
  }

  let validationSchema = Yup.object().shape({
    mail: Yup.string().required().email(),
    phone: Yup.string().required(),
    message: Yup.string().required(),
  });

  let formik = useFormik({
    initialValues: {
      mail: "",
      phone: "",
      message: "",
    },
    onSubmit: sendData,
    validationSchema,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container self-start my-6">
      <Heading text={"contact Me"} />
        <div data-aos="fade-down" className="icons mt-4 text-center">
          <a href="https://www.linkedin.com/in/mohaameedadel/" target="blank">
            <i className="fa-brands fa-linkedin text-2xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
          </a>
          <a href="https://github.com/mohaameedadel" target="blank">
            <i className="fa-brands fa-github text-2xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
          </a>
          <a href="https://www.facebook.com/Doollaaa" target="blank">
            <i className="fa-brands fa-facebook text-2xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
          </a>
          <a href="https://www.instagram.com/mohaameeed_adel/" target="blank">
            <i className="fa-brands fa-instagram text-2xl me-4 text-mainColor duration-200 hover:text-hoverColor"></i>
          </a>
          <a href="https://wa.me/+2001143787573" target="blank">
            <i className="fa-brands fa-whatsapp text-2xl text-mainColor duration-200 hover:text-hoverColor"></i>
          </a>
        </div>
        <form
          data-aos="fade-up"
          className="w-full md:w-3/5 mx-auto "
          onSubmit={formik.handleSubmit}
        >
          <div className="relative z-0 w-full my-6 group">
            <input
              type="email"
              name="mail"
              id="email"
              value={formik.values.mail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-mainColor focus:outline-none focus:ring-0 focus:border-mainColor peer"
              placeholder=" "
            />
            <label
              htmlFor="mail"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-mainColor peer-focus:dark:text-mainColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          {formik.errors.mail && formik.touched.mail && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.mail}
            </div>
          )}

          <div className="relative z-0 w-full my-6 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-mainColor peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-mainColor peer-focus:dark:text-mainColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          {formik.errors.phone && formik.touched.phone && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.phone}
            </div>
          )}
          <div className="relative z-0 w-full my-6 group">
            <textarea
              name="message"
              id="message"
              style={{ height: 200 }}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="resize-none block mt-9 py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-mainColor peer"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-mainColor peer-focus:dark:text-mainColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Message
            </label>
          </div>

          {formik.errors.message && formik.touched.message && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.message}
            </div>
          )}
          <button
            type="submit"
            className="text-white bg-mainColor hover:bg-hoverColor duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:focus:ring-mainColor"
          >
            send
          </button>
        </form>
      </div>
    </>
  );
}
