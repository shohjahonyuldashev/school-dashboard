import Carusel from "../components/carusel/Carusel";
import Zip from ".././assets/ziimsocial_cover.jpg";
import Core from ".././assets/core.webp";
import Ifive from ".././assets/Ifive.jpeg";
import Andrey from ".././assets/andrey.jpg";
import StudentEye from ".././assets/eye.jpg";
import Max from ".././assets/max.jpg";
import Fuck from ".././assets/fuck.jpg";
import LogoLoop from "../components/Logoloop/LogoLoop";
import MathClub from "../assets/logos/math_club (2).svg";
import ScienceLab from "../assets/logos/science_lab.svg";
import ArtStudio from "../assets/logos/art_studio (2).svg";
import SportsTeam from "../assets/logos/sports_team.svg";
import MusicBand from "../assets/logos/music_band.svg";
import Footer from "../components/footer/Footer";
import Faraon from "../img/faraon.jpg";
import Scam from "../img/scam.jpg";
import {
  Target,
  Eye,
  Lightbulb,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  ShieldCheck,
  Trophy,
  TrendingUp,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";

const schoolLogos = [
  {
    node: (
      <img className="hover:cursor-pointer" src={MathClub} alt="Math Club" />
    ),
    title: "Math Club",
  },
  {
    node: (
      <img
        className="hover:cursor-pointer"
        src={ScienceLab}
        alt="Science Lab"
      />
    ),
    title: "Science Lab",
  },
  {
    node: (
      <img className="hover:cursor-pointer" src={ArtStudio} alt="Art Studio" />
    ),
    title: "Art Studio",
  },
  {
    node: (
      <img
        className="hover:cursor-pointer"
        src={SportsTeam}
        alt="Sports Team"
      />
    ),
    title: "Sports Team",
  },
  {
    node: (
      <img className="hover:cursor-pointer" src={MusicBand} alt="Music Band" />
    ),
    title: "Music Band",
  },
];

const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and ethical behavior in everything we do.",
    icon: ShieldCheck,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Innovation",
    description:
      "Encouraging creativity and new ideas to solve complex challenges in education.",
    icon: Lightbulb,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Community",
    description:
      "Building strong relationships between students, teachers, and parents.",
    icon: Users,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Excellence",
    description:
      "Striving for the best results in academics, sports, and personal growth.",
    icon: Trophy,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const team = [
  {
    img: Zip,
    name: "Алиса",
    role: "Frontend Developer",
    color: "from-blue-500 to-cyan-400",
  },
  {
    img: Core,
    name: "Боб",
    role: "Lead Designer",
    color: "from-purple-500 to-pink-400",
  },
  {
    img: Ifive,
    name: "Чарли",
    role: "Backend Developer",
    color: "from-indigo-500 to-[#6E71BD]",
  },
];

const About = () => {
  return (
    <main className="font-sans text-white bg-[#0f172a]">
      {/* Глобальные стили анимаций для этого компонента */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
        }
        @keyframes slideUpFade {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-card { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .animate-student-card { animation: slideUpFade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
      `,
        }}
      />

      <Carusel />

      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white overflow-hidden">
        <div className="relative py-24 px-6 bg-gradient-to-r from-[#6E71BD]/20 via-[#0f172a] to-[#0f172a] border-b border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
            >
              About <span className="text-[#9D99ED]">Academy</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
              Committed to educational excellence for over{" "}
              <span className="text-white font-bold">two decades</span>, shaping
              the leaders of tomorrow.
            </p>
          </div>
        </div>

        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="relative cursor-pointer aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(110,113,189,0.2)] border border-white/10 group">
                  <img
                    src={Faraon}
                    alt="Leadership"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-8 left-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Award className="text-yellow-400" size={32} />
                      <div>
                        <div className="text-2xl font-bold">#1 Ranked</div>
                        <div className="text-sm text-gray-300">
                          National Excellence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-[#9D99ED]/10 border border-[#9D99ED]/20 flex items-center justify-center group-hover:bg-[#9D99ED]/20 transition-all">
                      <Target className="h-8 w-8 text-[#9D99ED]" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-xl text-gray-400 leading-relaxed pl-2 border-l-2 border-white/5 group-hover:border-[#9D99ED]/50 transition-colors">
                    To provide exceptional education that empowers students to
                    reach their full potential, fostering{" "}
                    <span className="text-white font-medium">
                      critical thinking
                    </span>
                    , creativity, and a lifelong love of learning.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                      <Eye className="h-8 w-8 text-blue-400" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-xl text-gray-400 leading-relaxed pl-2 border-l-2 border-white/5 group-hover:border-blue-500/50 transition-colors">
                    To be the leading educational institution that inspires
                    students to become{" "}
                    <span className="text-white font-medium">
                      confident, compassionate
                    </span>
                    , and innovative leaders.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Our Core Values
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div
                  className={`h-16 w-16 rounded-2xl ${value.bg} flex items-center justify-center mb-8`}
                >
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-[#0f172a] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Левая часть: Текст истории */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-[#9D99ED]/10 border border-[#9D99ED]/20 flex items-center justify-center relative">
                  <BookOpen className="h-7 w-7 text-[#9D99ED]" />
                  <span className="absolute inset-0 rounded-2xl bg-[#9D99ED]/20 animate-ping opacity-20"></span>
                </div>
                <div>
                  <span className="text-[#9D99ED] font-semibold tracking-widest uppercase text-sm">
                    Since 1993
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#9D99ED] first-letter:mr-3 first-letter:float-left">
                  Founded in{" "}
                  <span className="text-white font-semibold">1993</span>,
                  Excellence Academy began with a simple yet powerful vision.
                </p>

                <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border-l-4 border-[#9D99ED]">
                  <TrendingUp className="text-[#9D99ED] shrink-0" />
                  <p>
                    Over the past three decades, we have grown to{" "}
                    <span className="text-[#9D99ED] font-bold">
                      1,200 learners
                    </span>
                    .
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Правая часть: Фото */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/10 blur-[80px] rounded-full"></div>
              <div className="relative z-10 aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src={Scam}
                  alt="Academy Life"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -right-4 bg-[#1a1c23] border border-white/10 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#9D99ED] to-[#7983DC] flex items-center justify-center">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-white">50+</p>
                    <p className="text-xs text-gray-400 uppercase">Awards</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Заголовок */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
            >
              НАША <span className="text-[#6E71BD] italic">КОМАНДА</span>
            </motion.h2>
            <div className="h-2 w-24 bg-[#6E71BD] mt-4"></div>
          </div>

          {/* Сетка карточек */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 overflow-hidden"
                // Острые углы или очень маленькое скругление (rounded-sm)
              >
                {/* Контейнер изображения */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />

                  {/* Оверлей при наведении */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

                  {/* Соцсети в углу */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    <button className="p-2 bg-white/10 backdrop-blur-md hover:bg-[#6E71BD] transition-colors">
                      <Twitter size={18} />
                    </button>
                    <button className="p-2 bg-white/10 backdrop-blur-md hover:bg-[#6E71BD] transition-colors">
                      <Github size={18} />
                    </button>
                  </div>
                </div>

                {/* Инфо-блок */}
                <div className="p-6 relative">
                  <div className="absolute top-0 left-6 w-10 h-1 bg-[#6E71BD] -translate-y-full"></div>
                  <h3 className="text-2xl font-bold uppercase mb-1 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#6E71BD] font-mono text-xs uppercase tracking-[0.2em]">
                    {member.role}
                  </p>

                  <motion.div className="mt-6 flex items-center gap-2 text-xs font-bold text-gray-500 uppercase cursor-pointer hover:text-white transition-colors">
                    View Profile <ExternalLink size={14} />
                  </motion.div>
                </div>

                {/* Декоративный номер сзади */}
                <span className="absolute bottom-4 right-4 text-6xl font-black text-white/5 select-none transition-colors group-hover:text-[#6E71BD]/10">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Заголовок */}
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white"
            >
              НАШИ{" "}
              <span className="text-[#6E71BD] italic underline decoration-white/10 underline-offset-8">
                СТУДЕНТЫ
              </span>
            </motion.h2>
          </div>

          {/* Сетка студентов */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: StudentEye, name: "Аня", age: "16 лет", delay: 0.1 },
              { img: Andrey, name: "Макс", age: "17 лет", delay: 0.2 },
              { img: Max, name: "Лена", age: "15 лет", delay: 0.3 },
              { img: Fuck, name: "Иван", age: "16 лет", delay: 0.4 },
            ].map((student, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: student.delay, duration: 0.6 }}
                className="group relative"
              >
                {/* Контейнер изображения (Прямоугольный с эффектом) */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 mb-6 border border-white/5 transition-all duration-500 group-hover:border-[#6E71BD]/50">
                  {/* Градиентный оверлей при ховере */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-0 group-hover:opacity-80 z-10 transition-opacity duration-500" />

                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Декоративный элемент в углу */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#6E71BD] flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-20">
                    <span className="text-white font-black text-xl">+</span>
                  </div>
                </div>

                {/* Информация */}
                <div className="relative z-20 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-1">
                    {student.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-[#6E71BD]" />
                    <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.2em] font-bold">
                      {student.age}
                    </p>
                  </div>
                </div>

                {/* Фоновая цифра номера (для стиля) */}
                <span className="absolute -top-10 -left-4 text-9xl font-black text-white/[0.02] pointer-events-none group-hover:text-[#6E71BD]/5 transition-colors duration-500">
                  0{idx + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Logos */}
      <section className="py-24 bg-[#0f172a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Заголовок в стиле Bento/Minimalist */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white"
              >
                НАШИ <span className="text-[#6E71BD]">КРУЖКИ</span> И ДОСТИЖЕНИЯ
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-500 font-mono text-sm uppercase tracking-widest pb-2"
            >
              // excellence in every field
            </motion.p>
          </div>

          {/* Контейнер для LogoLoop с улучшенным эффектом затухания */}
          <div className="relative group">
            {/* Декоративная подложка */}
            <div className="absolute inset-0 bg-[#6E71BD]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative h-[160px] flex items-center bg-white/[0.02] border-y border-white/5 backdrop-blur-sm overflow-hidden">
              <LogoLoop
                logos={schoolLogos}
                speed={80} // Чуть медленнее для солидности
                direction="left"
                logoHeight={56} // Увеличили размер
                gap={80} // Больше пространства между лого
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#0f172a"
              />
            </div>
          </div>

          {/* Дополнительная декоративная линия снизу */}
          <div className="mt-12 flex justify-center">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
