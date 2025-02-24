import { AxiosResponse, AxiosRequestConfig } from "axios";
import NetworkService from "../api/networkService";

export interface IEntity<T> {
  get(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  getAll(config?: AxiosRequestConfig): Promise<AxiosResponse<T[]>>;
  create(data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  update(
    id: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  delete(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
}

export class EntityService<T> implements IEntity<T> {
  private networkService: NetworkService;
  private endpoint: string;

  constructor(
    baseURL: string,
    endpoint: string,
    headers?: Record<string, string>
  ) {
    this.networkService = new NetworkService(baseURL, headers);
    this.endpoint = endpoint;
  }

  public async get(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.networkService.get<T>(`${this.endpoint}/${id}`, config);
  }

  public async getAll(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T[]>> {
    return this.networkService.get<T[]>(this.endpoint, config);
  }

  public async create(
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.networkService.post<T>(this.endpoint, data, config);
  }

  public async update(
    id: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.networkService.patch<T>(`${this.endpoint}/${id}`, data, config);
  }

  public async delete(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<void>> {
    return this.networkService.delete<void>(`${this.endpoint}/${id}`, config);
  }
}
