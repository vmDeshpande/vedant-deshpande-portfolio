"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { GridBackground } from "./visual-utilities";

export function WhatsNextSection() {
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

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Let's Connect
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            What's Next?
          </h2>

          <p className={`text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            I'm always interested in collaborating on challenging projects, contributing to open-source, or discussing engineering ideas. Let's build something great together.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <a href="mailto:vedantmilinddeshpande@gmail.com" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base">
                Get in Touch
              </Button>
            </a>
            <a href="https://github.com/vmDeshpande" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 h-12 text-base">
                View on GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/vedant-devv" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 h-12 text-base">
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
