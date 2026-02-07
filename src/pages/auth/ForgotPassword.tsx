/**
 * Forgot Password page component.
 * Allows users to request a password reset email.
 */
import { Link } from 'react-router-dom';

import { AuthBreadcrumb } from '@/components/features/auth';
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
import { Text } from '@/components/ui/typography';
import { useCreateForm } from '@/lib/forms/createForm';
import { useForgotPasswordHandler } from '@/queries/auth/auth';
import { routes } from '@/routes';
import {
  type ForgotPasswordFormData,
  forgotPasswordSchema,
} from '@/schemas/authSchemas';
import styles from '@/styles/modules/auth.module.css';

export const ForgotPassword = () => {
  const { handleForgotPassword, isLoading, isSuccess } =
    useForgotPasswordHandler();
  const form = useCreateForm(forgotPasswordSchema, {
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = form.handleSubmit(
    async (data: ForgotPasswordFormData) => {
      await handleForgotPassword({ email: data.email });
      form.reset();
    },
  );

  const isSubmitting = form.formState.isSubmitting || isLoading;

  if (isSuccess) {
    return (
      <div className={styles.page}>
        <AuthBreadcrumb currentPage="Forgot Password" showLoginLink />
        <div className={styles.content}>
          <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                Check your email
              </CardTitle>
              <CardDescription>
                We&apos;ve sent a password reset link to your email address
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="small" className="text-muted-foreground">
                If an account exists with that email, you will receive a
                password reset link.
              </Text>
            </CardContent>
            <CardFooter className={styles.footer}>
              <Link to={routes.login} className="w-full">
                <Button variant="outline" className="w-full">
                  Back to Login
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <AuthBreadcrumb currentPage="Forgot Password" showLoginLink />
      <div className={styles.content}>
        <Card className={styles.card}>
          <CardHeader className={styles.cardHeader}>
            <CardTitle className={styles.cardTitle}>Forgot Password</CardTitle>
            <CardDescription>
              Enter your email address and we&apos;ll send you a reset link
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

                <Button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Reset Link'}
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
