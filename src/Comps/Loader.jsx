import React from "react";

export const Loader = ({ child,w,h}) => {
  return (
    <div className={`w-${w ? w:'full'} h-${ h ? h:'full'} z-10 flex justify-center items-center  `}>
      <div className="w-full h-full flex justify-center items-center gap-4">
        <div className="w-5 h-5 rounded-full bg-blue-400 animate-translate-y"></div>
        <div className="w-5 h-5 rounded-full bg-blue-400 animate-translate-y-2"></div>
        <div className="w-5 h-5 rounded-full bg-blue-400 animate-translate-y"></div>
        <div className="w-5 h-5 rounded-full bg-blue-400 animate-translate-y-2"></div>
      </div>
      {child}
    </div>
  );
};
