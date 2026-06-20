"use client";

import { useEffect, useRef, useState } from "react";
import { GridBackground } from "./visual-utilities";

export function FeaturedAchievementsSection() {
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

  const achievements = [
    { metric: "150+", label: "GitHub Stars", highlight: true },
    { metric: "30+", label: "Project Contributors" },
    { metric: "75+", label: "Repository Forks" },
    { metric: "6", label: "Real-World Projects" },
    { metric: "Open Source", label: "Maintainer Status" },
    { metric: "100%", label: "Community Driven" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Achievements
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            By The Numbers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <div
              key={ach.label}
              className={`p-8 border transition-all duration-500 ${
                ach.highlight
                  ? "border-[#eca8d6]/30 bg-[#eca8d6]/5"
                  : "border-foreground/10 bg-foreground/[0.02]"
              } hover:bg-foreground/[0.04] ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 50}ms` : "0ms" }}
            >
              <div className="text-4xl lg:text-5xl font-display mb-2 text-foreground">{ach.metric}</div>
              <p className="text-sm text-muted-foreground">{ach.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
