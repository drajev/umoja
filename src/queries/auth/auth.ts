import { useToastStore } from "@/stores";

/**
 * Authentication form handlers.
 * Handles form validation only - API calls will be implemented when backend is ready.
 *
 * @example
 * const { handleLogin } = useLoginHandler();
 * await handleLogin({ email, password });
 */
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

/**
 * Login form handler.
 * TODO: Add API call when backend is ready.
 */
export const useLoginHandler = () => {
  const { info } = useToastStore.use.actions();

  const handleLogin = async (data: LoginRequest) => {
    info("Form validated successfully. Backend integration pending.");
    console.log("Login data:", data);
  };

  return { handleLogin };
};

/**
 * Register form handler.
 * TODO: Add API call when backend is ready.
 */
export const useRegisterHandler = () => {
  const { info } = useToastStore.use.actions();

  const handleRegister = async (data: RegisterRequest) => {
    info("Form validated successfully. Backend integration pending.");
    console.log("Register data:", data);
  };

  return { handleRegister };
};

/**
 * Forgot password form handler.
 * TODO: Add API call when backend is ready.
 */
export const useForgotPasswordHandler = () => {
  const { info } = useToastStore.use.actions();

  const handleForgotPassword = async (data: ForgotPasswordRequest) => {
    info("Form validated successfully. Backend integration pending.");
    console.log("Forgot password data:", data);
  };

  return { handleForgotPassword };
};

/**
 * Reset password form handler.
 * TODO: Add API call when backend is ready.
 */
export const useResetPasswordHandler = () => {
  const { info } = useToastStore.use.actions();

  const handleResetPassword = async (data: ResetPasswordRequest) => {
    info("Form validated successfully. Backend integration pending.");
    console.log("Reset password data:", data);
  };

  return { handleResetPassword };
};
