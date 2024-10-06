import React, { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";

export const Card = ({
  id,
  img,
  alt,
  text,
  w,
  h,
  file,
  isloading,
  data,
  url,
}) => {
  return (
    <>

      <div
        className={`w-${w ? w : "full"} h-${
          h ? h : "full"
        } rounded-md sm:hover:opacity-100 opacity-95 transition-all group flex flex-col justify-center items-center`}
      >
          <a href={url} target="_blank">
          <div className="w-full flex flex-col justify-between items-center">
          <img id={id} src={img} alt={alt} className="rounded-md w-[100%]" />
          <div className="w-full flex justify-between items-center p-2">
            <p className="backdrop-blur-sm p-1 rounded-md text-xs sm:text-md text-black ">
              Credit : {text}
            </p>
            {/* <button className="p-1 px-2 rounded-md hover:text-white active:bg-blue-400 text-xs sm:text-sm bg-btnbg ">Like</button> */}
          </div>
        </div>
          </a>
      </div>
    </>
  );
};
