import React, { useState } from "react";
import { Trophy, X, Star, Award, ShieldCheck, ChevronDown } from "lucide-react";
import Anime from "../../img/anime.avif";
import Cod from "../../image/cod.jpeg";
import Killer from "../../image/killer.jpg";
import Advan from "../../image/advanced.jpg";
import { motion, AnimatePresence } from "framer-motion";

const studentsData = [
  {
    id: 1,
    title: "Гордость Школы",
    desc: "Наши лучшие ученики и их достижения за этот год.",
    image: Killer,
    size: "large",
    icon: <Trophy size={24} className="text-yellow-400" />,
    staff: {
      name: "Александр Сергеевич",
      role: "Директор школы",
      avatar: "Д",
      color: "bg-purple-600",
      quote: "«Эти ребята — наше будущее и главная ценность!»",
    },
  },
  {
    id: 2,
    title: "Олимпиады",
    desc: "Победители городских и международных этапов.",
    image: Anime,
    size: "small",
    icon: <Award size={24} className="text-blue-400" />,
    staff: {
      name: "Елена Викторовна",
      role: "Завуч по учебной работе",
      avatar: "Е",
      color: "bg-blue-600",
      quote: "«Интеллект и труд — ключ к мировым победам.»",
    },
  },
  {
    id: 3,
    title: "Спортсмены",
    desc: "Команда, которая приносит кубки каждый месяц.",
    image: Cod,
    size: "small",
    icon: <Star size={24} className="text-purple-400" />,
    staff: {
      name: "Игорь Петрович",
      role: "Завуч по спорт-работе",
      avatar: "И",
      color: "bg-orange-600",
      quote: "«В здоровом теле — здоровый дух!»",
    },
  },
  {
    id: 4,
    title: "Военные",
    desc: "Подготовка будущих защитников и дисциплина.",
    image: Advan,
    size: "large",
    icon: <ShieldCheck size={24} className="text-green-400" />, // Заменили иконку на щит
    staff: {
      name: "Виктор Николаевич",
      role: "Военный руководитель",
      avatar: "В",
      color: "bg-green-700",
      quote: "«Дисциплина — это мать любой победы.»",
    },
  },
];

const faqData = [
  {
    id: 1,
    question: "Как попасть в список 'Гордость Школы'?",
    answer:
      "Нужно иметь отличные оценки по всем предметам и активно участвовать в жизни школы в течение года.",
  },
  {
    id: 2,
    question: "Какие киберспортивные дисциплины доступны?",
    answer:
      "На данный момент у нас есть секции по Call of Duty, CS2 и аналитике стратегий.",
  },
  {
    id: 3,
    question: "Нужна ли специальная форма для военных занятий?",
    answer:
      "Да, для занятий с Виктором Николаевичем требуется камуфляжная форма, которую выдает школа.",
  },
];



const StudentsSection = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = studentsData.find((s) => s.id === selectedId);
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <main className="container mx-auto px-4 py-10">
      <h2 className="text-5xl font-bold text-white text-center mt-20 mb-20">
        Наши Студенты
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
          Частые вопросы
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
