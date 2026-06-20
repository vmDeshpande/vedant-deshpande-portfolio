"use client";

import { useEffect, useRef, useState } from "react";
import { ParticleField } from "./visual-utilities";

export function CurrentlyExploringSection() {
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

  const exploringAreas = [
    "Advanced AI Agent Patterns",
    "Distributed System Design",
    "LLM Fine-Tuning Strategies",
    "Real-time Data Processing",
    "Scalable Infrastructure",
    "Developer Experience Innovation",
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background/60 to-background">
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Learning
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Currently Exploring
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploringAreas.map((area, i) => (
            <div
              key={area}
              className={`p-8 border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-500 flex items-center ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 50}ms` : "0ms" }}
            >
              <span className="flex-1 font-display text-lg">{area}</span>
              <div className="w-2 h-2 rounded-full bg-[#eca8d6] animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
