import React, { useEffect, useState } from "react";
import { LOGO } from "../../export";
import { HiSearch } from "react-icons/hi";
import { CgHomeAlt } from "react-icons/cg";

function Navbar({
  handlechange,
  onkeydown,
  value,
  handlephoneclick,
  handledeskclick,
}) {
  const [width, setWidth] = useState("20%");
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/randomword`, {
        headers: { "X-Api-Key": "BrRxe8iDvqsKJG0OuciHsw==D9ycz87C0XVurS6L" },
      });
      if (!response.ok) {
        alert("response is not ok", response);
        console.log(response);
      } else {
        const res = await response.json();
        setData(res.word[0]);
      }
    } catch (error) {
      throw new Error("An Error occured" + error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(fetchData, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleclick = () => {
    window.location.reload();
  };

  return (
    <div
      className={`bg-cardbg w-full h-14 fixed top-0 z-10 overflow-hidden p-2 flex justify-between items-center`}
    >
      <div className="flex justify-center items-center transition-all  ">
        <div className={`w-12 `}>
          <img
            onClick={handleclick}
            src={LOGO}
            className="cursor-pointer hover:opacity-80 rounded-md mx-4 w-8 sm:w-12 "
            alt=""
          />
        </div>
      </div>

      {/* <div className="flex justify-center items-center gap-3">
        <button
          onClick={handlephoneclick}
          className={`text-white text-xs sm:text-sm rounded-md hover:bg-btnhover hover:rounded-md hover:text-black transition-all p-1`}
        >
          Phone
        </button>
        <button
          onClick={handledeskclick}
          className="text-white text-xs sm:text-sm hover:bg-btnhover hover:rounded-md hover:text-black transition-all p-1"
        >
          Desktop
        </button>
      </div> */}
      <div
        onFocus={() => setWidth("20%")}
        onBlur={() => setWidth("20%")}
        style={{ width: width }}
        className={`delay-75 p-1 transition-all bg-slate-100 rounded-md flex justify-center items-center`}
      >
        <div className="bg-slate-100 text-3xl">
          <HiSearch />
        </div>
        <input
          placeholder={`Search for : ${data}`}
          value={value}
          onKeyDownCapture={onkeydown}
          onChange={handlechange}
          className="w-full h-6 bg-slate-100 sm:w-full p-1 text-xs sm:text-lg text-black rounded-md outline-none transition-all"
        />
      </div>
    </div>
  );
}

export default Navbar;
