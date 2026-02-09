import { useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { setAxiosNavigate } from '@/lib/axiosInstance';
import { AppRoutes } from '@/routes/AppRoutes';

const AxiosNavigateSetter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setAxiosNavigate(navigate);
    return () => setAxiosNavigate(null);
  }, [navigate]);
  return null;
};

export const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <AxiosNavigateSetter />
      <AppRoutes />
      <Toaster />
    </TooltipProvider>
  </BrowserRouter>
);
