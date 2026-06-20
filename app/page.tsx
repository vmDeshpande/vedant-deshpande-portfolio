import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { FeaturedProjectSection } from "@/components/landing/featured-project-section";
import { CurrentlyBuildingSection } from "@/components/landing/currently-building-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { WhatIBuildSection } from "@/components/landing/what-i-build-section";
import { DailyTechStackSection } from "@/components/landing/daily-tech-stack-section";
import { EngineeringPhilosophySection } from "@/components/landing/engineering-philosophy-section";
import { FeaturedAchievementsSection } from "@/components/landing/featured-achievements-section";
import { CurrentlyExploringSection } from "@/components/landing/currently-exploring-section";
import { EndToEndDevelopmentSection } from "@/components/landing/end-to-end-development-section";
import { HomelabSection } from "@/components/landing/homelab-section";
import { CommunityImpactSection } from "@/components/landing/community-impact-section";
import { WhatsNextSection } from "@/components/landing/whats-next-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <WhatIBuildSection />
      <DailyTechStackSection />
      <EngineeringPhilosophySection />
      <FeaturedProjectSection />
      <FeaturedAchievementsSection />
      <CurrentlyExploringSection />
      <EndToEndDevelopmentSection />
      <HomelabSection />
      <CommunityImpactSection />
      <CurrentlyBuildingSection />
      <HowItWorksSection />
      <MetricsSection />
      <InfrastructureSection />
      <WhatsNextSection />
      <FooterSection />
    </main>
  );
}
