import { AxiosError, AxiosResponse } from "axios";
import { RESPONSE_CODE } from "../../models/response";
import { config } from "../config";

export class RequestUtils {
  static request = <T>(
    promise: Promise<AxiosResponse<T>>,
    onSuccess: (data: T) => void,
    onError?: (err: Error | AxiosError) => void
  ) => {
    promise
      .then((data) => onSuccess(data.data))
      .catch((error) => {
        if (
          (error as AxiosError).response?.status === RESPONSE_CODE.UNAUTHORIZED
        ) {
          console.error("UNAUTHORIZED");
          window.localStorage.removeItem("code");
          window.location.href = `${config.redirectUrl}/login`;
        } else {
          onError?.(error);
        }
      });
  };
}
