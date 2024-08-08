import { toastFail, toastSuccess } from "@shikshak/utility/Toast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "./service-api";
import { ShikshakClient } from "./service-axios";

interface IRegisterRequest {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
}
const registerUser = (data: IRegisterRequest) => {
  return ShikshakClient.post(api.registerUser, data);
};

const useRegisterUser = () => {
  return useMutation({
    mutationKey: [api.registerUser],
    mutationFn: registerUser,
    onSuccess: success => {
      toastSuccess(success.data.message);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toastFail(error?.response?.data.message ?? error.message);
    }
  });
};
export { useRegisterUser };
