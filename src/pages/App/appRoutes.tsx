import LayoutWrapper from "@shikshak/components/LayoutWrapper";
import PageNotFound from "@shikshak/components/LayoutWrapper/NotFound";
import AllClasses from "../Authorized/Classes";
import EnrolledClasses from "../Authorized/Classes/EnrolledClasses";
import Fail from "../Authorized/Payment/fail";
import Success from "../Authorized/Payment/success";
import Profile from "../Authorized/Profile";
import AllCourses from "../NoAuth/Courses/AllClourses";
import Home from "../NoAuth/Home";
import { NAVIGATION_ROUTES } from "./navigationRoutes";
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
        element: <Home />
      },
      {
        path: NAVIGATION_ROUTES.ALL_CLASSES,
        element: <AllClasses />
      },
      {
        path: NAVIGATION_ROUTES.ALL_COURSES,
        element: <AllCourses />
      },
      {
        path: NAVIGATION_ROUTES.MY_CLASSES,
        element: <EnrolledClasses />
      },
      {
        path: NAVIGATION_ROUTES.PROFILE,
        element: <Profile />
      },
      {
        path: NAVIGATION_ROUTES.SUCCESS_PAYMENT,
        element: <Success />
      },
      {
        path: NAVIGATION_ROUTES.FAIL_PAYMENT,
        element: <Fail />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
];
