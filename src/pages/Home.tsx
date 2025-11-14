/**
 * Home page component.
 * Main landing page of the application.
 *
 * To customize:
 * - Add your main content and layout
 * - Link to other pages or sections
 * - Add hero section, features, etc.
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";

export const Home = () => {
  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <Heading level={1}>Welcome to umoja</Heading>
          <div className="flex justify-center">
            <img src="/logo1.svg" alt="umoja Logo" width={100} height={100} />
          </div>
          <Text variant="lead">
            A production-ready Web3 starter built with Vite, React, TypeScript,
            Tailwind CSS, and shadcn/ui.
          </Text>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Explore the design system and components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Text>
              This project is set up with all the tools you need to build a
              modern Web3 application. Check out the styleguide to see all
              available components and design tokens.
            </Text>
            <div className="flex gap-2">
              <Button asChild>
                <Link to="/styleguide">View Styleguide</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
