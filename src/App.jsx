import { useEffect, useState } from "react";
import Navbar from "./Comps/Navbar";
import { Loader } from "./Comps/Loader";
import { Card } from "./Comps/Card";
import { Toast } from "./Comps/Toast";
import { LoaderPage } from "./Pages/LoaderPage";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { Footer } from "./Comps/Footer";
import Modalview from "./Comps/Modalview";
import { easeIn, motion } from "framer-motion";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [page, setPage] = useState(1);
  const [phone, setPhone] = useState(true);
  const [showtoast, setShowtoast] = useState(false);
  const [text, setText] = useState("");
  const [totopbtn, setTotopbtn] = useState(false);
  const [searchload, setSearchload] = useState(false);
  const [pageLoader, setPageLoader] = useState(false);
  const [modal, setModal] = useState(false);

  const randompage = () => Math.ceil(Math.random() * 100);

  let baseurl = `https://api.pexels.com/v1/`;
  const apiKey = "zE9INGvMnSBQJJ4lp3DVIAWNvfyWqwW4Jj50FYMaRSzJr8PR5xDsRK8Q";

  useEffect(() => {
    fetchData({ param: `curated?page=${randompage()}` });
    setTimeout(() => {}, 2000);
  }, []);

  const fetchData = async ({ param }) => {
    setIsloading(true);
    try {
      const response = await fetch(`${baseurl}${param}`, {
        headers: {
          Authorization: apiKey,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        const res = await response.json();
        setData((prev) => [...prev, ...new Set([...res?.photos])]);
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsloading(false);
    }
  };

  const loadmore = () => {
    [null, undefined, ""].includes(query)
      ? (setPage((prevpage) => prevpage + 1),
        fetchData({ param: `curated?page=${randompage()}` }))
      : (setPage((prevpage) => prevpage + 1),
        fetchData({ param: `search?query=${query}&page=${page + 1}` }));
  };
  const scrolldown = () => {
    document
      .getElementById("bottomdiv")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const handlechange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuery = (e) => {
    if ([""].includes(query)) {
      setText("Enter a valid keyword to search");
      setShowtoast(true);
    } else {
      setSearchload(true);
      fetchData({ param: `search?query=${query}` });
      const scrolltime = setTimeout(() => {
        setSearchload(false);
        scrolldown();
      }, 2500);
    }
  };
  // document.onscroll = () => {
  //   setTotopbtn(true);
  //   clearTimeout(timer);
  // };

  console.log(data);

  const timer = setTimeout(() => {
    setTotopbtn(false);
  }, 5000);

  const handleviewchange = () => {
    setPhone((prev) => !prev);
    setPageLoader(true);
    setTimeout(() => {
      setPageLoader(false);
    }, 4000);
  };

  const handleClick = () => {};

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "linear",
        delay: 0,
      },
    },
  };
  return (
    <>
      <Modalview
        show={modal}
        onclick={handleClick}
        child={<div className="w-full h-full bg-green-400"> </div>}
      />
      <Toast show={showtoast} hide={() => setShowtoast(false)} text={text} />
      <div className="my-14 transition-all ">
        <Navbar
          handleviewchange={handleviewchange}
          searchload={searchload}
          fetchdata={fetchData}
          handlechange={handlechange}
          onkeydown={handleQuery}
        />
      </div>

      <div className="w-full mt-0">
        {totopbtn ? (
          <div
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            className="z-30 text-4xl sm:text-5xl text-white bg-blue-300 rounded-full fixed bottom-3 right-10 hover:bg-blue-500 cursor-pointer"
          >
            <FaRegArrowAltCircleUp />
          </div>
        ) : (
          ""
        )}

        <>
          <motion.div
            initial="hidden"
            animate="show"
            variants={variants}
            className={`p-4 grid ${
              phone
                ? `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`
                : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
            } flex-wrap gap-2 align-middle place-items-center justify-items-center justify-center items-center overflow-hidden`}
          >
            {data?.map((item) => {
              return (
                <motion.div variants={variants} key={item?.id}>
                  <Card
                    id={item.id}
                    img={phone ? item?.src?.portrait : item?.src?.landscape}
                    text={item?.photographer}
                    alt={item?.alt}
                    url={item.src.large2x}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <div
            id="bottomdiv"
            className="w-full flex justify-center items-center my-3"
          >
            <button
              onClick={loadmore}
              className={`text-sm sm:text-xl text-black group ${
                isloading
                  ? "bg-none cursor-not-allowed"
                  : "hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center  "
              }   `}
            >
              {isloading ? <Loader /> : "Load More Wallz"}
            </button>
          </div>
        </>
      </div>
      <div className="relative bottom-0 w-full ">
        <Footer />
      </div>
    </>
  );
}

export default App;
