/**
 * Axios instance configuration with interceptors.
 * Sets up request/response interceptors for authentication and error handling.
 *
 * Usage:
 *   import axiosInstance from '@/lib/axiosInstance';
 *   const response = await axiosInstance.get('/api/endpoint');
 *
 * To customize:
 * - Add authentication token handling
 * - Add request/response transformations
 * - Add error handling logic
 */
import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from "axios";
import { useAuthStore } from "@/stores";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    // Handle 401 errors - logout user if unauthorized
    if (error.response?.status === 401) {
      useAuthStore.getState().actions.logout();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
