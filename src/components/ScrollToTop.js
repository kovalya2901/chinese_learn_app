import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Для React Router v6 важно использовать document.documentElement.scrollTo,
    // а не window.scrollTo
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Опционально: можно сделать прокрутку мгновенной
    });
  }, [pathname]);
};

export default ScrollToTop;