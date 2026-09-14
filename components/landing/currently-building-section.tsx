"use client";

import { useEffect, useRef, useState } from "react";

export function OpenSourceSection() {
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

  const projects = [
    { name: "AI Agent Automation", status: "Active Development", href: "https://github.com/vmDeshpande/ai-agent-automation" },
    { name: "Arcon", status: "Experimental", href: "https://github.com/vmDeshpande/Arcon" },
    { name: "NexoraVM", status: "Active Development", href: "https://github.com/vmDeshpande/NexoraVM" },
  ];

  return (
    <section
      id="open-source"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Currently Building
          </span>

          <h3 className={`text-4xl md:text-5xl font-display tracking-tight transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Three systems in motion
          </h3>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 lg:p-8 border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-foreground/20 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <div>
                  <p className="text-sm lg:text-base text-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {project.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">{project.status}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className={`mt-16 lg:mt-20 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`} />
      </div>
    </section>
  );
}

// Export both names for compatibility
export { OpenSourceSection as CurrentlyBuildingSection };
