"use client";

import { useEffect, useRef, useState } from "react";
import { GridBackground } from "./visual-utilities";

export function DailyTechStackSection() {
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

  const techCategories = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "FastAPI", "PostgreSQL"]
    },
    {
      category: "AI/ML",
      techs: ["LLMs", "LangChain", "Vector DB", "Prompt Engineering"]
    },
    {
      category: "DevOps",
      techs: ["Docker", "Git", "CI/CD", "Cloud Deployment"]
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Daily Tech
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            My Toolbox
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 75}ms` : "0ms" }}
            >
              <h3 className="text-lg font-display mb-4 text-foreground">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-full bg-foreground/5 text-foreground/70 border border-foreground/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
