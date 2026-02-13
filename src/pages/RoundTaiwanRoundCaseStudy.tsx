import { Link } from "react-router-dom";
import { ArrowLeft, Users, Globe, Search, Database, Lightbulb, CheckCircle2, Quote, MapPin, Plane, MessageSquare, Target, Layers, TrendingUp, Heart, FileText, BarChart3, Bot } from "lucide-react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import rtrCoverImage from "@/assets/rtr-cover.png";
import rtrHomeBefore from "@/assets/rtr-home-before.png";
import rtrHomeAfter from "@/assets/rtr-home-after.png";
import rtrSpotBefore from "@/assets/rtr-spot-before.png";
import rtrSpotAfter from "@/assets/rtr-spot-after.png";
import rtrCustomBefore from "@/assets/rtr-custom-before.png";
import rtrCustomAfter from "@/assets/rtr-custom-after.png";
import rtrAboutBefore from "@/assets/rtr-about-before.png";
import rtrAboutAfter from "@/assets/rtr-about-after.png";
// Research & Strategy images
import rtrInterview1 from "@/assets/rtr-interview-1.png";
import rtrInterview2 from "@/assets/rtr-interview-2.png";
import rtrTrends from "@/assets/rtr-trends.png";
import rtrData1 from "@/assets/rtr-data-1.png";
import rtrData2 from "@/assets/rtr-data-2.png";
import rtrBrand1 from "@/assets/rtr-brand-1.png";
import rtrBrand2 from "@/assets/rtr-brand-2.png";
import rtrAi1 from "@/assets/rtr-ai-1.png";
import rtrAi2 from "@/assets/rtr-ai-2.png";
import rtrFuture1 from "@/assets/rtr-future-1.png";
import rtrFuture2 from "@/assets/rtr-future-2.png";
import rtrYuki from "@/assets/rtr-yuki.png";
import rtrEmma from "@/assets/rtr-emma.png";
import rtrTrends2 from "@/assets/rtr-trends-2.png";

