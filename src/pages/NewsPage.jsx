import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNews(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white py-32 px-6 overflow-hidden selection:bg-[#00f2ff] selection:text-black">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00f2ff]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7000ff]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Modern Brutalist Header */}
        <header className="mb-32 relative">
          <div className="absolute -left-6 top-0 w-1 h-full bg-[#00f2ff] shadow-[0_0_15px_#00f2ff]"></div>
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] italic tracking-tighter">
            System <br />{" "}
            <span className="text-[#00f2ff] drop-shadow-[0_0_25px_rgba(0,242,255,0.5)]">
              Feed
            </span>
          </h1>
          <div className="mt-6 flex items-center gap-4 font-mono text-[10px] tracking-[0.4em] text-gray-500 uppercase">
            <span>Live Database Connection</span>
            <div className="w-1 h-1 rounded-full bg-red-500 animate-ping"></div>
            <span>v. 1.0.6</span>
          </div>
        </header>

        {/* Loading State */}
        {loading ? (
          <div className="h-40 flex items-center font-mono text-[#00f2ff] animate-pulse tracking-widest">
            FETCHING_DATA...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {news.map((item, index) => (
              <article
                key={item.id}
                className={`group relative flex flex-col ${index % 2 !== 0 ? "md:pt-32" : ""}`}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-[#111] border border-white/10 group-hover:border-[#00f2ff]/40 transition-all duration-700">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Digital Index */}
                  <span className="absolute top-4 right-4 font-mono text-[10px] text-white/30 group-hover:text-[#00f2ff] transition-colors">
                    ID: {item.id.slice(0, 6)}
                  </span>
                </div>

                {/* Info Section */}
                <div className="mt-8 relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#00f2ff] font-mono text-[10px] tracking-[0.3em] uppercase">
                      {item.date}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-[#00f2ff]/30 transition-all"></div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 font-light leading-relaxed text-lg max-w-md border-l border-white/10 pl-6 group-hover:border-[#00f2ff] transition-all">
                    {item.desc}
                  </p>

                  {/* Aesthetic Numbering */}
                  <span className="absolute -bottom-10 -right-4 text-8xl font-black text-white/[0.02] pointer-events-none group-hover:text-[#00f2ff]/5 transition-all uppercase italic">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Industrial Footer */}
      <footer className="mt-64 text-center">
        <div className="inline-block px-8 py-4 border border-white/5 bg-white/[0.02] backdrop-blur-md">
          <p className="font-mono text-[19px] text-white uppercase tracking-[0.8em]">
            End of News Stream // Shohjahon Dev
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;
