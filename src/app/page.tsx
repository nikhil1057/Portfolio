"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [smoothX, setSmoothX] = useState(0.5);
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const [entered, setEntered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement>(null);
  const targetX = useRef(0.5);
  const currentX = useRef(0.5);
  const rafId = useRef<number>(0);
  const basePath = "/Portfolio";

  // Damped animation loop (Zeno's paradox like Adham's)
  useEffect(() => {
    setEntered(true);
    const animate = () => {
      currentX.current += (targetX.current - currentX.current) / 10;
      setSmoothX(currentX.current);
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    targetX.current = (e.clientX - rect.left) / rect.width;
    setCursorPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    targetX.current = 0.5; // smooth return to center
    setHovered(null);
  };

  // Parallax values from damped position
  const leftTextX = (0.5 - smoothX) * 25;
  const rightTextX = (smoothX - 0.5) * 25;
  const imgShiftX = (smoothX - 0.5) * 20;
  const tiltY = (smoothX - 0.5) * 8; // rotateY based on X
  const tiltX = -(cursorPos.y / 100 - 0.5) * 5; // rotateX based on Y
  const splitOffset = Math.abs(smoothX - 0.5) * 6; // halves separate when off-center

  return (
    <div className="min-h-screen md:h-screen bg-white overflow-hidden flex flex-col">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={entered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-between px-6 md:px-16 py-4 md:py-5 relative z-30"
      >
        <span className="text-2xl font-display font-bold text-gray-900">NT</span>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/fullstack" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Full Stack</Link>
          <Link href="/ai-engineer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI Engineer</Link>
          <a href="https://github.com/nikhil1057" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/nikhiltiwari1057" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href="mailto:nikhiltiwari1057@gmail.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </motion.nav>

      {/* === MOBILE LAYOUT === */}
      <div className="flex-1 flex flex-col md:hidden">
        <div className="px-6 pt-2">
          <img src={`${basePath}/profile.png`} alt="Nikhil Tiwari" className="w-[75%] mx-auto h-auto" />
        </div>
        <div className="grid grid-cols-2 gap-3 px-6 py-6 flex-1 items-start">
          <Link href="/ai-engineer" className="group border border-purple-100 rounded-xl p-4 text-center hover:bg-purple-50 transition-all active:scale-95">
            <p className="text-[9px] uppercase tracking-[0.2em] text-purple-400 font-body mb-1">Building intelligent systems</p>
            <h2 className="text-xl font-display font-bold text-gray-900 leading-tight">ai<br/>engineer</h2>
            <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">LLMs · Agents · RAG · MCP</p>
            <span className="inline-block mt-3 text-[10px] text-purple-500 font-body">explore →</span>
          </Link>
          <Link href="/fullstack" className="group border border-teal-100 rounded-xl p-4 text-center hover:bg-teal-50 transition-all active:scale-95">
            <p className="text-[9px] uppercase tracking-[0.2em] text-teal-500 font-body mb-1">Building reliable software</p>
            <h2 className="text-xl font-display font-bold text-gray-900 leading-tight">full stack<br/>engineer</h2>
            <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">.NET · Angular · Azure · K8s</p>
            <span className="inline-block mt-3 text-[10px] text-teal-500 font-body">explore →</span>
          </Link>
        </div>
        <div className="flex justify-center gap-6 pb-4">
          <a href="https://github.com/nikhil1057" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/nikhiltiwari1057" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400">LinkedIn</a>
          <a href="mailto:nikhiltiwari1057@gmail.com" className="text-xs text-gray-400">Contact</a>
        </div>
      </div>

      {/* === DESKTOP LAYOUT === */}
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex-1 hidden md:flex items-stretch overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30 animate-[gradientShift_8s_ease_infinite] bg-[length:200%_200%]" style={{ backgroundImage: "linear-gradient(135deg, #f5f3ff 0%, #ffffff 25%, #f0fdfa 50%, #ffffff 75%, #faf5ff 100%)" }} />

        {/* Cursor spotlight */}
        <div
          className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-300"
          style={{ background: `radial-gradient(600px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(139,92,246,0.04), rgba(20,184,166,0.02), transparent 70%)` }}
        />
        {/* Split backgrounds — subtle, hover-based */}
        <div className={`absolute inset-y-0 left-0 w-1/2 transition-all duration-700 ${
          hovered === "left" ? "bg-gradient-to-br from-purple-950/[0.07] via-purple-900/[0.03] to-transparent" : "bg-transparent"
        }`} />
        <div className={`absolute inset-y-0 right-0 w-1/2 transition-all duration-700 ${
          hovered === "right" ? "bg-gradient-to-bl from-slate-900/[0.07] via-slate-800/[0.03] to-transparent" : "bg-transparent"
        }`} />

        {/* Clickable halves */}
        <Link
          href="/ai-engineer"
          className="absolute inset-y-0 left-0 w-1/2 z-20"
          aria-label="Explore AI Engineer side"
          onMouseEnter={() => setHovered("left")}
        />
        <Link
          href="/fullstack"
          className="absolute inset-y-0 right-0 w-1/2 z-20"
          aria-label="Explore Full Stack Developer side"
          onMouseEnter={() => setHovered("right")}
        />

        {/* Content layer */}
        <div className="w-full flex items-center justify-center relative">
          {/* Portrait — 3D parallax depth layers */}
          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0.85 }}
            animate={entered ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="w-[70%] max-w-[750px] relative z-10"
            style={{ perspective: "1200px" }}
          >
            <div
              className="relative"
              style={{
                transform: `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Layer 1 (back) — moves less, creates depth */}
              <img
                src={`${basePath}/profile.png`}
                alt=""
                className="w-full h-auto opacity-60 blur-[1px] scale-[0.98]"
                style={{
                  transform: `translateX(${imgShiftX * -0.3}px) translateY(${(cursorPos.y / 100 - 0.5) * -8}px) translateZ(-30px)`,
                }}
              />
              {/* Layer 2 (front) — the main portrait, moves more */}
              <img
                src={`${basePath}/profile.png`}
                alt="Nikhil Tiwari"
                className="w-full h-auto absolute inset-0"
                style={{
                  transform: `translateX(${imgShiftX * 0.5}px) translateY(${(cursorPos.y / 100 - 0.5) * 5}px) translateZ(30px)`,
                  clipPath: `inset(0 ${(1 - smoothX) * 100 + 2}% 0 0)`,
                }}
              />
              {/* Layer 2b — right half with different treatment */}
              <img
                src={`${basePath}/profile.png`}
                alt=""
                className="w-full h-auto absolute inset-0 grayscale-[0.5] contrast-110"
                style={{
                  transform: `translateX(${imgShiftX * 0.5}px) translateY(${(cursorPos.y / 100 - 0.5) * 5}px) translateZ(30px)`,
                  clipPath: `inset(0 0 0 ${smoothX * 100 - 2}%)`,
                }}
              />
              {/* Grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                  transform: "translateZ(60px)",
                }}
              />
            </div>
          </motion.div>

          {/* Left text — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={entered ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute top-[38%] -translate-y-1/2 left-[7%] z-10"
            style={{
              transform: `translate(${leftTextX}px, -50%)`,
              opacity: Math.min(1, (1 - smoothX) * 1.8),
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-body text-purple-500 mb-2">Building intelligent systems</p>
            <h2 className={`text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[0.9] transition-all duration-500 ${hovered === "left" ? "[text-shadow:0_0_30px_rgba(168,85,247,0.3)]" : ""}`}>
              ai<br />engineer
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-[170px] leading-relaxed">
              LLMs, Agents, RAG &amp; Multi-Agent Systems.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[10px] font-body text-purple-400">LLMs · Agents · MCP</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse [animation-delay:0.3s]" />
                <span className="text-[10px] font-body text-teal-400">RAG · Vector DB · LangGraph</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse [animation-delay:0.6s]" />
                <span className="text-[10px] font-body text-purple-300">Vision Models · Multi-Agent</span>
              </div>
            </div>
            <span className={`block mt-6 text-sm font-display font-semibold text-purple-600 transition-all duration-300 ${hovered === "left" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              Explore AI Engineer →
            </span>
          </motion.div>

          {/* Right text — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={entered ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute top-[38%] -translate-y-1/2 right-[7%] text-right z-10"
            style={{
              transform: `translate(${rightTextX}px, -50%)`,
              opacity: Math.min(1, smoothX * 1.8),
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-body text-teal-600 mb-2">Building reliable software</p>
            <h2 className={`text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[0.9] transition-all duration-500 ${hovered === "right" ? "[text-shadow:0_0_30px_rgba(20,184,166,0.3)]" : ""}`}>
              {"<"}full stack<br />engineer{"/>"}
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-[170px] ml-auto leading-relaxed">
              .NET, Angular, Azure &amp; Microservices.
            </p>
            <div className="mt-6 text-left space-y-1.5">
              <div className="text-[10px] font-body text-gray-300 animate-[typing_2s_steps(20)_forwards] overflow-hidden whitespace-nowrap">{".NET · Angular · Azure"}</div>
              <div className="text-[10px] font-body text-teal-400/70 animate-[typing_2s_0.5s_steps(15)_forwards] overflow-hidden whitespace-nowrap">{"Kubernetes · Redis · SQL"}</div>
              <div className="text-[10px] font-body text-gray-300 animate-[typing_2s_1s_steps(18)_forwards] overflow-hidden whitespace-nowrap">{"RabbitMQ · Microservices"}</div>
            </div>
            <span className={`block mt-6 text-sm font-display font-semibold text-teal-600 transition-all duration-300 ${hovered === "right" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              ← Explore Full Stack
            </span>
          </motion.div>

          {/* Ambient decorations — left */}
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 1.8 }} className="absolute top-[12%] left-[4%] pointer-events-none z-[5]">
            <div className="w-20 h-20 border border-purple-100 rounded-full animate-[spin_12s_linear_infinite]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.0 }} className="absolute top-[8%] left-[12%] pointer-events-none z-[5]">
            <div className="text-[10px] font-body text-purple-200/60 animate-[float_4s_ease-in-out_infinite]">agent.run()</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 1.9 }} className="absolute bottom-[12%] left-[5%] pointer-events-none z-[5]">
            <div className="text-[11px] font-body text-purple-300/50 animate-[float_3s_ease-in-out_infinite]">embedding = model(query)</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.1 }} className="absolute bottom-[25%] left-[2%] pointer-events-none z-[5]">
            <div className="w-8 h-8 border border-purple-200/30 rotate-45 animate-[float_5s_ease-in-out_infinite_0.5s]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.3 }} className="absolute bottom-[6%] left-[15%] pointer-events-none z-[5]">
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-purple-200/30 rounded-full" />
              <div className="w-1 h-10 bg-purple-300/30 rounded-full" />
              <div className="w-1 h-4 bg-purple-200/30 rounded-full" />
              <div className="w-1 h-8 bg-purple-100/40 rounded-full" />
              <div className="w-1 h-5 bg-purple-200/30 rounded-full" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.2 }} className="absolute top-[75%] left-[10%] pointer-events-none z-[5]">
            <div className="w-16 h-16 border border-dashed border-purple-100/40 rounded-lg animate-[spin_20s_linear_infinite_reverse]" />
          </motion.div>

          {/* Ambient decorations — right */}
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 1.8 }} className="absolute top-[10%] right-[5%] pointer-events-none z-[5]">
            <div className="w-16 h-16 border border-teal-100 rounded-md rotate-12 animate-[float_6s_ease-in-out_infinite]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.0 }} className="absolute top-[6%] right-[15%] pointer-events-none z-[5]">
            <div className="text-xs font-body text-gray-200/70 animate-[float_4s_ease-in-out_infinite_1s]">{"<api/>"}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 1.9 }} className="absolute bottom-[10%] right-[4%] pointer-events-none z-[5]">
            <div className="text-2xl font-body text-gray-200/50 animate-[float_4s_ease-in-out_infinite_0.5s]">{"</>"}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.1 }} className="absolute bottom-[22%] right-[8%] pointer-events-none z-[5]">
            <div className="text-lg font-body text-teal-200/40 animate-[float_3s_ease-in-out_infinite_1s]">{"{ }"}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.3 }} className="absolute bottom-[5%] right-[18%] pointer-events-none z-[5]">
            <div className="flex gap-[3px] items-end">
              <div className="w-2 h-2 rounded-sm bg-teal-200/30" />
              <div className="w-2 h-4 rounded-sm bg-teal-300/30" />
              <div className="w-2 h-3 rounded-sm bg-teal-200/30" />
              <div className="w-2 h-5 rounded-sm bg-teal-100/40" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.2 }} className="absolute top-[72%] right-[12%] pointer-events-none z-[5]">
            <div className="w-14 h-14 border border-dashed border-teal-100/30 rounded-full animate-[spin_15s_linear_infinite]" />
          </motion.div>

          {/* Extra ambient — top area */}
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.4 }} className="absolute top-[4%] left-[30%] pointer-events-none z-[5]">
            <div className="w-2 h-2 rounded-full bg-purple-200/40 animate-[float_3s_ease-in-out_infinite]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.5 }} className="absolute top-[7%] right-[30%] pointer-events-none z-[5]">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-200/40 animate-[float_4s_ease-in-out_infinite_0.5s]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.6 }} className="absolute top-[15%] left-[22%] pointer-events-none z-[5]">
            <div className="w-24 h-[1px] bg-gradient-to-r from-purple-200/30 to-transparent rotate-[20deg]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.7 }} className="absolute top-[18%] right-[22%] pointer-events-none z-[5]">
            <div className="w-20 h-[1px] bg-gradient-to-l from-teal-200/30 to-transparent -rotate-[15deg]" />
          </motion.div>

          {/* Extra ambient — middle sides */}
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.0 }} className="absolute top-[50%] left-[1%] pointer-events-none z-[5]">
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[1px] h-8 bg-gradient-to-b from-purple-200/40 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-300/30 animate-pulse" />
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-purple-100/30" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.0 }} className="absolute top-[45%] right-[1%] pointer-events-none z-[5]">
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[1px] h-10 bg-gradient-to-b from-teal-200/40 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-teal-300/30 animate-pulse [animation-delay:0.5s]" />
              <div className="w-[1px] h-6 bg-gradient-to-b from-transparent to-teal-100/30" />
            </div>
          </motion.div>

          {/* Extra ambient — bottom area */}
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.3 }} className="absolute bottom-[15%] left-[25%] pointer-events-none z-[5]">
            <div className="w-3 h-3 border border-purple-100/40 rounded-full animate-[float_5s_ease-in-out_infinite_1s]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.4 }} className="absolute bottom-[18%] right-[25%] pointer-events-none z-[5]">
            <div className="w-2.5 h-2.5 border border-teal-100/40 rounded-sm rotate-45 animate-[float_4s_ease-in-out_infinite_0.7s]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.5 }} className="absolute bottom-[8%] left-[35%] pointer-events-none z-[5]">
            <div className="text-[9px] font-body text-purple-200/40 animate-[float_6s_ease-in-out_infinite]">vector_db.search()</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.6 }} className="absolute bottom-[10%] right-[32%] pointer-events-none z-[5]">
            <div className="text-[9px] font-body text-teal-200/40 animate-[float_5s_ease-in-out_infinite_1.5s]">dotnet run</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.8 }} className="absolute bottom-[3%] left-[8%] pointer-events-none z-[5]">
            <div className="w-1 h-1 rounded-full bg-purple-300/30 animate-pulse [animation-delay:1s]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.9 }} className="absolute bottom-[4%] right-[8%] pointer-events-none z-[5]">
            <div className="w-1 h-1 rounded-full bg-teal-300/30 animate-pulse [animation-delay:1.5s]" />
          </motion.div>

          {/* Floating dots scattered */}
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.1 }} className="absolute top-[30%] left-[18%] pointer-events-none z-[5]">
            <div className="w-1 h-1 rounded-full bg-purple-200/50 animate-[float_3.5s_ease-in-out_infinite_0.2s]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.2 }} className="absolute top-[25%] right-[20%] pointer-events-none z-[5]">
            <div className="w-1 h-1 rounded-full bg-teal-200/50 animate-[float_4.5s_ease-in-out_infinite_0.8s]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.3 }} className="absolute top-[60%] left-[20%] pointer-events-none z-[5]">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-100/40 animate-[float_5s_ease-in-out_infinite_1.2s]" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={entered ? { opacity: 1 } : {}} transition={{ delay: 2.4 }} className="absolute top-[65%] right-[18%] pointer-events-none z-[5]">
            <div className="w-1 h-1 rounded-full bg-teal-100/50 animate-[float_3.8s_ease-in-out_infinite_0.4s]" />
          </motion.div>

          {/* Bottom hint */}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={entered ? { opacity: 1, y: 0 } : {}} transition={{ delay: 2.5 }} className="absolute bottom-[3%] left-0 right-0 flex justify-center pointer-events-none z-[5]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-purple-200/50" />
            <div className="text-[9px] font-body text-gray-300 uppercase tracking-[0.3em]">move cursor to explore</div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-teal-200/50" />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={entered ? { opacity: 1 } : {}}
        transition={{ delay: 2.0 }}
        className="hidden md:block py-3 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-body">© 2026 Nikhil Tiwari</p>
      </motion.div>
    </div>
  );
}
