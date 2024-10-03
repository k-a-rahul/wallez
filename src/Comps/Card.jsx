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
        } rounded-md sm:hover:opacity-100 opacity-95 transition-all group flex flex-col justify-center items-center `}
      >
          <img id={id} src={img} alt={alt} className="rounded-md w-[100%]" />
        {/* <div className="w-full absolute top-0 left-0 flex justify-between items-center group-hover:visible">
          <a
            className="bg-green-300 p-2 px-6 rounded-full text-2xl"
            href={url}
            download={`${id}.jpeg`}
            target="_blank"
          >
            <HiOutlineDownload />
          </a>
          <span className="backdrop-blur-sm p-1 rounded-md text-sm sm:text-md text-black invisible group-hover:visible group-hover:shadow-lg">
            Credit : {text}
          </span>
        </div> */}
      </div>
    </>
  );
};
