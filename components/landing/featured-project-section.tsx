"use client";

import { useEffect, useRef, useState } from "react";

export function FeaturedProjectSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const technologies = [
    "AI Agents",
    "Orchestration",
    "Visual Workflows",
    "Semantic Memory",
    "Document RAG",
    "Agent Teams",
    "MCP",
    "Workflow APIs",
    "Observability",
    "Docker",
    "Self-hosted",
  ];

  const stats = [
    { label: "Execution model", value: "Inspectable" },
    { label: "Deployment", value: "Self-hosted" },
    { label: "Project status", value: "Active" },
  ];

  const flagshipProjects = [
    {
      name: "Arcon",
      positioning: "A local-first cognitive architecture for a persistent digital companion.",
      summary: "Long-term memory, personality, emotional state, experience tracking, reflection, and structured cognition across a TypeScript/Node.js runtime and Python inference service.",
      technologies: ["TypeScript", "Node.js", "Python", "SQLite", "Qwen/Qwen3-4B", "LoRA"],
      status: "Experimental / Active Development",
      github: "https://github.com/vmDeshpande/Arcon",
      docs: "https://github.com/vmDeshpande/Arcon/tree/main/docs",
    },
    {
      name: "NexoraVM",
      positioning: "A Windows-first desktop virtualization and AI workspace.",
      summary: "Typed VM definitions, persistent configuration, runtime discovery, deterministic QEMU command construction, and controlled process management. WHPX and the AI workspace remain roadmap items.",
      technologies: ["Tauri v2", "React", "TypeScript", "Rust", "QEMU"],
      status: "Active Early Development",
      github: "https://github.com/vmDeshpande/NexoraVM",
      docs: "https://github.com/vmDeshpande/NexoraVM/tree/main/docs",
    },
  ];

  return (
    <section
      id="featured-project"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#eca8d6]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 lg:mb-32">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Featured Project
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-tight transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            AI Agent Automation
            <br />
            <span className="text-muted-foreground">Workflow Platform</span>
          </h2>

          <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            An AI-native workflow automation and orchestration platform for AI agents. Build, run, inspect, replay, and expose self-hosted workflows with memory, document RAG, agent teams, MCP, integrations, APIs, and execution observability.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Left Column - Description */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Technologies */}
            <div className="border border-foreground/10 bg-foreground/[0.02] p-8 lg:p-10">
              <h3 className="text-lg font-display mb-6 text-foreground">Key Features</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-[#eca8d6]/10 text-[#eca8d6] text-sm font-mono border border-[#eca8d6]/20 hover:bg-[#eca8d6]/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/vmDeshpande/ai-agent-automation"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground/10 bg-foreground/[0.02] p-6 hover:bg-foreground/[0.04] transition-all flex items-center justify-between"
              >
                <span className="text-sm font-display">GitHub</span>
                <span className="text-[#eca8d6]">→</span>
              </a>
              <a
                href="https://vmdeshpande.github.io/ai-automation-platform-website/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground/10 bg-foreground/[0.02] p-6 hover:bg-foreground/[0.04] transition-all flex items-center justify-between"
              >
                <span className="text-sm font-display">Live Demo</span>
                <span className="text-[#eca8d6]">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className={`space-y-4 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="border border-foreground/10 bg-foreground/[0.02] p-6 hover:bg-foreground/[0.04] transition-all"
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="text-sm text-muted-foreground font-mono mb-2">{stat.label}</div>
                <div className="text-2xl font-display text-foreground">{stat.value}</div>
              </div>
            ))}

            {/* Status Badge */}
            <div className="border-2 border-[#eca8d6]/50 bg-[#eca8d6]/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#eca8d6] animate-pulse" />
                <span className="text-sm font-mono text-[#eca8d6]">ACTIVE DEVELOPMENT</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Open-source development with Docker deployment and multiple model providers
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {flagshipProjects.map((project) => (
            <article key={project.name} className="border border-foreground/10 bg-foreground/[0.02] p-8 lg:p-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-3xl font-display">{project.name}</h3>
                <span className="text-xs font-mono text-[#eca8d6] text-right">{project.status}</span>
              </div>
              <p className="text-lg text-foreground mb-3">{project.positioning}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((technology) => (
                  <span key={technology} className="px-3 py-1 rounded bg-foreground/5 text-foreground/70 text-xs font-mono">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#eca8d6] hover:text-[#f3b8df] transition-colors">
                  GitHub →
                </a>
                <a href={project.docs} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
