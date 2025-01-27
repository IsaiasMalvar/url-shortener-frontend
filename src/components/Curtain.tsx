const Curtain = (): React.ReactElement => {
  return (
    <>
      <div className="z-0 border-[10px] font-bold font-doto animate-blg forwards animation-delay-500 absolute  border-white top-0 left-0 w-1/2 h-1/2 bg-transparent flex flex-none flex-col lg:text-7xl mobile:text-sm small-tablet:text-3xl sm:text-5xl bg-white  items-center justify-center">
        <span className="border-t-[10px]  mobile:border-t-[5px]  border-black p-5">
          FAST
        </span>
      </div>
      <div className="z-0 font-doto font-bold  animate-blg forwards animation-delay-800 absolute  border-white bottom-0 right-0 w-1/2 h-1/2 flex flex-none flex-col bg-white lg:text-7xl sm:text-5xl mobile:text-sm small-tablet:text-3xl justify-center items-center">
        <span className="border-r-[10px]  mobile:border-r-[5px]  border-black p-5">
          GREAT
        </span>
      </div>
      <div className="z-0 border-[10px] font-bold  font-doto animate-blg forwards animation-delay-1100 absolute  border-white top-0 right-0 w-1/2 h-1/2 flex flex-none flex-col bg-white lg:text-7xl mobile:text-sm sm:text-5xl small-tablet:text-3xl justify-center items-center">
        <span className="border-l-[10px]  mobile:border-l-[5px]  border-black p-5">
          SECURE
        </span>
      </div>
      <div className="z-0 border-[10px] font-bold  font-doto animate-blg forwards animation-delay-1400 absolute  border-white bottom-0 left-0 w-1/2 h-1/2 flex flex-none flex-col bg-white lg:text-7xl mobile:text-sm sm:text-5xl small-tablet:text-3xl justify-center items-center">
        <span className="border-b-[10px]  mobile:border-b-[5px]   border-black p-5">
          SIMPLE
        </span>
      </div>
    </>
  );
};

export default Curtain;
