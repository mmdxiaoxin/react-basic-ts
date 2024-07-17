import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";
import { BaseResponse } from "./interface";

const config = {};

class RequestHttp {
    private instance: AxiosInstance;

    public constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);

        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                return config;
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            }
        );
    }

    get<T>(url: string, params?: any): Promise<BaseResponse<T>> {
        return this.instance.get(url, { params });
    }

    post<T>(url: string, params: any): Promise<BaseResponse<T>> {
        return this.instance.post(url, { params });
    }

    put<T>(url: string, params: any): Promise<BaseResponse<T>> {
        return this.instance.put(url, { params });
    }

    delete<T>(url: string, params?: any): Promise<BaseResponse<T>> {
        return this.instance.delete(url, { params });
    }
}

export default new RequestHttp(config);
