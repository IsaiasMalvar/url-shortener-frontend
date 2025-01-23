import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useUser from "../hooks/useUser";
import { LoginCredentials } from "../types/auth";

const LoginForm = (): React.ReactElement => {
  const loginSchema = yup
    .object({
      username: yup.string().required("Invalid name, please try again"),
      password: yup.string().required("Invalid email"),
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

  return (
    <div className=" bg-black p-5 border-gray-50 border-2 rounded-lg font-semibold font-mono white-shadow">
      <form
        onSubmit={handleSubmit(loginSubmit)}
        className="flex flex-col gap-y-2 z-50"
      >
        <label className="p-1 text-white">USERNAME</label>
        <input
          {...register("username")}
          className="text-black p-2 bg-white border-black border-2 rounded-lg "
        />
        <p className="text-white">{errors.username?.message}</p>

        <label className="p-1 text-white">PASSWORD</label>
        <input
          {...register("password")}
          className="text-black p-2 bg-white-200 border-black border-2 rounded-lg"
          type="password"
        />
        <p className="text-white">{errors.password?.message}</p>

        <button
          type="submit"
          className="bg-white p-2 border-2 border-black rounded-lg w-1/2 text-black m-auto hover:bg-gray-700 hover:scale-110 hover:text-white duration-150 cursor-pointer mb-3"
        >
          Log in
        </button>
      </form>
      <a
        className="text-white text-sm p-2 border-b border-white hover:text-blue-500"
        href="/register"
      >
        No account? Register here
      </a>
    </div>
  );
};

export default LoginForm;
