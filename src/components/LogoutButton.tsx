import { useAppContext } from "../context/contextUtility";
import { useNavigate } from "react-router-dom";

const LogoutButton = (): React.ReactElement => {
  const { setToken } = useAppContext();
  const navigate = useNavigate();

  const onLogout: React.MouseEventHandler<HTMLButtonElement> = () => {
    setToken("");
    localStorage.removeItem("JWT_TOKEN");
    navigate("/home");
    window.location.reload();
  };

  return (
    <button
      onClick={onLogout}
      className="cursor-pointer bg-white  hover:bg-black   hover:text-white hover:duration-200  flex-1 h-[60px]  text-center  p-2    text-black"
    >
      LOGOUT
    </button>
  );
};

export default LogoutButton;
