import Studentep from "../components/studentscard/StarStudentCard.jsx";
import Cyber from "../image/cyber.avif";
import Sky from "../image/sky.avif";
import CEO from "../image/director.avif";
import Helper from "../image/helper.jpg";
import Footer from "../components/footer/Footer.jsx";
import { motion } from "framer-motion";

const Students = () => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.2 },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, x: -20 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  // };

  // const rules = {
  //   restricted: [
  //     {
  //       id: 1,
  //       icon: "🏃‍♂️",
  //       text: "Не бегать в коридорах",
  //       detail: "Соблюдайте тишину и порядок",
  //     },
  //     {
  //       id: 2,
  //       icon: "📵",
  //       text: "Без гаджетов на уроках",
  //       detail: "Фокус на обучении",
  //     },
  //     {
  //       id: 3,
  //       icon: "🍔",
  //       text: "Еда вне аудиторий",
  //       detail: "Для этого есть зона отдыха",
  //     },
  //   ],
  //   recommended: [
  //     {
  //       id: 4,
  //       icon: "🎖️",
  //       text: "Соблюдение формы",
  //       detail: "Гордость и дисциплина",
  //     },
  //     { id: 5, icon: "🤝", text: "Взаимовыручка", detail: "Мы — одна команда" },
  //     {
  //       id: 6,
  //       icon: "⚡",
  //       text: "Пунктуальность",
  //       detail: "Уважение к чужому времени",
  //     },
  //   ],
  // };

  const schedule = [
    {
      time: "08:30",
      task: "Сбор и регистрация",
      desc: "Проверка присутствия и подготовка рабочих мест.",
    },
    {
      time: "09:00",
      task: "Теоретический блок",
      desc: "Разбор стратегий и анализ прошлых игр.",
    },
    {
      time: "11:30",
      task: "Ланч / Перерыв",
      desc: "Время для отдыха в специальной зоне питания.",
    },
    {
      time: "12:30",
      task: "Практические занятия",
      desc: "Тренировки в Blue Zone под руководством менторов.",
    },
    {
      time: "16:00",
      task: "Итоги дня",
      desc: "Обсуждение результатов и фидбек.",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Night Owl",
      desc: "Доступ к Blue Zone в вечернее время",
      icon: "🦉",
      status: "locked",
    },
    {
      id: 2,
      title: "Code Master",
      desc: "0 нарушений Red Zone за месяц",
      icon: "🛡️",
      status: "unlocked",
    },
    {
      id: 3,
      title: "Team Lead",
      desc: "Помощь 5 новичкам в адаптации",
      icon: "👑",
      status: "in-progress",
    },
  ];

  return (
    <div>
      <main>
        <Studentep />
        <section className="min-h-screen py-24 px-6 bg-black flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full mb-16 relative">
            {" "}
            {/* Добавил relative для заголовка */}
            <h2 className="text-6xl md:text-8xl font-black text-white/10 uppercase absolute left-0 select-none">
              Events
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white relative pt-8 pl-4 border-l-4 border-blue-600">
              Ближайшие события
            </h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            {/* Карточка 1 */}
            <div className="relative group h-[500px] overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img
                src={Cyber}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                alt="Cyber"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">
                  Cyber Arena
                </span>
                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                  Турнир «School Masters» <br /> по CS2 и Dota 2
                </h3>
                <p className="text-gray-300 text-lg max-w-md mb-6">
                  Призовой фонд, профессиональные комментаторы и прямая
                  трансляция в холле.
                </p>
                <div className="flex items-center gap-4 text-white font-mono">
                  <span className="text-2xl">15.01</span>
                  <span className="w-12 h-[1px] bg-white/30"></span>
                  <span className="text-gray-400 uppercase">
                    Начало в 18:00
                  </span>
                </div>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="relative group h-[500px] overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img
                src={Sky}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                alt="Military"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">
                  Military Day
                </span>
                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                  День тактической <br /> подготовки
                </h3>
                <p className="text-gray-300 text-lg max-w-md mb-6">
                  Полевой выезд, отработка навыков ориентирования и командная
                  работа.
                </p>
                <div className="flex items-center gap-4 text-white font-mono">
                  <span className="text-2xl">22.01</span>
                  <span className="w-12 h-[1px] bg-white/30"></span>
                  <span className="text-gray-400 uppercase">Сбор у штаба</span>
                </div>
              </div>
            </div>
          </div>{" "}
        </section>{" "}
        <section className="max-w-7xl mx-auto py-24 px-6">
          {/* Заголовок с акцентом */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-500 font-mono text-sm uppercase tracking-[0.3em] mb-2">
                Student Hub
              </p>
              <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
                Ресурсы и материалы
              </h2>
            </div>
            <div className="hidden md:block h-[1px] flex-grow mx-10 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
          </div>

          {/* Сетка ресурсов */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Электронный журнал",
                desc: "Оценки и домашние задания",
                icon: "📝",
                color: "group-hover:shadow-blue-500/20",
              },
              {
                title: "Библиотека гайдов",
                desc: "Учебные пособия и статьи",
                icon: "📚",
                color: "group-hover:shadow-purple-500/20",
              },
              {
                title: "Правила школы",
                desc: "Устав и внутренний распорядок",
                icon: "⚖️",
                color: "group-hover:shadow-red-500/20",
              },
              {
                title: "Расписание звонков",
                desc: "Время уроков и перемен",
                icon: "🔔",
                color: "group-hover:shadow-green-500/20",
              },
            ].map((item, index) => (
              <a
                href="#"
                key={index}
                className={`group relative bg-zinc-900/30 border border-white/5 p-8 rounded-3xl transition-all duration-300 hover:bg-zinc-800/50 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${item.color} hover:shadow-2xl hover:-translate-y-1`}
              >
                <div className="text-4xl mb-6 inline-block p-4 rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Стрелочка в углу */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>
        {"Rules"}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            {/* Заголовок */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white uppercase tracking-widest">
                Внутренний <span className="text-blue-600">Кодекс</span>
              </h2>
              <p className="text-zinc-500 mt-4 font-mono tracking-widest">
                School 1 Rules & Regulations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Красная зона - Ограничения */}
              <div className="bg-zinc-900/40 border-l-4 border-red-600 rounded-r-3xl p-10 shadow-xl">
                <h3 className="text-red-500 font-bold text-2xl mb-8 flex items-center gap-4">
                  <span className="bg-red-600/20 p-2 rounded-lg">🚫</span>
                  RED ZONE
                </h3>

                <div className="space-y-10">
                  <div className="group">
                    <h4 className="text-white text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      Бег в коридорах
                    </h4>
                    <p className="text-zinc-400">
                      Соблюдайте спокойный темп передвижения для общей
                      безопасности.
                    </p>
                  </div>

                  <div className="group">
                    <h4 className="text-white text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      Использование гаджетов
                    </h4>
                    <p className="text-zinc-400">
                      Смартфоны должны быть убраны во время академических
                      занятий.
                    </p>
                  </div>

                  <div className="group">
                    <h4 className="text-white text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      Питание в классах
                    </h4>
                    <p className="text-zinc-400">
                      Для перекусов используйте только специально отведенные
                      зоны отдыха.
                    </p>
                  </div>
                </div>
              </div>

              {/* Синяя зона - Рекомендации */}
              <div className="bg-zinc-900/40 border-l-4 border-blue-600 rounded-r-3xl p-10 shadow-xl">
                <h3 className="text-blue-500 font-bold text-2xl mb-8 flex items-center gap-4">
                  <span className="bg-blue-600/20 p-2 rounded-lg">🛡️</span>
                  BLUE ZONE
                </h3>

                <div className="space-y-10">
                  <div className="group">
                    <h4 className="text-white text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      Дресс-код
                    </h4>
                    <p className="text-zinc-400">
                      Наличие формы подчеркивает вашу принадлежность к элите
                      школы.
                    </p>
                  </div>

                  <div className="group">
                    <h4 className="text-white text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      Командная работа
                    </h4>
                    <p className="text-zinc-400">
                      Помогайте товарищам в учебе и на киберспортивных
                      тренировках.
                    </p>
                  </div>

                  <div className="group">
                    <h4 className="text-white text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      Пунктуальность
                    </h4>
                    <p className="text-zinc-400">
                      Приходите за 5 минут до начала — уважайте время
                      преподавателей.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Data */}
        <section className="py-12 px-4 bg-black text-white">
          <h2 className="text-3xl font-bold text-center mb-10 uppercase tracking-widest">
            Распорядок <span className="text-blue-500">дня</span>
          </h2>

          <div className="max-w-4xl mx-auto relative border-l-2 border-blue-600/50 ml-4 md:ml-auto">
            {schedule.map((item, index) => (
              <div key={index} className="mb-10 ml-6 relative">
                {/* Точка на линии */}
                <div className="absolute -left-[35px] mt-1.5 w-6 h-6 rounded-full bg-black border-4 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                {/* Контент */}
                <div className="bg-[#111] p-5 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors duration-300 shadow-lg">
                  <span className="text-blue-400 font-mono text-lg font-bold">
                    {item.time}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 uppercase italic">
                    {item.task}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* system */}
        <section className="py-16 px-6 bg-black">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            СИСТЕМА ДОСТИЖЕНИЙ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                  item.status === "unlocked"
                    ? "bg-blue-900/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                    : "bg-zinc-900/50 border-zinc-800 opacity-60"
                }`}
              >
                {/* Иконка замка для заблокированных */}
                {item.status === "locked" && (
                  <div className="absolute top-4 right-4 text-zinc-600 text-xl">
                    🔒
                  </div>
                )}

                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    item.status === "unlocked"
                      ? "text-blue-400"
                      : "text-zinc-400"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Прогресс-бар для тех, что в процессе */}
                {item.status === "in-progress" && (
                  <div className="mt-4 w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[60%] shadow-[0_0_10px_#2563eb]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* motivate */}
        <section className="py-16 px-6 bg-black">
          <h2 className="text-2xl font-bold text-white mb-12 text-center uppercase tracking-wider">
            НАСТАВНИКИ <span className="text-blue-500">// SCHOOL 1</span>
          </h2>

          {/* Карточка 1: Директор (Red Zone) */}
          <div className="relative max-w-6xl mx-auto mb-16 group">
            <div className="flex flex-col md:flex-row bg-[#0a0a0a] rounded-3xl overflow-hidden border-2 border-red-700/30 shadow-[0_0_30px_rgba(185,28,28,0.1)]">
              {/* Секция с фото */}
              <div className="md:w-1/2 h-[400px] relative">
                <img
                  src={Helper}
                  alt="Директор"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]"></div>
              </div>

              {/* Секция с текстом */}
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <span className="text-red-500 font-mono text-sm mb-2 tracking-[0.3em]">
                  #DIRECTOR
                </span>
                <h3 className="text-4xl font-black text-white mb-4 uppercase leading-none">
                  ДИСЦИПЛИНА — <br />{" "}
                  <span className="text-red-600">ЭТО ПОБЕДА</span>
                </h3>
                <p className="text-gray-400 italic text-lg mb-6 border-l-2 border-red-600 pl-4">
                  "Порядок в залах — это порядок в мыслях. Мы строим не просто
                  школу, а сообщество лидеров."
                </p>
                <div className="text-white font-bold uppercase tracking-widest text-sm">
                  Иван Иванов <span className="text-gray-600 mx-2">|</span>{" "}
                  Chief Executive
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 2: Завуч (Blue Zone) */}
          <div className="relative max-w-6xl mx-auto group">
            <div className="flex flex-col md:flex-row-reverse bg-[#0a0a0a] rounded-3xl overflow-hidden border-2 border-blue-700/30 shadow-[0_0_30px_rgba(29,78,216,0.1)]">
              {/* Секция с фото */}
              <div className="md:w-1/2 h-[400px] relative">
                <img
                  src={CEO}
                  alt="Завуч"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]"></div>
              </div>

              {/* Секция с текстом */}
              <div className="md:w-1/2 p-10 flex flex-col justify-center text-right md:text-left">
                <span className="text-blue-500 font-mono text-sm mb-2 tracking-[0.3em]">
                  #ACADEMIC_DEAN
                </span>
                <h3 className="text-4xl font-black text-white mb-4 uppercase leading-none">
                  ИНТЕЛЛЕКТ — <br />{" "}
                  <span className="text-blue-600">ТВОЕ ОРУЖИЕ</span>
                </h3>
                <p className="text-gray-400 italic text-lg mb-6 border-r-2 md:border-r-0 md:border-l-2 border-blue-600 pr-4 md:pr-0 md:pl-4">
                  "В Blue Zone каждый байт информации приближает вас к
                  доминированию в цифровом мире."
                </p>
                <div className="text-white font-bold uppercase tracking-widest text-sm">
                  Анна Петрова <span className="text-gray-600 mx-2">|</span>{" "}
                  Head of Education
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Students;
