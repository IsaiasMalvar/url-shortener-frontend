import { ReactNode, useState } from "react";
import AppContext from "./AppContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({
  children,
}: AppProviderProps): React.ReactElement => {
  const getToken = localStorage.getItem("JWT_TOKEN")
    ? localStorage.getItem("JWT_TOKEN")
    : null;

  const [token, setToken] = useState<string | null>(getToken);

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};
