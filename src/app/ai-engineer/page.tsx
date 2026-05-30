"use client";

import Link from "next/link";

const metrics = [
  { value: "14K+", label: "Lines of Python" },
  { value: "2ms", label: "Search Latency" },
  { value: "100%", label: "Recall@5" },
  { value: "14", label: "Languages Parsed" },
];

const features = [
  { title: "Lifecycle Hooks", desc: "Automatic memory capture at session start/end without manual intervention." },
  { title: "Knowledge Graph", desc: "NetworkX-based graph connecting code, decisions, and context with Dijkstra traversal." },
  { title: "Triple-Stream Search", desc: "ONNX dense embeddings + BM25 keyword + graph traversal fused via Reciprocal Rank Fusion." },
  { title: "Skill Extraction", desc: "Automatically extracts reusable patterns from coding sessions into persistent skills." },
  { title: "MCP Server", desc: "Model Context Protocol integration for Claude, Kiro, Cursor, Copilot, and Amazon Q." },
  { title: "Zero Config", desc: "pip install mnemo-dev — works out of the box with any MCP-compatible AI agent." },
];

const skills = ["Python", "ONNX Runtime", "tree-sitter", "NetworkX", "LangChain", "OpenAI API", "Semantic Search", "BM25", "Knowledge Graphs", "MCP Protocol", "FastAPI", "PyPI Publishing"];

export default function AIEngineerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 md:px-16 py-4 flex justify-between items-center">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">← Back</Link>
        <span className="text-sm font-display font-semibold text-purple-600">AI Engineer</span>
      </nav>

      {/* Hero */}
      <section className="px-8 md:px-16 py-20 max-w-[1000px] mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-500 font-body mb-4">I teach machines</p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-[0.9]">
          ai engineer
        </h1>
        <p className="text-lg text-gray-500 mt-6 max-w-[600px] leading-relaxed">
          Building tools that give AI agents persistent memory. Eliminating the #1 frustration of AI-assisted development: context loss.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-purple-600">{m.value}</div>
              <div className="text-xs text-gray-400 font-body mt-1 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mnemo - Featured */}
      <section className="px-8 md:px-16 py-16 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Mnemo</h2>
            <span className="text-[10px] uppercase tracking-wider font-body bg-purple-100 text-purple-600 px-2.5 py-1 rounded-full">Open Source</span>
          </div>
          <p className="text-base text-gray-600 leading-relaxed max-w-[700px] mb-4">
            A persistent memory layer for AI coding agents. Published on PyPI, VS Code Marketplace, and Homebrew. Works with Claude, Kiro, Cursor, Copilot, and Amazon Q.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <code className="text-sm font-body bg-gray-900 text-teal-400 px-4 py-2 rounded-lg">pip install mnemo-dev</code>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {features.map((f) => (
              <div key={f.title} className="p-5 rounded-xl border border-purple-100 bg-white hover:border-purple-300 hover:shadow-sm transition-all">
                <h3 className="text-sm font-display font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <a href="https://github.com/Mnemo-mcp/Mnemo" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-display font-semibold text-purple-600 border border-purple-200 px-5 py-2.5 rounded-full hover:bg-purple-50 transition-colors">
              GitHub →
            </a>
            <a href="https://pypi.org/project/mnemo-dev/" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-display font-semibold text-gray-600 border border-gray-200 px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
              PyPI →
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-body mb-10">AI & ML Stack</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="text-sm font-body px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-16 bg-gray-900 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-3">Interested in AI tooling?</h2>
        <p className="text-sm text-gray-400 mb-6">Let&apos;s talk about agents, memory, and the future of dev tools</p>
        <a href="mailto:nikhiltiwari1057@gmail.com" className="inline-block text-sm font-display font-semibold text-white border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition-colors">
          Get in touch →
        </a>
      </section>

      <footer className="px-8 md:px-16 py-6 text-center">
        <p className="text-xs text-gray-300 font-body">© 2026 Nikhil Tiwari</p>
      </footer>
    </div>
  );
}
