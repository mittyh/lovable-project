import { useMemo } from "react";
import { projects } from "@/data/projects";
import { Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import FlagshipProjectCard from "./FlagshipProjectCard";
import StandardProjectCard from "./StandardProjectCard";
import CompactProjectCard from "./CompactProjectCard";
const Works = () => {
  // Define tier assignments based on project slugs
  const tier1Slugs = ["cathay-bank-app", "newotc-crypto", "kkday-airline"];
  const tier2Slugs = ["kvb-prime", "onecar-mvp", "tripgine-b2b", "round-taiwan-round"];
  const tier3Slugs = ["our-city-love", "taipei-mhealth", "cube-bank-app"];
  const tier1Projects = useMemo(() => projects.filter(p => tier1Slugs.includes(p.slug)), []);
  const tier2Projects = useMemo(() => projects.filter(p => tier2Slugs.includes(p.slug)), []);
  const tier3Projects = useMemo(() => projects.filter(p => tier3Slugs.includes(p.slug)), []);
  return <section id="works" className="relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] text-highlight opacity-40">
        <Plus className="w-4 h-4" strokeWidth={3} />
      </div>

      {/* ======== TIER 1: Work at Scale ======== */}
      <div className="py-24 md:py-32">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-caption mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Selected Case Studies
            </p>
            <h2 className="text-display-lg mb-4 md:text-6xl">
              Work at <span className="highlight-underline">Scale</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
              Products at scale. Decisions that matter.
            </p>
          </ScrollReveal>

          {/* 1-2 cards per row, largest card size */}
          <div className="space-y-8 md:space-y-12">
            {tier1Projects.map((project, index) => <ScrollReveal key={project.slug} delay={index * 100} threshold={0.05}>
                <FlagshipProjectCard project={project} />
              </ScrollReveal>)}
          </div>
        </div>
      </div>

      {/* ======== TIER 2: Designing Through Constraints ======== */}
      <div className="py-24 bg-indigo-50">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-caption mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-muted-foreground" />
              Complex Problems
            </p>
            <h2 className="text-display-md mb-4">
              Designing Through Constraints
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Where constraints shaped better decisions.
            </p>
          </ScrollReveal>

          {/* 2-3 column grid, medium card size */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {tier2Projects.map((project, index) => <ScrollReveal key={project.slug} delay={index * 100} threshold={0.05}>
                <StandardProjectCard project={project} />
              </ScrollReveal>)}
          </div>
        </div>
      </div>

      {/* ======== TIER 3: Design Beyond Products ======== */}
      <div className="py-24">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-caption mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-muted-foreground" />
              Values & Impact
            </p>
            <h2 className="text-display-sm mb-4">
              Design Beyond Products
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Empathy, inclusion, and long-term impact.
            </p>
          </ScrollReveal>

          {/* Compact cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {tier3Projects.map((project, index) => <ScrollReveal key={project.slug} delay={index * 100} threshold={0.05}>
                <CompactProjectCard project={project} />
              </ScrollReveal>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Works;