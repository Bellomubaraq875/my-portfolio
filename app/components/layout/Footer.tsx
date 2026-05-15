"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative px-6 pt-24 pb-10 bg-[#050505] flex flex-col items-center overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        <div className="absolute top-0 left-[20%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-[20%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-[90%] lg:w-[80%] max-w-[1200px] flex flex-col gap-16">

        {/* TOP CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Let’s build something great.
            </h3>
            <p className="text-white/40 text-sm max-w-md">
              Open to freelance work, collaborations, and impactful frontend engineering roles.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-port-sky hover:text-white transition-all duration-300"
          >
            Get in Touch <ArrowUpRight size={16} />
          </motion.a>

        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-[--font-orbitron]">
              Mubarak Bello
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Frontend Developer focused on building high-performance,
              visually refined, and user-centered digital experiences.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-4">
            <h4 className="text-white text-sm uppercase tracking-widest">
              Navigation
            </h4>

            <div className="flex flex-col gap-2 text-white/40 text-sm">

              <a href="#about" className="hover:text-port-sky transition">
                About
              </a>
              <a href="#projects" className="hover:text-port-sky transition">
                Projects
              </a>
              <a href="#experience" className="hover:text-port-sky transition">
                Experience
              </a>
              <a href="#contact" className="hover:text-port-sky transition">
                Contact
              </a>

            </div>
          </div>

          {/* SOCIALS */}
          <div className="space-y-4">
            <h4 className="text-white text-sm uppercase tracking-widest">
              Connect
            </h4>

            <div className="flex gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition cursor-pointer"
              >
                <Github size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition cursor-pointer"
              >
                <Linkedin size={16} />
              </a>

              {/* Email */}
              <a
                href="mailto:your@email.com"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition cursor-pointer"
              >
                <Mail size={16} />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-white/10 text-white/30 text-xs">

          <p>© {new Date().getFullYear()} Mubarak Bello. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Built with Next.js & Tailwind
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;