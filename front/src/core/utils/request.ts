import axios, {AxiosRequestConfig} from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080/api';

export const makeRequest = ( params: AxiosRequestConfig )=> {
    return axios({
        ...params,
        baseURL: BASE_URL
    });
}