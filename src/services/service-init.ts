import { useStoreInitData } from "@shikshak/store/store";
import { useQuery } from "@tanstack/react-query";
import { api, ShikshakResponse } from "./service-api";
import { ShikshakClient } from "./service-axios";

export interface Module {
  moduleCode: string;
  moduleName: string;
  scopes: string;
}
export interface IInitData {
  first_name: string;
  last_name: string;
  email: string;
  middle_name: string;
  isAdmin?: boolean;
  isTutor?: boolean;
}

const fetchInitData = () => () => {
  return ShikshakClient.get<ShikshakResponse<IInitData>>(api.init);
};

const useFetchInitData = (enabled?: boolean) => {
  const { setInitData } = useStoreInitData();

  return useQuery({
    queryKey: [api.init],
    queryFn: async () => {
      const initData = await fetchInitData()();
      setInitData(initData?.data?.data);
      return initData;
    },
    enabled: enabled,
    retry: 1
  });
};

export { useFetchInitData };
