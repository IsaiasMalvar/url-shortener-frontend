import { SubmitHandler } from "react-hook-form";
import { JWT, LoginCredentials, RegisterCredentials } from "../types/auth";
import { useAppContext } from "../context/contextUtility";

const useUser = () => {
  const {
    setToken,
    setRegistrationResponse,
    setIsError,
    setErrorMessage,
    setIsLoading,
  } = useAppContext();
  const apiUrl = import.meta.env.VITE_API_URL;
  const loginEndpoint = apiUrl + "/api/auth/public/login";
  const registerEndpoint = apiUrl + "/api/auth/public/register";

  const loginSubmit: SubmitHandler<LoginCredentials> = async (
    data: LoginCredentials,
  ) => {
    setIsLoading(true);

    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error(`Wrong Credentials: Try again`);
        } else {
          throw new Error("We are sorry! Something has gone wrong");
        }
      }

      if (response.ok) {
        const { token }: JWT = await response.json();

        if (token) {
          setToken(token);
          localStorage.setItem("JWT_TOKEN", token);
          setIsLoading(false);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.message);
      } else {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage("Something has gone wrong");
      }
    }
  };

  const registerSubmit: SubmitHandler<RegisterCredentials> = async (
    data: RegisterCredentials,
  ) => {
    try {
      const response = await fetch(registerEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Sorry! Something has gone wrong.`);
      }

      const responseData = await response.text();

      if (responseData) {
        setRegistrationResponse(responseData);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setIsError(true);
        setErrorMessage(error.message);
      }
    }
  };

  return { loginSubmit, registerSubmit };
};

export default useUser;
