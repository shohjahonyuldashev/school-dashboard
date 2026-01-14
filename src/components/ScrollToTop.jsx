import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Добавляем объект с настройками плавности
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Вот эта магия делает прокрутку плавной
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
