import { useEffect } from "react";
import { useFetchAllUrls } from "../hooks/useQuery";
import toast from "react-hot-toast";

interface UrlList {
  setSlug: (slug: string) => void;
  token: string;
}

const UrlList = ({ setSlug, token }: UrlList) => {
  const { data: urlList, isError } = useFetchAllUrls(token);
  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (isError) {
      toast.error("URLs info could not be properly loaded", {
        position: "top-right",
      });
    }
  }, [isError, urlList]);

  return (
    <section className="flex mobile:flex-col mobile:h-full w-[60%] p-3">
      <h1 className="uppercase text-2xl mobile:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center mb-3 font-doto">
        Your URLS
      </h1>
      {urlList ? (
        <div className="flex flex-col justify-start items-start gap-y-5 h-[300px] overflow-y-auto font-oswald">
          {urlList?.map((url) => (
            <div
              key={url.shortUrl}
              className="flex flex-col gap-y-3 justify-start items-start w-full  p-2 border-b-2"
            >
              <div className="flex gap-x-2 items-center">
                <span className=" text-white text-lg mobile:text-base sm:text-lg md:text-xl lg:text-2xl uppercase p-1">
                  Short URL
                </span>
                <a
                  target="_blank"
                  href={`${apiURL}/${url.shortUrl}`}
                  className="bg-white p-1 text-lg mobile:text-[11px] sm:text-xs md:text-sm lg:text-base"
                >
                  {`${apiURL}/${url.shortUrl}`}
                </a>
              </div>

              <div className="flex gap-x-2 flex-col w-full flex-wrap">
                <div className="flex gap-x-2 items-center">
                  <span className="text-white text-xs mobile:text-base sm:text-lg md:text-xl lg:text-2xl uppercase  p-1 inline">
                    Original URL
                  </span>
                  <a
                    target="_blank"
                    href={`https://${url.originalUrl}`}
                    className="cursor-pointer bg-white p-1 text-xs mobile:text-[11px] sm:text-xs md:text-sm lg:text-base break-all"
                  >
                    {url.originalUrl}
                  </a>
                </div>
                <div className="flex w-full flex-col">
                  <button
                    onClick={() => {
                      setSlug(url.shortUrl);
                    }}
                    className="mobile:self-center md:self-start font-bold text-xs mobile:text-[11px] sm:text-xs md:text-sm lg:text-base uppercase mobile:w-[60%]  text-center bg-white p-3 mt-5 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    CHECK URL ANALYTICS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="md:text-5xl text-white p-5 text-center font-mono h-[310px]  mobile:text-2xl">
          NO URLS YET
        </div>
      )}
    </section>
  );
};

export default UrlList;
