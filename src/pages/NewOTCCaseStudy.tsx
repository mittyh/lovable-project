import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import DarkCaseStudyNavigation from "@/components/DarkCaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import newotcCoverImage from "@/assets/newotc-cover.png";

// Export cover for use in projects.ts
export const cover = newotcCoverImage;

// Import images
import newotcResearch1 from "@/assets/newotc-research-1.png";
import newotcResearch2 from "@/assets/newotc-research-2.png";
import newotcResearch3 from "@/assets/newotc-research-3.png";
import newotcResearch4 from "@/assets/newotc-research-4.png";
import newotcResearch5 from "@/assets/newotc-research-5.png";
import newotcBrandSpectrum from "@/assets/newotc-brand-spectrum.png";
import newotcUI1 from "@/assets/newotc-ui-1.png";
import newotcUI2 from "@/assets/newotc-ui-2.png";
import newotcUI3 from "@/assets/newotc-ui-3.png";
import newotcMockup from "@/assets/newotc-mockup.jpg";

const researchSlides = [
  {
    image: newotcResearch1,
    question: "What products/services does NewOTC offer?",
    questionCn: "NewOTC 提供了什麼的產品/服務？",
    highlight: "A new type of digital asset trading platform",
    highlightCn: "新型態數字資產交易平台"
  },
  {
    image: newotcResearch2,
    question: "What functional or emotional benefits do the products/services provided by NewOTC provide to users?",
    questionCn: "NewOTC提供的產品/服務帶給使用者什麼功能上或情感上的利益？",
    highlight: "Decentralization — Allows users to quickly and easily transform digital assets",
    highlightCn: "去中心化 — 讓使用者可以迅速且簡單的完成數位資產的轉換"
  },
  {
    image: newotcResearch3,
    question: "What motivates NewOTC to continue to launch products or services?",
    questionCn: "是什麼動機驅動NewOTC，使我們持續推出產品/服務？",
    highlight: "There is a tendency to believe that future values are stored in virtual transactions",
    highlightCn: "相信未來價值以虛擬方式儲存交易會是一個趨勢"
  },
  {
    image: newotcResearch4,
    question: "Please write down what you think are the most important core values of NewOTC",
    questionCn: "請寫下你心目中NewOTC最重要的幾個核心價值",
    highlight: "Decentralized, Free to trade, Fast",
    highlightCn: "去中心化、自由交易、快速"
  },
  {
    image: newotcResearch5,
    question: "If NewOTC were a real person, how would you describe his/her personality traits?",
    questionCn: "如果NewOTC是一個活生生的人，你會怎麼形容他/她的性格特徵？",
    highlight: "Dependable, Careful, Creative, Free, Intelligent",
    highlightCn: "可靠、值得信賴、細心、有創意、自由自在、不受拘束、睿智的、沈穩"
  }
];

