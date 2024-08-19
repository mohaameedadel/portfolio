import React from "react";
import style from "./heading.module.css"
export default function Heading({text}) {
  return <h2 className={`${style.heading} z-40 my-4 text-lg relative bg-mainColor w-fit mx-auto py-2 px-4 rounded-lg text-white`}>{text}</h2>;
}
