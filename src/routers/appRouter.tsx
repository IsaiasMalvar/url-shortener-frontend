import { createBrowserRouter, Navigate, RouteObject } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { lazy, Suspense } from "react";
import hourglass from "../assets/hourglass.svg";
import DashboardPage from "../pages/DashboardPage";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: (
          <Suspense
            fallback={
              <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
                <img src={hourglass} />
              </div>
            }
          >
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
