"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <div className="min-h-screen md:h-screen bg-white overflow-x-hidden flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-4 md:py-6">
        <span className="text-2xl font-display font-bold text-gray-900">NT</span>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/fullstack" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Full Stack</Link>
          <Link href="/ai-engineer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI Engineer</Link>
          <a href="https://github.com/nikhil1057" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/nikhiltiwari1057" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href="mailto:nikhiltiwari1057@gmail.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </nav>

      {/* === MOBILE LAYOUT === */}
      <div className="flex-1 flex flex-col md:hidden">
        {/* Portrait */}
        <div className="px-6 pt-2">
          <img src="/Portfolio/profile.png" alt="Nikhil Tiwari" className="w-[75%] mx-auto h-auto" />
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-2 gap-3 px-6 py-6 flex-1 items-start">
          <Link href="/ai-engineer" className="group border border-purple-100 rounded-xl p-4 text-center hover:bg-purple-50 transition-all active:scale-95">
            <p className="text-[9px] uppercase tracking-[0.2em] text-purple-400 font-body mb-1">I teach machines</p>
            <h2 className="text-xl font-display font-bold text-gray-900 leading-tight">ai<br/>engineer</h2>
            <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">Memory layer for AI agents</p>
            <span className="inline-block mt-3 text-[10px] text-purple-500 font-body">explore →</span>
          </Link>
          <Link href="/fullstack" className="group border border-teal-100 rounded-xl p-4 text-center hover:bg-teal-50 transition-all active:scale-95">
            <p className="text-[9px] uppercase tracking-[0.2em] text-teal-500 font-body mb-1">I build systems</p>
            <h2 className="text-xl font-display font-bold text-gray-900 leading-tight">full stack<br/>developer</h2>
            <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">Healthcare platforms at scale</p>
            <span className="inline-block mt-3 text-[10px] text-teal-500 font-body">explore →</span>
          </Link>
        </div>

        {/* Mobile social links */}
        <div className="flex justify-center gap-6 pb-4">
          <a href="https://github.com/nikhil1057" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/nikhiltiwari1057" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400">LinkedIn</a>
          <a href="mailto:nikhiltiwari1057@gmail.com" className="text-xs text-gray-400">Contact</a>
        </div>
      </div>

      {/* === DESKTOP LAYOUT === */}
      <section className="relative px-16 flex-1 items-center justify-center hidden md:flex">
        <div className="max-w-[1200px] w-full mx-auto relative">
          {/* Portrait */}
          <img
            src="/Portfolio/profile.png"
            alt="Nikhil Tiwari"
            className={`w-[65%] mx-auto h-auto transition-transform duration-700 ease-out ${hovered ? "scale-[1.02]" : "scale-100"}`}
          />

          {/* Left text */}
          <div className={`absolute top-[22%] left-[1%] z-10 transition-all duration-500 ${hovered === "right" ? "opacity-20" : "opacity-100"}`}>
            <p className="text-[10px] uppercase tracking-[0.3em] font-body text-purple-500 mb-2">I teach machines</p>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[0.9]">
              ai<br />engineer
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-[170px] leading-relaxed">
              Building the memory layer for AI agents.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[10px] font-body text-purple-400">LLM Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse [animation-delay:0.3s]" />
                <span className="text-[10px] font-body text-teal-400">RAG Pipelines</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse [animation-delay:0.6s]" />
                <span className="text-[10px] font-body text-purple-300">Vector Search</span>
              </div>
            </div>
          </div>

          {/* Left decorations */}
          <div className="absolute top-[60%] left-[3%] z-10 pointer-events-none">
            <div className="text-[11px] font-body text-purple-300/70 animate-[float_3s_ease-in-out_infinite]">y = σ(Wx + b)</div>
          </div>
          <div className="absolute bottom-[20%] left-[8%] z-10 pointer-events-none">
            <div className="w-12 h-12 border border-purple-200/40 rounded-full animate-[spin_8s_linear_infinite]" />
          </div>

          {/* Right text */}
          <div className={`absolute top-[22%] right-[1%] text-right z-10 transition-all duration-500 ${hovered === "left" ? "opacity-20" : "opacity-100"}`}>
            <p className="text-[10px] uppercase tracking-[0.3em] font-body text-teal-600 mb-2">I build systems</p>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[0.9]">
              {"<"}full stack<br />developer{"/>"}
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-[170px] ml-auto leading-relaxed">
              Shipping production systems at scale.
            </p>
            <div className="mt-6 text-left space-y-1.5">
              <div className="text-[10px] font-body text-gray-300 animate-[typing_2s_steps(20)_forwards] overflow-hidden whitespace-nowrap">{"public async Task<Result>"}</div>
              <div className="text-[10px] font-body text-teal-400/70 animate-[typing_2s_0.5s_steps(15)_forwards] overflow-hidden whitespace-nowrap">{"  await _service.Execute();"}</div>
              <div className="text-[10px] font-body text-gray-300 animate-[typing_2s_1s_steps(18)_forwards] overflow-hidden whitespace-nowrap">{"  return Result.Success;"}</div>
            </div>
          </div>

          {/* Right decorations */}
          <div className="absolute top-[55%] right-[3%] z-10 pointer-events-none">
            <div className="text-2xl font-body text-gray-200/60 animate-[float_4s_ease-in-out_infinite_0.5s]">{"</>"}</div>
          </div>
          <div className="absolute bottom-[22%] right-[6%] z-10 pointer-events-none">
            <div className="text-lg font-body text-teal-300/40 animate-[float_3s_ease-in-out_infinite_1s]">{"{ }"}</div>
          </div>

          {/* Hover zones */}
          <Link href="/ai-engineer" className="absolute top-0 left-0 w-1/2 h-full z-20" aria-label="Explore AI Engineer side" onMouseEnter={() => setHovered("left")} onMouseLeave={() => setHovered(null)}>
            <span className={`absolute bottom-8 left-8 text-sm font-display font-semibold text-purple-600 transition-all duration-500 ${hovered === "left" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>AI Engineer →</span>
          </Link>
          <Link href="/fullstack" className="absolute top-0 right-0 w-1/2 h-full z-20" aria-label="Explore Full Stack Developer side" onMouseEnter={() => setHovered("right")} onMouseLeave={() => setHovered(null)}>
            <span className={`absolute bottom-8 right-8 text-sm font-display font-semibold text-teal-600 transition-all duration-500 ${hovered === "right" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>Full Stack Developer →</span>
          </Link>

          {/* Dim overlays */}
          <div className={`absolute -top-4 left-0 w-[48.5%] h-[calc(100%+2rem)] bg-white/40 transition-opacity duration-500 pointer-events-none z-[15] ${hovered === "right" ? "opacity-100" : "opacity-0"}`} />
          <div className={`absolute -top-4 right-0 w-[51.5%] h-[calc(100%+2rem)] bg-white/40 transition-opacity duration-500 pointer-events-none z-[15] ${hovered === "left" ? "opacity-100" : "opacity-0"}`} />
        </div>
      </section>

      {/* Footer - desktop only */}
      <div className="hidden md:block py-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-body">© 2026 Nikhil Tiwari</p>
      </div>
    </div>
  );
}
