import axios, { AxiosRequestConfig } from "axios";

class HttpService {
  constructor() {
    axios.interceptors.request.use(function (config) {
      const token = window.localStorage.getItem("code");
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    });
  }
  get(
    uri: string,
    subUri: string,
    config: AxiosRequestConfig | undefined = undefined
  ) {
    return axios.get(`${uri}/${subUri}`, config);
  }
}

export const httpService = new HttpService();
