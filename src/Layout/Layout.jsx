import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Контент поверх анимации */}
      <div className="relative z-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
