/**
 * Home page component.
 * Main landing page of the application.
 *
 * To customize:
 * - Add your main content and layout
 * - Link to other pages or sections
 * - Add hero section, features, etc.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import LogoIcon from '@/assets/logo.svg?react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Home = () => {
  const [size, setSize] = useState(200);

  const toggleSize = () => {
    setSize(size === 200 ? 100 : 200);
  };

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <Heading level={1}>Welcome to umoja</Heading>
          <button onClick={toggleSize}>toggle size</button>

          <AspectRatio ratio={5} className="w-full h-full absolute top-0 left-0">
            <div className="flex flex-col items-center justify-center h-full">
              <motion.div layout style={{ width: size, height: size }}>
                <LogoIcon width="100%" height="100%" className="text-foreground" />
              </motion.div>
            </div>
          </AspectRatio>
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
      </div >
    </div >
  );
};
