/*
// LOGIN
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Test {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup.string().required("Invalid name, please try again"),
    password: yup.string().required("Invalid email"),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Test>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: Test) => {
    const response = await fetch(
      "http://localhost:8080/api/auth/public/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData.token);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-10">
      <input {...register("username")} className="text-black p-4" />
      <p className="text-white">{errors.username?.message}</p>

      <input
        {...register("password")}
        className="text-black p-4"
        type="password"
      />
      <p className="text-white">{errors.password?.message}</p>

      <button type="submit" className="bg-white p-3 mb-10">
        send it byee{" "}
      </button>
    </form>
  );
}


//REGISTER
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Test {
  username: string;
  password: string;
  email: string;
}

const schema = yup
  .object({
    username: yup.string().required("Invalid name, please try again"),
    password: yup.string().required("Invalid email"),
    email: yup.string().email().required("Invalid email"),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Test>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: Test) => {
    const response = await fetch(
      "http://localhost:8080/api/auth/public/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.text();
    console.log(responseData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-10">
      <input {...register("username")} className="text-black p-4" />
      <p className="text-white">{errors.username?.message}</p>

      <input {...register("email")} className="text-black p-4" />
      <p className="text-white">{errors.email?.message}</p>

      <input
        {...register("password")}
        className="text-black p-4"
        type="password"
      />
      <p className="text-white">{errors.password?.message}</p>

      <button type="submit" className="bg-white p-3 mb-10">
        send it byee{" "}
      </button>
    </form>
  );
}

*/

import { createContext } from "react";

interface AppContextProps {
  token: string | null;
  setToken: (token: string) => void;
  registrationResponse: string | null;
  setRegistrationResponse: (registrationResponse: string | null) => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default AppContext;
