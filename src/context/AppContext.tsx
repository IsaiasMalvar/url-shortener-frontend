import { createContext } from "react";

interface AppContextProps {
  token: string | null;
  setToken: (token: string) => void;
  registrationResponse: string | null;
  setRegistrationResponse: (registrationResponse: string | null) => void;
  isError: boolean;
  setIsError: (error: boolean) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default AppContext;
