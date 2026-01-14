import { useState } from "react";
import { NavLink } from "react-router-dom";
// Установи иконки, если их нет: npm install lucide-react
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Базовые стили для ссылок
  const linkStyles = ({ isActive }) =>
    `text-[18px] font-bold uppercase tracking-wider transition-all duration-300 ${
      isActive
        ? "text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
        : "text-[#B19EEF] hover:text-[#00f2ff] hover:drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]"
    }`;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admission", path: "/admission" },
    { name: "Information", path: "/information" },
    { name: "Students", path: "/students" },
    { name: "Application", path: "/application" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-5 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Логотип */}
      <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter text-white z-[1001]">
        SCHOOL{" "}
        <span className="text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.7)]">
          1
        </span>
      </h1>

      {/* Бургер-кнопка для мобилок */}
      <button
        className="text-[#00f2ff] md:hidden z-[1001]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Меню для ПК */}
      <ul className="hidden md:flex space-x-10">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={linkStyles}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Мобильное меню (выезжает сверху/сбоку) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={linkStyles}
            onClick={() => setIsOpen(false)} // Закрыть меню при клике
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden lg:block h-2 w-2 rounded-full bg-[#ff00ff] animate-pulse shadow-[0_0_10px_#ff00ff]"></div>
    </nav>
  );
};

export default Navbar;
