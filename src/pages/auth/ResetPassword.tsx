/**
 * Reset Password page component.
 * Allows users to reset their password using a reset token.
 */
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateForm } from "@/lib/forms/createForm";
import { useResetPasswordHandler } from "@/queries/auth/auth";
import { routes } from "@/routes";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "@/schemas/authSchemas";
import styles from "@/styles/modules/auth.module.css";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const redirectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const token = searchParams.get("token") || "";
  const { handleResetPassword } = useResetPasswordHandler();

  const form = useCreateForm(resetPasswordSchema, {
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (!token) {
      navigate(routes.forgotPassword);
    }
  }, [token, navigate]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = form.handleSubmit(
    async (data: ResetPasswordFormData) => {
      await handleResetPassword({
        token,
        password: data.password,
      });
      setIsSuccess(true);
      form.reset();

      // Clear any existing timeout
      if (redirectTimeoutRef.current) {
        clearTimeout(redirectTimeoutRef.current);
      }

      // Redirect after success
      redirectTimeoutRef.current = setTimeout(() => {
        navigate(routes.login);
      }, 2000);
    },
  );

  const breadcrumb = (
    <div className={styles.breadcrumbContainer}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={routes.home}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={routes.login}>Login</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Reset Password</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );

  if (isSuccess) {
    return (
      <div className={styles.page}>
        {breadcrumb}
        <div className={styles.content}>
          <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Password Reset</CardTitle>
              <CardDescription>
                Your password has been reset successfully
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className={styles.successAlert}>
                <AlertDescription>
                  You will be redirected to the login page shortly.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Link to={routes.login} className="w-full">
                <Button className="w-full">Go to Login</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {breadcrumb}
      <div className={styles.content}>
        <Card className={styles.card}>
          <CardHeader className={styles.cardHeader}>
            <CardTitle className={styles.cardTitle}>Reset Password</CardTitle>
            <CardDescription>Enter your new password below</CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className={styles.submitButton}
                  disabled={form.formState.isSubmitting || !token}
                >
                  {form.formState.isSubmitting
                    ? "Validating..."
                    : "Reset Password"}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className={styles.footer}>
            <Link to={routes.login} className={styles.link}>
              Back to Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
