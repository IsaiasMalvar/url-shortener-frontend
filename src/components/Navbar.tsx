const Navbar = (): React.ReactElement => {
  return (
    <nav className="mobile:p-3 md:p-0  md:mt-0 md:border-t-0 bg-black gap-x-1 font-oswald font-semibold    flex flex-wrap mobile:items-center md:items-start mobile:text-xl  md:text-2xl mobile:w-full">
      <a
        href="/home"
        className="cursor-pointer bg-white hover:bg-black text-center hover:text-white hover:duration-200 flex-1 h-[40px]   p-2  text-black"
      >
        HOME
      </a>

      <a className="cursor-pointer bg-white hover:bg-black text-center hover:text-white hover:duration-200 flex-1 h-[40px] p-2  text-black">
        DASHBOARD
      </a>
      <a className="cursor-pointer bg-white  hover:bg-black   hover:text-white hover:duration-200  flex-1 h-[40px]  text-center  p-2    text-black">
        LOGOUT
      </a>
    </nav>
  );
};

export default Navbar;
