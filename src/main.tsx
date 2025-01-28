import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter.tsx";
import { AppProvider } from "./context/AppProvider.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./context/queryProvider.ts";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={appRouter} />
        <Toaster />
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>,
);
