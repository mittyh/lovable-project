import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Zap, TrendingUp, Download, ExternalLink } from "lucide-react";
import DarkCaseStudyNavigation from "@/components/DarkCaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import kvbCoverImage from "@/assets/kvb-cover.png";

// Export cover for use in projects.ts
export const cover = kvbCoverImage;
import kvbUi1 from "@/assets/kvb-ui-1.png";
import kvbUi2 from "@/assets/kvb-ui-2.png";
import kvbUi3 from "@/assets/kvb-ui-3.png";

const KVBPrimeCaseStudy = () => {
  const project = getProjectBySlug("kvb-prime");
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
            <span className="text-sm text-zinc-500">2019</span>
            {["Forex", "Trading UI", "Dark Theme", "Design Sprint"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-zinc-800/80 text-zinc-300 rounded-full border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Designing a High-Frequency Forex Trading App for 100+ Countries
          </h1>
          <p className="text-lg text-zinc-400 mb-6">
            KVB Prime — Professional FX Trading Redesign
          </p>
          
          <p className="text-xl text-zinc-400 max-w-3xl">
            A 3-day intensive design sprint that transformed a legacy forex trading interface into a modern, data-dense mobile experience for active traders worldwide.
          </p>
        </section>

        {/* Cover Image */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={project?.imageUrl}
              alt={project?.title || "KVB Prime Forex Trading App"}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Project Context */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Year</h3>
              <p className="text-lg text-white">2019</p>
            </div>
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Location</h3>
              <p className="text-lg text-white">China</p>
            </div>
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Role</h3>
              <p className="text-lg text-white">UI Designer</p>
            </div>
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Team</h3>
              <p className="text-lg text-white">3 Designers + Founder</p>
            </div>
          </div>
        </section>

        {/* Team Structure */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Team Structure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-amber-500/10 to-zinc-900/50 rounded-xl border border-amber-500/20">
              <h3 className="text-lg font-medium text-amber-400 mb-2">Adam Wang</h3>
              <p className="text-zinc-400">Lead Visual Designer</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-zinc-900/50 rounded-xl border border-cyan-500/20">
              <h3 className="text-lg font-medium text-cyan-400 mb-2">Mitty Huang</h3>
              <p className="text-zinc-400">UI Designer — Order / Profile modules</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-500/10 to-zinc-900/50 rounded-xl border border-pink-500/20">
              <h3 className="text-lg font-medium text-pink-400 mb-2">Karen Lin</h3>
              <p className="text-zinc-400">UI Designer — Login / News modules</p>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Background</h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                KVB Prime is a global foreign exchange and crypto trading platform serving users across <strong className="text-white">more than 100 countries</strong>.
              </p>
              <p>
                During a critical phase of product transformation, the company initiated a rapid redesign of its legacy trading app to establish a more <strong className="text-white">professional, trustworthy, and scalable visual system</strong> for active traders.
              </p>
              <p>
                This project was completed through an <strong className="text-white">intensive, hands-on design sprint</strong> led directly by the company founder, who has extensive experience operating multiple financial businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Design Challenge */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Design Challenge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, title: "High-Density Interface", desc: "Redesign traditional forex trading into a modern, dark-theme mobile trading app" },
              { icon: <Zap className="w-6 h-6" />, title: "Real-time Performance", desc: "Support real-time price updates, frequent user actions, and high cognitive load" },
              { icon: <Users className="w-6 h-6" />, title: "Trust & Clarity", desc: "Balance visual clarity, performance perception, and trust in a financial product" },
              { icon: <Clock className="w-6 h-6" />, title: "Rapid Execution", desc: "Establish consistent UI system across multiple modules in a very limited timeframe" }
            ].map((challenge) => (
              <div key={challenge.title} className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  {challenge.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{challenge.title}</h3>
                <p className="text-zinc-400">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* My Responsibilities */}
        <section className="container-wide mb-24">
          <div className="p-8 md:p-12 bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-zinc-900 rounded-2xl border border-cyan-500/20">
            <h2 className="text-3xl font-medium mb-8">My Responsibilities</h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-3xl">
              As a UI Designer, I was responsible for core functional modules that directly impact trading execution and account management:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                <h3 className="text-xl font-medium text-cyan-400 mb-4">Order Module</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    Market & limit order interfaces
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    Quantity input, confirmation flows, and error prevention
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                <h3 className="text-xl font-medium text-cyan-400 mb-4">Profile & Account Module</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    Account overview, balance, margin, and position summaries
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    Clear information hierarchy for financial status visibility
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-zinc-800/30 rounded-xl">
              <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-4">Design Principles Applied</h4>
              <p className="text-zinc-300 leading-relaxed">
                While the project was UI-driven, decisions were constantly evaluated against <strong className="text-white">usability, speed of recognition, and trader confidence</strong>, rather than visual aesthetics alone.
              </p>
            </div>
          </div>
        </section>

        {/* Process & Collaboration */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Process & Collaboration</h2>
          
          <div className="relative">
            {/* 3-Day Sprint Highlight */}
            <div className="mb-12 p-8 bg-gradient-to-r from-amber-500/10 to-zinc-900/50 rounded-2xl border border-amber-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-amber-400">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white">Day Intensive Sprint</h3>
                  <p className="text-amber-400/80">Co-located with founder and design team</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-zinc-300">Rapid Iteration</h3>
                <ul className="space-y-4">
                  {[
                    "Iterated rapidly based on direct stakeholder feedback",
                    "Established shared dark-theme design language",
                    "Partnered closely with developers for feasibility"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 bg-zinc-900/30 rounded-lg border border-zinc-800/30">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium text-zinc-300">Design System Components</h3>
                <div className="space-y-4">
                  {[
                    { label: "Color System", desc: "Bid/ask, profit/loss, alerts" },
                    { label: "Typography", desc: "Optimized for dense numerical data" },
                    { label: "Iconography", desc: "Component hierarchy for fast scanning" }
                  ].map((item) => (
                    <div key={item.label} className="p-4 bg-zinc-900/30 rounded-lg border border-zinc-800/30">
                      <h4 className="text-white font-medium mb-1">{item.label}</h4>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI Showcase - Quotes & Order */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={kvbUi1}
              alt="KVB Prime - Icon Set, Quotes and Order Interfaces"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* UI Showcase - News & Profile */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={kvbUi2}
              alt="KVB Prime - News, Notice and Profile Interfaces"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* UI Showcase - Login & Sign Up */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={kvbUi3}
              alt="KVB Prime - Login and Sign Up Interfaces"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Impact */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Impact & Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "35%", label: "YoY Growth", desc: "in active traders during this period" },
              { stat: "100+", label: "Countries", desc: "Global platform reach" },
              { stat: "Real-time", label: "Data Support", desc: "High-frequency trading UI" },
              { stat: "Scalable", label: "Foundation", desc: "For future iterations" }
            ].map((item) => (
              <div key={item.label} className="p-6 bg-gradient-to-br from-emerald-500/10 to-zinc-900/50 rounded-xl border border-emerald-500/20 text-center">
                <p className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{item.stat}</p>
                <p className="text-white font-medium">{item.label}</p>
                <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">What I Learned</h2>
            
            <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl border border-zinc-800 mb-8">
              <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                This project was my <strong className="text-white">first professional forex trading product</strong>, and it became a formative experience in my design career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Extreme Pressure", desc: "Learned to design under extreme time pressure and high standards" },
                { title: "Financial Constraints", desc: "Gained hands-on experience where clarity and trust outweigh stylistic expression" },
                { title: "Data Hierarchy", desc: "Developed stronger instincts for risk-aware UI decisions and execution-focused design" },
                { title: "Direct Feedback", desc: "Experienced unfiltered feedback from an experienced founder — significantly accelerating my growth" }
              ].map((item) => (
                <div key={item.title} className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/30">
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & CTA */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium mb-6">Tools & Skills</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "UI Design for Financial Products",
                  "Dark Theme Systems",
                  "Data-dense Interface Design",
                  "High-frequency Interaction",
                  "Cross-functional Collaboration"
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-zinc-800/50 rounded-full text-zinc-300 border border-zinc-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-6">Download App</h2>
              <a 
                href="https://kvbprime.co.uk/app-trader"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl border border-emerald-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Download className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">KVB Prime Trader</p>
                  <p className="text-zinc-400 text-sm">kvbprime.co.uk/app-trader</p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <ProjectNavigation currentSlug="kvb-prime" />
    </div>
  );
};

export default KVBPrimeCaseStudy;
