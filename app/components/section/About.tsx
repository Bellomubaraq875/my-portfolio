"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Microscope, Layout, Cpu, Globe } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "4+", icon: <Code2 size={20} /> },
    { label: "Projects Completed", value: "15+", icon: <Layout size={20} /> },
    { label: "Core Frameworks", value: "5", icon: <Cpu size={20} /> },
];

const AboutSection = () => {
    return (
        <section id="about" className="relative py-32 px-6 bg-[#050505] overflow-hidden">
            {/* BACKGROUND DECORATION */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-port-sky/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] bg-purple-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT COLUMN: STORY */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-port-sky text-[10px] tracking-[0.5em] uppercase font-black">
                            Introduction /&gt;
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-8 tracking-tighter">
                            Engineering <span className="text-port-sky italic">Digital</span> Experiences.
                        </h2>

                        <div className="space-y-6 text-white/50 text-lg leading-relaxed font-light">
                            <p>
                                I am <span className="text-white font-medium">Bello Mubaraq Adeyemi</span>, a dedicated Frontend Engineer based in Ibadan, Nigeria.
                                With over four years of experience, I specialize in building high-performance web applications using
                                <span className="text-white"> React, Next.js, and TypeScript</span>.
                            </p>
                            <p>
                                My approach blends technical precision with a "luxury tech" aesthetic—prioritizing clean code,
                                fluid animations, and intuitive UI/UX. Beyond the screen, I am currently pursuing an
                                M.Sc. in Plant Breeding, allowing me to bridge the gap between complex data research and
                                functional digital tools.
                            </p>
                        </div>

                        {/* QUICK STATS */}
                        <div className="grid grid-cols-3 gap-4 mt-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
                                    <div className="text-port-sky mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-[9px] uppercase tracking-wider text-white/30">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: CARDS */}
                    <div className="space-y-6">
                        {/* EDUCATION CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:border-port-sky/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-port-sky/10 text-port-sky">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Academic Background</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex flex-col border-l-2 border-white/10 pl-4">
                                    <span className="text-white font-semibold">M.Sc. Plant Breeding</span>
                                    <span className="text-white/30 text-sm italic">University of Ibadan (In Progress)</span>
                                </li>
                                <li className="flex flex-col border-l-2 border-white/10 pl-4">
                                    <span className="text-white font-semibold">B.Tech Crop Production & Soil Science</span>
                                    <span className="text-white/30 text-sm italic">LAUTECH</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* RESEARCH & TECH INTERSECTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:border-purple-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                                    <Microscope size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Tech + Research</h3>
                            </div>
                            <p className="text-white/40 text-sm leading-relaxed">
                                I leverage my background in agricultural science to build specialized data visualization tools,
                                statistical analysis dashboards, and research-focused platforms like <span className="text-white">SproutNova</span>.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;