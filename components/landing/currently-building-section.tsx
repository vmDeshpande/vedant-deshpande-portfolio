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

  const openSourceFocus = [
    "AI Agent Orchestration",
    "Workflow Automation",
    "MCP Integrations",
    "LLM Integration Patterns",
    "Developer Tools",
    "Community Contributions"
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
            Open Source
          </span>

          <h3 className={`text-4xl md:text-5xl font-display tracking-tight transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Focus Areas
          </h3>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
          {openSourceFocus.map((item, index) => (
            <div
              key={item}
              className={`group p-6 lg:p-8 border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-foreground/20 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <p className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
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
