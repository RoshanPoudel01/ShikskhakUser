import { useQuery } from "@tanstack/react-query";
import { api, ShikshakResponse } from "./service-api";
import { ShikshakClient } from "./service-axios";

export interface ICourseResponse {
  id: number;
  title: string;
  description: string;
  createdBy: number;
  clicks: number;
  imageUrl: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  user: User;
  classes: Class[];
}

export interface Class {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  isActive: boolean;
}

export interface User {
  full_name: string;
  userprofile: Userprofile;
}

export interface Userprofile {
  profilePicture: string;
  phoneNumber: string;
}

export interface RootInterface {
  recommendations: Recommendation[];
  accuracy: number;
}

export interface Recommendation {
  courseId: number;
  title: string;
  classes: (Class | Classes2)[];
  imageUrl: string;
  user: User;
  similarity: number;
}

export interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isUser: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  userprofile: Userprofile;
}

export interface Userprofile {
  id: number;
  address: string;
  phoneNumber: string;
  profilePicture: string;
  userId: number;
  document: string;
  dateOfBirth: string;
  educationQualification: string;
  createdAt: string;
  updatedAt: string;
}

export interface Classes2 {
  id: number;
  title: string;
  description: string;
  courseId: number;
  createdBy: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  joinedUser?: number;
  classLink: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface Class {
  id: number;
  title: string;
  description: string;
  courseId: number;
  createdBy: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  joinedUser: number;
  classLink: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  course: Course;
  user: User;
}

export interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isUser: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: number;
  title: string;
}
const getAllCourses = () => {
  return ShikshakClient.get<ShikshakResponse<ICourseResponse[]>>(
    api.course.getAllCourses
  );
};

const useGetAllCourses = () => {
  return useQuery({
    queryKey: [api.course.getAllCourses],
    queryFn: getAllCourses,
    select: response => response.data.data
  });
};

const updateCourseClicks = (id: number | null) => () => {
  return ShikshakClient.get(api.course.clickCourse.replace("{id}", id + ""));
};
const useUpdateCourseClicks = (id: number | null) => {
  return useQuery({
    enabled: false,
    queryKey: [api.course.clickCourse],
    queryFn: updateCourseClicks(id)
  });
};

const getTopCourses = () => {
  return ShikshakClient.get<ShikshakResponse<ICourseResponse[]>>(
    api.course.topCourses
  );
};
const useGetTopCourses = () => {
  return useQuery({
    queryKey: [api.course.topCourses],
    queryFn: getTopCourses,
    select: response => response.data.data
  });
};

const getRecommendedCourses = () => {
  return ShikshakClient.get<ShikshakResponse<RootInterface>>(
    api.recommendations
  );
};
const useGetRecommendedCourses = () => {
  return useQuery({
    queryKey: [api.recommendations],
    queryFn: getRecommendedCourses
  });
};
export {
  useGetAllCourses,
  useGetRecommendedCourses,
  useGetTopCourses,
  useUpdateCourseClicks
};
