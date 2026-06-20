"use client";

import { useEffect, useRef, useState } from "react";
import { ParticleField } from "./visual-utilities";

export function HomelabSection() {
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

  const homelabSetup = [
    "Custom Server Infrastructure",
    "Kubernetes Clusters",
    "Database Management",
    "Monitoring & Observability",
    "Network Architecture",
    "System Automation",
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background/40 via-background to-background">
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <span className="w-12 h-px bg-foreground/20" />
              Infrastructure
            </span>

            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Homelab & Self-Hosting
            </h2>

            <p className={`text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              I run custom infrastructure to experiment with technologies and understand system design at a deeper level. Self-hosting drives better engineering decisions.
            </p>
          </div>

          <div className="space-y-4">
            {homelabSetup.map((item, i) => (
              <div
                key={item}
                className={`p-6 border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-500 flex items-center gap-4 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#eca8d6]" />
                <span className="font-display">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
