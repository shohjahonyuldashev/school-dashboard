import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Контент поверх анимации */}
      <div className="relative z-10">
        <ScrollToTop />
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
