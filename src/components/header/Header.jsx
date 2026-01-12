import Navbar from "../navbar/Navbar";
import PixelBlast from "../../reactbits/PixelBlast";
import { ArrowRight, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div style={{ width: "100%", height: "950px", position: "relative" }}>
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

        {/* Надпись поверх PixelBlast */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#ffffff",
            fontSize: "88px",
            fontWeight: "bold",
            pointerEvents: "none", // чтобы эффекты мыши проходили сквозь текст
            textAlign: "center",
            zIndex: 10,
            // color: "black",
            display: "flex",
            gap: "30px",
          }}
        >
          <div className="flex flex-col items-start  p-10">
            {/* 1. БЕЙДЖ С ЭФФЕКТОМ ПЕЧАТИ */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
              <span className="typewriter-text text-blue-400 text-xs font-mono uppercase tracking-[0.2em]">
                Welcome to Excellence Academy
              </span>
            </div>

            {/* 2. ЗАГОЛОВОК */}
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight animate-fade-in">
              Welcome to <br />
              <span className="text-blue-500 italic drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                School Number 1
              </span>
            </h1>

            {/* 3. АНИМИРОВАННАЯ ЛИНИЯ ПОД ЗАГОЛОВКОМ */}
            <div className="animate-line h-1.5 bg-blue-600 rounded-full mt-8 shadow-[0_0_20px_rgba(37,99,235,0.6)]"></div>

            {/* Текст-описание для баланса */}
            <p className="mt-6 text-gray-500 font-mono text-sm max-w-md opacity-0 animate-fade-in [animation-delay:1s] [animation-fill-mode:forwards]">
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
