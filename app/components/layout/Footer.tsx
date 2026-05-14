"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Heart } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const Footer = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    return (
        <footer
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative px-6 pt-32 pb-12 bg-[#050505] flex flex-col items-center overflow-hidden"
        >
            {/* 1. DYNAMIC BACKGROUND SYSTEM */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Interactive Torch Light */}
                <div
                    className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(56, 189, 248, 0.05), transparent 45%)`
                    }}
                />

                {/* Nebula Glows */}
                <div className="absolute top-0 left-[10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 right-[10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[140px]" />

                {/* Wavy lines texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-white text-white/10">
                    <svg width="100%" height="100%">
                        <pattern id="footer-wavy" patternUnits="userSpaceOnUse" width="100" height="100" viewBox="0 0 100 100">
                            <path d="M0 50 Q 25 40 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#footer-wavy)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] flex flex-col">

                {/* --- TOP SECTION: THE BIG CALL TO ACTION --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-32">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8"
                        >
                            Let’s build the <br /> <span className="text-port-sky italic">next</span> big thing.
                        </motion.h2>
                        <div className="flex flex-wrap gap-6 text-white/30 text-[10px] uppercase font-black tracking-[0.4em]">
                            <span className="flex items-center gap-2">
                                <MapPin size={12} className="text-port-sky" /> Ibadan, Nigeria
                            </span>
                            <span className="hidden sm:block opacity-20">|</span>
                            <span>Available for Senior Roles</span>
                        </div>
                    </div>

                    <MagneticButton>
                        <a
                            href="#contact"
                            className="group flex items-center gap-4 px-10 py-6 bg-white text-black font-black rounded-2xl hover:bg-port-sky hover:text-white transition-all duration-500 text-xs uppercase tracking-widest shadow-2xl shadow-white/5"
                        >
                            Start Project
                            <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-500" />
                        </a>
                    </MagneticButton>
                </div>

                {/* --- MIDDLE SECTION: NAVIGATION & BRAND --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-24 border-t border-white/5 pt-20">

                    {/* Brand & Mission */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-white tracking-tighter">Mubarack Adeyemi.</h3>
                            <span className="text-[10px] text-port-sky font-black uppercase tracking-[0.4em] mt-1">Frontend Engineer</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-sm font-sans font-light italic">
                            "Dedicated to architecting scalable frontend systems that blend technical excellence with high-fidelity visual design."
                        </p>
                    </div>

                    {/* Symmetrical Navigation */}
                    <div className="space-y-8">
                        <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-black opacity-20">Navigation</h4>
                        <div className="flex flex-col gap-4 text-sm font-medium">
                            {["About", "Projects", "Experience", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white/40 hover:text-port-sky transition-colors w-fit tracking-wide"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Presence */}
                    <div className="space-y-8">
                        <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-black opacity-20">Social Presence</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/Bellomubaraq875" },
                                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/mubarak-bello-213b8110b" },
                                { icon: <Mail size={20} />, href: "mailto:bellomubaraq875@gmail.com" }
                            ].map((social, i) => (
                                <MagneticButton key={i}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:bg-port-sky hover:border-port-sky/50 hover:shadow-[0_0_20px_rgba(2,179,233,0.3)] transition-all duration-300"
                                    >
                                        {social.icon}
                                    </a>
                                </MagneticButton>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM SECTION: COPYRIGHT --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© {new Date().getFullYear()} MUBARACK ADEYEMI</p>
                        <span className="hidden md:block opacity-10">|</span>
                        <p className="flex items-center gap-2">
                            Made with <Heart size={10} className="text-red-500/50 fill-red-500/20" /> in Nigeria
                        </p>
                    </div>

                    <div className="flex items-center gap-8 opacity-60">
                        <span className="hover:text-port-sky transition-colors cursor-default">Next.js 14</span>
                        <span className="hover:text-port-sky transition-colors cursor-default">Tailwind v4</span>
                        <span className="hover:text-port-sky transition-colors cursor-default">Framer Motion</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;