import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import cubeCoverImage from "@/assets/cube-cover.png";

// Export cover for use in projects.ts
export const cover = cubeCoverImage;
import cube3plans from "@/assets/cube-3plans.png";
import cubeFresh1 from "@/assets/cube-fresh-1.png";
import cubeFresh2 from "@/assets/cube-fresh-2.png";
import cubeFresh3 from "@/assets/cube-fresh-3.png";
import cubeLight1 from "@/assets/cube-light-1.png";
import cubeLight2 from "@/assets/cube-light-2.png";
import cubeLight3 from "@/assets/cube-light-3.png";
import cubeHold1 from "@/assets/cube-hold-1.png";
import cubeHold2 from "@/assets/cube-hold-2.png";
import cubeHold3 from "@/assets/cube-hold-3.png";

// Before/After comparison images
import cubeHomeBefore from "@/assets/cube-home-before.png";
import cubeHomeAfter from "@/assets/cube-home-after.png";
import cubeAccountBefore from "@/assets/cube-account-before.png";
import cubeAccountAfter from "@/assets/cube-account-after.png";
import cubeCardBefore from "@/assets/cube-card-before.png";
import cubeCardAfter from "@/assets/cube-card-after.png";
import cubeCubecardBefore from "@/assets/cube-cubecard-before.png";
import cubeCubecardAfter from "@/assets/cube-cubecard-after.png";
import cubeBenefitBefore from "@/assets/cube-benefit-before.png";
import cubeBenefitAfter from "@/assets/cube-benefit-after.png";

// Concept images for Phase 2
import cubeConcept1 from "@/assets/cube-concept-1.png";
import cubeConcept2 from "@/assets/cube-concept-2.png";
import cubeConcept3 from "@/assets/cube-concept-3.png";
import cubeConcept4 from "@/assets/cube-concept-4.png";

