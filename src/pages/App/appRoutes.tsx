import LayoutWrapper from "@shikshak/components/LayoutWrapper";
import PageNotFound from "@shikshak/components/LayoutWrapper/NotFound";
import { lazy } from "react";
import LoginPage from "../NoAuth/Login";
import { NAVIGATION_ROUTES } from "./navigationRoutes";
const Dashboard = lazy(() => import("@shikshak/pages/Authorized/Dashboard"));
interface IAppRoutes {
  index?: boolean;
  path?: string;
  element: JSX.Element;
  accessor?: string[];
  children?: IAppRoutes[];
}

export const appRoutes: IAppRoutes[] = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: NAVIGATION_ROUTES.LOGIN,
        element: <LoginPage />
      },

      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
];
