import React, { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";

export const Card = ({
  skeleton,
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
        className={` w-full overflow-hidden  h-auto rounded-md  transition-all group flex flex-col justify-center items-center`}
      >
        <a href={url} target="_blank">
          <div
            className={` flex flex-col justify-between items-center bg-cover bg-no-repeat`}
          >
            <img
              id={id}
              src={img}
              alt={alt}
              className="rounded-md object-cover  hover:scale-110 transition-all duration-[400ms] delay-0"
            />
          </div>
        </a>
      </div>
    </>
  );
};
