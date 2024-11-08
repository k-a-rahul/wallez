import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

function Modalview({ child,onclick,show }) {
  return (
    show && (
      <div className="fixed z-50 top-0 w-full h-full mx-auto flex justify-center items-center backdrop-brightness-75 ">
        <div className="w-[70%]  h-[85%]  flex flex-col justify-center items-center">
          <div className="w-full flex justify-end px-6 items-center">
            {" "}
            <FaRegWindowClose
              onClick={onclick}
              className="text-3xl text-black cursor-pointer"
            />
          </div>
          {child}
        </div>
      </div>
    )
  );
}

export default Modalview;