// Phase 1 visual proposal images - starting with Three Design Directions
const proposalImages = [{
  src: cube3plans,
  title: "Three Design Directions",
  description: "Fresh · Light · Hold — Three visual direction explorations"
}, {
  src: cubeFresh1,
  title: "Concept 1 — Fresh",
  description: "Play with plans, surprise anytime — Frosted glass materials with flowing colors"
}, {
  src: cubeFresh2,
  title: "Fresh UI Design",
  description: "Deconstruct CUBE elements — Switching plans like adult tangrams"
}, {
  src: cubeFresh3,
  title: "Fresh Motion Concept",
  description: "Using translucent glass effect to express understanding user preferences"
}, {
  src: cubeLight1,
  title: "Concept 2 — Light",
  description: "Light upgrade, smooth transition — White cards with layered shadows"
}, {
  src: cubeLight2,
  title: "Light UI Design",
  description: "Motion concept and plan switching experience"
}, {
  src: cubeLight3,
  title: "Light Plan Switching",
  description: "Travel, Shopping, Finance — Three reward plan options"
}, {
  src: cubeHold1,
  title: "Concept 3 — Hold",
  description: "Take control, as you wish — Dark mode focusing on self-empowerment"
}, {
  src: cubeHold2,
  title: "Hold MVP Version",
  description: "Minimum viable product visual design with three reward plans"
}, {
  src: cubeHold3,
  title: "Hold Future Version",
  description: "Personal exclusive offers and advanced plan selection experience"
}];
const CubeCaseStudy = () => {
  const project = getProjectBySlug("cube-bank-app");
  const [currentProposal, setCurrentProposal] = useState(0);
  const nextProposal = () => {
    setCurrentProposal(prev => (prev + 1) % proposalImages.length);
  };
  const prevProposal = () => {
    setCurrentProposal(prev => (prev - 1 + proposalImages.length) % proposalImages.length);
  };
  return <div className="min-h-screen bg-background">
      <CaseStudyNavigation />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container-wide mb-16">
          <Link to="/#works" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to works
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm text-muted-foreground">2021</span>
            {["iOS", "Fintech", "Visual System"].map(tag => <span key={tag} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded">
                {tag}
              </span>)}
          </div>

          <h1 className="text-display-md md:text-display-lg mb-4">
            Leading a Full Visual System Shift in a Conservative Banking Product
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            How CUBE Replaced Its Legacy App UI
          </p>
        </section>

        {/* Hero Image */}
        <section className="container-wide mb-24">
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted">
            <img src={project?.imageUrl} alt={project?.title || "CUBE Credit Card App"} className="w-full h-full object-cover" />
          </div>
        </section>

        {/* One-Line Summary */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-4">
              Led the visual system transition for Cathay United Bank's CUBE Credit Card, transforming a single card launch into a scalable in-app benefits switching experience across branding, UI, and product structure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              After this project, the new visual system replaced the legacy UI and became the foundation for multiple product surfaces across the app.
            </p>
          </div>
        </section>

        {/* Impact Highlight */}
        <section className="container-wide mb-24">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-8 md:p-12 bg-primary-foreground">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-caption mb-4">Impact Scale</h3>
                <p className="text-4xl md:text-5xl font-medium text-foreground mb-2">7M+</p>
                <p className="text-lg text-muted-foreground">Active Users in Taiwan</p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  The app serves over <strong className="text-foreground">7 million users</strong> in Taiwan — 
                  approximately <strong className="text-foreground">30% of the country's population</strong> (23 million).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Context */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-info-block rounded-lg">
              <h3 className="text-caption mb-3">Client</h3>
              <p className="text-foreground font-medium">Cathay United Bank</p>
            </div>
            <div className="p-6 bg-info-block rounded-lg">
              <h3 className="text-caption mb-3">Year</h3>
              <p className="text-foreground font-medium">2021</p>
            </div>
            <div className="p-6 bg-info-block rounded-lg">
              <h3 className="text-caption mb-3">Location</h3>
              <p className="text-foreground font-medium">Taiwan</p>
            </div>
            <div className="p-6 bg-info-block rounded-lg">
              <h3 className="text-caption mb-3">Role</h3>
              <p className="text-foreground font-medium">Product & Visual System Designer</p>
            </div>
          </div>
        </section>

        {/* My Role Details */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">My Role</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-medium text-foreground mb-4">Acting Design Lead</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Visual concept owner for CUBE Credit Card App experience
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Proposal integrator and key presenter to executive stakeholders
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Cross-designer alignment and design direction setting
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  UI & visual system exploration across multiple app surfaces
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center p-8 rounded-xl bg-primary-foreground">
                <p className="text-sm text-muted-foreground mb-2">Presented to</p>
                <p className="text-xl font-medium text-foreground">CEO & Executive Stakeholders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Background</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In 2021, Cathay United Bank launched the CUBE Credit Card, a new credit card product built around a unique concept:
              users can freely switch reward plans inside the app to maximize cashback and points based on their spending needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This initiative required more than a UI refresh.
            </p>
            
            <h3 className="font-medium text-foreground mb-4">At the start of the project:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                The design team received only a logo created by an external agency (Ogilvy)
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                There was no existing CIS or visual system
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                The product involved frequent benefit switching, a high cognitive-load interaction
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                Internal stakeholders were cautious due to banking regulations and risk sensitivity
              </li>
            </ul>

            <div className="p-6 bg-info-block rounded-lg border-l-4 border-primary">
              <p className="text-foreground">
                The challenge was to design a new visual and interaction language that could support <strong>flexibility, clarity, and trust</strong>—without overwhelming users.
              </p>
            </div>
          </div>
        </section>

        {/* Design Challenge */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Design Challenge</h2>
          <div className="rounded-2xl p-8 md:p-12 bg-primary-foreground">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center max-w-4xl mx-auto">
              "How might we enable users to switch between multiple reward plans freely and confidently, while maintaining clarity, trust, and scalability in a conservative banking environment?"
            </p>
          </div>
        </section>

        {/* Concept Exploration */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-4">Concept Exploration</h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            To explore the right balance between innovation and feasibility, I led the creation and packaging of three distinct visual directions, later presented to executive leadership.
          </p>

          {/* Visual Proposal Carousel */}
          <div className="mb-12">
            <div className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted">
                <img src={proposalImages[currentProposal].src} alt={proposalImages[currentProposal].title} className="w-full h-full object-cover" />
              </div>
              
              {/* Navigation Arrows */}
              <button onClick={prevProposal} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-lg">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextProposal} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-lg">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="font-medium text-foreground">{proposalImages[currentProposal].title}</p>
              <p className="text-sm text-muted-foreground mt-1">{proposalImages[currentProposal].description}</p>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {proposalImages.map((_, index) => <button key={index} onClick={() => setCurrentProposal(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentProposal ? "bg-foreground w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />)}
            </div>
          </div>
        </section>

        {/* Three Concepts Detail */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Concept 1 - Fresh */}
            <div className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/20 dark:to-orange-950/20 rounded-xl">
              <h3 className="text-caption mb-2">Concept 1</h3>
              <h4 className="text-xl font-medium text-foreground mb-2">Fresh</h4>
              <p className="text-sm text-muted-foreground mb-4">玩轉方案，隨時驚喜<br /><span className="text-xs">Play with plans, surprise anytime</span></p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Inspired by tangram-like modular shapes</li>
                <li>• Translucent, frosted-glass materials</li>
                <li>• Fluid color blends</li>
                <li>• Emphasized exploration and delight</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground italic">
                This concept intentionally explored the most radical change, helping re-imagine what a banking app could look like.
              </p>
            </div>

            {/* Concept 2 - Light (Selected) */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl border-2 border-emerald-500 relative">
              <div className="absolute -top-3 left-6 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                ✓ Selected
              </div>
              <h3 className="text-caption mb-2">Concept 2</h3>
              <h4 className="text-xl font-medium text-foreground mb-2">Light</h4>
              <p className="text-sm text-muted-foreground mb-4">輕盈升級，順暢變換<br /><span className="text-xs">Light upgrade, smooth transition</span></p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• White-based card surfaces with layered depth</li>
                <li>• Soft gradients to distinguish benefit categories</li>
                <li>• Minimal disruption to existing mental models</li>
                <li>• Easy to extend across future features</li>
              </ul>
              <p className="mt-4 text-xs text-foreground font-medium">
                👉 This direction was selected as the final visual language for the CUBE app experience.
              </p>
            </div>

            {/* Concept 3 - Hold */}
            <div className="p-6 bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-900/50 dark:to-slate-900/50 rounded-xl">
              <h3 className="text-caption mb-2">Concept 3</h3>
              <h4 className="text-xl font-medium text-foreground mb-2">Hold</h4>
              <p className="text-sm text-muted-foreground mb-4">自主掌握，隨心所欲<br /><span className="text-xs">Take control, as you wish</span></p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Darker tones and solid visual weight</li>
                <li>• Emphasized authority and control</li>
                <li>• Premium, finance-forward aesthetic</li>
                <li>• Conservative benchmark</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground italic">
                This concept served as a contrast benchmark during decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* My Key Contribution */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">My Key Contribution</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-muted-foreground">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-medium">1</span>
                  </span>
                  <span>Acted as the primary proposal integrator, synthesizing ideas from designers and leadership into a coherent system</span>
                </li>
                <li className="flex items-start gap-4 text-muted-foreground">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-medium">2</span>
                  </span>
                  <span>Presented visual strategy directly to the CEO and executive stakeholders</span>
                </li>
                <li className="flex items-start gap-4 text-muted-foreground">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-medium">3</span>
                  </span>
                  <span>Intentionally proposed the most aggressive visual explorations, expanding the team's creative safety zone</span>
                </li>
                <li className="flex items-start gap-4 text-muted-foreground">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-medium">4</span>
                  </span>
                  <span>Enabled other designers to confidently push bolder ideas in a traditionally conservative organization</span>
                </li>
                <li className="flex items-start gap-4 text-muted-foreground">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-medium">5</span>
                  </span>
                  <span>Translated abstract brand concepts into scalable UI patterns later adopted across the app</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="p-8 rounded-2xl text-center max-w-sm bg-primary-foreground">
                <p className="text-4xl mb-4">🎯</p>
                <p className="text-foreground font-medium">
                  "Expanding the creative safety zone in a conservative banking environment"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2: Team Design Proposals */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Phase 2: Team Design Proposals</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Following my initial exploration, other designers contributed their proposals, each bringing unique perspectives to the visual direction.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={cubeConcept1} alt="Concept 1 Design Proposal" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={cubeConcept2} alt="Concept 2 Design Proposal" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={cubeConcept3} alt="Concept 3 Design Proposal" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={cubeConcept4} alt="Concept 4 Design Proposal" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Before & After Redesign */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-4">Before & After Redesign</h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Designed and led a visual system that replaced the legacy UI and became the new foundation for the entire app experience.
          </p>
          
          {/* Row 1: Home + Account + Card (3 columns on desktop) */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Home */}
            <div className="space-y-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Home</span>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={cubeHomeBefore} alt="Home before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={cubeHomeAfter} alt="Home after redesign" />}
                />
              </div>
            </div>

            {/* Account */}
            <div className="space-y-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Account</span>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={cubeAccountBefore} alt="Account before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={cubeAccountAfter} alt="Account after redesign" />}
                />
              </div>
            </div>

            {/* Card */}
            <div className="space-y-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Card</span>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={cubeCardBefore} alt="Card before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={cubeCardAfter} alt="Card after redesign" />}
                />
              </div>
            </div>
          </div>

          {/* Row 2: CUBE Homepage + CUBE Benefit (2 columns on desktop) */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CUBE Homepage */}
            <div className="space-y-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">CUBE Homepage</span>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={cubeCubecardBefore} alt="CUBE Homepage before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={cubeCubecardAfter} alt="CUBE Homepage after redesign" />}
                />
              </div>
            </div>

            {/* CUBE Benefit */}
            <div className="space-y-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">CUBE Benefit</span>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={cubeBenefitBefore} alt="CUBE Benefit before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={cubeBenefitAfter} alt="CUBE Benefit after redesign" />}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final Design System & UI */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Final Design System & UI Execution</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Following the selection of Concept 2 – Light, the design team collaboratively applied this visual language across the CUBE app:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-info-block rounded-lg">
              <p className="text-foreground">Credit card benefit switching overview</p>
            </div>
            <div className="p-4 bg-info-block rounded-lg">
              <p className="text-foreground">Reward plan selection and confirmation</p>
            </div>
            <div className="p-4 bg-info-block rounded-lg">
              <p className="text-foreground">Personal offers and benefit history</p>
            </div>
            <div className="p-4 bg-info-block rounded-lg">
              <p className="text-foreground">Financial overview, investments, and fund performance</p>
            </div>
            <div className="p-4 bg-info-block rounded-lg">
              <p className="text-foreground">Account summary, currency exchange</p>
            </div>
            <div className="p-4 bg-info-block rounded-lg">
              <p className="text-foreground">Transaction flows</p>
            </div>
          </div>

          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border-l-4 border-emerald-500">
            <p className="text-foreground">
              The result was a <strong>cohesive, flexible visual system</strong> that allowed users to understand, switch, and manage benefits with confidence.
            </p>
          </div>
        </section>

        {/* Outcome & Impact */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Outcome & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <p className="text-muted-foreground">Established the foundational visual language for CUBE's in-app experience</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <p className="text-muted-foreground">Enabled consistent benefit-switching UI across multiple product domains</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <p className="text-muted-foreground">Supported the launch of a new credit card ecosystem inside the app</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <p className="text-muted-foreground">Set a design direction later iterated and expanded by the broader design team</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center p-8 rounded-xl bg-primary-foreground">
                <p className="text-sm text-muted-foreground mb-2">This project became a</p>
                <p className="text-xl font-medium text-foreground">Cornerstone Redesign</p>
                <p className="text-sm text-muted-foreground mt-2">within Cathay United Bank's digital banking platform</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Reflection</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This project marked a shift from isolated UI screens to <strong className="text-foreground">system-level product thinking</strong>, requiring design leadership, stakeholder alignment, and long-term scalability considerations—especially within a highly regulated industry.
            </p>
          </div>
        </section>

        {/* Project Navigation */}
        <ProjectNavigation currentSlug="cube-bank-app" />
      </main>

      <Footer />
    </div>;
};
export default CubeCaseStudy;