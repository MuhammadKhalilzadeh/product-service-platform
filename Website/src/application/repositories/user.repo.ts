import { AxiosResponse, AxiosRequestConfig } from "axios";
import { IEntity } from "../../infrastructure/interfaces/ientity";
import { User } from "../../domain/user";
import { EntityService } from "../../infrastructure/interfaces/ientity";
import { BASE_URL } from "../../flags";

export class UserRepository implements IEntity<User> {
  private entityService: EntityService<User>;

  constructor(endpoint: string, headers?: Record<string, string>) {
    const baseURL = BASE_URL;
    console.log("URL: ", baseURL + endpoint);
    this.entityService = new EntityService<User>(baseURL, endpoint, headers);
  }

  public async get(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<User>> {
    return this.entityService.get(id, config);
  }

  public async getAll(
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<User[]>> {
    return this.entityService.getAll(config);
  }

  public async create(
    data: User,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<User>> {
    return this.entityService.create(data, config);
  }

  public async update(
    id: string,
    data: User,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<User>> {
    return this.entityService.update(id, data, config);
  }

  public async delete(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<void>> {
    return this.entityService.delete(id, config);
  }
}
