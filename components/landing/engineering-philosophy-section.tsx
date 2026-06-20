"use client";

import { useEffect, useRef, useState } from "react";
import { ParticleField } from "./visual-utilities";

export function EngineeringPhilosophySection() {
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

  const principles = [
    {
      title: "Clean Code",
      description: "Readable, maintainable code that others can understand and extend"
    },
    {
      title: "System Design",
      description: "Thoughtful architecture that scales with user needs"
    },
    {
      title: "Open Source",
      description: "Building in public, contributing back, fostering communities"
    },
    {
      title: "User First",
      description: "Solutions designed around real user problems"
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background/70 to-background">
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <span className="w-12 h-px bg-foreground/20" />
              Philosophy
            </span>

            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              How I Approach Problems
            </h2>

            <p className={`text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              I believe in building systems with intentionality. Every decision should serve a purpose, and every line of code should be defensible.
            </p>
          </div>

          <div className="space-y-4">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className={`p-6 border border-foreground/10 bg-foreground/[0.02] transition-all duration-500 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
              >
                <h3 className="font-display text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
