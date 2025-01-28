import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAppContext } from "./context/contextUtility";
import { useEffect, useState } from "react";

const Layout = (): React.ReactElement => {
  const { token } = useAppContext();
  const location = useLocation();
  const isNavBarRendered =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  const [guaranteedToken, setGuaranteedToken] = useState<string>("");

  useEffect(() => {
    if (token) {
      setGuaranteedToken(token);
    }
  }, [token]);

  return (
    <>
      {isNavBarRendered ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Navbar token={guaranteedToken} />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Layout;
