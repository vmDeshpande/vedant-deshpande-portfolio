"use client";

import { useEffect, useRef, useState } from "react";
import { GridBackground } from "./visual-utilities";

export function EndToEndDevelopmentSection() {
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

  const stages = [
    { num: "01", title: "Ideation", desc: "Conceptualizing solutions with clear goals" },
    { num: "02", title: "Architecture", desc: "Designing scalable, maintainable systems" },
    { num: "03", title: "Development", desc: "Building with clean, intentional code" },
    { num: "04", title: "Testing", desc: "Ensuring reliability and quality" },
    { num: "05", title: "Deployment", desc: "Shipping to production with confidence" },
    { num: "06", title: "Iteration", desc: "Continuous improvement based on feedback" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Process
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            End-to-End Workflow
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              className={`p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
            >
              <div className="text-3xl font-display text-[#eca8d6] mb-3">{stage.num}</div>
              <h3 className="font-display text-lg mb-2">{stage.title}</h3>
              <p className="text-sm text-muted-foreground">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
