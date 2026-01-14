import { Link } from "react-router-dom";
import LogoLoop from "../components/Logoloop/LogoLoop";
import { Shield, UserCircle, GraduationCap, Users2 } from "lucide-react";
import ReactPlayer from "react-player";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import Footer from "../components/footer/Footer";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind",
    href: "https://tailwindcss.com",
  },
];

const Home = () => {
  return (
    <div className="font-sans ">
      {/* Header с PixelBlast */}

      {/* Hero Section */}
      <section className="text-center py-20 ">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">
          Welcome to School 1
        </h1>
        <p className="text-xl mb-6 max-w-xl mx-auto text-blue-600">
          Your journey to knowledge, growth, and success starts here.
        </p>
        <Link to="/about">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          About Our School
        </h2>
        <p className="text-center max-w-3xl mx-auto text-blue-800">
          School 1 provides high-quality education with a focus on personal
          growth, creativity, and excellence. Our dedicated teachers and staff
          work together to help every student succeed.
        </p>
      </section>
      {/* Board of Directors */}
      {/* Programs Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
              НАШИ <span className="text-blue-500 italic">ПРОГРАММЫ</span>
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Science",
                desc: "Hands-on experiments and research for curious minds.",
              },
              {
                title: "Arts",
                desc: "Foster creativity through music, drawing, and theater.",
              },
              {
                title: "Sports",
                desc: "Develop teamwork, discipline, and healthy competition.",
              },
              {
                title: "Technology / Coding",
                desc: "Robotics, basic programming, web development.",
              },
              {
                title: "Languages",
                desc: "English club, debate and international communication.",
              },
              {
                title: "Math Club",
                desc: "Logical thinking, complex puzzles and competitions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-[#0a0a0a]  border border-gray-900 cursor-pointer rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.05)] hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-mono text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-mono text-blue-900 uppercase tracking-[0.2em]">
                    [ selected ]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6  text-white font-sans">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              School <span className="text-blue-500 italic">Organization</span>
            </h2>
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
              [ Operational Hierarchy // Status: Active ]
            </p>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-[#0a0a0a] border border-gray-900 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl group">
              <div className="text-center bg-blue-600/5 p-6 border-b border-gray-900">
                <div className="flex items-center justify-center gap-3 text-xl font-bold uppercase tracking-widest text-blue-500">
                  <Shield className="h-6 w-6" />
                  Board of Directors
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  { name: "Dr. Sarah Johnson", role: "Board Chairperson" },
                  { name: "Michael Chen", role: "Vice Chairperson" },
                  { name: "Emily Rodriguez", role: "Secretary" },
                ].map((person, i) => (
                  <div key={i} className="space-y-3">
                    <UserCircle className="h-12 w-12 mx-auto text-gray-800 group-hover:text-blue-600 transition-colors duration-500" />
                    <div>
                      <p className="font-bold text-gray-200">{person.name}</p>
                      <p className="text-[10px] font-mono text-gray-600 uppercase tracking-tighter">
                        {person.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900 rounded-3xl max-w-md mx-auto overflow-hidden hover:border-blue-500 transition-all duration-500 shadow-2xl relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,1)]"></div>
              <div className="text-center p-6 border-b border-gray-900 bg-blue-600/5">
                <div className="flex items-center justify-center gap-3 text-lg font-bold uppercase tracking-widest">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                  Principal
                </div>
              </div>
              <div className="p-10 text-center">
                <div className="relative inline-block mb-6">
                  <UserCircle className="h-20 w-20 mx-auto text-blue-600 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-[8px] px-2 py-1 rounded font-black tracking-tighter">
                    LEADER
                  </div>
                </div>
                <p className="font-black text-2xl text-white uppercase tracking-tight">
                  Dr. Robert Williams
                </p>
                <p className="text-xs font-mono text-gray-500 mt-2 uppercase tracking-[0.2em]">
                  Principal & Academic Director
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="text-center p-6 border-b border-gray-900 bg-white/[0.02]">
                <div className="flex items-center justify-center gap-3 text-lg font-bold uppercase tracking-widest text-gray-400">
                  <Users2 className="h-6 w-6 text-blue-600" />
                  Department Heads
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { title: "Mathematics", name: "Prof. James Lee" },
                  { title: "Sciences", name: "Dr. Lisa Anderson" },
                  { title: "Languages", name: "Ms. Maria Garcia" },
                  { title: "Arts & Sports", name: "Mr. David Brown" },
                ].map((dept, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-2xl hover:bg-blue-600/5 transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-full border border-gray-800 flex items-center justify-center mx-auto mb-4 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all">
                      <GraduationCap className="h-5 w-5 text-gray-600 group-hover:text-blue-500" />
                    </div>
                    <p className="font-bold text-gray-300 text-xs uppercase tracking-wider">
                      {dept.title}
                    </p>
                    <p className="text-[10px] font-mono text-gray-600 mt-2 italic">
                      {dept.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { role: "Counseling", count: "3 Counselors" },
                { role: "Library", count: "2 Librarians" },
                { role: "Administration", count: "5 Staff Members" },
                { role: "Facilities", count: "4 Staff Members" },
              ].map((staff, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#050505] border border-gray-900 rounded-xl text-center hover:border-gray-700 transition-colors"
                >
                  <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em] mb-1">
                    {staff.role}
                  </p>
                  <p className="text-xs font-bold text-gray-400">
                    {staff.count}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* {Our technology} */}
      <section className="py-24  border-t border-gray-900">
        <div className="max-w-9xl mx-auto ">
          <h2 className="text-2xl font-mono font-bold text-white text-center mb-12 tracking-widest uppercase">
            [ <span className="text-blue-500">TECH_STACK</span> // SYSTEM_CORES
            ]
          </h2>

          <div className="relative h-[120px] overflow-hidden border-y border-gray-900 bg-[#050505] flex items-center">
            <div className="w-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-700">
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={40}
                gap={80}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#000000" 
                ariaLabel="Technology partners"
              />
            </div>
          </div>

          <p className="text-center text-[10px] font-mono text-gray-700 mt-6 tracking-[0.4em] uppercase">
            Running on high-performance infrastructure
          </p>
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">TEST VIDEO</h2>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jfKfPfyJRdk"
              title="YouTube video test"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#0c45f0]">
          News & Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-[#0c45f0]">
              Science Fair 2025
            </h3>
            <p className="text-[#0c45f0]">
              Our students showcase amazing projects in physics, chemistry, and
              biology.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-[#0c45f0]">
              Art Exhibition
            </h3>
            <p className="text-[#0c45f0]">
              Explore the creativity of our students in visual arts and design.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-[#0c45f0]">Sports Day</h3>
            <p className="text-[#0c45f0]">
              Fun competitions and activities for students of all ages.
            </p>
          </div>
        </div>
      </section>

      {"Google map"}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Информационный блок */}
          <div className="bg-zinc-900/50 border border-white/5 p-10 rounded-[40px] flex flex-col justify-between shadow-2xl">
            <div>
              <h2 className="text-3xl font-bold text-white uppercase mb-6 border-l-4 border-blue-600 pl-4 tracking-tighter">
                Где мы{" "}
                <span className="text-blue-600 text-xl block">Находимся</span>
              </h2>

              <div className="space-y-8 mt-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 text-xl border border-blue-600/20">
                    📍
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">Адрес штаба</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      г. Коканд, Ферганская область,
                      <br />
                      ул. Турон, дом 1
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 text-xl border border-blue-600/20">
                    📞
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">Контакты</p>
                    <p className="text-zinc-500 text-sm">+998 (95) 120-44-00</p>
                    <p className="text-zinc-600 text-xs mt-1 italic">
                      Приемная работает с 08:00 до 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Institute+school+Kokand"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20 uppercase tracking-widest text-sm text-center block"
            >
              Построить маршрут
            </a>
          </div>

          {/* Живая Google Map */}
          <div className="lg:col-span-2 relative h-[450px] lg:h-auto rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.2574044195195!2d70.9256613892461!3d40.53594008709141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baeebe0b6dab6f%3A0x283674ab0a08e69b!2sSrednyaya%20Shkola%201!5e0!3m2!1sru!2suz!4v1703500000000!5m2!1sru!2suz&style=feature:all|element:all|invert_lightness:true|hue:0x000000|saturation:-100"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) contrast(1.2)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>

            {/* Стеклянная накладка для стиля, когда мышь не на карте */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl sm:rounded-3xl md:rounded-[40px]"></div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
