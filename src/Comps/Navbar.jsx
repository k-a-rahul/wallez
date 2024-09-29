import React, { useEffect, useState } from "react";
import { LOGO } from "../../export";
import { HiSearch } from "react-icons/hi";

function Navbar({ handlechange, onkeydown }) {
  const [data, setData] = useState("cars");
  const [navbar, setNavbar] = useState(false);

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

  document.onscroll = () => {
    if (window.scrollY > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      {navbar ? (
        <div className="w-full bg-none fixed top-0 z-20 my-1 flex justify-center items-center">
          <div
            className={`${
              navbar ? "w-[70%]" : ""
            } delay-75 p-1 transition-all bg-slate-100 rounded-md flex justify-center items-center`}
          >
            <div className="bg-slate-100 text-2xl">
              <HiSearch />
            </div>
            <input
              placeholder={`Search for "${data}"`}
              onKeyDownCapture={onkeydown}
              onChange={handlechange}
              className={`w-full ${
                navbar ? "h-10" : "h-10"
              } bg-slate-100  sm:w-full p-1 text-xs sm:text-lg text-black rounded-md outline-none transition-all`}
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className={`bg-mainbg w-full h-14 fixed top-0 z-10 overflow-hidden p-2 flex justify-between items-center`}
          >
            <div className="flex justify-center items-center transition-all  ">
              <div className={`w-12 `}>
                <img
                  onClick={handleclick}
                  src={LOGO}
                  className="cursor-pointer hover:opacity-80 rounded-md mx-4 w-10 sm:w-12 "
                  alt=""
                />
              </div>
            </div>
            <div
              className={`sm:w-[25%] delay-75 p-1 transition-all bg-slate-100 rounded-md flex justify-center items-center`}
            >
              <div className="bg-slate-100 text-2xl">
                <HiSearch />
              </div>
              <input
                placeholder={`Search for "${data}"`}
                onKeyDownCapture={onkeydown}
                onChange={handlechange}
                className="w-full h-6 bg-slate-100 sm:w-full p-1 text-xs sm:text-lg text-black rounded-md outline-none transition-all"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
