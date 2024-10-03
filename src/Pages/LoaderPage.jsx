import Lottie from "lottie-react";
import React from "react";
import LOADER from "../assets/LoaderAnimation.json"
export const LoaderPage = () => {
  return (
    <div className="w-full overflow-hidden h-full grid grid-cols-1  justify-items-center gap-1 z-20 place-items-center">
      <div className="w-full h-full flex justify-center items-center">
        <Lottie animationData={LOADER}   />
      </div>
      {/* <div className="w-20 sm:w-40 h-full rounded-full bg-yellow-200 animate-translate-y"></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-green-200 animate-translate-y-2 "></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-blue-200 animate-translate-y "></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-red-200 animate-translate-y "></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-pink-200 animate-translate-y-2 "></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-teal-200 animate-translate-y"></div> */}
    </div>
  );
};
