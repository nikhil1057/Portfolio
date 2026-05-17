"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionShellProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export default function SectionShell({ id, title, children }: SectionShellProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current || !sectionRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    const content = sectionRef.current.querySelectorAll(".scroll-reveal");
    if (content.length) {
      gsap.fromTo(
        content,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="py-24 md:py-32 max-w-5xl mx-auto px-6 lg:pl-56"
    >
      <h2
        ref={headingRef}
        className="font-heading text-2xl md:text-3xl text-text-primary mb-12 opacity-0"
      >
        <span className="text-accent mr-3 text-lg">
          {"//"}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}