const NewOTCCaseStudy = () => {
  const project = getProjectBySlug("newotc-crypto");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % researchSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + researchSlides.length) % researchSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <DarkCaseStudyNavigation />
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container-wide mb-16">
          <Link
            to="/#works"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to works
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-zinc-500">2019–2020</span>
            {["Web3", "Crypto Exchange", "0→1 MVP", "Branding"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-zinc-800/80 text-zinc-300 rounded-full border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            NewOTC — A 0→1 Experimental<br className="hidden md:block" /> Crypto Exchange MVP
          </h1>

          <p className="text-xl text-zinc-400 max-w-3xl">
            Designing trust and clarity for a decentralized value transfer platform
          </p>
        </section>

        {/* Cover Image */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
            <img
              src={project?.imageUrl}
              alt={project?.title || "NewOTC Crypto Exchange"}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Project Context */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Year</h3>
              <p className="text-lg text-white">2019–2020</p>
            </div>
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Type</h3>
              <p className="text-lg text-white">Experimental Web3 MVP</p>
            </div>
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Role</h3>
              <p className="text-lg text-white">Product-minded Designer</p>
            </div>
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Team</h3>
              <p className="text-lg text-white">1 PM · 2 Engineers · 1 Designer</p>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Background</h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                NewOTC was initiated inside a foreign exchange trading company in China. Due to regulatory restrictions on RMB foreign exchange trading, the company explored issuing crypto assets and building a <strong className="text-white">decentralized-style crypto trading platform</strong> to reduce cross-border cost, manual intervention, and transaction friction.
              </p>
              <p>
                This was a <strong className="text-white">0→1 experimental product</strong>. The MVP did not continue to full launch, but the process deeply shaped my understanding of blockchain, decentralization, and crypto product logic.
              </p>
            </div>
          </div>
        </section>

        {/* My Entry */}
        <section className="container-wide mb-24">
          <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-medium mb-6">How I Joined This Project</h3>
            <p className="text-lg text-zinc-400 mb-6">
              I was originally working on other FX-related products. I was brought into this team because the previous designer could not meet the Product Owner's expectations.
            </p>
            <p className="text-xl text-white mb-8">
              Within 3 days, I:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Designed a structured internal research questionnaire",
                "Conducted cross-functional internal interviews",
                "Synthesized findings into a clear logic framework",
                "Delivered a professional English analysis report",
                "Reframed the product's core value and brand direction"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-zinc-800/30 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">The Problem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "High Friction", desc: "Traditional FX on/off-ramp processes were slow and cumbersome" },
              { icon: "💰", title: "Expensive Settlement", desc: "Cross-border settlement was costly and time-consuming" },
              { icon: "🔍", title: "Lack of Transparency", desc: "Users couldn't see or trust the transaction process" },
              { icon: "🎯", title: "No Clear Positioning", desc: "Early-stage crypto products lacked brand clarity" },
              { icon: "🔗", title: "Internal Misalignment", desc: "Disconnect between product, tech, and business teams" }
            ].map((problem) => (
              <div key={problem.title} className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                <span className="text-2xl mb-4 block">{problem.icon}</span>
                <h3 className="text-lg font-medium text-white mb-2">{problem.title}</h3>
                <p className="text-zinc-400">{problem.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Section with Gallery */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Strategy & Research</h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl">
            Through internal stakeholder interviews, structured questionnaires, and value mapping workshops, I uncovered the core identity of NewOTC.
          </p>

          {/* Research Gallery */}
          <div className="mb-16">
            <div className="relative bg-zinc-900/50 rounded-2xl border border-zinc-800/50 overflow-hidden">
              {/* Gallery Navigation */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <span className="text-sm text-zinc-400 mr-2">
                  {currentSlide + 1} / {researchSlides.length}
                </span>
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Current Slide Image */}
              <div className="relative">
                <img
                  src={researchSlides[currentSlide].image}
                  alt={researchSlides[currentSlide].question}
                  className="w-full h-auto"
                />
              </div>

              {/* Slide Info */}
              <div className="p-6 md:p-8 bg-zinc-900/80 border-t border-zinc-800">
                <p className="text-zinc-400 text-sm mb-2">{researchSlides[currentSlide].questionCn}</p>
                <p className="text-white text-lg mb-4">{researchSlides[currentSlide].question}</p>
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <p className="text-xs uppercase tracking-wider text-cyan-400 mb-2">Product Owner's Selected Answer</p>
                  <p className="text-cyan-300 font-medium">{researchSlides[currentSlide].highlight}</p>
                  <p className="text-cyan-400/70 text-sm mt-1">{researchSlides[currentSlide].highlightCn}</p>
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 pb-6">
                {researchSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-cyan-400' : 'bg-zinc-600 hover:bg-zinc-500'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div>
            <h3 className="text-xl font-medium mb-8 text-zinc-300">Key Insights</h3>
            <div className="space-y-4">
              {[
                { insight: "NewOTC is fundamentally a \"Digital Value Transfer\" platform", highlight: true },
                { insight: "Decentralization is not a buzzword, but a cost and trust solution", highlight: false },
                { insight: "Speed, freedom, and transparency are core emotional drivers", highlight: false },
                { insight: "Users want fast cross-border value movement with high trust", highlight: false },
                { insight: "The brand must feel calm, powerful, and reliable — not speculative", highlight: true }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-lg border flex items-start gap-4 ${item.highlight
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : 'bg-zinc-900/30 border-zinc-800/30'
                    }`}
                >
                  <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${item.highlight ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
                  <span className={item.highlight ? 'text-white' : 'text-zinc-400'}>{item.insight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Concept */}
        <section className="container-wide mb-24">
          <div className="relative p-12 md:p-16 bg-gradient-to-br from-emerald-500/10 via-zinc-900 to-zinc-900 rounded-2xl border border-emerald-500/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <span className="text-xs uppercase tracking-wider text-emerald-400 mb-4 block">Core Value Proposition</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
                "Digital Value Transfer (DVT) —<br />
                <span className="text-zinc-400">Value should move as freely as information."</span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
                {["Decentralization", "Free Trading", "Speed", "Transparency", "High Trust", "Automation"].map((value) => (
                  <div key={value} className="text-center p-4 bg-zinc-800/30 rounded-lg border border-zinc-700/30">
                    <span className="text-sm text-zinc-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Spectrum Image */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Brand Spectrum</h2>
          <div className="overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
            <img
              src={newotcBrandSpectrum}
              alt="NewOTC Brand Spectrum - showing positioning across different team roles"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
              <span className="text-zinc-400">Product Owner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="text-zinc-400">Designer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="text-zinc-400">Engineer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-400" />
              <span className="text-zinc-400">Marketing</span>
            </div>
          </div>
        </section>

        {/* Brand Strategy */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Brand & Visual Strategy</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-medium mb-6 text-zinc-300">Brand Personality</h3>
              <div className="flex flex-wrap gap-3">
                {["Dependable", "Intelligent", "Calm", "Careful", "Creative", "Disciplined"].map((trait) => (
                  <span key={trait} className="px-4 py-2 bg-zinc-800/50 rounded-full text-zinc-300 border border-zinc-700/50">
                    {trait}
                  </span>
                ))}
              </div>

              <div className="mt-8 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                <span className="text-xs uppercase tracking-wider text-zinc-500 mb-3 block">Brand Metaphor</span>
                <p className="text-lg text-white italic">
                  "A calm, dark Iron Man — powerful, controlled, and responsible."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 text-zinc-300">Design Direction</h3>
              <ul className="space-y-4">
                {[
                  "Dark interface to emphasize security and seriousness",
                  "High-contrast accent colors for critical actions",
                  "Minimal visual noise",
                  "Clear hierarchy for trading decisions"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* UI Design System */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">UI & Design System</h2>

          {/* Moodboard & Color System */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6 text-zinc-300">Moodboard, Color & Typography</h3>
            <div className="overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
              <img
                src={newotcUI1}
                alt="NewOTC Design System - Moodboard, Color and Typography"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* UI Components & Flows */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-6 text-zinc-300">Icon Set & Trade Flow</h3>
              <div className="overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                <img
                  src={newotcUI2}
                  alt="NewOTC Icon Set and Trading Flow"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6 text-zinc-300">Menu, Onboarding & Advertising</h3>
              <div className="overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                <img
                  src={newotcUI3}
                  alt="NewOTC Menu and Onboarding Screens"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results & Learning */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Result & Learning</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-medium mb-6 text-zinc-300">Outcome</h3>
              <ul className="space-y-4">
                {[
                  "Delivered a complete brand + UI direction for a crypto exchange MVP",
                  "Aligned product, business, and engineering teams",
                  "Established a clear Web3-native design logic",
                  "Enabled fast decision-making for early-stage validation"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 text-zinc-300">Key Learnings</h3>
              <ul className="space-y-4">
                {[
                  "Blockchain products require conceptual clarity before UI",
                  "Trust is designed, not claimed",
                  "Decentralization must translate into user experience",
                  "Product thinking is essential in Web3 design"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 md:p-16 bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-500/5 rounded-2xl border border-zinc-800">
              <p className="text-lg text-zinc-400 mb-6">
                Although NewOTC did not continue to full launch, this project became the foundation of my understanding of:
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {["Crypto Exchanges", "Digital Asset Flows", "Decentralized Product Thinking", "Designing Trust in Web3"].map((item) => (
                  <span key={item} className="px-4 py-2 bg-zinc-800/50 rounded-full text-sm text-zinc-300 border border-zinc-700/50">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-medium text-white">
                "This project shaped how I design Web3 products today."
              </p>
            </div>
          </div>
        </section>

        {/* Final Mockup Image */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={newotcMockup}
              alt="NewOTC App Mockup on iPhone"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Navigation */}
        <ProjectNavigation currentSlug="newotc-crypto" theme="dark" />
      </main>

      {/* Footer with dark theme override */}
      <footer className="py-12 border-t border-zinc-800 bg-[#0a0a0b]">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Mitty Huang. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/mittyhuang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="mailto:shiaoyuhuang@gmail.com"
                className="text-zinc-500 hover:text-white transition-colors text-sm"
              >
                Email
              </a>
              <a
                href="/Mitty (XiaoYu) Huang Product Designer - CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors text-sm"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewOTCCaseStudy;
