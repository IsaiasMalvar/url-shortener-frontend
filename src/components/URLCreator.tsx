import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { URLRequest, URLResponse } from "../types/data";
import { useForm } from "react-hook-form";
import { postUrl, usePostRequest } from "../hooks/useQuery";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface URLCreatorProps {
  token: string;
  setEmptySlug: (empty: string) => void;
}

const URLCreator = ({ token, setEmptySlug }: URLCreatorProps) => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const urlInfoSchema = yup
    .object({
      originalUrl: yup.string().required("Invalid URL").min(1),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<URLRequest>({
    resolver: yupResolver(urlInfoSchema),
  });

  const { mutate, isSuccess, data, isError } = usePostRequest<
    URLResponse,
    { data: URLRequest; token: string }
  >({
    mutationFn: postUrl,
    onSuccess: () => {},
    onError: (err) => {
      console.error("Error creating URL:", err.message);
    },
    invalidateKeys: ["fetchAllUrls", "fetchClicksPerUrl", "fetchTotalClicks"],
  });

  const onSubmit = (data: URLRequest) => {
    setIsLoading(true);
    if (
      !data.originalUrl.startsWith("https://") &&
      !data.originalUrl.startsWith("http://")
    ) {
      data.originalUrl = "https://" + data.originalUrl;
    }
    mutate({ data, token });
  };

  const copyToClipboard = async (text: string) => {
    if (text) {
      try {
        navigator.clipboard.writeText(text);
        toast.success("Link copied to clipboard!");
      } catch (error) {
        if (error instanceof Error) {
          toast.error("Error copying link: " + error.message);
        } else {
          toast.error("Could not copy the link to clipboard");
        }
      }
    }
    return;
  };

  useEffect(() => {
    if (isSuccess) {
      setIsLoading(false);
    }

    if (isError) {
      toast.error("URL could not be successfully created.");
    }
  }, [isError, isSuccess]);

  return (
    <section className="flex flex-col p-3 w-[40%] gap-y-5  items-center h-[350px] overflow-auto">
      <h1 className="uppercase text-2xl mobile:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center mb-3 font-doto">
        GET NEW URL
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-wrap justify-center gap-y-5"
      >
        <button
          type="submit"
          className="border-2 border-white border-r-gray-500 border-r-2 hover:scale-110 transition-all duration-300 cursor-pointer bg-gray-500 font-oswald p-2 text-white text-lg mobile:text-base sm:text-lg md:text-xl lg:text-2xl uppercase"
        >
          <span className="font-bold">Shorten</span>
        </button>
        <input
          className="border-b-2 border-b-white p-2 w-[50%] break-all"
          {...register("originalUrl")}
        ></input>
      </form>
      {errors.originalUrl?.message && (
        <p className="p-1 text-base sm:text-xl text-red-400 h-[25px]">
          {errors.originalUrl?.message}
        </p>
      )}

      {isSuccess && (
        <div className="flex w-full flex-wrap justify-center items-center gap-y-5">
          <span className="font-oswald p-2 text-white text-lg mobile:text-base sm:text-lg md:text-xl lg:text-2xl uppercase">
            {" "}
            NEW URL
          </span>
          <button
            onClick={(e) => copyToClipboard(e.currentTarget.textContent || "")}
            className="cursor-pointer bg-white p-2 w-[50%] break-all"
          >
            {`${apiURL + "/" + data?.shortUrl}`}
          </button>
        </div>
      )}
      {isLoading && (
        <div className="flex w-full flex-wrap justify-center gap-y-5">
          <span className="font-oswald p-2 text-white text-lg mobile:text-base sm:text-lg md:text-xl lg:text-2xl uppercase">
            {" "}
            CREATING NEW URL ...
          </span>
        </div>
      )}
      <button
        className="uppercase text-xl overflow-y-visible  border-b-2 border-white text-white font-oswald font-bold hover:scale-105 transition-all duration-200"
        onClick={() => setEmptySlug("")}
      >
        Check total analytics
      </button>
    </section>
  );
};

export default URLCreator;
