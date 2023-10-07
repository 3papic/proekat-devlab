import { axiosPrivate as importedAxiosPrivate } from "../api/axios"; // Preimenovano axiosPrivate u importedAxiosPrivate
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

import axios from 'axios';
const BASE_URL = 'http://localhost:3500';

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {

        const requestIntercept = importedAxiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = importedAxiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return importedAxiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            importedAxiosPrivate.interceptors.request.eject(requestIntercept);
            importedAxiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return importedAxiosPrivate;
}

export default useAxiosPrivate;
