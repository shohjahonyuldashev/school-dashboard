import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Admission", to: "/admission" },
    { label: "Students", to: "/students" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/shohjahonyuldashev888/",
    },
  ];

  return (
    // Используем темный фон с размытием (Glassmorphism)
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-xl">
      {/* Верхняя светящаяся полоска */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00d2ff] to-transparent opacity-50" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Academy Info */}
          <div className="space-y-4">
            <h3
              className="text-3xl font-bold text-white"
              style={{ textShadow: "0 0 10px rgba(0, 210, 255, 0.5)" }}
            >
              Academy
            </h3>
            <p className="text-lg leading-relaxed text-gray-400">
              Excellence in education since 2000. Shaping the future with modern
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-[#00d2ff]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-[#9c27b0]">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="tel:+998912861478"
                  className="flex flex-col transition-colors hover:text-white"
                >
                  <span className="text-xs text-gray-500 uppercase">Phone</span>
                  <span className="font-semibold">(998) 91-286-14-78</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@academy.com"
                  className="flex flex-col transition-colors hover:text-white"
                >
                  <span className="text-xs text-gray-500 uppercase">Email</span>
                  <span className="font-semibold">shohjahon@academy.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-[#00d2ff]">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-fit rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition-all hover:border-[#00d2ff]/50 hover:bg-[#00d2ff]/10 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 <span className="text-white font-medium">Academy</span>.
            All rights reserved.
            <br />
            <span className="mt-2 inline-block rounded-full bg-white/5 px-3 py-1 text-[16px] uppercase tracking-widest text-[#00d2ff]">
              Developed by Shohjahon
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
