import React from "react";
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
import { useTranslation } from "react-i18next";
import {
  Target,
  Eye,
  Lightbulb,
  Users,
  BookOpen,
  Award,
  ShieldCheck,
  Trophy,
  TrendingUp,
  Github,
  Twitter,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";

// --- ДАННЫЕ (Убедись, что они объявлены здесь) ---

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

// --- КОМПОНЕНТ ---

const About = () => {
  const { t } = useTranslation();

  const team = [
    {
      img: Zip,
      name: t("team.member1.name"),
      role: t("team.member1.role"),
      color: "from-blue-500 to-cyan-400",
    },
    {
      img: Core,
      name: t("team.member2.name"),
      role: t("team.member2.role"),
      color: "from-purple-500 to-pink-400",
    },
    {
      img: Ifive,
      name: t("team.member3.name"),
      role: t("team.member3.role"),
      color: "from-indigo-500 to-[#6E71BD]",
    },
  ];

  const values = [
    {
      title: t("about.values.items.integrity.title"),
      description: t("about.values.items.integrity.desc"),
      icon: ShieldCheck,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: t("about.values.items.innovation.title"),
      description: t("about.values.items.innovation.desc"),
      icon: Lightbulb,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: t("about.values.items.community.title"),
      description: t("about.values.items.community.desc"),
      icon: Users,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: t("about.values.items.excellence.title"),
      description: t("about.values.items.excellence.desc"),
      icon: Trophy,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <main className="font-sans text-white bg-[#0f172a] overflow-x-hidden">
      <Carusel />

      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white">
        <div className="relative py-16 md:py-24 px-6 bg-gradient-to-r from-[#6E71BD]/20 via-[#0f172a] to-[#0f172a] border-b border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight"
            >
              {t("about.hero.title")}{" "}
              <span className="text-[#9D99ED]">{t("about.hero.subtitle")}</span>
            </motion.h1>
            <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
              {t("about.hero.desc")}{" "}
              <span className="text-white font-bold">
                {t("about.hero.button")}
              </span>
              {t("about.hero.years")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 relative px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={Faraon}
                  alt="Leadership"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Award className="text-yellow-400 h-6 w-6 md:h-8 md:w-8" />
                    <div>
                      <div className="text-lg md:text-2xl font-bold">
                        #1 Ranked
                      </div>
                      <div className="text-[10px] md:text-sm text-gray-300 uppercase">
                        National Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-10 md:space-y-12 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                  <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-[#9D99ED]/10 border border-[#9D99ED]/20 flex items-center justify-center">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-[#9D99ED]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {t("about.mission.title")}
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed pl-4 border-l-2 border-[#9D99ED]/30">
                  {t("about.mission.desc")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                  <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Eye className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {t("about.vision.title")}
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed pl-4 border-l-2 border-blue-500/30">
                  {t("about.vision.desc")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-[#0f172a] px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("about.values.title")}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div
                  className={`h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl ${value.bg} flex items-center justify-center mb-6 md:mb-8`}
                >
                  <value.icon
                    className={`h-6 w-6 md:h-8 md:w-8 ${value.color}`}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-[#0f172a] px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[#9D99ED]/10 border border-[#9D99ED]/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 md:h-7 md:w-7 text-[#9D99ED]" />
                </div>
                <div>
                  <span className="text-[#9D99ED] font-semibold tracking-widest uppercase text-[10px] md:text-sm">
                    {t("about.story.since")}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    {t("about.story.title")}
                  </h2>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                {t("about.story.found")}
                <span className="text-white font-semibold">
                  {t("about.story.number")}
                </span>
                ,{t("about.story.desc")}
              </p>
              <div className="flex gap-4 p-4 md:p-6 bg-white/5 rounded-2xl border-l-4 border-[#9D99ED]">
                <TrendingUp className="text-[#9D99ED] shrink-0" />
                <p className="text-sm md:text-base text-gray-400">
                  {t("about.story.growth")}
                  <span className="text-[#9D99ED] font-bold">
                    {t("about.story.team_title")}
                  </span>
                  .
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={Scam}
                  alt="History"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-4 bg-[#1a1c23] border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-[#9D99ED] to-[#7983DC] flex items-center justify-center text-white">
                    <Award className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl md:text-3xl text-white">
                      50+
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase">
                      Awards
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#0f172a] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <motion.h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
              {t("about.team_title")}
              <span className="text-[#6E71BD] italic">{t("about.group")}</span>
            </motion.h2>
            <div className="h-1.5 w-20 md:w-24 bg-[#6E71BD] mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    <button className="p-2 bg-white/10 backdrop-blur-md hover:bg-[#6E71BD] transition-colors">
                      <Twitter size={18} />
                    </button>
                    <button className="p-2 bg-white/10 backdrop-blur-md hover:bg-[#6E71BD] transition-colors">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold uppercase">
                    {member.name}
                  </h3>
                  <p className="text-[#6E71BD] font-mono text-[10px] md:text-xs uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-16 md:py-24 bg-[#0f172a] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <motion.h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white">
              {t("scrach.students_title_part1")}
              <span className="text-[#6E71BD] italic underline decoration-white/10 underline-offset-8">
                {t("scrach.students_title_part2")}
              </span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                img: StudentEye,
                name: t("students.s1.name"),
                age: `16 ${t("scrach.years_old")}`,
              },
              {
                img: Andrey,
                name: t("students.s2.name"),
                age: `17 ${t("scrach.years_old")}`,
              },
              {
                img: Max,
                name: t("students.s3.name"),
                age: `15 ${t("scrach.years_old")}`,
              },
              {
                img: Fuck,
                name: t("students.s4.name"),
                age: `16 ${t("scrach.years_old")}`,
              },
            ].map((student, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden border border-white/5 group-hover:border-[#6E71BD]/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-0 group-hover:opacity-80 z-10 transition-opacity duration-500" />
                  <img
                    src={student.img}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-4 uppercase">
                  {student.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#6E71BD]" />
                  <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase font-bold">
                    {student.age}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LogoLoop Section */}
      <section className="py-16 md:py-24 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white">
              {t("clubs.clubs_title_part1")}
              <span className="text-[#6E71BD]">
                {t("clubs.clubs_title_part2")}
              </span>{" "}
              {t("clubs.clubs_title_part3")}
            </h2>
          </div>
          <div className="h-[100px] md:h-[160px] bg-white/[0.02] border-y border-white/5 backdrop-blur-sm overflow-hidden flex items-center relative">
            <LogoLoop
              logos={schoolLogos}
              speed={60}
              logoHeight={48}
              gap={60}
              fadeOut
              fadeOutColor="#0f172a"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
