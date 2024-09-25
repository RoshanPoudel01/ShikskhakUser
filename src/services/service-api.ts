export const api = {
  login: "/userLogin",
  refreshToken: "/token/refresh",
  init: "/initAdmin",
  test: "/test",
  registerUser: "/registerUser",

  //classes
  classes: {
    getAllClasses: "/getClasses",
    myClasses: "/getMyClass",
    joinClass: "/joinClass/id={id}"
  },
  course: {
    getAllCourses: "/getCourses"
  }
};

export interface ShikshakResponse<T = any> {
  data: T;
  status: 0 | 1;
  message: string;
}
