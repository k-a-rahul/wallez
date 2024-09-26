import { useEffect, useState } from "react";
import Navbar from "./Comps/Navbar";
import { Loader } from "./Comps/Loader";
import { Card } from "./Comps/Card";
import { Toast } from "./Comps/Toast";
import { Page } from "./Pages/Page";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [page, setPage] = useState(1);
  const [phone, setPhone] = useState(true);
  const [showtoast, setShowtoast] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [totopbtn, setTotopbtn] = useState(false);

  const randompage = () => Math.ceil(Math.random() * 100);

  let baseurl = `https://api.pexels.com/v1/`;
  const apiKey = "zE9INGvMnSBQJJ4lp3DVIAWNvfyWqwW4Jj50FYMaRSzJr8PR5xDsRK8Q";

  useEffect(() => {
    fetchData({ param: `curated?page=${randompage()}` });
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
        setData((prev) => [...prev, ...new Set([...res.photos])]);
      }
    } catch (error) {
      alert("Fetch error:", error);
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

  const handlechange = (e) => {
    setQuery(e.target.value);
  };
  const scrolldown = () =>
    document
      .getElementById("bottomdiv")
      .scrollIntoView({ block: "start", behavior: "smooth" });

  const onkeydown = (e) => {
    if (e.key === "Enter") {
      if ([""].includes(query)) {
        setText("Enter a valid keyword to search");
        setShowtoast(true);
      } else {
        setLoading(true);
        fetchData({ param: `search?query=${query}` });
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        setTimeout(() => {
          scrolldown();
        }, 3500);
      }
    }
  };

  showtoast
    ? setTimeout(() => {
        hide();
      }, 5000)
    : "";

  window.onscroll = () => {
    if (window.scrollY > 100) {
      setTotopbtn(true);
    } 
    else ""
  };
  window.onscrollend=()=>{
    setTimeout(() => {
      setTotopbtn(false)
    }, 3000);
  }
  return (
    <>
      <Toast show={showtoast} hide={() => setShowtoast(false)} text={text} />
      <Navbar handlechange={handlechange} onkeydown={onkeydown} />
      {loading ? (
        <div className="w-full h-full flex justify-center items-center text-center">
          <Page />
        </div>
      ) : (
        <>
          
          <div className="w-full h-auto mt-14">
          {totopbtn ? (
            <div onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})} className="z-30 text-xl sm:text-5xl text-black fixed bottom-3 right-3 hover:animate-pulse cursor-pointer">
              <FaRegArrowAltCircleUp />
            </div>
          ) : (
            <div className=" "></div>
          )}
            <div
              className={`p-4 grid ${
                phone
                  ? `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`
                  : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
              } flex-wrap gap-4 align-middle place-items-center justify-items-center justify-center items-center`}
            >
              {data.map((item) => {
                return (
                  <Card
                    key={item?.id}
                    id={item.id}
                    img={phone ? item?.src?.portrait : item?.src?.landscape}
                    text={item?.photographer}
                    alt={item?.alt}
                    url={item.src.large}
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
                {isloading ? <Loader w={"full"} /> : "Load More Wallz"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
