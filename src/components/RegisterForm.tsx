import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useUser from "../hooks/useUser";
import { RegisterCredentials } from "../types/auth";
import { useAppContext } from "../context/contextUtility";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

const RegisterForm = (): React.ReactElement => {
  const { isError, errorMessage, setIsError, isLoading } = useAppContext();
  const { registerSubmit } = useUser();
  const { registrationResponse } = useAppContext();

  const registerSchema = yup
    .object({
      username: yup.string().required("Invalid name"),
      email: yup.string().email().required("Invalid email"),
      password: yup.string().required("Invalid password"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    resolver: yupResolver(registerSchema),
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
    <div className="md:w-[30rem]  mobile:w-[100%] bg-black p-5 border-gray-50 border-2 rounded-lg font-semibold font-mono white-shadow">
      {!registrationResponse && (
        <div className="flex gap-x-3 justify-center items-center mb-2 ">
          <span className="text-sm text-white">Welcome aboard!</span>
        </div>
      )}

      {!registrationResponse ? (
        <form
          autoComplete="off"
          onSubmit={handleSubmit(registerSubmit)}
          className="flex flex-col gap-y-2 z-50"
        >
          <label className="p-1 text-white">USERNAME</label>
          <input
            {...register("username")}
            className="text-black p-2 bg-white border-black border-2 rounded-lg text-sm "
          />
          <p className="p-1  text-red-400 text-sm h-[25px]">
            {errors.username?.message}
          </p>
          <label className="p-1 text-white">EMAIL</label>
          <input
            {...register("email")}
            className="text-black p-2 bg-white border-black border-2 rounded-lg text-sm"
          />
          <p className="p-1  text-red-400 text-xs h-[25px]">
            {errors.email?.message}
          </p>

          <label className="p-1 text-white">PASSWORD</label>
          <input
            {...register("password")}
            className="text-black p-2 bg-white-200 border-black border-2 rounded-lg"
            type="password"
          />
          <p className="p-1 text-xs text-red-400 h-[25px]">
            {errors.password?.message}
          </p>

          <button
            type="submit"
            className="bg-white p-2 border-2 border-black rounded-lg w-1/2 text-black m-auto hover:bg-gray-700 hover:scale-110 hover:text-white duration-150 cursor-pointer mt-1 mb-3"
          >
            Register
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-y-2 items-center">
          <p className="p-1 text-white">{registrationResponse}</p>
          <a
            href="/login"
            className="p-1 text-white border-b-2 border-white text-center hover:text-blue-300 hover:border-blue-300"
          >
            LOG IN
          </a>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
