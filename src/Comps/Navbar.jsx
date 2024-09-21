import React, { useEffect, useState } from "react";
import { LOGO } from "../../export";

function Navbar({
  handlechange,
  onkeydown,
  value,
  handlephoneclick,
  handledeskclick,
}) {
  const handleclick = () => {
    window.location.reload();
  };

  const textToType = ["Nature", "Fish", "Dog", "Cars", "etc"];

  return (
    <div className="bg-mainbg w-full fixed top-0 z-10  overflow-hidden p-1 flex justify-around items-center ">  
      <div className="flex justify-center items-center">
        <img
          role="button"
          onClick={handleclick}
          src={LOGO}
          className="cursor-pointer rounded-md mx-4 w-8 sm:w-10"
          alt=""
        />
        <p className="text-xs">By Pexels</p>
      </div>

      <div className="w-[30%] flex items-center ">
        <input
          type="text"
          value={value}
          placeholder={textToType}
          onKeyDownCapture={onkeydown}
          onChange={handlechange}
          className="w-full sm:w-full p-1 text-xs sm:text-lg text-black rounded-sm outline-none "
        />
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={handlephoneclick}
          className="text-white text-xs sm:text-sm hover:bg-btnhover hover:rounded-md hover:text-black transition-all p-1"
        >
          Phone
        </button>
        <button
          onClick={handledeskclick}
          className="text-white text-xs sm:text-sm hover:bg-btnhover hover:rounded-md hover:text-black transition-all p-1"
        >
          Desktop
        </button>
      </div>
    </div>
  );
}

export default Navbar;
