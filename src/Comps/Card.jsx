import React, { useState } from "react";

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
        onClick={onclick}
        className={`w-${w ? w : "full"} h-${
          h ? h : "full"
        } rounded-md sm:hover:scale-105 transition-all group flex flex-col justify-center items-center`}
      >
        
        <img id={id} src={img} alt={alt} className="rounded-md" />
        <span className="backdrop-blur-sm absolute bottom-5 left-3 p-1 rounded-md text-sm sm:text-md text-white invisible group-hover:visible">
          Credit : {text}
        </span>
      </div>
    </>
  );
};
