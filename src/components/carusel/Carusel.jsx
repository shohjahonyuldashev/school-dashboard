import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Импортируй иконки
import None from "../../assets/n1.jpg";
import Two from "../../assets/n2.jpg";
import Three from "../../assets/n3.jpg";
import Four from "../../assets/n4.jpg";

export default function Carusel() {
  const images = [
    "https://www.bukhariantimes.org/wp-content/uploads/2024/03/photo_2024-03-04_23-27-59-1.jpg",
    None,
    Two,
    Three,
    Four,
  ];

  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  // Улучшенная анимация
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 секунд для более спокойного восприятия
    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center bg-[#0f172a] overflow-hidden">
      {/* Контейнер слайдера */}
      <div className="relative w-[95%] max-w-[1400px] h-full flex items-center justify-center">
        
        {/* Изображение */}
        <div className="relative w-full h-[70vh] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
          <img
            ref={imgRef}
            src={images[index]}
            className="w-full h-full object-cover"
            alt="Academy Hero"
          />
          
          {/* Темный градиент снизу */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />

          {/* Кнопки управления (Glassmorphism) */}
          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between items-center z-20">
            <button
              onClick={prev}
              className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-[#6E71BD] hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-[#6E71BD] hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Индикаторы (Полоски в стиле прогресс-бара) */}
        <div className="absolute bottom-12 flex gap-4 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="relative w-12 h-1.5 rounded-full overflow-hidden bg-white/20 transition-all"
            >
              {/* Активная полоска */}
              <div 
                className={`absolute inset-0 bg-[#6E71BD] transition-transform duration-500 ${
                  i === index ? "translate-x-0" : "-translate-x-full"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Декоративный текст на фоне */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
        Academy
      </div>
    </section>
  );
}