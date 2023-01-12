import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

type JSONValue =
  | string
  | number
  | null
  | boolean
  | JSONValue[]
  | { [key: string]: JSONValue };

export class Http {
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }
  get(
    url: string,
    query?: Record<string, string | number>,
    config?: Omit<AxiosRequestConfig, "url" | "params" | "method">
  ) {
    return this.instance.request({
      ...config,
      url,
      params: query,
      method: "get",
    });
  }
  post(url: string, data?: Record<string, JSONValue | undefined>) {}
  delete(url: string, query?: Record<string, string>) {}
}

export const http = new Http('/api/v1')

http.instance.interceptors.request.use((config) => {
    return config
})
http.instance.interceptors.response.use((config) => {
    return config
})
