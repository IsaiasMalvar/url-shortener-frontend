import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useUser from "../hooks/useUser";
import { LoginCredentials } from "../types/auth";
import { useAppContext } from "../context/contextUtility";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

const LoginForm = (): React.ReactElement => {
  const { isError, errorMessage, setIsError, isLoading } = useAppContext();
  const loginSchema = yup
    .object({
      username: yup.string().required("Invalid name"),
      password: yup.string().required("Password cant be empty"),
    })
    .required();

  const { loginSubmit } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage, {});
    }

    return setIsError(false);
  }, [errorMessage, isError, setIsError]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="md:w-[30rem]  mobile:w-[100%] bg-black p-5   border-[3px] rounded-lg font-semibold font-mono white-shadow flex flex-col">
      <div className="flex gap-x-3 justify-center items-center mb-2">
        <span className="text-base text-white uppercase">
          Sign in to your URLess account
        </span>
      </div>

      <form
        onSubmit={handleSubmit(loginSubmit)}
        className="flex flex-col gap-y-2  mt-5"
      >
        <label className="p-1 text-white">USERNAME</label>
        <input
          {...register("username")}
          className="text-black p-2 bg-white border-black border-2 rounded-lg text-sm "
        />
        <p className="p-1 mt-1 text-red-400 text-xs h-[40px] ">
          {errors.username?.message}
        </p>

        <label className="p-1 text-white">PASSWORD</label>
        <input
          {...register("password")}
          className="text-black p-2 bg-white-200 border-black border-2 rounded-lg flex"
          type="password"
        />
        <p className="p-1 mt-1 text-xs text-red-400 h-[40px] w-[80%]">
          {errors.password?.message &&
            errors.password?.message?.charAt(0).toUpperCase() +
              (errors.password?.message?.substring(1) as string)}
        </p>

        <button
          type="submit"
          className="bg-white p-2 border-2 border-black rounded-lg w-1/2 text-black m-auto hover:bg-gray-700 hover:scale-110 hover:text-white duration-150 cursor-pointer mt-1 mb-3"
        >
          LOG IN
        </button>
      </form>
      <a
        className="text-white text-sm mt-auto p-2 border-b border-white hover:text-blue-500 text-center"
        href="/register"
      >
        No account? Register here
      </a>
    </div>
  );
};

export default LoginForm;
