import { useEffect, useEffectEvent, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const handleChange = useEffectEvent(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  });

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", handleChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", handleChange);
  }, [handleChange]);

  return !!isMobile;
}
