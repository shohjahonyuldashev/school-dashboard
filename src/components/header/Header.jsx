import Navbar from "../navbar/Navbar";
import PixelBlast from "../../reactbits/PixelBlast";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      
      {/* Контейнер для PixelBlast и контента */}
      <div className="relative w-full min-h-[600px] md:min-h-screen flex items-center justify-center pt-20">
        
        {/* Фон с эффектами */}
        <div className="absolute inset-0 z-0">
          <PixelBlast
            variant="circle"
            pixelSize={11}
            color="#B19EEF"
            patternScale={9}
            patternDensity={2}
            pixelSizeJitter={0.7}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.9}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>

        {/* Контент поверх фона */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 pointer-events-none">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* 1. БЕЙДЖ (адаптивный текст) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-400 animate-pulse" />
              <span className="typewriter-text text-blue-400 text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] md:tracking-[0.2em]">
                Welcome to Excellence Academy
              </span>
            </div>

            {/* 2. ЗАГОЛОВОК (разные размеры для разных экранов) */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[1.1] animate-fade-in">
              Welcome to <br className="hidden md:block" />
              <span className="text-blue-500 italic drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                School Number 1
              </span>
            </h1>

            {/* 3. АНИМИРОВАННАЯ ЛИНИЯ (ширина меняется) */}
            <div className="animate-line h-1 md:h-1.5 bg-blue-600 rounded-full mt-6 md:mt-8 w-32 md:w-64 shadow-[0_0_20px_rgba(37,99,235,0.6)]"></div>

            {/* Текст-описание (скрываем на совсем маленьких или уменьшаем) */}
            <p className="mt-6 text-gray-500 font-mono text-xs md:text-sm max-w-xs md:max-w-md opacity-0 animate-fade-in [animation-delay:1s] [animation-fill-mode:forwards]">
               Инициализация образовательной среды... [OK]
              <br /> Загрузка модулей творчества и спорта... [OK]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;