// Export cover for use in projects.ts
export const cover = rtrCoverImage;
const RoundTaiwanRoundCaseStudy = () => {
  const project = getProjectBySlug("round-taiwan-round");
  return <div className="min-h-screen bg-background text-foreground">
      <CaseStudyNavigation />
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container-wide mb-16">
          <Link to="/#works" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to works
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-muted-foreground">2024–2025</span>
            {["UX Research", "Travel Tech", "Cross-Cultural", "MVP"].map(tag => <span key={tag} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                {tag}
              </span>)}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Designing Travel for People Who Aren't in the Same Time Zone
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Round Taiwan Round — Product & Experience Redesign
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl">
            Reframed a 10+ year Taiwan travel platform by redesigning the inquiry → quotation → booking journey, grounded in cross-cultural research with international travelers. Clarified trust, expectations, and handoff between travelers and planners.
          </p>
        </section>

        {/* Cover Image */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl">
            <img src={cover} alt="Round Taiwan Round Travel Platform" className="w-full h-auto" />
          </div>
        </section>

        {/* Opening Quote */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 bg-primary/5 rounded-2xl border-primary/20 border-0">
              <Quote className="w-12 h-12 text-primary/40 mb-6" />
              <blockquote className="text-2xl md:text-3xl text-foreground font-medium leading-relaxed mb-6">
                "What I learned when a Japanese fan, a Singaporean solo traveler, and a backpacker told me the truth about traveling in Taiwan."
              </blockquote>
              <p className="text-muted-foreground">
                This case study documents how cross-cultural user interviews transformed a legacy travel platform.
              </p>
            </div>
          </div>
        </section>

        {/* The Moment */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">The Moment Everything Clicked</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I was on a Zoom call with a Singaporean traveler who had been to <strong className="text-foreground">40+ countries</strong>.
              </p>
              <p>When I asked her, "What's the biggest struggle when planning a trip to Taiwan?"</p>
              <p>She paused, smiled politely, then said:</p>
              
              <div className="p-6 bg-muted/50 rounded-xl border-border border-0">
                <p className="text-xl text-foreground italic">
                  "I can't find real information. Not the SEO stuff. The real things only locals know."
                </p>
              </div>

              <p>This was the exact moment I understood:</p>
              
              <div className="space-y-3">
                {["Taiwan doesn't have an English-friendly travel platform", "Foreigners rely on Facebook groups, Reddit, WhatsApp chats, blogs, and random strangers", "Even experienced travelers feel lost"].map(item => <div key={item} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>)}
              </div>

              <p className="text-foreground font-medium">
                This became the foundation for the redesign of Round Taiwan Round (RTR) — a 10+ year travel brand under Tripool.
              </p>
            </div>
          </div>
        </section>

        {/* Project Context */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Role</h3>
              <p className="text-lg text-foreground">Lead UX Researcher</p>
              <p className="text-sm text-muted-foreground mt-1">+ UI/UX Designer</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Timeline</h3>
              <p className="text-lg text-foreground">6 Months</p>
              <p className="text-sm text-muted-foreground mt-1">Aug 2024 – Feb 2025</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Research Scope</h3>
              <p className="text-lg text-foreground">3 Countries</p>
              <p className="text-sm text-muted-foreground mt-1">Japan, Singapore, Malaysia</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Interviews</h3>
              <p className="text-lg text-foreground">2 In-depth</p>
              <p className="text-sm text-muted-foreground mt-1">+ 20 survey responses</p>
            </div>
          </div>
        </section>

        {/* What I Owned */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What I Independently Executed</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            icon: <Globe className="w-6 h-6" />,
            title: "Cross-country Interviews",
            desc: "Japan, Singapore, Malaysia travelers"
          }, {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Research Synthesis",
            desc: "UX strategy from raw insights"
          }, {
            icon: <Search className="w-6 h-6" />,
            title: "Competitive Research",
            desc: "AI trip-planner landscape"
          }, {
            icon: <Layers className="w-6 h-6" />,
            title: "IA Restructure",
            desc: "RTR 3.0 information architecture"
          }, {
            icon: <Target className="w-6 h-6" />,
            title: "MVP Experiments",
            desc: "Blog SEO, Spot DB, Itinerary, Search"
          }, {
            icon: <MapPin className="w-6 h-6" />,
            title: "UI Design",
            desc: "Homepage, About, Reviews, Spots, Itinerary"
          }].map(item => <div key={item.title} className="p-6 bg-info-block rounded-xl border-border border-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>)}
          </div>
        </section>

        {/* The Problem */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">The Problem</h2>
            <p className="text-lg text-muted-foreground mb-8">
              RTR was known by foreign tourists from Google, but the product itself was outdated:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Scattered content", "No English-friendly system", "No structured database", "No personalized route recommendations", "No consistent design identity"].map(item => <div key={item} className="flex items-center gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>)}
            </div>

            <div className="p-6 bg-primary/5 rounded-xl border-primary/20 border-0">
              <h3 className="text-lg font-medium text-foreground mb-2">My Challenge:</h3>
              <p className="text-muted-foreground">
                How to rebuild the platform from zero while validating what foreign travelers actually need?
              </p>
            </div>
          </div>
        </section>

        {/* Research Section Header */}
        <section className="container-wide mb-12">
          <div className="p-8 bg-muted/50 rounded-2xl border-border border-0">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-medium">The Research</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              "In our interviews, one insight changed the entire redesign."
            </p>
          </div>
        </section>

        {/* Research & Strategy Exploration */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Research & Strategy Exploration</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
            This phase was not about designing screens. It was about making sense of conflicting signals—platform trends, existing data, competitor moves, and real user voices—to define a defensible product direction.
          </p>

          <div className="space-y-16">
            {/* 1. Travel Platform Trends */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                <h3 className="text-xl font-medium">Travel Platform Trends</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrTrends} alt="Travel platform trends analysis" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrTrends2} alt="Platform recommendations for photography, solo travel, packages" className="w-full h-auto" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Global travel behavior is shifting toward solo trips, photography-driven discovery, and package deals—trends that favor curated, experience-rich content over generic listings. For Taiwan, a destination with fragmented English resources, these signals suggest an opportunity to build a platform that prioritizes depth, visual storytelling, and local credibility over broad aggregation.
              </p>
            </div>

            {/* 2. Existing Data & User Segments */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                <h3 className="text-xl font-medium">Existing Data & User Segments</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrData1} alt="Existing traffic and content data analysis" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrData2} alt="User segment breakdown" className="w-full h-auto" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Before conducting interviews, I analyzed existing traffic and content data. Approximately 80% of visits originated from organic search, primarily Chinese-language content. Target audiences spanned Singapore, the U.S., and Southeast Asia. Mobile usage accounted for 60% of sessions. These early signals helped focus the research on English-speaking travelers and mobile-first design, while validating that certain high-performing content (like Jiufen) could anchor future SEO strategy.
              </p>
            </div>

            {/* 3. Brand Renaming & Repositioning */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                <h3 className="text-xl font-medium">Brand Renaming & Repositioning Exploration</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrBrand1} alt="Brand positioning options exploration" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrBrand2} alt="Name mapping to traveler segments" className="w-full h-auto" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To clarify strategic direction, I explored several brand positioning options—mapping potential names and messaging to different traveler segments. Some directions emphasized premium, high-touch service; others focused on budget-conscious independence. This exercise was conceptual and directional, designed to stress-test how naming choices might shape audience perception and product scope. No final naming decision was made during this phase.
              </p>
            </div>

            {/* 4. AI Competitor Landscape */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</span>
                <h3 className="text-xl font-medium">AI Competitor Landscape</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrAi1} alt="AI trip-planning tools analysis" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrAi2} alt="AI competitor strengths and gaps" className="w-full h-auto" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I surveyed emerging AI trip-planning tools (e.g., Mindtrip) to understand their strengths and limitations. Most excelled at broad inspiration and itinerary scaffolding but lacked the local depth required for Taiwan-specific recommendations—transit nuances, opening hours, accessibility notes. This analysis reinforced the opportunity for RTR to differentiate through structured, localized data that AI tools could eventually consume, rather than competing on general automation.
              </p>
            </div>

            {/* 5. Future Concept & Direction Design */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">5</span>
                <h3 className="text-xl font-medium">Future Concept & Direction Design</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrFuture1} alt="Opportunity matrix for traveler segments" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={rtrFuture2} alt="Inbound visitor residence data analysis" className="w-full h-auto" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Early concept explorations were developed to align the team on possible futures—not to finalize features. These artifacts served as alignment tools, reducing ambiguity about where the product might head without committing prematurely to UI or functionality. The concepts were treated as conversation starters, not deliverables.
              </p>
            </div>
          </div>
        </section>

        {/* Research Method */}
        <section className="container-wide mb-24">
          <h3 className="text-2xl font-medium mb-6">Research Method</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[{
            num: "2",
            label: "In-depth Interviews"
          }, {
            num: "3",
            label: "Countries Covered"
          }, {
            num: "20",
            label: "Survey Responses"
          }, {
            num: "5",
            label: "Competitive Analyses"
          }].map(item => <div key={item.label} className="p-6 bg-info-block rounded-xl border-border text-center border-0">
                <p className="text-3xl font-bold text-primary mb-2">{item.num}</p>
                <p className="text-muted-foreground">{item.label}</p>
              </div>)}
          </div>
        </section>

        {/* Research Planning - Interview Profiles */}
        <section className="container-wide mb-24">
          <div className="p-6 bg-muted/50 rounded-xl border border-border">
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Research Planning
            </h4>
            
            {/* Interview Planning Documents */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <img src={rtrInterview1} alt="User interview planning document" className="rounded-lg border border-border w-full h-auto" />
              <img src={rtrInterview2} alt="Target user segments and methodology" className="rounded-lg border border-border w-full h-auto" />
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              Interview structure and target segments. Conducted 2 remote sessions with international travelers, supplemented by ~10 survey responses. Insights are directional, prioritizing depth over statistical scale.
            </p>
            
            {/* Interview Profiles */}
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Interview Participants
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={rtrYuki} alt="Yuki Takahashi (Japan)" className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={rtrEmma} alt="Emma Ng (Singapore)" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Insight #1 */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4 bg-secondary text-primary-foreground">
                Key Insight #1
              </div>
              <h3 className="text-2xl font-medium mb-4">Foreigners Don't Trust Taiwan Travel Content</h3>
              
              <div className="p-6 bg-muted/50 rounded-xl border-border mb-6 border-0">
                <div className="flex items-start gap-4">
                  <Plane className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Yuki Takahashi (Japan)</p>
                    <p className="text-sm text-muted-foreground">56+, travels every 3–6 months for fan events ("推し活")</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border-primary/20 mb-6 border-0">
                <Quote className="w-6 h-6 text-primary/40 mb-3" />
                <p className="text-lg text-foreground italic">
                  "I can find Taiwan's attractions, but I can't find the Taiwan experience."
                </p>
              </div>

              <h4 className="font-medium mb-3">Her pain points:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  Hard-to-book hotels (language barrier)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  No reliable information on niche routes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  Would pay extra for agencies to solve difficult bookings
                </li>
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4 bg-secondary text-primary-foreground">
                Key Insight #2
              </div>
              <h3 className="text-2xl font-medium mb-4">Even World Travelers Feel Lost in Taiwan</h3>
              
              <div className="p-6 bg-muted/50 rounded-xl border-border mb-6 border-0">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Emma Ng (Singapore)</p>
                    <p className="text-sm text-muted-foreground">Retired, full-time global traveler, 40+ countries</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border-primary/20 mb-6 border-0">
                <Quote className="w-6 h-6 text-primary/40 mb-3" />
                <p className="text-lg text-foreground italic">
                  "Google gives me general info. Travel blogs give me SEO fluff. I want something that tells me how long to stay, how to get there, what to avoid."
                </p>
              </div>

              <h4 className="font-medium mb-3">Her struggles:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  No price comparison or "local experience finder"
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  Missing details: toilets, trail difficulty, mobility info
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                  "AI doesn't know local details. It can't tell me how to get from A to B."
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Synthesis */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Synthesis — The Hidden Gap</h2>
          <p className="text-xl text-muted-foreground mb-8">
            After 2 in-depth interviews and 20 survey responses, we discovered:
          </p>
          
          <div className="p-6 bg-muted/50 rounded-2xl border-border mb-8 border-0">
            <p className="text-xl text-foreground text-center">
              <strong>Foreign tourists love Taiwan… but Taiwan is not easy to navigate.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[{
            category: "Transportation",
            pain: "Inconsistent info, no clear navigation between spots"
          }, {
            category: "Local Insights",
            pain: "Hard to find authentic, non-SEO travel content"
          }, {
            category: "Trip Planning",
            pain: "Too many scattered sources (blogs, FB groups, friends)"
          }, {
            category: "Safety & Medical",
            pain: "Want clear safety tips, clinic info, medication rules"
          }, {
            category: "Niche Travel",
            pain: "Fans, solo travelers, backpackers need specific routes"
          }, {
            category: "AI Tools",
            pain: "General advice, not actionable, not localized"
          }].map(item => <div key={item.category} className="p-4 bg-info-block rounded-xl border-border border-0">
                <p className="text-sm font-medium text-primary mb-2">{item.category}</p>
                <p className="text-muted-foreground text-sm">{item.pain}</p>
              </div>)}
          </div>
        </section>

        {/* Design Strategy */}
        <section className="container-wide mb-24">
          <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl border border-primary/20 bg-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Design Strategy — The Core of RTR 3.0</h2>
            
            <div className="space-y-6">
              {[{
              from: "A Taiwanese travel agency",
              to: "An English-friendly travel intelligence system"
            }, {
              from: "Blog-style content",
              to: "Structured, modular travel data"
            }, {
              from: "One-off bookings",
              to: "A personalized planning companion"
            }].map(item => <div key={item.from} className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-muted-foreground line-through">{item.from}</p>
                  </div>
                  <div className="hidden md:block text-primary font-bold">→</div>
                  <div className="flex-1 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-foreground font-medium">{item.to}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Information Architecture */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">The Information Architecture</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I rebuilt the entire IA from scratch with a new foundation: <strong className="text-foreground">SPOT Database</strong>
          </p>
          
          <div className="p-6 bg-info-block rounded-xl border-border mb-8 border-0">
            <h3 className="text-lg font-medium mb-4">Every attraction gets:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {["Categories & Attributes", "Transport logic", "Recommended stay time", "Seasonal suitability", "Monetization type", "AI-readable labels"].map(item => <div key={item} className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>)}
            </div>
          </div>

          <p className="text-muted-foreground">
            This database became the core of AI itinerary generation, SEO improvement, personalized recommendations, topic-based pages, and MVP testing.
          </p>
        </section>

        {/* MVP Experiments */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">MVP Experiments</h2>
          <p className="text-lg text-muted-foreground mb-8">What I ran & what we learned</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[{
            num: "1",
            title: "Blog SEO MVP",
            desc: "Upgraded editorial system, added English mirror pages",
            result: "80% of traffic from Chinese blog → EN content is a major growth opportunity",
            success: true
          }, {
            num: "2",
            title: "One-Day Itinerary MVP",
            desc: "Combined SPOT database + travel time logic + user types",
            result: "Validated demand for quick, trustworthy routes (台北親子一日遊, 花蓮海岸線, etc.)",
            success: true
          }, {
            num: "3",
            title: "Search MVP",
            desc: "Implemented fuzzy search, autocomplete, multi-condition filters",
            result: "50–70% faster time to first 'useful result'",
            success: true
          }, {
            num: "4",
            title: "Spot Directory MVP",
            desc: "A failed experiment — but invaluable",
            result: "'Just listing spots is not helpful. Tell me what to do with them.' → Reinforced need for itineraries",
            success: false
          }].map(item => <div key={item.num} className={`p-6 rounded-xl border ${item.success ? 'bg-primary/5 border-primary/20' : 'bg-muted/50 border-border'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center flex-shrink-0 ${item.success ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                    <div className={`p-3 rounded-lg ${item.success ? 'bg-primary/10' : 'bg-muted'}`}>
                      <p className="text-sm"><strong className="text-foreground">Result:</strong> <span className="text-muted-foreground">{item.result}</span></p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </section>

        {/* UI Design */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">UI Design</h2>
          <p className="text-lg text-muted-foreground mb-8">
            From old to modern, modular, and data-driven. Drag the slider to compare before and after.
          </p>
          
          <div className="space-y-12">
            {/* Home Page Comparison */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-foreground">
                  Homepage
                </span>
                <span className="text-muted-foreground text-sm">
                  Before → After
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={rtrHomeBefore} alt="Home page before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={rtrHomeAfter} alt="Home page after redesign" />}
                />
              </div>
            </div>

            {/* Spot Page Comparison */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-foreground">
                  Spot Page
                </span>
                <span className="text-muted-foreground text-sm">
                  Before → After
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={rtrSpotBefore} alt="Spot page before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={rtrSpotAfter} alt="Spot page after redesign" />}
                />
              </div>
            </div>

            {/* Custom Tour Page Comparison */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-foreground">
                  Custom Tour
                </span>
                <span className="text-muted-foreground text-sm">
                  Before → After
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={rtrCustomBefore} alt="Custom tour page before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={rtrCustomAfter} alt="Custom tour page after redesign" />}
                />
              </div>
            </div>

            {/* About Us Page Comparison */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-foreground">
                  About Us
                </span>
                <span className="text-muted-foreground text-sm">
                  Before → After
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={rtrAboutBefore} alt="About us page before redesign" />}
                  itemTwo={<ReactCompareSliderImage src={rtrAboutAfter} alt="About us page after redesign" />}
                />
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mt-8">
            Each page was built using stackable modules to support future monetization: Tickets, Experiences, Tripool transport, Food reservations, AI itinerary generation.
          </p>
        </section>

        {/* Final Impact */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Final Impact</h2>
          <p className="text-lg text-muted-foreground mb-8">Even though still in development, the redesign delivered:</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[{
            icon: <Users className="w-6 h-6" />,
            title: "Clear Traveler Personas",
            desc: "4 quadrants based on budget + planning preference"
          }, {
            icon: <Database className="w-6 h-6" />,
            title: "Structured Travel Database",
            desc: "SPOT categories → AI-ready"
          }, {
            icon: <Target className="w-6 h-6" />,
            title: "Roadmap Delivered",
            desc: "MVP1: SPOT Monetization → MVP2: AI Guides → MVP3: AI Route"
          }, {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Growth Opportunities",
            desc: "EN content expansion, niche tourism, safety features, AI support"
          }].map(item => <div key={item.title} className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </section>

        {/* Reflection */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Reflection — My Biggest Growth</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[{
            color: "bg-primary",
            title: "Run Cross-Cultural UX Research",
            desc: "Talking with Japanese, Singaporean, Malaysian travelers changed how I design globally."
          }, {
            color: "bg-primary",
            title: "Build Modular Systems",
            desc: "A structured database is more powerful than any UI redesign."
          }, {
            color: "bg-primary",
            title: "Tell Stories with Empathy",
            desc: "What travelers said became the north star of the product."
          }, {
            color: "bg-primary",
            title: "Design with Business in Mind",
            desc: "Every page has a monetization path."
          }].map(item => <div key={item.title} className="p-6 bg-info-block rounded-xl border-border border-0">
                <div className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full ${item.color} mt-2 flex-shrink-0`} />
                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-muted/50 rounded-2xl border border-border">
              <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="text-xl text-foreground leading-relaxed mb-6">
                This project was where I learned that "designing for tourists" means "designing for uncertainty, stress, and human trust."
              </p>
              <p className="text-muted-foreground">
                If this aligns with what your team is building, I'd love to discuss travel tech, AI trip-planning, or global UX strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="container-wide mb-24">
          <h2 className="text-2xl font-medium mb-6">Skills Applied</h2>
          <div className="flex flex-wrap gap-3">
            {["Cross-Cultural UX Research", "User Interviews", "Information Architecture", "MVP Strategy", "Travel Tech", "Data-Driven Design", "UI Design", "Competitive Analysis"].map(skill => <span key={skill} className="px-4 py-2 bg-secondary rounded-full border border-border text-primary-foreground">
                {skill}
              </span>)}
          </div>
        </section>

        {/* Project Navigation */}
        <ProjectNavigation currentSlug="round-taiwan-round" />
      </main>
    </div>;
};
export default RoundTaiwanRoundCaseStudy;