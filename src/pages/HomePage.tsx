import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = (): React.ReactElement => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <main className="overflow-hidden h-screen bg-black mobile:flex mobile:flex-col ">
      {" "}
      <header className="mobile:block md:hidden p-3 bg-black">
        <h1 className="font-oswald text-8xl text-white text-center">URLess</h1>
      </header>
      <div className="overflow-visible w-screen md:flex-row mobile:flex-col flex flex-wrap justify-center mobile:h-[70%] mobile:justify-center   md:h-screen relative text-white font-doto mobile:mb-5">
        <section className="mobile:hidden md:flex  md:w-[100%] mobile:h-1/2 bg-black p-10 font-mono text-xl flex-col gap-y-4 justify-center items-center">
          <div className="bg-white p-3">
            <h1 className="font-oswald text-3xl text-black p-1">
              SHORT, SWEET AND TRACKED
            </h1>
          </div>
          <span className="text-wrap">
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
            <div className=" p-3 md:hidden flex flex-col justify-center items-center mt-5">
              <h1 className="font-oswald text-3xl bg-white text-black p-1 text-center w-[70%]">
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

            <a className="mb-10 font-bold w-1/2  mobile:text-xl text-3xl rounded-md bg-gradient-to-r from-gray-50 text-black to-gray-500  text-center p-2">
              CLICK HERE TO SHORTEN URL
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
