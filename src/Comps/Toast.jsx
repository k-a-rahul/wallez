import React, { useEffect, useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export const Toast = ({ text, show, hide, bg }) => {
 
  
  return (
    show && (
      <div className="z-50 fixed top-0 w-full h-full bg-none flex justify-center items-start pt-2 text-center">
        <div
          className={`z-10 rounded-3xl  ${
            bg ? bg : "bg-red-500"
          } flex justify-between items-center p-2 gap-2`}
        >
          <div className={`text-center sm:text-xl text-white mx-auto`}>{text ? text:'No Text Given '}</div>
          <button className=" text-white text-3xl" onClick={hide}>
            <IoMdCloseCircle />
          </button>
        </div>
      </div>
    )
  );
};
