import { useEffect } from 'react'
import { useLocation } from "react-router";

interface props {
  children: React.ReactNode;
}
export const ScrollToTop: React.FC<props> = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{children}</>
}
