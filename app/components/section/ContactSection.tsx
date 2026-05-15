"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, Loader2, ArrowUpRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { MagneticButton } from "../ui/MagneticButton";

const ContactSection = () => {
    // Replace "xrbgbjlq" with your actual Formspree ID if different
    const [state, handleSubmit] = useForm("xrbgbjlq");
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    return (
        <section id="contact"
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative py-32 px-6 bg-[#050505] flex flex-col items-center overflow-hidden"
        >
            {/* 1. DYNAMIC BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div
                    className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(56, 189, 248, 0.08), transparent 45%)` }}
                />
                <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-purple-900/15 rounded-full blur-[140px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[140px]" />
            </div>

            {/* 2. CONTENT CONTAINER */}
            <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px]">

                {/* Header Block */}
                <div className="flex flex-col mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-sky-400 text-[10px] tracking-[0.5em] uppercase mb-4 font-bold"
                    >
                        Connect /&gt;
                    </motion.span>
                    <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
                        Let’s build <br /> something great.
                    </h2>
                    <div className="mt-8 w-24 h-[1.5px] bg-gradient-to-r from-sky-500 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT SIDE: CONTACT INFO */}
                    <div className="space-y-12">
                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed font-sans max-w-sm">
                            Whether you have a specific project in mind or just want to say hi, I'll get back to you shortly.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:bellomubarak875@gmail.com" className="group flex items-center gap-5 text-white/50 hover:text-sky-500 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-500/10 group-hover:border-sky-500/50 transition-all">
                                    <Mail size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email Me</span>
                                    <span className="text-sm font-medium text-white/80">bellomubaraq875@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+2348166440208" className="group flex items-center gap-5 text-white/50 hover:text-sky-500 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-500/10 group-hover:border-sky-500/50 transition-all">
                                    <Phone size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Call Me</span>
                                    <span className="text-sm font-medium text-white/80">+234 816 644 0208</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE: FORM / SUCCESS STATE */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {state.succeeded ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center text-center gap-4 bg-white/[0.02] border border-white/5 rounded-3xl p-12 h-full"
                                >
                                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-2">
                                        <CheckCircle className="text-green-400" size={32} />
                                    </div>
                                    <h3 className="text-white text-2xl font-bold tracking-tight">Message Received!</h3>
                                    <p className="text-white/40 text-sm font-sans max-w-[250px]">
                                        Thanks for reaching out, Mubarak. I’ll review your message and reply as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="mt-4 text-[10px] uppercase tracking-widest text-sky-500 font-black hover:text-white transition-colors"
                                    >
                                        Send another?
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1">
                                            <input
                                                type="text" name="name" id="full-name" placeholder="Full Name" required
                                                className="input-field"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <input
                                                type="email" name="email" id="email" placeholder="Email Address" required
                                                className="input-field"
                                            />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[10px] text-red-400 mt-1 ml-2" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <textarea
                                            name="message" id="message" rows={5} placeholder="Tell me about your vision..." required
                                            className="input-field resize-none"
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[10px] text-red-400 mt-1 ml-2" />
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <MagneticButton>
                                            <button
                                                type="submit"
                                                disabled={state.submitting}
                                                className={`group relative flex items-center gap-4 px-10 py-4 font-black rounded-2xl transition-all duration-500 text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-white/5 cursor-pointer
                                                    ${state.submitting
                                                        ? "bg-white/20 text-white/50 cursor-not-allowed"
                                                        : "bg-white text-black hover:bg-sky-500 hover:text-white"
                                                    }`}
                                            >
                                                {state.submitting ? (
                                                    <>
                                                        <Loader2 className="animate-spin" size={18} />
                                                        Processing
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
                                                    </>
                                                )}
                                            </button>
                                        </MagneticButton>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .input-field {
                    width: 100%;
                    padding: 1rem 1.5rem;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    color: white;
                    font-size: 0.875rem;
                    transition: all 0.3s ease;
                }
                .input-field::placeholder {
                    color: rgba(255, 255, 255, 0.2);
                }
                .input-field:focus {
                    outline: none;
                    border-color: rgba(2, 179, 233, 0.4);
                    background: rgba(255, 255, 255, 0.04);
                }
            `}</style>
        </section>
    );
};

export default ContactSection;