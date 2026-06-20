"use client";

import { useEffect, useRef, useState } from "react";
import { ParticleField } from "./visual-utilities";

export function CommunityImpactSection() {
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

  const impacts = [
    { title: "Open Source Projects", desc: "Maintaining projects that help other developers" },
    { title: "Knowledge Sharing", desc: "Writing about AI, systems, and engineering practices" },
    { title: "Code Reviews", desc: "Contributing constructive feedback to improve projects" },
    { title: "Mentoring", desc: "Helping junior developers grow and learn" },
    { title: "Community Contributions", desc: "Active participant in developer communities" },
    { title: "Tool Building", desc: "Creating utilities that solve real problems" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background/50 to-background">
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Community
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Giving Back
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, i) => (
            <div
              key={impact.title}
              className={`p-8 border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 50}ms` : "0ms" }}
            >
              <h3 className="font-display text-lg mb-2">{impact.title}</h3>
              <p className="text-sm text-muted-foreground">{impact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
