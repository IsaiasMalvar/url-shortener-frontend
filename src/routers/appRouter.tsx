import { createBrowserRouter, Navigate, RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import NotFoundPage from "../pages/NotFoundPage";

const App = lazy(() => import("../App"));
const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
            <Loader />
          </div>
        }
      >
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
                <Loader />
              </div>
            }
          >
            <Navigate to="/home" />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense
            fallback={
              <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
                <Loader />
              </div>
            }
          >
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense
            fallback={
              <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
                <Loader />
              </div>
            }
          >
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense
            fallback={
              <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
                <Loader />
              </div>
            }
          >
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Suspense
            fallback={
              <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
                <Loader />
              </div>
            }
          >
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
