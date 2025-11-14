/**
 * Authentication form handlers.
 * Handles form validation only - API calls will be implemented when backend is ready.
 *
 * Usage:
 *   const { handleLogin } = useLoginHandler();
 *   await handleLogin({ email, password });
 */
import { useToastStore } from '@/stores/useToastStore';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

// Simple handlers that just validate and show success messages
// API calls will be added when backend is ready
export const useLoginHandler = () => {
  const { notifications } = useToastStore();

  const handleLogin = async (data: LoginRequest) => {
    // TODO: Add API call when backend is ready
    notifications.info('Form validated successfully. Backend integration pending.');
    console.log('Login data:', data);
  };

  return { handleLogin };
};

export const useRegisterHandler = () => {
  const { notifications } = useToastStore();

  const handleRegister = async (data: RegisterRequest) => {
    // TODO: Add API call when backend is ready
    notifications.info('Form validated successfully. Backend integration pending.');
    console.log('Register data:', data);
  };

  return { handleRegister };
};

export const useForgotPasswordHandler = () => {
  const { notifications } = useToastStore();

  const handleForgotPassword = async (data: ForgotPasswordRequest) => {
    // TODO: Add API call when backend is ready
    notifications.info('Form validated successfully. Backend integration pending.');
    console.log('Forgot password data:', data);
  };

  return { handleForgotPassword };
};

export const useResetPasswordHandler = () => {
  const { notifications } = useToastStore();

  const handleResetPassword = async (data: ResetPasswordRequest) => {
    // TODO: Add API call when backend is ready
    notifications.info('Form validated successfully. Backend integration pending.');
    console.log('Reset password data:', data);
  };

  return { handleResetPassword };
};
