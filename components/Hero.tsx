"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeWriter from "./TypeWriter";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [typeComplete, setTypeComplete] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  const handleTypeComplete = useCallback(() => {
    setTypeComplete(true);
  }, []);

  useEffect(() => {
    if (!nameRef.current || !bioRef.current) return;

    // GSAP staggered reveal for name
    gsap.fromTo(
      nameRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0 }
    );

    // Bio with delay
    gsap.fromTo(
      bioRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4 }
    );
  }, []);

  // Terminal block appears 600ms after bio finishes (bio starts at 0.4s + 0.5s duration = 0.9s, so terminal at 1.5s)
  useEffect(() => {
    if (!terminalRef.current) return;
    gsap.fromTo(
      terminalRef.current,
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.5 }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Geometric background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/[0.02] blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-accent-purple/[0.03] blur-3xl" />
        {/* Diagonal lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="100%"
            x2="100%"
            y2="0"
            stroke="#64ffda"
            strokeWidth="1"
          />
          <line
            x1="20%"
            y1="100%"
            x2="100%"
            y2="20%"
            stroke="#64ffda"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 lg:pl-56 py-24 md:py-32">
        {/* Terminal prompt prefix */}
        <div className="mb-4 font-code text-accent text-sm opacity-70">
          ~/nikhil.tiwari $
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 opacity-0 glitch-text"
          data-text="Nikhil Tiwari"
        >
          Nikhil Tiwari
        </h1>

        {/* Title with typing effect */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-accent mb-6 min-h-[2em]">
          <TypeWriter
            text="Full Stack Developer & AI Engineer"
            delay={200}
            speed={42}
            onComplete={handleTypeComplete}
          />
        </h2>

        {/* Bio */}
        <p
          ref={bioRef}
          className="font-body text-text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-12 opacity-0"
        >
          Full Stack Developer who builds healthcare platforms by day and AI
          developer tools by night — shipping production systems on Azure/AWS
          while creating open-source tools that give AI agents persistent memory.
        </p>

        {/* Floating terminal block */}
        <div
          ref={terminalRef}
          className="opacity-0 max-w-md"
        >
          <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-2xl shadow-accent/5">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-bg border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-text-muted text-xs font-code">
                terminal
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-4 font-code text-sm">
              <div className="text-text-muted mb-1">
                <span className="text-accent">$</span> pip install mnemo-dev
              </div>
              <div className="text-text-muted/60 text-xs mt-2">
                <span className="text-green-400">✓</span> Successfully installed
                mnemo-dev
              </div>
              <div className="text-text-muted/60 text-xs">
                <span className="text-accent">→</span> Persistent memory for AI
                agents activated
              </div>
            </div>
          </div>
        </div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-8 inline-flex items-center gap-2 text-text-muted text-sm font-code"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Bangalore, India
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-border rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
}
