import { toastFail, toastSuccess } from "@shikshak/utility/Toast";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./service-api";
import { ShikshakClient } from "./service-axios";
import TokenService, { TokenDetails } from "./service-token";
const logoutChannel = new BroadcastChannel("logout");
const loginChannel = new BroadcastChannel("login");
export enum Authorities {
  "admin" = "Admin",
  "tutor" = "Tutor"
}

export interface LoginDetails {
  email: string;
  password: string;
  isUser: boolean;
}

// type TemplateProjectUserTokenDetails = ShikshakTokenDetails & {
//   isTutor: boolean;
//   isAdmin: boolean;
// };

export const authTokenKey = "authToken";
const authTokenDetails = "authTokenDetails";

const initLogout = () => {
  try {
    TokenService.clearToken();
    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(false);
  }
};

const useLogoutMutation = (noToast?: boolean) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: initLogout,
    onSuccess: () => {
      logoutChannel.postMessage("Logout");

      queryClient.clear();
      queryClient.setQueryData([authTokenKey], () => false);
      !noToast && toastSuccess("Logged out Succesfully");
    }
  });
};

const initLogin = (loginData: LoginDetails) => {
  return ShikshakClient.post<TokenDetails>(api.login, loginData);
};

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: initLogin,
    onSuccess: response => {
      loginChannel.postMessage("Login");
      const tokens = {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token
      };
      TokenService.setToken(tokens);
      queryClient.setQueryData([authTokenKey], () => true);
      navigate("/", { replace: true });
    },
    onError: error => {
      const loginErr = error as AxiosError<{ message: string; error: string }>;
      toastFail(
        loginErr.response?.data?.message ??
          loginErr.response?.data?.error ??
          "Login failed !"
      );
    }
  });
};

const initRefreshToken = async () => {
  try {
    const response = await ShikshakClient.get<TokenDetails>(api.refreshToken, {
      params: {
        refreshToken: TokenService.getToken()?.refresh_token
      },
      headers: {
        Authorization: ""
      }
    });
    const tokens = {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token
    };
    TokenService.setToken(tokens);
    return true;
  } catch (error) {
    return false;
  }
};

const checkAuthentication = async () => {
  if (TokenService.isAuthenticated()) {
    const tokenInfo = TokenService.getTokenDetails();
    if (tokenInfo && tokenInfo.exp * 1000 < Date.now() + 5 * 60 * 1000) {
      return initRefreshToken();
    }
    return Promise.resolve(true);
  } else if (TokenService.getToken()?.refresh_token) {
    return initRefreshToken();
  }
  return Promise.resolve(null);
};

/**
 * Check if user is authenticated
 * @returns boolean
 */
const useAuthentication = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [authTokenKey],
    queryFn: async () => {
      const authStatus = await checkAuthentication();
      const tokenDetails = TokenService.getTokenDetails();
      if (tokenDetails) {
        queryClient.setQueryData([authTokenDetails], {
          ...tokenDetails
        });
      }
      return authStatus;
    }
  });
};

const useLoginTokenDetailQuery = () => {
  return useQuery<unknown, unknown, any>({
    queryKey: [authTokenDetails]
  });
};
export const logoutAllTabs = () => {
  logoutChannel.onmessage = () => {
    window.location.href = "/";
    logoutChannel.close();
  };
  loginChannel.onmessage = () => {
    window.location.href = "/";
    loginChannel.close();
  };
};
export const getRole = () => {
  const tokenDetails = TokenService.getTokenDetails();
  console.log({ tokenDetails });
  return {
    isTutor: tokenDetails?.role.includes(Authorities.tutor),
    isAdmin: tokenDetails?.role.includes(Authorities.admin)
  };
};
export {
  useAuthentication,
  useLoginMutation,
  useLoginTokenDetailQuery,
  useLogoutMutation
};
