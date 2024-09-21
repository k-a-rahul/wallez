import React, { useEffect, useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export const Toast = ({ text, show, hide, bg }) => {
  
  return (
    show && (
      <div className=" w-full flex justify-center items-center text-center fixed top-2 ">
        <div
          className={`z-10 rounded-lg w-[25%] h-8 ${
            bg ? bg : "bg-red-400"
          } flex justify-center items-center animate-pulse`}
        >
          <div className={`text-center sm:text-xl text-white`}>{text}</div>
          <button className="ml-6 text-2xl" onClick={hide}>
            <IoMdCloseCircle />
          </button>
        </div>
      </div>
    )
  );
};
