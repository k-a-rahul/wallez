import React, { useState } from "react";

export const Card = ({
  id,
  img,
  alt,
  text,
  w,
  h,
  file,
  isloading,url
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = {url}; 
    link.setAttribute('download', `${id}.jpeg`); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <>
      <div
        onClick={handleDownload}
        className={`w-${w ? w : "full"} h-${
          h ? h : "full"
        } rounded-md sm:hover:scale-105 transition-all group p-1 flex flex-col justify-center items-center`}
      >
       {/* <a rel="noopener noreferrer" download={url}  href={url} >
        </a> */}
         <img id={id} src={img} alt={alt} className="rounded-md" />
        <span className="backdrop-blur-sm absolute bottom-5 left-3 p-1 rounded-md text-sm sm:text-md text-white invisible group-hover:visible">
          Credit : {text}
        </span>
      </div>
    </>
  );
};
