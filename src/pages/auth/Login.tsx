/**
 * Login page component.
 * Allows users to authenticate with email and password.
 */
import { Link } from 'react-router-dom';

import { AuthBreadcrumb } from '@/components/auth/AuthBreadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateForm } from '@/lib/forms/createForm';
import { useLoginHandler } from '@/queries/auth/auth';
import { routes } from '@/routes';
import { type LoginFormData, loginSchema } from '@/schemas/authSchemas';
import styles from '@/styles/modules/auth.module.css';

export const Login = () => {
  const { handleLogin, isLoading } = useLoginHandler();
  const form = useCreateForm(loginSchema, {
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = form.handleSubmit(async (data: LoginFormData) => {
    await handleLogin(data);
  });

  const isSubmitting = form.formState.isSubmitting || isLoading;

  return (
    <div className={styles.page}>
      <AuthBreadcrumb currentPage="Login" />

      <div className={styles.content}>
        <Card className={styles.card}>
          <CardHeader className={styles.cardHeader}>
            <CardTitle className={styles.cardTitle}>Login</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="name@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
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

                <div className={styles.formActions}>
                  <Link to={routes.forgotPassword} className={styles.link}>
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing in...' : 'Login'}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className={styles.footer}>
            <div className={styles.footerText}>
              Don't have an account?{' '}
              <Link to={routes.register} className={styles.primaryLink}>
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
