"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <div className="h-screen bg-white overflow-hidden relative flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6">
        <span className="text-2xl font-display font-bold text-gray-900">NT</span>
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/fullstack" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Full Stack</Link>
          <Link href="/ai-engineer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI Engineer</Link>
          <a href="https://github.com/nikhil1057" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/nikhiltiwari1057" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href="mailto:nikhiltiwari1057@gmail.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-8 md:px-16 flex-1 flex items-center justify-center">
        <div className="max-w-[1200px] w-full mx-auto relative">
          {/* Portrait - full width */}
          <img
            src="/profile.png"
            alt="Nikhil Tiwari"
            className={`w-[65%] mx-auto h-auto transition-transform duration-700 ease-out ${hovered ? "scale-[1.02]" : "scale-100"}`}
          />

          {/* Left text - positioned over the white/transparent area */}
          <div className={`absolute top-[22%] left-0 md:left-[1%] z-10 transition-all duration-500 ${hovered === "right" ? "opacity-20" : "opacity-100"}`}>
            <p className="text-[10px] uppercase tracking-[0.3em] font-body text-purple-500 mb-2">I teach machines</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[0.9]">
              ai<br />engineer
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-3 max-w-[170px] leading-relaxed">
              Building the memory layer for AI agents.
            </p>
            {/* Animated floating elements */}
            <div className="mt-6 space-y-2 hidden md:block">
              <div className="flex items-center gap-2 animate-[fadeSlideIn_2s_ease-out_forwards]">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[10px] font-body text-purple-400">LLM Agents</span>
              </div>
              <div className="flex items-center gap-2 animate-[fadeSlideIn_2s_0.2s_ease-out_forwards]">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse [animation-delay:0.3s]" />
                <span className="text-[10px] font-body text-teal-400">RAG Pipelines</span>
              </div>
              <div className="flex items-center gap-2 animate-[fadeSlideIn_2s_0.4s_ease-out_forwards]">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse [animation-delay:0.6s]" />
                <span className="text-[10px] font-body text-purple-300">Vector Search</span>
              </div>
            </div>
          </div>

          {/* Left floating decorations */}
          <div className="absolute top-[60%] left-[3%] z-10 hidden md:block pointer-events-none">
            <div className="text-[11px] font-body text-purple-300/70 animate-[float_3s_ease-in-out_infinite]">y = σ(Wx + b)</div>
          </div>
          <div className="absolute bottom-[20%] left-[8%] z-10 hidden md:block pointer-events-none">
            <div className="w-12 h-12 border border-purple-200/40 rounded-full animate-[spin_8s_linear_infinite]" />
          </div>
          <div className="absolute top-[45%] left-[1%] z-10 hidden md:block pointer-events-none">
            <div className="w-2 h-2 bg-teal-400/40 rounded-full animate-[bounce_2s_ease-in-out_infinite]" />
          </div>

          {/* Right text - positioned over the white/transparent area */}
          <div className={`absolute top-[22%] right-0 md:right-[1%] text-right z-10 transition-all duration-500 ${hovered === "left" ? "opacity-20" : "opacity-100"}`}>
            <p className="text-[10px] uppercase tracking-[0.3em] font-body text-teal-600 mb-2">I build systems</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[0.9]">
              {"<"}full stack<br />developer{"/>"}
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-3 max-w-[170px] ml-auto leading-relaxed">
              Shipping production systems at scale.
            </p>
            {/* Animated code lines */}
            <div className="mt-6 text-left space-y-1.5 hidden md:block">
              <div className="text-[10px] font-body text-gray-300 animate-[typing_2s_steps(20)_forwards] overflow-hidden whitespace-nowrap">{"public async Task<Result>"}</div>
              <div className="text-[10px] font-body text-teal-400/70 animate-[typing_2s_0.5s_steps(15)_forwards] overflow-hidden whitespace-nowrap">{"  await _service.Execute();"}</div>
              <div className="text-[10px] font-body text-gray-300 animate-[typing_2s_1s_steps(18)_forwards] overflow-hidden whitespace-nowrap">{"  return Result.Success;"}</div>
            </div>
          </div>

          {/* Right floating decorations */}
          <div className="absolute top-[55%] right-[3%] z-10 hidden md:block pointer-events-none">
            <div className="text-2xl font-body text-gray-200/60 animate-[float_4s_ease-in-out_infinite_0.5s]">{"</>"}</div>
          </div>
          <div className="absolute bottom-[22%] right-[6%] z-10 hidden md:block pointer-events-none">
            <div className="text-lg font-body text-teal-300/40 animate-[float_3s_ease-in-out_infinite_1s]">{"{ }"}</div>
          </div>
          <div className="absolute top-[48%] right-[1%] z-10 hidden md:block pointer-events-none">
            <div className="w-2 h-2 bg-teal-500/30 rounded-sm animate-[bounce_2.5s_ease-in-out_infinite_0.3s]" />
          </div>

          {/* Hover zones - clipped to image area */}
          <Link
            href="/ai-engineer"
            className="absolute top-0 left-0 w-1/2 h-full z-20"
            aria-label="Explore AI Engineer side"
            onMouseEnter={() => setHovered("left")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className={`absolute bottom-8 left-4 md:left-8 text-sm font-display font-semibold text-purple-600 transition-all duration-500 ${hovered === "left" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              AI Engineer →
            </span>
          </Link>
          <Link
            href="/fullstack"
            className="absolute top-0 right-0 w-1/2 h-full z-20"
            aria-label="Explore Full Stack Developer side"
            onMouseEnter={() => setHovered("right")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className={`absolute bottom-8 right-4 md:right-8 text-sm font-display font-semibold text-teal-600 transition-all duration-500 ${hovered === "right" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              Full Stack Developer →
            </span>
          </Link>

          {/* Dim overlays - aligned to photo's center split line */}
          <div className={`absolute -top-4 left-0 w-[48.5%] h-[calc(100%+2rem)] bg-white/40 transition-opacity duration-500 pointer-events-none z-[15] ${hovered === "right" ? "opacity-100" : "opacity-0"}`} />
          <div className={`absolute -top-4 right-0 w-[51.5%] h-[calc(100%+2rem)] bg-white/40 transition-opacity duration-500 pointer-events-none z-[15] ${hovered === "left" ? "opacity-100" : "opacity-0"}`} />
        </div>
      </section>

      {/* Footer */}
      <div className="py-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-body">© 2026 Nikhil Tiwari</p>
      </div>
    </div>
  );
}
