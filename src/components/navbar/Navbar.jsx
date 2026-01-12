import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Базовые стили для ссылок
  const linkStyles = ({ isActive }) =>
    `text-[18px] font-bold uppercase tracking-wider transition-all duration-300 ${
      isActive
        ? "text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
        : "text-[#B19EEF] hover:text-[#00f2ff] hover:drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-12 py-5 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Логотип с неоновым эффектом */}
      <h1 className="text-3xl font-black italic tracking-tighter text-white">
        SCHOOL{" "}
        <span className="text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.7)]">
          1
        </span>
      </h1>

      {/* Меню */}
      <ul className="flex space-x-10">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Admission", path: "/admission" },
          { name: "Information", path: "/information" },
          { name: "Students", path: "/students" },
          { name: "Application", path: "/application" },
        ].map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={linkStyles}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Декоративный элемент в углу (опционально) */}
      <div className="hidden md:block h-2 w-2 rounded-full bg-[#ff00ff] animate-pulse shadow-[0_0_10px_#ff00ff]"></div>
    </nav>
  );
};

export default Navbar;
