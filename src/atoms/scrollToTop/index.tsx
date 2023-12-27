import { useEffect } from 'react'
import { useLocation } from "react-router";

type props = {
  children: React.ReactNode;
}
const ScrollToTop: React.FC<props> = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{children}</>
}
export default ScrollToTop;