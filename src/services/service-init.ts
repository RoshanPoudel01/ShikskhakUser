import { useStoreInitData } from "@shikshak/store/store";
import { toastFail, toastSuccess } from "@shikshak/utility/Toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError, toFormData } from "axios";
import { api, ShikshakResponse } from "./service-api";
import { ShikshakClient } from "./service-axios";

export interface Module {
  moduleCode: string;
  moduleName: string;
  scopes: string;
}
export interface IInitData {
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  profileCreated: boolean;
  isTutor: boolean;
  userProfile: UserProfile;
}

export interface UserProfile {
  id: number;
  address: string;
  phoneNumber: string;
  profilePicture: string;
  userId: number;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
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

const saveUserProfile = (data: any) => {
  return ShikshakClient.post<ShikshakResponse>(
    api.userProfile,
    toFormData(data)
  );
};
const useSaveUserProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [api.userProfile],
    mutationFn: saveUserProfile,
    onError: (error: AxiosError<{ message: string }>) => {
      toastFail(error?.response?.data?.message || error?.message);
    },
    onSuccess: success => {
      queryClient.invalidateQueries({ queryKey: [api.init] });
      toastSuccess(success?.data?.message || "Profile saved successfully");
    }
  });
};

const changePassword = (data: any) => {
  return ShikshakClient.post<ShikshakResponse>(api.changePassword, data);
};
const useChangePassword = () => {
  return useMutation({
    mutationKey: [api.changePassword],
    mutationFn: changePassword,
    onError: (error: AxiosError<{ message: string }>) => {
      toastFail(error?.response?.data?.message || error?.message);
    },
    onSuccess: success => {
      toastSuccess(success?.data?.message || "Password changed successfully");
    }
  });
};

const paymentInitiate = (data: any) => {
  return ShikshakClient.post(api.payment, data);
};
const usePaymentInitiate = () => {
  return useMutation({
    mutationKey: [api.payment],
    mutationFn: paymentInitiate,
    onError: (error: AxiosError<{ message: string }>) => {
      toastFail(error?.response?.data?.message || error?.message);
    }
  });
};
export {
  useChangePassword,
  useFetchInitData,
  usePaymentInitiate,
  useSaveUserProfile
};
