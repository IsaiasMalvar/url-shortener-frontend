import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/contextUtility";

const HomePage = (): React.ReactElement => {
  const { token } = useAppContext();
  const [guaranteedToken, setGuaranteedToken] = useState<string>("");
  useEffect(() => {
    if (token) {
      setGuaranteedToken(token);
    }
  }, [token]);

  return (
    <main className="overflow-hidden h-[calc(100vh-40px)] bg-black mobile:flex mobile:flex-col relative ">
      <header className="mobile:block md:hidden p-3 bg-black mb-">
        <h1 className="font-oswald  text-8xl text-white text-center">URLess</h1>
      </header>

      <div className="overflow-visible w-screen md:flex-row mobile:flex-col flex flex-wrap justify-center mobile:h-[70%] mobile:justify-center   md:h-screen relative text-white font-doto mobile:mb-5">
        <section className=" mobile:hidden md:flex mt-10  md:w-[100%] mobile:h-1/2 bg-black p-10 font-mono text-xl flex-col gap-y-4 justify-center items-center">
          <div className="bg-white p-3">
            <h1 className=" font-oswald mobile:text-xl sm:text-5xl  text-black p-1 text-center">
              SHORT, SWEET AND TRACKED
            </h1>
          </div>
          <span className=" font-mono w-[80%] text-pretty">
            With URLess, you have the ability to simplify lengthy and unwieldy
            URLs, transforming them into concise and manageable links.
            Additionally, our platform provides you with the tools to
            efficiently monitor and track the visit count of each shortened URL,
            ensuring you stay informed about their performance and usage.
          </span>
        </section>

        <section className="md:w-full h-1/2   bg-black font-oswald  flex flex-col gap-y-10 justify-center items-center mobile:w-full">
          <div className=" border-black border-2 h-full gap-y-5 flex flex-col justify-center items-center w-full bg-black">
            <div className=" ">
              <motion.h1
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, type: "spring" }}
                className="font-oswald text-8xl text-white md:block mobile:hidden"
              >
                URLess
              </motion.h1>
            </div>
            <div className=" p-3 md:hidden flex flex-col justify-center items-center mobile:mt-24 sm:mt-5">
              <h1 className="font-oswald mobile:text-3xl text-5xl bg-white text-black p-1 text-center w-[70%]">
                SHORT, SWEET AND TRACKED
              </h1>
              <span className="text-wrap mt-5  font-mono">
                With URLess, you have the ability to simplify lengthy and
                unwieldy URLs, transforming them into concise and manageable
                links. Additionally, our platform provides you with the tools to
                efficiently monitor and track the visit count of each shortened
                URL, ensuring you stay informed about their performance and
                usage.
              </span>
            </div>

            <a
              href={`${guaranteedToken ? "/dashboard" : "/login"}`}
              className="cursor-pointer mb-10 font-bold w-[30%] hover:from-gray-700 hover:to-gray-900 hover:scale-105 hover:text-white mobile:text-xl text-3xl rounded-md bg-gradient-to-r from-gray-50 text-black to-gray-500  text-center p-2 transition-all duration-300"
            >
              CLICK HERE TO SHORTEN URL
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
