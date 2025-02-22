import { useEffect } from "react";

import LoginForm from "../components/LoginForm";
import { useAppContext } from "../context/contextUtility";
import { Link, useNavigate } from "react-router-dom";
import Curtain from "../components/Curtain";

const LoginPage = () => {
  const { token } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <div className="bg-black h-screen overflow-hidden relative">
      <div className="w-full h-full flex flex-col justify-center items-center backdrop-opacity-95 gap-y-10 mobile: ">
        <Link
          to="/home"
          className="font-oswald text-8xl text-white md:block  mb-10 cursor-pointer "
        >
          URLess
        </Link>
        <Curtain />
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
