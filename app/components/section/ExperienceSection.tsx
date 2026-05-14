"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        company: "PYVOTALE",
        role: "Frontend Team Lead",
        period: "2025 — PRESENT",
        description:
            "Leading frontend development, architecting scalable UI systems, and coordinating engineering efforts to deliver high-quality product experiences.",
        align: "left",
    },
    {
        company: "XERV TECHNOLOGIES",
        role: "Frontend Developer (Volunteer)",
        period: "JUNE 2025 — OCTOBER 2025",
        description:
            "Developed scalable React + TypeScript applications using modular architecture. Integrated Redux Toolkit and REST APIs, improving state stability. Delivered pixel-perfect UI and received a formal recommendation for technical excellence.",
        align: "right",
    },
    {
        company: "FAYDOH APP",
        role: "Frontend Developer",
        period: "NOVEMBER 2024 — JUNE 2025",
        description:
            "Built high-performance interfaces using Next.js and React Query. Designed reusable component systems and optimized data fetching, significantly improving performance for data-heavy views.",
        align: "left",
    },
    {
        company: "MICHAEL TECHNOLOGICAL SERVICES",
        role: "Frontend Developer",
        period: "JULY 2024 — JUNE 2025",
        description:
            "Developed responsive React applications with Tailwind CSS. Improved mobile responsiveness across devices, reducing bounce rate and enhancing usability.",
        align: "right",
    },
];

const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className="relative py-32 px-6 bg-[#050505] overflow-hidden"
        >
            {/* Background Gradient matching image_8569b4.png */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#1a0b2e] via-[#050505] to-[#0a0a0a]" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="text-port-sky text-[10px] tracking-[0.6em] uppercase font-black opacity-80 flex items-center justify-center gap-2">
                        EXPERIENCE <span className="text-port-sky/50">/&gt;</span>
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 tracking-tighter">
                        Work Journey
                    </h2>
                </div>

                <div className="relative">
                    {/* Central Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

                    <div className="space-y-16">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${exp.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Glowing Timeline Dot */}
                                <div
                                    className={`absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 top-10 w-3 h-3 rounded-full bg-port-sky shadow-[0_0_15px_rgba(2,179,233,1)] z-10`}
                                />

                                {/* Content Card */}
                                <div
                                    className={`w-full md:w-[45%] ${exp.align === "left" ? "md:mr-auto" : "md:ml-auto"
                                        }`}
                                >
                                    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500">
                                        {/* Role */}
                                        <h3 className="text-xl font-bold text-white mb-4">
                                            {exp.role}
                                        </h3>

                                        {/* Company */}
                                        <div className="flex items-center gap-2 text-port-sky text-[11px] font-black uppercase tracking-widest mb-2">
                                            <Briefcase size={14} className="opacity-70" />
                                            {exp.company}
                                        </div>

                                        {/* Period */}
                                        <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest mb-6">
                                            <Calendar size={12} className="opacity-50" />
                                            {exp.period}
                                        </div>

                                        {/* Description */}
                                        <p className="text-white/50 text-sm leading-relaxed font-sans">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;