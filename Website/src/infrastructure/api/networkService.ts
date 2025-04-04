import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class NetworkService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, headers?: Record<string, string>) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  public async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  public async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config);
  }

  public async patch<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch<T>(url, data, config);
  }
}

export default NetworkService;
