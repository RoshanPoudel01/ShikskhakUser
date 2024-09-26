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
  return ShikshakClient.get<ShikshakResponse<any>>(api.recommendations);
};
const useGetRecommendedCourses = () => {
  return useQuery({
    queryKey: [api.recommendations],
    queryFn: getRecommendedCourses,
    select: response => response.data.data
  });
};
export {
  useGetAllCourses,
  useGetRecommendedCourses,
  useGetTopCourses,
  useUpdateCourseClicks
};
