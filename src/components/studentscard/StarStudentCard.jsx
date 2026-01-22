import React, { useState } from "react";
import { Trophy, X, Star, Award, ShieldCheck, ChevronDown } from "lucide-react";
import Anime from "../../img/anime.avif";
import Cod from "../../image/cod.jpeg";
import Killer from "../../image/killer.jpg";
import Advan from "../../image/advanced.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const StudentsSection = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [activeFaq, setActiveFaq] = useState(null);
  const { t } = useTranslation();

  const studentsData = [
    {
      id: 1,
      title: t("students_section.cards.pride.title"),
      desc: t("students_section.cards.pride.desc"),
      image: Killer,
      size: "large",
      icon: <Trophy size={24} className="text-yellow-400" />,
      staff: {
        name: t("students_section.cards.pride.staff_name"),
        role: t("students_section.cards.pride.staff_role"),
        avatar: "Д", // Можно оставить так или тоже вынести, если в разных языках разные буквы
        color: "bg-purple-600",
        quote: t("students_section.cards.pride.staff_quote"),
      },
    },
    {
      id: 2,
      title: t("students_section.cards.olympiads.title"),
      desc: t("students_section.cards.olympiads.desc"),
      image: Anime,
      size: "small",
      icon: <Award size={24} className="text-blue-400" />,
      staff: {
        name: t("students_section.cards.olympiads.staff_name"),
        role: t("students_section.cards.olympiads.staff_role"),
        avatar: "Е",
        color: "bg-blue-600",
        quote: t("students_section.cards.olympiads.staff_quote"),
      },
    },
    {
      id: 3,
      title: t("students_section.cards.sports.title"),
      desc: t("students_section.cards.sports.desc"),
      image: Cod,
      size: "small",
      icon: <Star size={24} className="text-purple-400" />,
      staff: {
        name: t("students_section.cards.sports.staff_name"),
        role: t("students_section.cards.sports.staff_role"),
        avatar: "И",
        color: "bg-orange-600",
        quote: t("students_section.cards.sports.staff_quote"),
      },
    },
    {
      id: 4,
      title: t("students_section.cards.military.title"),
      desc: t("students_section.cards.military.desc"),
      image: Advan,
      size: "large",
      icon: <ShieldCheck size={24} className="text-green-400" />,
      staff: {
        name: t("students_section.cards.military.staff_name"),
        role: t("students_section.cards.military.staff_role"),
        avatar: "В",
        color: "bg-green-700",
        quote: t("students_section.cards.military.staff_quote"),
      },
    },
  ];

  const selectedItem = studentsData.find((s) => s.id === selectedId);

  const faqData = [
    {
      id: 1,
      question: t("students_section.faq.q1"),
      answer: t("students_section.faq.a1"),
    },
    {
      id: 2,
      question: t("students_section.faq.q2"),
      answer: t("students_section.faq.a2"),
    },
    {
      id: 3,
      question: t("students_section.faq.q3"),
      answer: t("students_section.faq.a3"),
    },
  ];

  return (
    <main className="container mx-auto px-4 py-10">
      <h2 className="text-5xl font-bold text-white text-center mt-20 mb-20">
        {t("students_section.main_title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studentsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedId(item.id)}
            className={`relative cursor-pointer group rounded-3xl overflow-hidden border border-white/10 shadow-xl 
              ${
                item.size === "large"
                  ? "md:col-span-2 lg:col-span-2"
                  : "col-span-1"
              }`}
          >
            <div className="h-64 md:h-80 w-full relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a] border border-white/20 p-6 rounded-3xl max-w-2xl w-full text-white relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80"
              >
                <X size={20} />
              </button>

              <img
                src={selectedItem?.image}
                className="w-full h-48 object-cover rounded-2xl mb-6 border border-white/10"
                alt=""
              />
              <h2 className="text-3xl font-bold mb-4">{selectedItem?.title}</h2>

              <div className="space-y-4">
                {/* ДИНАМИЧЕСКИЙ БЛОК УЧИТЕЛЯ */}
                <div className="p-4 bg-white/5 rounded-xl flex items-center gap-4 border border-white/5">
                  <div
                    className={`w-12 h-12 ${selectedItem?.staff?.color} rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-lg`}
                  >
                    {selectedItem?.staff?.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {selectedItem?.staff?.name}
                    </h4>
                    <p className="text-xs text-purple-400 uppercase tracking-wider mb-1">
                      {selectedItem?.staff?.role}
                    </p>
                    <p className="text-sm text-gray-400 italic font-light">
                      {selectedItem?.staff?.quote}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* {Question} */}
      <section className="max-w-9xl mx-auto mt-50 mb-20">
        <h2 className="text-6xl font-bold text-white text-center mb-19 uppercase tracking-widest">
          {t("students_section.faq_title")}
        </h2>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveFaq(activeFaq === faq.id ? null : faq.id)
                }
                className="w-full p-8 flex items-center justify-between text-left text-white hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeFaq === faq.id ? 180 : 0 }}
                  className="text-purple-400"
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-2xl text-white border-t border-white/5 pt-4"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default StudentsSection;
