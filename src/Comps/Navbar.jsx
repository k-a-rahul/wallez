import React, { useEffect, useState } from "react";
import { LOGO } from "../../export";
import { HiSearch } from "react-icons/hi";
import Lottie from "lottie-react";
import LOADER from "../assets/LoaderAnimation.json";

function Navbar({ handlechange, onkeydown, ...rest }) {
  const [data, setData] = useState("cars");
  const [navbar, setNavbar] = useState(false);
  const [word, setWord] = useState("nature");
  const [count, setCount] = useState(0);

  const randomWords = [
    "apple",
    "sunshine",
    "giraffe",
    "ocean",
    "mountain",
    "whisper",
    "keyboard",
    "jungle",
    "chocolate",
    "cloud",
    "pencil",
    "dolphin",
    "umbrella",
    "moonlight",
    "rainbow",
    "coffee",
    "turtle",
    "sapphire",
    "elephant",
    "horizon",
    "balloon",
    "breeze",
    "firefly",
    "quilt",
    "marigold",
    "tangerine",
    "honeycomb",
    "meadow",
    "starfish",
    "violet",
    "puzzle",
    "cascade",
    "echo",
    "lantern",
    "mermaid",
    "cinnamon",
    "whirlpool",
    "teardrop",
    "cactus",
    "symphony",
    "moonstone",
    "paradise",
    "daisy",
    "pebble",
    "labyrinth",
    "fable",
    "serenade",
    "silhouette",
    "nectar",
    "twilight",
  ];

  const { searchload, handleviewchange, value } = rest;

  useEffect(() => {
    if (count < randomWords.length) {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1);
        setWord(randomWords[count]);
      }, 3000);
      return () => {
        clearInterval(timer);
      };
    } else {
      setCount(0);
    }
  }, [count]);

  const handleclick = () => {
    window.location.reload();
  };

  window.onscroll = () => {
    if (window.scrollY) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <div
        className={`w-full ${
          navbar ? " bg-none backdrop-blur-2xl" : "bg-none"
        } fixed top-0 z-40 p-2 flex justify-evenly items-center transition-all `}
      >
        <div>
          <img
            onClick={handleclick}
            src={LOGO}
            className="cursor-pointer hover:opacity-80 rounded-md mx-4 w-10 sm:w-14 "
            alt=""
          />
        </div>
        <div
          className={`w-[40%] h-10 bg-slate-200 px-1 text-xs sm:text-lg text-black rounded-md outline-none transition-all flex justify-center items-center`}
        >
          <input
            placeholder={`Search "${word}"`}
            onChange={handlechange}
            className={`${
              searchload ? "w-full" : "w-full"
            } p-1 px-2 h-7 bg-slate-50 focus-visible:outline-none text-xs sm:text-lg rounded-md text-black `}
          />

          {searchload ? (
            <Lottie animationData={LOADER} className="w-16" />
          ) : (
            <button className="w-16" onClick={onkeydown}>
              Go
            </button>
          )}
        </div>
        <div className="text-xs">
          <select
            onChange={handleviewchange}
            value={value}
            name="viewselect"
            className="bg-slate-200 w-20 sm:w-36 p-1 rounded-md text-xs mr-4 sm:mr-0 sm:text-base overflow-hidden"
          >
            <option
              value="portrait"
              onChange={handleviewchange}
              className=" text-xs sm:text-base"
            >
              Portrait
            </option>
            <option
              value="landscape"
              onChange={handleviewchange}
              className=" text-xs sm:text-base"
            >
              Landscape
            </option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Navbar;

{
  /* <div className={`w-12 `}>
              <img
                onClick={handleclick}
                src={LOGO}
                className="cursor-pointer hover:opacity-80 rounded-md mx-4 w-10 sm:w-12 "
                alt=""
              />
            </div> */
}

// <input
//   placeholder={`Search for "${word}"`}
//   onKeyDownCapture={onkeydown}
//   onChange={handlechange}
//   className={`w-full ${
//     navbar ? "h-10 w-full" : "h-10 sm:w-1/2 "
//   } bg-slate-100   p-1 text-xs sm:text-lg text-black rounded-md outline-none transition-all`}
// />
