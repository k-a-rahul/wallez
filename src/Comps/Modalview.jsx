import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

function Modalview({ child, show, hide }) {
  return (
    show && (
      <div className="absolute top-0 mx-auto z-40 flex justify-center items-center ">
        <FaRegWindowClose
          onClick={hide}
          className="text-3xl text-black cursor-pointer"
        />

        <div className="w-[80%]  h-[70%] aspect-square flex justify-center items-center">
          {child}
        </div>
      </div>
    )
  );
}

export default Modalview;
