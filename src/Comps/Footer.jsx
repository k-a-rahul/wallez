import React from "react";
import PEXELS from "../assets/PexelsLogo.png";

export const Footer = () => {
  return (
    <div className="w-full mx-auto h-[25vh] my-2 bg-mainbg grid grid-cols-1 sm:grid-cols-2 justify-items-center place-items-center">
      <div className="text-sm text-white">
        <span className="text-base"> Top Searchs</span>
        <p className="text-center">
          All Wallpapers Shown Here are fetched from pexels API.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>Sponsered By</p>
        <a href="https://www.pexels.com/" target="_blank">
          <img src={PEXELS} className="w-20 sm:w-32 h-auto hover:opacity-50" alt="" />
        </a>
      </div>
    </div>
  );
};
