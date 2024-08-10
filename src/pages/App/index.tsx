import { Flex, Spinner } from "@chakra-ui/react";
import {
  Authorities,
  getRole,
  logoutAllTabs,
  useAuthentication,
  useLogoutMutation
} from "@shikshak/services/service-auth";
import { useFetchInitData } from "@shikshak/services/service-init";
import { Suspense, lazy, useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../NoAuth/Home";
import Register from "../NoAuth/Register";
import { appRoutes } from "./appRoutes";
import { NAVIGATION_ROUTES } from "./navigationRoutes";
const Login = lazy(() => import("@shikshak/pages/NoAuth/Login"));

export default function App() {
  // Check if app is authenticated
  const {
    data: isAuthenticated,
    isLoading: isAuthLoading,
    refetch: checkTokenAndRefresh
  } = useAuthentication();

  const { mutateAsync: logoutUser } = useLogoutMutation(true);

  //  Fetching Initial data in app
  const { isLoading: isInitDataLoading, isError: isInitDataError } =
    useFetchInitData(!!isAuthenticated);

  useEffect(() => {
    if (typeof isAuthenticated === "boolean" && !isAuthenticated) {
      localStorage.getItem("token") ? logoutUser() : null;
    }
  }, [isAuthenticated]);

  const { isAdmin } = getRole();
  useEffect(() => {
    let iID = null as null | NodeJS.Timeout;
    if (isAuthenticated) {
      iID = setInterval(() => checkTokenAndRefresh(), 30_000);
    }

    return () => {
      if (iID) {
        clearInterval(iID);
      }
    };
  }, [isAuthenticated, checkTokenAndRefresh]);
  useEffect(() => {
    logoutAllTabs();
  }, []);

  if (isAuthLoading) {
    if ((isInitDataLoading || isAuthLoading) && !isInitDataError) {
      return (
        <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
          <Spinner />
        </Flex>
      );
    }
  }
  function MissingRoute() {
    return <Navigate to={{ pathname: "/" }} />;
  }
  return (
    <Suspense
      fallback={
        <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
          />
        </Flex>
      }
    >
      <>
        <Routes>
          {isAuthenticated ? (
            <>
              {appRoutes.map((route, index) => {
                return (
                  <Route key={index} path={route.path} element={route.element}>
                    {route.children &&
                      (isAdmin
                        ? route.children
                            .filter(childRoute =>
                              childRoute?.accessor?.includes(Authorities.admin)
                            )
                            .map((childRoute, childIndex) => (
                              <Route
                                key={childIndex}
                                path={childRoute.path}
                                element={childRoute.element}
                                {...(childRoute.index && {
                                  index: childRoute.index
                                })}
                              />
                            ))
                        : route.children
                            .filter(childRoute =>
                              childRoute?.accessor?.includes(Authorities.tutor)
                            )
                            .map((childRoute, childIndex) => (
                              <Route
                                key={childIndex}
                                path={childRoute.path}
                                element={childRoute.element}
                                {...(childRoute.index && {
                                  index: childRoute.index
                                })}
                              />
                            )))}
                  </Route>
                );
              })}
            </>
          ) : (
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path={NAVIGATION_ROUTES.REGISTER} element={<Register />} />
              <Route path={NAVIGATION_ROUTES.LOGIN} element={<Login />} />
              <Route path="*" element={<MissingRoute />} />
            </Route>
          )}
        </Routes>
      </>
    </Suspense>
  );
}
