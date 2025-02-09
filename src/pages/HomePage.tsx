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
    <main className="min-h-screen e bg-black flex flex-col justify-center items-center text-white font-mono -mb-10">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-10 md:gap-20 text-center md:text-left mt-10">
        <header className="w-full text-center p-4 bg-black md:hidden">
          <h1 className="font-oswald text-6xl">URLess</h1>
        </header>

        <section className="md:w-1/2 flex flex-col items-center md:items-start gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:block font-oswald text-8xl"
          >
            URLess
          </motion.h1>

          <div className="bg-white text-black p-4 rounded-md shadow-lg">
            <h2 className="font-oswald text-2xl sm:text-4xl text-center">
              SHORT, SWEET, AND TRACKED
            </h2>
          </div>

          <p className="text-lg leading-relaxed max-w-md">
            With URLess, you can simplify long and cumbersome URLs into short,
            manageable links. Our platform also enables you to efficiently
            monitor the visit count of each shortened URL, keeping you informed
            about their performance.
          </p>
        </section>

        <section className="md:w-1/2 flex flex-col items-center gap-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="block md:hidden font-oswald text-5xl"
          >
            URLess
          </motion.h1>

          <a
            href={guaranteedToken ? "/dashboard" : "/login"}
            className="relative text-center cursor-pointer font-bold text-xl sm:text-2xl px-6 py-3 rounded-md bg-gradient-to-r from-gray-50 to-gray-500 text-black  hover:from-gray-700 hover:to-gray-900 hover:text-white transition-all duration-300"
          >
            CLICK HERE TO SHORTEN URL
          </a>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
