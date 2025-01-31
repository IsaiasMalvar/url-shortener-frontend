import LogoutButton from "./LogoutButton";

interface NavbarProps {
  token: string;
}

const Navbar = ({ token }: NavbarProps): React.ReactElement => {
  return (
    <nav className="fixed md:p-0 mb-10  md:mt-0 md:border-t-0 bg-black gap-x-1 font-oswald font-semibold  h-[60px]  flex flex-wrap mobile:items-center md:items-start   md:text-4xl mobile:w-full mobile:text-xl">
      <a
        id="header"
        href={"/home"}
        className="cursor-pointer bg-white hover:bg-black text-center hover:text-white hover:duration-200 flex flex-1 h-[60px] flex-col items-center justify-center   p-2  text-black"
      >
        <span>HOME</span>
      </a>

      <a
        href={token ? "/dashboard" : "/login"}
        className="cursor-pointer bg-white hover:bg-black text-center hover:text-white hover:duration-200 flex flex-1 h-[60px] p-2 flex-col items-center justify-center  text-black"
      >
        <span>DASHBOARD</span>
      </a>
      {token ? (
        <LogoutButton />
      ) : (
        <a
          href="/login"
          className="cursor-pointer bg-white  hover:bg-black   hover:text-white hover:duration-200 flex  flex-1 h-[60px] flex-col items-center justify-center  text-center  p-2    text-black"
        >
          <span>SIGN-UP</span>
        </a>
      )}
    </nav>
  );
};

export default Navbar;
