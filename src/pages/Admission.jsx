import Robot from "../img/studednter.jpg";
import Footer from "../components/footer/Footer";
import {
  ArrowRight,
  Calendar,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  CheckCircle2,
  School,
  Clock,
  Bell,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  BookOpen,
  Music,
  Palette,
  Trophy,
  Microscope,
  Globe2,
  Languages,
  Calculator,
  Star,
  Users,
} from "lucide-react";

const Admission = () => {
  const [activeTab, setActiveTab] = useState("primary");
  const services = [
    {
      title: "Academic Support",
      desc: "Tutoring programs, learning support specialists, and personalized plans.",
      icon: <GraduationCap className="text-blue-400" size={32} />,
      color: "from-blue-500/20",
    },
    {
      title: "Counseling Services",
      desc: "Professional guidance for academic planning and university preparation.",
      icon: <MessageCircle className="text-purple-400" size={32} />,
      color: "from-purple-500/20",
    },
    {
      title: "Health & Wellness",
      desc: "On-campus nurse, wellness programs, and mental health support.",
      icon: <HeartPulse className="text-rose-400" size={32} />,
      color: "from-rose-500/20",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Application",
      desc: "Submit your application form and required documents.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      step: "02",
      title: "Assessment",
      desc: "Participate in entrance examinations and interviews.",
      color: "from-purple-500 to-pink-400",
    },
    {
      step: "03",
      title: "Review",
      desc: "Our admissions team reviews your profile.",
      color: "from-amber-500 to-orange-400",
    },
    {
      step: "04",
      title: "Acceptance",
      desc: "Receive your acceptance letter and enrollment details.",
      color: "from-emerald-500 to-teal-400",
    },
  ];

  const dates = [
    {
      label: "Application Opening",
      date: "January 15, 2026",
      status: "Upcoming",
    },
    {
      label: "Application Deadline",
      date: "March 31, 2026",
      status: "Critical",
    },
    {
      label: "Entrance Examinations",
      date: "April 12-14, 2026",
      status: "Scheduled",
    },
    { label: "Results Declaration", date: "May 15, 2026", status: "Final" },
  ];

  const criteria = [
    {
      level: "Elementary Level",
      icon: <School className="text-blue-400" size={40} />,
      gradient: "from-blue-500/10 to-transparent",
      items: [
        "Age 5-6 years for Grade 1",
        "Basic English and Math proficiency",
        "Previous school transcript",
        "Birth certificate and identification",
      ],
    },
    {
      level: "Secondary Level",
      icon: <GraduationCap className="text-purple-400" size={40} />,
      gradient: "from-purple-500/10 to-transparent",
      items: [
        "Age 11-12 years for Grade 6",
        "Strong foundation in core subjects",
        "Admission entrance examination",
        "Parent-teacher interview",
      ],
    },
  ];

  return (
    <div className="font-sans text-gray-500  bg-[#1E1E1E]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 md:py-32 bg-black overflow-hidden">
        {/* Фоновые декоративные сферы */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Левая часть: Текст */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Star className="text-yellow-400 fill-yellow-400" size={16} />
                <span className="text-sm text-gray-300 font-medium">
                  Top Rated Academy 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-[1.1]">
                Begin Your Journey with{" "}
                <span className="bg-gradient-to-r from-[#9D99ED] to-[#7983DC] bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                Join a community of learners where every student is valued and
                empowered to achieve their dreams through innovation and
                discipline.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <button className="px-8 py-4 bg-[#9D99ED] hover:bg-[#7983DC] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-purple-500/25 group">
                  Start Application
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </button>

                <button className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-[#9D99ED] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 group">
                  Schedule Tour
                  <Calendar className="h-5 w-5 text-gray-400 group-hover:text-[#9D99ED]" />
                </button>
              </div>
            </motion.div>

            {/* Правая часть: Изображение с карточками */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Основное изображение */}
              <div className="relative z-10 aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={Robot}
                  alt="Student at Excellence Academy"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
              </div>

              {/* Плавающая карточка 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 z-20 p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500 rounded-xl shadow-lg shadow-purple-500/50">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">1,200+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-tighter">
                      Active Students
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Декоративная рамка сзади */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#9D99ED]/30 rounded-[2.5rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Academic <span className="text-[#6E71BD] italic">Programs</span>
            </h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
              [ Intelligence Development // Level: Advanced ]
            </p>
            <div className="h-1 w-20 bg-[#6E71BD] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(110,113,189,0.5)]"></div>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="flex w-full gap-2 p-1 bg-gray-900/50 rounded-2xl border border-gray-800 mb-8">
              {[
                { id: "primary", label: "Primary", color: "border-blue-500" },
                {
                  id: "middle",
                  label: "Middle School",
                  color: "border-green-500",
                },
                { id: "high", label: "High School", color: "border-[#6E71BD]" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#6E71BD] text-white shadow-[0_0_20px_rgba(110,113,189,0.4)]"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative min-h-[400px]">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* PRIMARY */}
                {activeTab === "primary" && (
                  <div className="p-8 border border-gray-800 rounded-3xl bg-gray-900/30 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <BookOpen className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white uppercase">
                          Grades 1-5
                        </h3>
                        <p className="text-[#6E71BD] font-mono text-[10px] uppercase">
                          Foundation Level
                        </p>
                      </div>
                    </div>

                    <p className="mb-8 text-gray-400 leading-relaxed italic border-l-2 border-[#6E71BD] pl-4">
                      "Our primary program builds strong foundations in core
                      subjects while nurturing curiosity and creativity."
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {[
                        {
                          icon: BookOpen,
                          title: "Language Arts",
                          desc: "Reading, writing, and communication",
                        },
                        {
                          icon: Calculator,
                          title: "Mathematics",
                          desc: "Number sense and problem-solving",
                        },
                        {
                          icon: Microscope,
                          title: "Science",
                          desc: "Exploration of the natural world",
                        },
                        {
                          icon: Globe2,
                          title: "Social Studies",
                          desc: "Cultural awareness and citizenship",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <item.icon className="mt-1 h-5 w-5 text-[#6E71BD] group-hover:scale-125 transition-transform" />
                          <div>
                            <p className="font-bold text-gray-200 uppercase text-sm tracking-wide">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "middle" && (
                  <div className="p-8 border border-gray-800 rounded-3xl bg-gray-900/30 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <Languages className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white uppercase">
                          Grades 6-8
                        </h3>
                        <p className="text-[#6E71BD] font-mono text-[10px] uppercase">
                          Intermediate Level
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex items-start gap-4 group">
                        <Calculator className="mt-1 h-5 w-5 text-[#6E71BD]" />
                        <div>
                          <p className="font-bold text-gray-200 uppercase text-sm tracking-wide">
                            Advanced Math
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Algebra and geometry foundations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* HIGH SCHOOL */}
                {activeTab === "high" && (
                  <div className="p-8 border border-gray-800 rounded-3xl bg-gray-900/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Trophy className="h-32 w-32 text-[#6E71BD]" />
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-[#6E71BD]/10 flex items-center justify-center border border-[#6E71BD]/20">
                        <Trophy className="h-6 w-6 text-[#6E71BD]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white uppercase">
                          Grades 9-12
                        </h3>
                        <p className="text-[#6E71BD] font-mono text-[10px] uppercase">
                          Professional Level
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex items-start gap-4 group">
                        <Globe2 className="mt-1 h-5 w-5 text-[#6E71BD]" />
                        <div>
                          <p className="font-bold text-gray-200 uppercase text-sm tracking-wide">
                            IB Diploma
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Globally recognized qualification
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Card */}
      <section className="bg-black py-24 overflow-hidden">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          {/* Заголовок */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Extracurricular{" "}
              <span className="text-[#6E71BD] italic">Activities</span>
            </h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
              [ Skill Development // Extracurricular Modules ]
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-[#6E71BD] mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(110,113,189,0.4)]"></div>
          </div>

          {/* Сетка карточек */}
          <div className="flex flex-wrap w-full gap-8 justify-center">
            {[
              {
                title: "Sports",
                icon: Trophy,
                list: [
                  "Football/Soccer",
                  "Basketball",
                  "Swimming",
                  "Track & Field",
                  "Tennis",
                ],
                delay: "0.1s",
              },
              {
                title: "Music & Arts",
                icon: Music,
                list: [
                  "Orchestra",
                  "Choir",
                  "Drama Club",
                  "Art Studio",
                  "Dance",
                ],
                delay: "0.2s",
              },
              {
                title: "Academic Clubs",
                icon: Microscope,
                list: [
                  "Debate Team",
                  "Math Olympiad",
                  "Science Club",
                  "Robotics",
                  "Model UN",
                ],
                delay: "0.3s",
              },
              {
                title: "Special Interest",
                icon: Palette,
                list: [
                  "Photography",
                  "Coding Club",
                  "Environmental Club",
                  "Chess Club",
                  "Yearbook",
                ],
                delay: "0.4s",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{ animationDelay: item.delay }}
                className="p-8 border border-gray-800 w-[300px] h-[420px] cursor-pointer rounded-3xl bg-gray-900/20 backdrop-blur-md transition-all duration-500 hover:border-[#6E71BD] hover:-translate-y-3 group shadow-2xl animate-student-card"
              >
                {/* Иконка с неоновым кругом */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6E71BD]/10 border border-[#6E71BD]/20 group-hover:bg-[#6E71BD] group-hover:shadow-[0_0_20px_rgba(110,113,189,0.6)] transition-all duration-500">
                  <item.icon className="h-8 w-8 text-[#6E71BD] group-hover:text-white transition-colors" />
                </div>

                <h3 className="mb-6 text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#6E71BD] transition-colors">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.list.map((li, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-400 font-medium group-hover:text-gray-200 transition-colors"
                    >
                      <span className="text-[#6E71BD] text-xs">▶</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Classes & Programs Section */}
      {/* Student Support */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Заголовок */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Student Support Services
            </h2>
            <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              Comprehensive support for academic and personal growth
            </p>
          </div>

          {/* Сетка карточек */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
              >
                {/* Эффект свечения сзади */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-2xl`}
                />

                <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300 shadow-2xl">
                  {/* Иконка */}
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Декоративный элемент в углу */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      <span className="text-white">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Content */}
      <div className="max-w-8xl mx-auto ">
        {/* Process */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="mb-20 text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-extrabold mb-4 tracking-tight"
              >
                Admission Process
              </motion.h2>
              <p className="text-gray-400 text-lg">
                Your journey to excellence starts here
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="relative z-10 w-full sm:w-[300px] lg:w-[280px]"
                >
                  <div className="h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-500 group overflow-hidden">
                    {/* Фоновое свечение номера */}
                    <div
                      className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`}
                    />

                    {/* Номер этапа */}
                    <div
                      className={`text-6xl font-black mb-6 bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    >
                      {item.step}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                      {item.desc}
                    </p>

                    {/* Индикатор прогресса внизу карточки */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-full transition-all duration-700" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-16 text-left border-l-4 border-purple-500 pl-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Eligibility Criteria
              </h2>
              <p className="text-gray-400 text-lg">
                Requirements for successful enrollment in our academy
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {criteria.map((group, idx) => (
                <motion.div
                  key={group.level}
                  initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden group p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
                >
                  {/* Фоновый градиент при наведении */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-10">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        {group.icon}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {group.level}
                      </h3>
                    </div>

                    <ul className="space-y-6">
                      {group.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 group/item"
                        >
                          <div className="mt-1">
                            <CheckCircle2
                              className="text-purple-500 group-hover/item:scale-125 transition-transform"
                              size={24}
                            />
                          </div>
                          <span className="text-xl text-gray-300 group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 max-w-5xl ">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-16 shadow-2xl"
            >
              {/* Декоративное фоновое пятно */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/20 blur-[100px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Calendar className="text-purple-400" size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Important Dates
                  </h2>
                </div>

                <div className="grid gap-6 cursor-pointer">
                  {dates.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Clock className="text-purple-400" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {item.label}
                          </h3>
                          <span className="text-xs uppercase tracking-widest text-purple-500 font-bold">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-white/10 hidden md:block" />
                        <span className="text-2xl font-mono font-medium text-[#7983DC] group-hover:text-white transition-colors">
                          {item.date}
                        </span>
                        <Bell
                          className="text-white/20 group-hover:text-purple-400 transition-colors"
                          size={18}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Admission;
