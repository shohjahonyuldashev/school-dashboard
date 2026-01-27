import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const linkStyles = ({ isActive }) =>
    `text-[18px] font-bold uppercase tracking-wider transition-all duration-300 ${
      isActive
        ? "text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
        : "text-[#B19EEF] hover:text-[#00f2ff] hover:drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]"
    }`;

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.news"), path: "/news" }, // <--- ДОБАВЛЕНО: Теперь "Новости" будут вторыми в списке
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.admission"), path: "/admission" },
    { name: t("nav.information"), path: "/information" },
    { name: t("nav.students"), path: "/students" },
    { name: t("nav.application"), path: "/application" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-5 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {/* Логотип */}
        <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter text-white z-[1001]">
          SCHOOL{" "}
          <span className="text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.7)]">
            1
          </span>
        </h1>

        {/* --- ПК МЕНЮ (скрыто на мобилках) --- */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-10">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={linkStyles}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Языки для ПК */}
          <div className="flex gap-4 text-white font-bold ml-4 border-l border-white/20 pl-4">
            {["uz", "ru", "en"].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`uppercase transition hover:text-[#00f2ff] ${i18n.language === lng ? "text-[#00f2ff]" : "opacity-50"}`}
              >
                {lng}
              </button>
            ))}
          </div>
        </div>

        {/* Кнопка Бургер (только для мобилок) */}
        <button
          className="text-[#00f2ff] md:hidden z-[1001] transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>

        {/* Декоративная точка (только на больших экранах) */}
        <div className="hidden lg:block h-2 w-2 rounded-full bg-[#ff00ff] animate-pulse shadow-[0_0_10px_#ff00ff] ml-4"></div>
      </nav>

      {/* --- МОБИЛЬНОЕ МЕНЮ (Overlay) --- */}
      <div
        className={`fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col space-y-8 text-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={linkStyles}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Языки для мобилки */}
        <div className="flex gap-8 text-white font-bold mt-12 text-xl border-t border-white/10 pt-8 w-full justify-center">
          {["uz", "ru", "en"].map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`uppercase ${i18n.language === lng ? "text-[#00f2ff]" : "opacity-50"}`}
            >
              {lng}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
