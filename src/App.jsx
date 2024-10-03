import { useEffect, useState } from "react";
import Navbar from "./Comps/Navbar";
import { Loader } from "./Comps/Loader";
import { Card } from "./Comps/Card";
import { Toast } from "./Comps/Toast";
import { LoaderPage } from "./Pages/LoaderPage";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [page, setPage] = useState(1);
  const [phone, setPhone] = useState(true);
  const [showtoast, setShowtoast] = useState(false);
  const [text, setText] = useState("");
  const [totopbtn, setTotopbtn] = useState(false);

  const randompage = () => Math.ceil(Math.random() * 100);

  let baseurl = `https://api.pexels.com/v1/`;
  const apiKey = "zE9INGvMnSBQJJ4lp3DVIAWNvfyWqwW4Jj50FYMaRSzJr8PR5xDsRK8Q";

  useEffect(() => {
    fetchData({ param: `curated?page=${randompage()}` });
  }, []);

  const fetchData = async ({ param }) => {
    setIsloading(true)
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
      setIsloading(false)
    }
  };

  const loadmore = () => {
    [null, undefined, ""].includes(query)
      ? (setPage((prevpage) => prevpage + 1),
        fetchData({ param: `curated?page=${randompage()}` }))
      : (setPage((prevpage) => prevpage + 1),
        fetchData({ param: `search?query=${query}&page=${page + 1}` }));
  };

  const handlechange = (e) => {
    setQuery(e.target.value);
  };
  const scrolldown = () => {
    document
      .getElementById("bottomdiv")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const onkeydown = (e) => {
    if (e.key === "Enter") {
      setIsloading(true)
      if ([""].includes(query)) {
        setText("Enter a valid keyword to search");
        setShowtoast(true);
      } else {
        fetchData({ param: `search?query=${query}` });
        setText("Data Added to bottom of Page");
        setShowtoast(true);
        const scrolltime = setTimeout(() => {
          scrolldown();
        }, 1500);
        setIsloading(false)
      }
    }
  };
  let timer;
  document.onscroll = () => {
    setTotopbtn(true);
  };
  window.onscrollend = () => {
    timer = setTimeout(() => {
      setTotopbtn(false);
    }, 5000);
  };

  return (
    <>
      <Toast bg={'bg-green-400'} show={showtoast} hide={() => setShowtoast(false)} text={text} />
      <div className="my-14 transition-all ">
        <Navbar
          fetchdata={fetchData}
          handlechange={handlechange}
          onkeydown={onkeydown}
        />
      </div>

      <div className="w-full h-auto mt-0">
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
          ''
        )}

        {/* {loader ? (
          <div className="w-full h-full flex justify-center items-center text-center">
            <LoaderPage />
          </div>
        ) : ( */}
        <>
          <div
            className={`p-4 grid ${
              phone
                ? `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`
                : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
            } flex-wrap gap-2 align-middle place-items-center justify-items-center justify-center items-center`}
          >
            {data?.map((item) => {
              return (
                <Card
                  key={item?.id}
                  id={item.id}
                  img={phone ? item?.src?.portrait : item?.src?.landscape}
                  text={item?.photographer}
                  alt={item?.alt}
                  url={item.src.large2x}
                />
              );
            })}
          </div>
          <div
            id="bottomdiv"
            className="w-full  flex justify-center items-center my-3"
          >
            <button
              onClick={loadmore}
              className={`text-sm sm:text-xl text-black ${
                isloading
                  ? "bg-none cursor-not-allowed"
                  : "bg-btnhover hover:-translate-y-1"
              }  rounded-md hover:text-white p-2 transition-all`}
            >
              {isloading ? <Loader /> : "Load More Wallz"}
            </button>
          </div>
        </>
        {/* )}  */}
      </div>
      <div className="w-full h-[50%] bg-mainbg"></div>
    </>
  );
}

export default App;
