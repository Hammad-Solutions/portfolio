"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Layers, 
  Award,
  Sparkles,
  Mail,
  MapPin,
  Globe,
  Link2
} from "lucide-react";
import { portfolioData, Project } from "../../data/portfolio";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChatWithPrompt?: (prompt: string) => void;
}

export default function ResumeModal({ isOpen, onClose, onOpenChatWithPrompt }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "skills" | "education">("all");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `MUHAMMAD HAMMAD
Full-Stack Software Engineer — Web & Systems
Islamabad, Pakistan | hammadsolutions.support@gmail.com | https://hammadsolutions.vercel.app

SUMMARY:
${portfolioData.about}

TECHNICAL COMPETENCIES:
• Languages & Frameworks: Next.js, React.js, TypeScript, JavaScript, Node.js, C++ (STL, OOP), Java, HTML5, CSS3, Tailwind CSS
• Databases & Cloud: PostgreSQL, Supabase, Prisma ORM, Firebase, Vercel, RESTful APIs, Webhooks
• Systems & Performance: 3D WebGL (Three.js/R3F), GSAP Animations, File I/O Streams, Memory Lifecycle, SOLID Design

EDUCATION:
BS in Software Engineering — Air University Islamabad (2022 - 2026 Expected)

KEY PROJECTS:
1. Interactive AI-Powered Portfolio (Next.js, TypeScript, Three.js, RAG AI Engine)
2. SaaS DevBoard (Next.js 16, Prisma, NextAuth.js, PostgreSQL, GitHub Webhook Sync)
3. StyleWay Studio (Next.js 16, Supabase SSR, SWR, Framer Motion, 3D Lookbook)
4. Bank & Student Management Systems (C++17, Binary I/O, ACID-style Transaction Logic)
5. Weather App with API Integration (React, OpenWeather REST API)
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAskAI = (topic: string) => {
    onClose();
    if (onOpenChatWithPrompt) {
      onOpenChatWithPrompt(`Can you analyze Muhammad Hammad's qualifications regarding ${topic}?`);
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0e] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto"
        >
          {/* Top Bar / Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#111114]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] font-bold font-mono">
                MH
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  Muhammad Hammad
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] font-semibold uppercase">
                    Verified CV
                  </span>
                </h2>
                <p className="text-xs text-[#94A3B8] font-mono">Full-Stack Software Engineer — Web &amp; Systems</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition-colors"
                title="Copy plaintext CV to clipboard"
              >
                {copied ? <Check size={14} className="text-[#10B981]" /> : <Copy size={14} />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy Text"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer size={14} />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <a
                href="/Muhammad_Hammad_Resume.docx"
                download="Muhammad_Hammad_Resume.docx"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#10B981] hover:bg-[#059669] text-black font-mono font-bold text-xs transition-colors shadow-lg shadow-[#10B981]/20"
              >
                <Download size={14} />
                <span>DOCX</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Navigation Filter Pills */}
          <div className="px-6 py-2.5 bg-[#09090b] border-b border-white/5 flex items-center gap-2 overflow-x-auto">
            {(["all", "experience", "skills", "education"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? "bg-[#10B981] text-black font-bold shadow-md shadow-[#10B981]/20"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab === "all" ? "Full Resume" : tab}
              </button>
            ))}

            <button
              onClick={() => handleAskAI("technical background and project experience")}
              className="ml-auto flex items-center gap-1.5 text-[11px] font-mono text-[#3B82F6] hover:text-[#60A5FA] transition-colors py-1 px-2.5 rounded-md hover:bg-[#3B82F6]/10"
            >
              <Sparkles size={13} />
              <span>Ask AI About Resume</span>
            </button>
          </div>

          {/* Scrollable Document Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-zinc-300">
            {/* Contact Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-zinc-400 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#10B981]" />
                <span className="truncate">hammadsolutions.support@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#10B981]" />
                <span>Islamabad, PK</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#10B981]"><GithubIcon /></span>
                <a href="https://github.com/Hammad-Solutions" target="_blank" rel="noreferrer" className="hover:text-white underline">
                  Hammad-Solutions
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#10B981]"><LinkedinIcon /></span>
                <a href="https://linkedin.com/in/hammad-solutions" target="_blank" rel="noreferrer" className="hover:text-white underline">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Summary */}
            {(activeTab === "all" || activeTab === "experience") && (
              <section className="space-y-2">
                <h3 className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  Executive Summary
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-3.5 border-l border-white/10">
                  {portfolioData.about}
                </p>
              </section>
            )}

            {/* Technical Capabilities & Core Skills */}
            {(activeTab === "all" || activeTab === "skills") && (
              <section className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-widest flex items-center gap-2">
                  <Code size={14} />
                  Technical Competencies &amp; Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <p className="text-[11px] font-mono text-[#14B8A6] font-bold uppercase">Frontend &amp; UI</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Three.js / R3F", "HTML5 / CSS3"].map((s) => (
                        <span key={s} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-zinc-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <p className="text-[11px] font-mono text-[#10B981] font-bold uppercase">Backend &amp; Database</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Node.js", "PostgreSQL", "Prisma ORM", "Supabase SSR", "NextAuth.js v5", "REST APIs", "Webhooks", "Firebase"].map((s) => (
                        <span key={s} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-zinc-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <p className="text-[11px] font-mono text-[#A855F7] font-bold uppercase">Systems &amp; Engineering</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["C++ (STL/OOP)", "Memory Management", "Binary File I/O", "SOLID Principles", "Git / GitHub Actions", "Vercel"].map((s) => (
                        <span key={s} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-zinc-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Featured Projects */}
            {(activeTab === "all" || activeTab === "experience") && (
              <section className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-widest flex items-center gap-2">
                  <Briefcase size={14} />
                  Featured Project Deliverables
                </h3>

                <div className="space-y-3">
                  {(portfolioData.projects as unknown as Project[]).map((proj) => (
                    <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/15 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] font-mono text-[#10B981] hover:underline flex items-center gap-0.5"
                            >
                              Live App <ExternalLink size={10} />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {proj.tags.slice(0, 3).map((t) => (
                            <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">{proj.description}</p>
                      {proj.impact && (
                        <div className="flex flex-wrap gap-3 pt-1">
                          {proj.impact.map((m, idx) => (
                            <span key={idx} className="text-[10px] font-mono text-zinc-500">
                              <strong className="text-zinc-300">{m.label}:</strong> {m.value} {m.unit}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education & Academic Credentials */}
            {(activeTab === "all" || activeTab === "education") && (
              <section className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-[#EAB308] uppercase tracking-widest flex items-center gap-2">
                  <GraduationCap size={14} />
                  Education &amp; Core Coursework
                </h3>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">Bachelor of Science in Software Engineering</h4>
                      <p className="text-xs text-zinc-400">Air University Islamabad</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">2022 — Present (3rd Year)</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Key Coursework: Object-Oriented Programming (C++), Data Structures &amp; Algorithms, Database Management Systems, Software Design &amp; Architecture, Web Engineering, Operating Systems, Computer Networks.
                  </p>
                </div>
              </section>
            )}

            {/* Architectural & Engineering Pillars */}
            {activeTab === "all" && (
              <section className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-[#EC4899] uppercase tracking-widest flex items-center gap-2">
                  <Award size={14} />
                  Engineering Principles &amp; Soft Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {portfolioData.softSkills.map((s, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <p className="text-xs font-bold text-white mb-1">{s.title}</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-[#111114] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="text-zinc-500 font-mono text-[11px]">
              Interested in collaborating or hiring?
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleAskAI("hireability and full-time role availability")}
                className="px-3 py-1.5 rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 text-[#60A5FA] font-mono transition-colors flex items-center gap-1.5"
              >
                <Sparkles size={13} />
                Ask AI: Why hire Hammad?
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold font-mono transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
