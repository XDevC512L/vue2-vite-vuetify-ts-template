import qs from "qs";
import axios, { AxiosError } from "axios";
import router from "@/router";

export default class AxiosConfig {
  static init(): void {
    axios.defaults.baseURL = "http://localhost:8084/";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.interceptors.request.use((request) => {
      console.log("Request: ", request);
      return request;
    });

    /**
     * Used to make axios respect RFC 3986
     * @see https://github.com/axios/axios/issues/1727
     */
    axios.defaults.paramsSerializer = (params) => {
      return qs.stringify(params, { indices: false }); // param=value1&param=value2
    };
    axios.interceptors.response.use(
      (response) => {
        console.log("Response: ", response);
        return response;
      },
      async (error: AxiosError) => {
        console.log("Error: ", error.response);
        if (error.response && error.response.status == 401) {
          await router.push("/");
        }
        return Promise.reject(error);
      }
    );
  }
}
