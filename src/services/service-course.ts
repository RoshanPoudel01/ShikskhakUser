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
export { useGetAllCourses };
