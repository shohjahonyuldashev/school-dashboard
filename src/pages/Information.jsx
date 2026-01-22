import {
  motion,
  useInView,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

// Оставляем только один импорт здесь
import { useTranslation } from "react-i18next";
// Импорты ваших ресурсов

import Doctor from "../image/doctor.avif";
import Lib from "../image/lib.webp";
import Field from "../image/field.jpeg";
import SchoolPerformanceDashboard from "../components/Chart/SchoolPerformanceDashboard";
import Footer from "../components/footer/Footer";

// Анимированные числа с улучшенной плавностью
const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const endValue = parseInt(value.replace(/\D/g, ""));
      animate(count, endValue, { duration: 2.5, ease: [0.16, 1, 0.3, 1] });
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="font-black tracking-tighter text-white">
      <motion.span>{rounded}</motion.span>
      {value.replace(/\d/g, "")}
    </span>
  );
};

const Information = () => {
  const { t } = useTranslation();

  const facts = [
    { number: "850+ 👨‍🎓", label: t("info.facts.students") },
    { number: "120+ 👩‍🏫", label: t("info.facts.teachers") },
    { number: "45+ 🌍", label: t("info.facts.countries") },
    { number: "15:1 ✨", label: t("info.facts.ratio") },
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#6E71BD] selection:text-white">
      {/* Background Glow Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6E71BD]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
          >
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400">
              {t("info.hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]"
          >
            School <br />{" "}
            <span className="text-[#6E71BD] italic">
              {t("info.hero.title")}{" "}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium"
          >
            {t("info.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Bento Grid Facts */}
      <section className="py-12 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center hover:border-[#6E71BD]/40 transition-colors group"
            >
              <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-500">
                <AnimatedNumber value={fact.number} />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Contact Hub */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 flex flex-col justify-between group"
          >
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">
                {t("info.contact.title")}{" "}
                <span className="text-[#6E71BD]">{t("info.contact.hub")}</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#6E71BD]/20 transition-colors">
                    <Phone size={24} className="text-[#6E71BD]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">
                      {t("info.contact.direct")}
                    </p>
                    <p className="text-xl font-bold">+998 91 286 14 78</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#6E71BD]/20 transition-colors">
                    <Mail size={24} className="text-[#6E71BD]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">
                      {t("info.contact.support")}
                    </p>
                    <p className="text-xl font-bold">info@uis.uz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
              <span className="text-gray-500">
                {t("info.contact.availability")}
              </span>
              <ArrowUpRight className="text-gray-700" />
            </div>
          </motion.div>

          {/* Working Hours (Solid Accent) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-[#6E71BD] text-black"
          >
            <div className="flex justify-between items-start mb-16">
              <h2 className="text-4xl font-black uppercase leading-none tracking-tighter">
                {t("info.campus.hours")} <br /> {t("info.campus.operation")}
              </h2>
              <Clock size={40} strokeWidth={3} />
            </div>
            <div className="space-y-6">
              {[
                { day: t("info.campus.days.weekdays"), time: "08:00 - 15:30" },
                { day: t("info.campus.days.saturday"), time: "09:00 - 13:00" },
                {
                  day: t("info.campus.days.sunday"),
                  time: t("info.campus.days.closed"),
                  color: "black",
                },
              ].map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-black/10 pb-4 last:border-0"
                >
                  <span className="font-mono uppercase tracking-wider text-sm font-bold opacity-70">
                    {h.day}
                  </span>
                  <span
                    className={`text-xl font-black ${
                      h.day === "Sunday" ? "opacity-40" : ""
                    }`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities with Image Hover Effect */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {t("info.space.title")} <br />
              <span className="text-gray-800">{t("info.space.subtitle")}</span>
            </h2>
            <p className="max-w-xs text-gray-500 text-sm">
              {t("info.space.desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: Doctor,
                title: t("info.space.items.labs"),
                tag: t("info.space.tags.science"),
              },
              {
                img: Lib,
                title: t("info.space.items.library"),
                tag: t("info.space.tags.knowledge"),
              },
              {
                img: Field,
                title: t("info.space.items.arena"),
                tag: t("info.space.tags.sports"),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5"
              >
                <img
                  src={item.img}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-10">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#6E71BD] font-black">
                    {item.tag}
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Charts */}
      <div className="py-20 border-y border-white/5 bg-[#050505] relative z-10">
        <SchoolPerformanceDashboard />
      </div>

      {/* Programs (Transparent Cards) */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {[
            {
              title: t("info.programs.academic.title"),
              list: t("info.programs.academic.list", { returnObjects: true }),
              accent: "#00d2ff",
            },
            {
              title: t("info.programs.assets.title"),
              list: t("info.programs.assets.list", { returnObjects: true }),
              accent: "#9c27b0",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl hover:bg-white/[0.04] transition-all"
            >
              <h3
                className="text-3xl font-black mb-10 uppercase tracking-tighter"
                style={{ color: card.accent }}
              >
                {card.title}
              </h3>
              <ul className="space-y-6">
                {card.list.map((item, j) => (
                  <li key={j} className="flex items-center gap-5 group">
                    <div className="h-px w-8 bg-white/20 group-hover:w-12 group-hover:bg-white transition-all" />
                    <span className="text-lg text-gray-400 group-hover:text-white transition-colors uppercase tracking-tight font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Information;
