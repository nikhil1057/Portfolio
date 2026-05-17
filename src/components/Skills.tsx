"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "C#", primary: true },
      { name: "Python", primary: true },
      { name: "TypeScript", primary: true },
      { name: "JavaScript", primary: false },
      { name: "SQL", primary: false },
      { name: "HTML/CSS", primary: false },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: ".NET Core / .NET 8", primary: true },
      { name: "FastAPI", primary: false },
      { name: "Entity Framework", primary: false },
      { name: "LINQ", primary: false },
      { name: "ASP.NET Core Web API", primary: false },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Angular", primary: false },
      { name: "Vue 3", primary: false },
      { name: "Next.js", primary: false },
      { name: "React", primary: false },
      { name: "Tailwind CSS", primary: false },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "Azure", primary: true },
      { name: "App Service", primary: false },
      { name: "APIM", primary: false },
      { name: "Cosmos DB", primary: false },
      { name: "Key Vault", primary: false },
      { name: "Functions", primary: false },
      { name: "AWS (ECS/EKS)", primary: false },
      { name: "Docker", primary: false },
      { name: "Kubernetes", primary: false },
    ],
  },
  {
    label: "AI & Data",
    items: [
      { name: "ONNX Runtime", primary: false },
      { name: "tree-sitter", primary: false },
      { name: "NetworkX", primary: false },
      { name: "MCP Protocol", primary: false },
      { name: "Databricks/PySpark", primary: false },
    ],
  },
  {
    label: "Patterns",
    items: [
      { name: "Microservices", primary: false },
      { name: "Resilience (Polly)", primary: false },
      { name: "Cache-first with TTL", primary: false },
      { name: "Payer strategy pattern", primary: false },
      { name: "CI/CD Pipelines", primary: false },
    ],
  },
];

const groupVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0, 1], delay: i * 0.15 },
  }),
};

const tagVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.03 },
  }),
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            custom={gi}
            variants={groupVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent-warm font-display font-semibold">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, ti) => (
                <motion.span
                  key={item.name}
                  custom={ti + gi * 3}
                  variants={tagVariant}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className={`px-3 py-1.5 text-xs font-body border transition-colors ${
                    item.primary
                      ? "border-accent-cool/30 text-accent-cool bg-accent-cool/[0.05] scale-105"
                      : "border-white/[0.08] text-[var(--text-secondary)] hover:border-white/20"
                  }`}
                >
                  {item.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
