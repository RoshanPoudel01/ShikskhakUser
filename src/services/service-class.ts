import { useQuery } from "@tanstack/react-query";
import { api, ShikshakResponse } from "./service-api";
import { ShikshakClient } from "./service-axios";

export interface ClassResponse {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  course: Course;
  tutor: Tutor;
  startDate: string;
  endDate: string;
  classLink: string;
}

export interface Tutor {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  userprofile: Userprofile;
}

export interface Userprofile {
  profilePicture: string;
  phoneNumber: string;
}

export interface Course {
  id: number;
  title: string;
}
const getAllClasses = () => {
  return ShikshakClient.get<ShikshakResponse<ClassResponse[]>>(
    api.classes.getAllClasses
  );
};
const useGetAllClasses = () => {
  return useQuery({
    queryKey: [api.classes.getAllClasses],
    queryFn: getAllClasses,
    select: response => response.data.data
  });
};

const joinClass = (id: number | null) => () => {
  return ShikshakClient.get<ShikshakResponse>(
    api.classes.joinClass.replace("{id}", id + "")
  );
};
const useJoinClass = (id: number | null) => {
  return useQuery({
    enabled: false,
    queryKey: [api.classes.joinClass],
    queryFn: joinClass(id)
  });
};

const myClasses = () => {
  return ShikshakClient.get<ShikshakResponse<ClassResponse[]>>(
    api.classes.myClasses
  );
};
const useGetMyClasses = () => {
  return useQuery({
    queryKey: [api.classes.myClasses],
    queryFn: myClasses,
    select: response => response.data.data
  });
};
export { useGetAllClasses, useGetMyClasses, useJoinClass };
