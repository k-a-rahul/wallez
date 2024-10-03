import React, { useEffect, useState } from "react";
import { LOGO } from "../../export";
import { HiSearch } from "react-icons/hi";

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

  document.onscroll = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <div
        className={`w-full p-2 flex justify-between items-center bg-mainbg absolute top-2 `}
      >
        {navbar ? (
          <div className="w-full fixed top-1 z-50 flex justify-center">
            <input
              placeholder={`Search for "${word}"`}
              onKeyDownCapture={onkeydown}
              onChange={handlechange}
              className={` ${
                navbar ? "h-10 w-1/2" : "h-8 sm:w-1/2 "
              } bg-slate-100   p-1 text-xs sm:text-lg text-black rounded-md outline-none transition-all`}
            />
          </div>
        ) : (
          <div className="w-full flex justify-between items-center">
            <div className={`w-12 `}>
              <img
                onClick={handleclick}
                src={LOGO}
                className="cursor-pointer hover:opacity-80 rounded-md mx-4 w-10 sm:w-12 "
                alt=""
              />
              <div className="w-full flex justify-center">
                <input
                  placeholder={`Search for "${word}"`}
                  onKeyDownCapture={onkeydown}
                  onChange={handlechange}
                  className={`  bg-slate-100   p-1 text-xs sm:text-lg text-black rounded-md outline-none transition-all`}
                />
              </div>
            </div>
          </div>
        )}
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
