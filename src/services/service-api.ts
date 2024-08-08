export const api = {
  login: "/userLogin",
  refreshToken: "/token/refresh",
  init: "/initAdmin",
  test: "/test",
  registerUser: "/registerUser"
};

export interface ShikshakResponse<T = any> {
  data: T;
  status: 0 | 1;
  message: string;
}
