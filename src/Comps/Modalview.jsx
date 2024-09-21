import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

function Modalview({ child }) {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="z-10 w-screen backdrop-brightness-50 h-screen absolute flex justify-center items-center ">
        <div className="absolute right-[5%] top-[5%] flex justify-center items-center">
          <FaRegWindowClose onClick={()=>setShow(false)} className="text-3xl text-white cursor-pointer" />
        </div>
        <div className="w-full  h-[70%] aspect-square flex justify-center items-center">
          {child}
        </div>
      </div>
    )
  );
}

export default Modalview;
