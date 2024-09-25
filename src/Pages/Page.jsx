import React from "react";

export const Page = () => {
  return (
    <div className="w-full overflow-hidden h-screen grid grid-cols-3 p-1 justify-items-center gap-1 z-20 place-items-center">
      <div className="w-20 sm:w-40 h-full rounded-full bg-yellow-200 animate-translate-y"></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-green-200 animate-translate-y-2 "></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-blue-200 animate-translate-y "></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-red-200 animate-translate-y "></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-pink-200 animate-translate-y-2 "></div>
      <div className="w-20 sm:w-40 h-full rounded-full bg-teal-200 animate-translate-y"></div>
    </div>
  );
};
