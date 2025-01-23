import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter.tsx";
import { AppProvider } from "./context/AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  </StrictMode>,
);
