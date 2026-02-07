import { useEffect, useEffectEvent, useState } from 'react';

import { MOBILE_BREAKPOINT_PX } from '@/constants/layout';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const handleChange = useEffectEvent(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_PX);
  });

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`);
    mql.addEventListener('change', handleChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_PX);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return !!isMobile;
}
