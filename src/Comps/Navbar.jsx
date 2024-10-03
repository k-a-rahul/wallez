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

  window.onscroll = () => {
    if (window.scrollY > 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
        {navbar ? (
          <div
            className={`w-full fixed top-2 z-20 flex justify-center items-center p-2 transition-all`}
          >
            <input
              placeholder={`Search for "${word}"`}
              onKeyDownCapture={onkeydown}
              onChange={handlechange}
              className={`w-[75%] sm:w-[55%] h-10 bg-slate-100  p-1 text-xs sm:text-lg text-black rounded-md outline-none transition-all`}
            />
            <div></div>
          </div>
        ) : (
          <div
            className={`w-full bg-mainbg fixed top-0 z-50 p-2 flex justify-between items-center transition-all `}
          >
            <img
              onClick={handleclick}
              src={LOGO}
              className="cursor-pointer hover:opacity-80 rounded-md mx-4 w-12 sm:w-14 "
              alt=""
            />
          </div>
        )}
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
