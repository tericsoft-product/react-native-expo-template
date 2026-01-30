import axios, {
    AxiosAdapter,
    AxiosBasicCredentials,
    AxiosProxyConfig,
    AxiosRequestConfig,
    AxiosResponse,
    CancelToken,
    ResponseType,
} from 'axios';

import CommonService from './common_service';
import Communications from './communications_service';

export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const defaultOptions = {};
const isHardLocal = false;
const runMock = false;
let jwtToken: string | undefined;

// Subscribe to token updates
Communications.updateLoginUserTokenSubject.subscribe((token: any) => {
    if (!isHardLocal) {
        jwtToken = token;
    }
});

const getHeaders = (headers: any) => {
    const Authorization = CommonService.getAuthHeader(jwtToken || '');
    headers = {
        ...defaultHeaders,
        ...Authorization,
        ...headers,
    };
    return headers;
};

const getPayload = (payload: any | FormData, isFormData = false) => {
    if (isFormData) {
        return payload;
    } else {
        return { ...payload };
    }
};

export interface PaginationResponseType<T> {
    docs?: T[];
    total: number;
    limit: number;
    page: number;
}

export interface PaginationType {
    totalRows: number;
    total: number;
    limit: number;
    page: number;
    totalPages: number;
    currentPage: number;
    totalPosts: number;
}

export interface TSAPIResponseType<T> {
    message: string | undefined;
    sKWh: any;
    ps: any;
    token: any;
    status: number;
    statusCode: number | string;
    success: boolean;
    data: T;
    msg?: string;
    error?: string;
    errors?: any[];
}

export interface AxiosOptions {
    paramsSerializer?: (params: any) => string;
    timeout?: number;
    timeoutErrorMessage?: string;
    withCredentials?: boolean;
    adapter?: AxiosAdapter;
    auth?: AxiosBasicCredentials;
    responseType?: ResponseType;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    maxContentLength?: number;
    validateStatus?: ((status: number) => boolean) | null;
    maxBodyLength?: number;
    maxRedirects?: number;
    socketPath?: string | null;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: AxiosProxyConfig | false;
    cancelToken?: CancelToken;
    decompress?: boolean;
}

export default {
    post: (
        url: string,
        payload = {},
        headers = {},
        options: AxiosOptions = {},
        progressCallback: (progress: number) => void = () => { },
    ): Promise<TSAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            ...options,
            onUploadProgress: uploadProgressHandler.bind(null, progressCallback),
        };
        payload = getPayload(payload);
        url = interceptUrl(url);
        console.log(payload, url, axiosOptions, 'payload, post, url, axiosOptions');
        const request = axios.post(url, payload, axiosOptions);
        return getRequestPromise(request);
    },

    upload: (
        url: string,
        payload = new FormData(),
        headers = { 'Content-Type': 'multipart/form-data' },
        options: AxiosOptions = {},
        progressCallback: (progress: number) => void = () => { },
    ): Promise<TSAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            ...options,
            method: 'POST',
            onUploadProgress: uploadProgressHandler.bind(null, progressCallback),
        };
        payload = getPayload(payload, true);
        url = interceptUrl(url);
        console.log(payload, url, axiosOptions, 'payload, upload, url');
        const request = axios.post(url, payload, axiosOptions);
        console.log('API Generated', url);
        return getRequestPromise(request);
    },

    put: (
        url: string,
        payload = {},
        headers = {},
        options: AxiosOptions = {},
        progressCallback: (progress: number) => void = () => { },
    ): Promise<TSAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            ...options,
            method: 'PUT',
            onUploadProgress: uploadProgressHandler.bind(null, progressCallback),
        };
        payload = getPayload(payload);
        url = interceptUrl(url);
        console.log(payload, url, 'payload, put, url');
        const request = axios.put(url, payload, axiosOptions);
        return getRequestPromise(request);
    },

    get: (
        url: string,
        payload = {},
        headers = {},
        options: AxiosOptions = {},
    ): Promise<TSAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            params: getPayload(payload),
            method: 'GET',
            ...options,
        };
        url = interceptUrl(url);
        console.log(
            payload,
            url,
            axiosOptions.headers,
            'payload, get, url, headers',
        );

        const request = axios.get(url, axiosOptions);
        return getRequestPromise(request);
    },

    delete: (
        url: string,
        payload = {},
        headers = {},
        options: AxiosOptions = {},
    ): Promise<TSAPIResponseType<any>> => {
        const axiosOptions: AxiosRequestConfig = {
            headers: getHeaders(headers),
            data: getPayload(payload),
            method: 'DELETE',
            ...options,
        };
        console.log(payload, url, 'payload, delete, url');
        const request = axios.delete(url, axiosOptions);

        return getRequestPromise(request);
    },
};

const uploadProgressHandler = (
    progressCallback: (progress: number) => void,
    progressEvent: any,
) => {
    if (progressCallback) {
        const percentFraction = progressEvent.loaded / progressEvent.total;
        const percent = Math.floor(percentFraction * 100);
        progressCallback(percent);
    }
};

const interceptUrl = (url: string) => {
    if (runMock) {
        // Mock URL logic can be added here
    }
    return url;
};

const getRequestPromise = (request: Promise<AxiosResponse>) => {
    return new Promise<any>((resolve, reject) => {
        request
            .then(resp => {
                resolve({ ...resp.data });
            })
            .catch((err: any) => {
                console.log(err ? err.response : err, 'API Error', err);
                try {
                    const response: any = err.response ? err.response : { data: null };
                    const error: any = response.data ? { ...response.data } : { status: 500 };
                    error.status = response.status ? parseInt(response.status, 10) : 500;
                    if (err.response.status === 401) {
                        console.log('logout subscription in apifunction');
                        Communications.logoutSubject.next(true);
                    }
                    reject(error);
                } catch (e) {
                    console.log(e, 'Api Function Catch');
                    reject(e);
                }
            });
    });
};
