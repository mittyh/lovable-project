import { Link } from "react-router-dom";
import { ArrowLeft, Search, AlertTriangle, Lightbulb, CheckCircle2, XCircle, Target, Users, Layers, TrendingDown } from "lucide-react";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import onecarCoverImage from "@/assets/onecar-cover.png";
import onecarFlow1 from "@/assets/onecar-flow-1.png";
import onecarFlow2 from "@/assets/onecar-flow-2.png";
import onecarFlow3 from "@/assets/onecar-flow-3.png";
import onecarFlow4 from "@/assets/onecar-flow-4.png";
import onecarFlow5 from "@/assets/onecar-flow-5.png";
import onecarResearch1 from "@/assets/onecar-research-1.png";
import onecarResearch2 from "@/assets/onecar-research-2.png";

// Export cover for use in projects.ts
export const cover = onecarCoverImage;
const OneCarCaseStudy = () => {
  const project = getProjectBySlug("onecar-mvp");
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
            <span className="text-sm text-muted-foreground">2022</span>
            {["MVP", "UX Research", "Travel Tech", "Failure Analysis"].map(tag => <span key={tag} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                {tag}
              </span>)}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Designing an MVP That Failed — and Learning from a 90% Drop-Off
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            OneCar — How usability testing and analytics revealed a misaligned product positioning
          </p>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            An MVP experiment to test whether foreign travelers can plan multi-day, multi-stop transportation through a simple online tool. Though the MVP didn't succeed, this project gave me substantial experience in cross-functional collaboration, usability testing, and failure analysis.
          </p>
        </section>

        {/* Cover Image */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl">
            <img src={cover} alt="OneCar MVP Transportation App" className="w-full h-auto" />
          </div>
        </section>

        {/* Project Context */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Company</h3>
              <p className="text-lg text-foreground">Tripool (Taiwan)</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Year</h3>
              <p className="text-lg text-foreground">2024</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Role</h3>
              <p className="text-lg text-foreground">UX Designer</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Outcome</h3>
              <p className="text-lg text-foreground">MVP Failed → Learnings</p>
            </div>
          </div>
        </section>

        {/* What I Owned */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What I Owned</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary/5 rounded-xl border-primary/20 border-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">UX Research & Problem Framing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reviewed PM's initial PRD and identified unclear assumptions</li>
                <li>• Ran 3 structured usability tests (Free Exploration + Task Pressure)</li>
              </ul>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border-primary/20 border-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Interaction Design & UI</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Designed Landing Page</li>
                <li>• Designed Route Calculation Page</li>
              </ul>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border-primary/20 border-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Cross-functional Collaboration</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Worked closely with PM and backend to clarify logic</li>
                <li>• Adjusted flow based on technical feasibility</li>
              </ul>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">MVP Evaluation & Failure Analysis</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Analyzed user behaviors (page drop-offs, confusion points)</li>
                <li>• Proposed a "refocus strategy" for next iteration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem Background */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Problem Background</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Tripool's data showed users mostly booked <strong className="text-foreground">single-point transfers</strong>, but not multi-stop trips.
              </p>
              <p>
                The company hoped OneCar could highlight the convenience of Tripool's inter-city transportation and let travelers "chain destinations" without planning complicated transfers.
              </p>
              <div className="p-6 rounded-xl border-destructive/20 border-0 bg-zinc-50">
                <h3 className="text-lg font-medium mb-4 text-primary">However, the MVP tried to solve too many problems:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {["Transportation", "Accommodation choices", "One-day tours", "Route optimization", "Price comparison", "Day-pass system"].map(item => <div key={item} className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>)}
                </div>
                <p className="mt-4 font-medium text-primary">
                  This created heavy cognitive load and unclear product identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Original MVP Flow */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">The MVP Flow (Original)</h2>
          <div className="grid md:grid-cols-6 gap-4 mb-8">
            {[{
            step: "1",
            label: "Choose themed route"
          }, {
            step: "2",
            label: "Select stops (city → accommodation → attractions)"
          }, {
            step: "3",
            label: "Auto-generate best route"
          }, {
            step: "4",
            label: "Add optional one-day tours"
          }, {
            step: "5",
            label: "View price comparison"
          }, {
            step: "6",
            label: "Edit → proceed → checkout"
          }].map(item => <div key={item.step} className="p-4 bg-info-block rounded-xl border-border text-center border-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-medium flex items-center justify-center mx-auto mb-2">
                  {item.step}
                </div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>)}
          </div>
          
          <div className="p-6 rounded-xl border-destructive/20 bg-zinc-50 border-0">
            <h3 className="text-lg font-medium mb-4 text-primary">Even internally, the team struggled to define:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {["Is this a transportation tool?", "A trip planner?", "A day-tour marketplace?", "A pass system?"].map(q => <div key={q} className="p-3 bg-background/50 rounded-lg text-center">
                  <span className="text-muted-foreground">{q}</span>
                </div>)}
            </div>
            <p className="mt-4 font-medium text-primary">Users experienced the same confusion.</p>
          </div>
        </section>

        {/* MVP Interface */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">MVP Interface</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The booking flow I designed for the MVP, from landing page to order confirmation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { img: onecarFlow1, label: "Landing Page" },
              { img: onecarFlow2, label: "Route Input" },
              { img: onecarFlow3, label: "Route Details" },
              { img: onecarFlow4, label: "Order Summary" },
              { img: onecarFlow5, label: "Confirmation" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="bg-muted rounded-xl overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  {i + 1}. {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* User Research */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">User Research</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-lg font-medium mb-4">Testing Format</h3>
              <p className="text-muted-foreground mb-4">
                I conducted UX testing for three users (Taiwanese but planning domestic trips similarly to foreign travelers):
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-medium text-primary mb-1">Stage 1 – Free Exploration (20 min)</h4>
                  <p className="text-sm text-muted-foreground">"Plan a trip including Alishan, Hehuanshan, and Qingjing."</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-medium text-primary mb-1">Stage 2 – Task Pressure Test</h4>
                  <p className="text-sm text-muted-foreground">Add & remove tours, change airport, trigger discount logic, interpret route auto-calculation</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-lg font-medium mb-4">Key Findings</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 text-primary bg-primary-foreground">1</div>
                  <div>
                    <h4 className="font-medium">Purpose was unclear</h4>
                    <p className="text-sm text-muted-foreground">Users couldn't tell if this was a route planner, day-tour tool, accommodation helper, or booking tool</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 text-primary bg-primary-foreground">2</div>
                  <div>
                    <h4 className="font-medium">Hierarchy was confusing</h4>
                    <p className="text-sm text-muted-foreground">Users expected to choose destinations first, not accommodation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5 text-primary bg-primary-foreground">3</div>
                  <div>
                    <h4 className="font-medium">Decision-making overload</h4>
                    <p className="text-sm text-muted-foreground">Multiple travel stages merged into one screen caused anxiety and decision paralysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Quote */}
          <div className="p-8 rounded-2xl border-border bg-primary-foreground border-0">
            <blockquote className="text-xl md:text-2xl text-foreground italic text-center">
              "Am I booking a package? Or planning my whole trip? I don't know what this page wants me to do."
            </blockquote>
            <p className="text-center text-muted-foreground mt-4">— Test Participant</p>
          </div>

          {/* Internal Usability Test Documentation */}
          <div className="mt-12">
            <h3 className="text-xl font-medium mb-4">Internal Usability Test Documentation</h3>
            <p className="text-muted-foreground mb-6">
              The following materials are from our internal usability testing sessions, 
              documenting core research questions and participant feedback.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <img 
                  src={onecarResearch1} 
                  alt="Usability test design and core questions" 
                  className="w-full rounded-xl border border-border"
                />
                <p className="text-sm text-muted-foreground">
                  Test design covering interaction, logic, and strategy levels
                </p>
              </div>
              <div className="space-y-3">
                <img 
                  src={onecarResearch2} 
                  alt="Participant notes from usability testing" 
                  className="w-full rounded-xl border border-border"
                />
                <p className="text-sm text-muted-foreground">
                  Detailed participant feedback from 3 test sessions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quantitative Observations */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Quantitative Observations</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[{
            icon: <TrendingDown className="w-6 h-6" />,
            stat: "Extreme",
            label: "Drop-off Rate",
            desc: "Landing → Route Page"
          }, {
            icon: <XCircle className="w-6 h-6" />,
            stat: "~0%",
            label: "Next Step",
            desc: "Users who reached 'next step' button"
          }, {
            icon: <AlertTriangle className="w-6 h-6" />,
            stat: "High",
            label: "Back to Home",
            desc: "Users clicking back after entering route planner"
          }, {
            icon: <XCircle className="w-6 h-6" />,
            stat: "0",
            label: "Full Checkout",
            desc: "No user completed the full flow"
          }].map(item => <div key={item.label} className="p-6 rounded-xl border-destructive/20 text-center bg-primary-foreground border-0">
                <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <p className="text-2xl font-bold text-destructive mb-1">{item.stat}</p>
                <p className="text-foreground font-medium">{item.label}</p>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>)}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            This confirmed severe comprehension issues.
          </p>
        </section>

        {/* Root Cause Analysis */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Root Cause Analysis</h2>
          <p className="text-xl text-muted-foreground mb-8">Why the MVP Failed</p>
          
          <div className="space-y-6">
            {[{
            num: "1",
            title: "Product tried to solve multiple phases at once",
            desc: "A traveler's planning stages (destinations → accommodation → activities → transport) were all mixed into a single interface."
          }, {
            num: "2",
            title: "Terminology mismatch",
            desc: "\"Travel Pass\" implied JR Pass or Eurail Pass. Users expected multi-modal transportation, not Tripool-only rides. \"One-day tours\" implied sightseeing packages, not transportation."
          }, {
            num: "3",
            title: "Auto-route engine lacked transparency",
            desc: "Users couldn't predict how routes were generated, leading to distrust."
          }, {
            num: "4",
            title: "MVP lost focus on the intended question",
            desc: "Original hypothesis was \"Do travelers need simple multi-day transportation?\" But the UI asked about accommodation, tours, route optimization, day passes, and more. The test became invalid."
          }].map(item => <div key={item.num} className="p-6 bg-info-block rounded-xl border-border border-0">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full font-bold flex items-center justify-center flex-shrink-0 text-primary bg-primary-foreground">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </section>

        {/* Redesign Proposal */}
        <section className="container-wide mb-24">
          <div className="p-8 md:p-12 bg-primary/5 rounded-2xl border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Redesign Proposal</h2>
            <p className="text-lg text-muted-foreground mb-8">
              My recommendations to bring the product back to the true MVP goal:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-medium text-primary mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Focus on One Thing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Help users easily book transportation between multiple destinations.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Remove or de-prioritize:</p>
                  {["Accommodation suggestions", "One-day tour modules", "Automatic route optimization", "Day-pass messaging", "Travel-pass branding"].map(item => <div key={item} className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>)}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Revised Positioning
                </h3>
                <div className="p-4 bg-background/50 rounded-lg mb-4">
                  <p className="text-foreground font-medium italic">
                    "Enter 2–5 destinations. We handle all the inter-city transportation."
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Simplified flow:</p>
                  {["Input destinations", "System calculates rides (Tripool only)", "Show transparent pricing", "User submits order", "(Manual follow-up OK for MVP)"].map((item, i) => <div key={item} className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">{i + 1}</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {["Clear mental model", "Lower cognitive load", "More accurate MVP validation", "Lower development effort"].map(benefit => <div key={benefit} className="p-4 bg-background/50 rounded-lg text-center">
                  <CheckCircle2 className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>)}
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What I Learned</h2>
          <p className="text-xl text-muted-foreground mb-8">My Personal Growth</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            title: "MVPs must validate one thing—not many",
            desc: "This project taught me to ruthlessly remove features if they interfere with the hypothesis."
          }, {
            title: "Ambiguous product identity kills conversion",
            desc: "Users need to understand the product within seconds."
          }, {
            title: "Usability tests on early versions are valuable",
            desc: "Every confusion point was discovered before a full launch."
          }, {
            title: "Cross-functional alignment is crucial",
            desc: "I helped PM/engineer align around the simplified scope."
          }, {
            title: "Designers can drive product strategy",
            desc: "My analysis directly influenced the recommended direction for the next iteration."
          }].map(item => <div key={item.title} className="p-6 bg-info-block rounded-xl border-border border-0">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>)}
          </div>
        </section>

        {/* Skills */}
        <section className="container-wide mb-24">
          <h2 className="text-2xl font-medium mb-6">Skills Applied</h2>
          <div className="flex flex-wrap gap-3">
            {["UX Research", "Usability Testing", "MVP Strategy", "Failure Analysis", "Cross-functional Collaboration", "Product Positioning", "Interaction Design"].map(skill => <span key={skill} className="px-4 py-2 bg-secondary rounded-full text-white border border-border">
                {skill}
              </span>)}
          </div>
        </section>

        {/* Project Navigation */}
        <ProjectNavigation currentSlug="onecar-mvp" />
      </main>
    </div>;
};
export default OneCarCaseStudy;