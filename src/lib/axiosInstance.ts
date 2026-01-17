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
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { routes } from '@/routes';
import { useAuthStore, useToastStore } from '@/stores';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Navigate ref for 401 redirect; set by AxiosNavigateSetter inside Router
let navigateRef: ((to: string) => void) | null = null;

export function setAxiosNavigate(fn: ((to: string) => void) | null): void {
  navigateRef = fn;
}

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
  (err: AxiosError) => Promise.reject(err),
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().actions.logout();
      useToastStore
        .getState()
        .actions.info('Session expired. Please log in again.');
      if (navigateRef) {
        navigateRef(routes.login);
      } else {
        window.location.href = routes.login;
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
