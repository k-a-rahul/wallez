import React, { useEffect, useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export const Toast = ({ text, show, hide, bg }) => {
  
  
  return (
    show && (
      <div className="z-20 w-full flex justify-center items-center text-center fixed top-4 ">
        <div
          className={`z-10 rounded-full  ${
            bg ? bg : "bg-red-500"
          } flex justify-between items-center p-2 gap-2`}
        >
          <div className={`text-center sm:text-xl text-white mx-auto`}>{text ? text:'No Text Given '}</div>
          <button className=" text-white text-2xl" onClick={hide}>
            <IoMdCloseCircle />
          </button>
        </div>
      </div>
    )
  );
};
