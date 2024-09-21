import { useEffect, useState } from "react";
import Navbar from "./Comps/Navbar";
import { Loader } from "./Comps/Loader";
import Modalview from "./Comps/Modalview";
import { Card } from "./Comps/Card";
import { Toast } from "./Comps/Toast";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [page, setPage] = useState(1);
  const [phone, setPhone] = useState(true);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

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
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      else {
        const res = await response.json();
        query === ""
          ? setData((prev) => [...prev, ...new Set([...res.photos])])
          : setData(res.photos);
      }
    } catch (error) {
      alert("Fetch error:", error);
    } finally {
      setIsloading(false);
    }
  };
  

  const loadmore = () => {
    [null,undefined,""].includes(query)
      ? (setPage((prevpage) => prevpage + 1),
        fetchData({ param: `curated?page=${randompage()}` }))
      : (setPage((prevpage) => prevpage + 1),
        fetchData({ param: `search?query=${query}&page=${page + 1}` }),
        setData((prev) => [...prev, ...new Set([...data])]));
  };

  const handlechange = (e) => {
    setQuery(e.target.value);
  };
  const onkeydown = (e) => {
    if (e.key === "Enter") {
      if (query === "") {
        setText("Enter a valid keyword to search");
        setShow(true);
      } else fetchData({ param: `search?query=${query}` });
    }
  };

  const handlephoneclick = () => setPhone(true);

  const handledeskclick = () => setPhone(false);
  
  const hide = () => {
    setShow(false);
  };
  useEffect(() => {
    setTimeout(() => {
      hide();
    }, 4000);
  }, []);
  
  console.log(data);
  

  return (
    <>
      <Toast show={show} hide={hide} text={text} />
      <Navbar
        handlephoneclick={handlephoneclick}
        handlechange={handlechange}
        handledeskclick={handledeskclick}
        onkeydown={onkeydown}
      />
      <div className="w-full h-auto mt-10">
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
                url={item.src.original}
              />
            );
          })}
        </div>
          <div className="w-full flex justify-center items-center my-3">
            <button
              onClick={loadmore}
              className={`text-xl text-black ${
                isloading
                  ? "bg-none cursor-not-allowed"
                  : "bg-btnhover hover:-translate-y-1"
              }  rounded-md hover:text-white p-2 transition-all`}
            >
              {isloading ? <Loader w={"full"} /> : "More images"}
            </button>
          </div>
      </div>
    </>
  );
}

export default App;
