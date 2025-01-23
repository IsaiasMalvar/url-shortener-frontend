import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = (): React.ReactElement => {
  const location = useLocation();
  const isNavBarRendered =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");

  return (
    <>
      {isNavBarRendered ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Layout;
