import { SubmitHandler } from "react-hook-form";
import { JWT, LoginCredentials, RegisterCredentials } from "../types/auth";
import { useAppContext } from "../context/contextUtility";

const useUser = () => {
  const { setToken, setRegistrationResponse } = useAppContext();
  const apiUrl = import.meta.env.VITE_API_URL;
  const loginEndpoint = apiUrl + "/api/auth/public/login";
  const registerEndpoint = apiUrl + "/api/auth/public/register";

  const loginSubmit: SubmitHandler<LoginCredentials> = async (
    data: LoginCredentials,
  ) => {
    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { token }: JWT = await response.json();

      if (token) {
        setToken(token);
        localStorage.setItem("JWT_TOKEN", token);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during login:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  const registerSubmit: SubmitHandler<RegisterCredentials> = async (
    data: RegisterCredentials,
  ) => {
    const response = await fetch(registerEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.text();

    if (responseData) {
      setRegistrationResponse(responseData);
    }
  };

  return { loginSubmit, registerSubmit };
};

export default useUser;
