export const api = {
  login: "/userLogin",
  refreshToken: "/token/refresh",
  init: "/initAdmin",
  test: "/test",
  registerUser: "/registerUser",
  userProfile: "/createUserProfile",
  changePassword: "/changePassword",
  //classes
  classes: {
    getAllClasses: "/getClasses",
    myClasses: "/getMyClass",
    joinClass: "/joinClass/id={id}"
  },
  course: {
    getAllCourses: "/getCourses",
    clickCourse: "/updateCourseClicks/id={id}",
    topCourses: "/topCourses",
    searchCourses: "/searchCourses?title={title}"
  },
  recommendations: "/recommendations",
  payment: "/create-checkout-session"
};

export interface ShikshakResponse<T = any> {
  data: T;
  status: 0 | 1;
  message: string;
}
