import { useQuery } from "@tanstack/react-query";
import { api, ShikshakResponse } from "./service-api";
import { ShikshakClient } from "./service-axios";

const getAllClasses = () => {
  return ShikshakClient.get<ShikshakResponse>(api.classes.getAllClasses);
};
const useGetAllClasses = () => {
  return useQuery({
    queryKey: [api.classes.getAllClasses],
    queryFn: getAllClasses
  });
};

export { useGetAllClasses };
