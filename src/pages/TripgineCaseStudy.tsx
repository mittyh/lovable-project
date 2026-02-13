import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, FileText, Layers, PenTool, Code, Cpu, Users, Clock, Wrench, CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import tripgineCoverImage from "@/assets/tripgine-cover.png";
import tripgineVersion1 from "@/assets/tripgine-version-1.png";
import tripgineVersion2 from "@/assets/tripgine-version-2.png";
import tripgineVersion3 from "@/assets/tripgine-version-3.png";
import tripginePrd1 from "@/assets/tripgine-prd-1.png";
import tripginePrd2 from "@/assets/tripgine-prd-2.png";
import tripginePrd3 from "@/assets/tripgine-prd-3.png";
import tripginePrd4 from "@/assets/tripgine-prd-4.png";
import tripginePrd5 from "@/assets/tripgine-prd-5.png";
import tripginePrd6 from "@/assets/tripgine-prd-6.png";

// Export cover for use in projects.ts
export const cover = tripgineCoverImage;

// PRD Highlights data with images and critical thinking
const prdHighlights = [
  {
    img: tripginePrd1,
    title: "Purpose",
    whyItMatters: "I defined the website not as a marketing page, but as a sales enablement tool and recruitment funnel. This decision shaped the hero messaging, CTA hierarchy, and overall IA, ensuring the site supported real business conversations instead of surface-level branding."
  },
  {
    img: tripginePrd2,
    title: "Scope (MVP vs Long-term)",
    whyItMatters: "Prioritized a single-page MVP to validate core messaging before investing in SEO-driven multi-page expansion. This prevented scope creep and kept the 14-day deadline achievable."
  },
  {
    img: tripginePrd3,
    title: "Role-based Information Architecture",
    whyItMatters: "Organized content by user roles (Passengers, Drivers, Business Partners) rather than company departments. This ensured each visitor type found relevant CTAs immediately."
  },
  {
    img: tripginePrd4,
    title: "SEO as a Product Requirement",
    whyItMatters: "Embedded SEO keywords directly into PRD requirements, ensuring copy and H1/H2 hierarchy were designed for search visibility from day one—not retrofitted later."
  },
  {
    img: tripginePrd5,
    title: "Style Brief & Design Constraints",
    whyItMatters: "Established brand tone (Professional, Compliant, Trustworthy) before any visual design began. This prevented the 'Dark Tech' direction mistake and guided the final human-centered aesthetic."
  },
  {
    img: tripginePrd6,
    title: "Header/Footer Navigation Brief",
    whyItMatters: "Defined navigation structure and anchor link behavior upfront. This ensured the IA translated cleanly into UI without structural rework."
  }
];

const TripgineCaseStudy = () => {
  const project = getProjectBySlug("tripgine-b2b");
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
            <span className="text-sm text-muted-foreground">2024</span>
            {["B2B", "PRD-Driven", "Product Design", "Solo Designer"].map(tag => <span key={tag} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                {tag}
              </span>)}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Tripgine B2B — PRD-Driven<br className="hidden md:block" /> Product Design
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Transformed 5 fragmented CEO pitch decks into one cohesive B2B landing page in 14 days — using PRD writing to create clarity from chaos.
          </p>
        </section>

        {/* Cover Image */}
        <section className="container-wide mb-24">
          <div className="overflow-hidden rounded-2xl">
            <img src={cover} alt="Tripgine B2B Landing Page" className="w-full h-auto" />
          </div>
        </section>

        {/* Project Context */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Role</h3>
              <p className="text-lg text-foreground">Product Designer</p>
              <p className="text-sm text-muted-foreground mt-1">PM + UX + IA + UI</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Timeline</h3>
              <p className="text-lg text-foreground">14 Days</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Team</h3>
              <p className="text-lg text-foreground">1 Designer + 1 Engineer</p>
              <p className="text-sm text-muted-foreground mt-1">AI-assisted</p>
            </div>
            <div className="p-6 bg-info-block rounded-xl border-border border-0">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Tools</h3>
              <p className="text-sm text-foreground">Grok, Figma, VS Code, HTML-to-Design</p>
            </div>
          </div>
        </section>

        {/* PRD as Evidence Intro */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-foreground">
                PRD as Evidence — From Business Chaos to Product Direction
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed italic">
                <p>I didn't start this project with screens.</p>
                <p>I started by writing a PRD to make sense of five conflicting business decks.</p>
                <p className="text-foreground font-medium not-italic">The PRD became the backbone of every design decision that followed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Background & Problem */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Background & Problem</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Tripgine</strong> is the B2B branch of Tripool, serving long-term elderly care institutions, travel agencies, taxi fleets, corporate transport, schools & government units.
              </p>
              
              <div className="p-6 rounded-xl border-destructive/20 bg-secondary-foreground border-0">
                <h3 className="text-lg font-medium text-foreground mb-4">Before this project, we had:</h3>
                <ul className="space-y-2">
                  {["No B2B website", "5 fragmented PPT decks (sales/investor/partner slides)", "No unified message or IA", "No brand direction"].map(item => <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>

              <div className="p-6 rounded-xl border-primary/20 bg-primary-foreground border-0">
                <h3 className="text-lg font-medium text-foreground mb-4">The business needed a landing page that could:</h3>
                <ul className="space-y-2">
                  {["Support sales pitches", "Explain AI dispatch clearly", "Provide legitimacy during business visits", "Allow partners to understand services quickly", "Onboard drivers", "Improve SEO in Taiwan"].map(item => <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>)}
                </ul>
              </div>

              <p className="text-xl font-medium text-foreground">
                My job was to turn five inconsistent decks into one coherent product story — fast.
              </p>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">What I Owned</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            icon: <FileText className="w-6 h-6" />,
            title: "PRD Creation",
            desc: "Created Chinese PRD using AI-assisted synthesis"
          }, {
            icon: <Layers className="w-6 h-6" />,
            title: "Information Architecture",
            desc: "Consolidated all information into a unified IA"
          }, {
            icon: <PenTool className="w-6 h-6" />,
            title: "UX Writing",
            desc: "Wrote all Chinese UX copy"
          }, {
            icon: <Code className="w-6 h-6" />,
            title: "Prototyping",
            desc: "Worked with engineer on rapid AI → HTML prototyping"
          }, {
            icon: <Cpu className="w-6 h-6" />,
            title: "Figma Conversion",
            desc: "Imported HTML → Figma wireframes"
          }, {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Visual Design",
            desc: "Designed final visual system, iterated 3 versions"
          }].map(item => <div key={item.title} className="p-6 bg-info-block rounded-xl border-border border-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>)}
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-xl border-border border-0">
            <p className="text-lg text-foreground">
              This project shows my ability to <strong>align business goals</strong>, <strong>make decisions from ambiguity</strong>, <strong>use AI to accelerate early-phase design</strong>, and <strong>ship fast with high clarity</strong>.
            </p>
          </div>
        </section>

        {/* AI-Enhanced Workflow */}
        <section className="container-wide mb-24">
          <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-medium">AI-Enhanced Workflow</h2>
                <p className="text-muted-foreground">AI was not a shortcut — it was my collaborator.</p>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-6">
              {[{
              step: "1",
              title: "Information Synthesis (PRD Drafting)",
              desc: "Fed all CEO decks into Grok to extract business requirements, inconsistencies, target audiences, and hidden assumptions. Then wrote a structured PRD in Chinese."
            }, {
              step: "2",
              title: "AI Wireframe Generation",
              desc: "Prompted Grok with PRD sections, IA categories, content hierarchy, CTA strategy, and SEO needs. Grok generated the first HTML wireframe."
            }, {
              step: "3",
              title: "Engineer → Grok → HTML Scaffold",
              desc: "Our engineer used Grok inside VS Code to produce a static HTML structure: hero layout, navigation, three main services, contact form, and FAQ section."
            }, {
              step: "4",
              title: "HTML → Figma Conversion",
              desc: "Using HTML-to-Design plugin, converted the scaffold to editable frames. This sped up early UX framing by 60–70%."
            }, {
              step: "5",
              title: "Nano Banana → Visual Exploration",
              desc: "Generated hero images based on AI dispatch, driver onboarding, long-term elderly care scenarios, and fleet operations."
            }, {
              step: "6",
              title: "UI Design & UX Writing",
              desc: "Rebuilt hierarchy, wrote clear Chinese messaging, created iconography & spacing rules, improved accessibility & tone."
            }].map(item => <div key={item.step} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* PRD Highlights - Redesigned as Evidence Blocks */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">PRD Highlights</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Key decisions from the PRD that shaped every downstream design choice.
          </p>
          
          <div className="space-y-16">
            {prdHighlights.map((item, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                {/* PRD Screenshot */}
                <div className="space-y-3">
                  <span className="inline-block text-xs uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    PRD Excerpt
                  </span>
                  <img 
                    src={item.img} 
                    alt={`PRD Highlight - ${item.title}`}
                    className="w-full rounded-xl border border-border"
                  />
                </div>
                
                {/* Critical Thinking Layer */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-medium">
                    PRD Highlight #{index + 1} — {item.title}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">
                      Why This Matters
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.whyItMatters}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Three Design Versions - Updated with real images */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">The Three Design Versions</h2>
          <p className="text-xl text-muted-foreground mb-12">Visual storytelling of the design evolution</p>

          <div className="space-y-16">
            {/* Version 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img 
                  src={tripgineVersion1} 
                  alt="AI Wireframe Skeleton" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4 bg-secondary text-primary-foreground">
                  Version 1
                </div>
                <h3 className="text-2xl font-medium mb-4">AI Wireframe Skeleton</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    AI-generated layout, no branding
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    Pure structure for IA validation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    Fastest way to remove blank-screen anxiety
                  </li>
                </ul>
                <p className="mt-4 text-foreground font-medium">It gave me a starting point, not a design.</p>
              </div>
            </div>

            {/* Version 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4 bg-secondary text-primary-foreground">
                  Version 2 — Wrong Direction
                </div>
                <h3 className="text-2xl font-medium mb-4">Dark Tech Direction</h3>
                <div className="p-4 bg-muted/50 rounded-lg mb-4">
                  <p className="text-muted-foreground italic">
                    "Our success cases are from long-term elderly care. It must feel safe and warm, not cold and futuristic."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— CEO Feedback</p>
                </div>
                <div className="p-4 rounded-lg border-destructive/20 bg-primary-foreground border-0">
                  <p className="text-foreground font-medium flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Key realization: Tech ≠ Trust
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Especially when dealing with elderly transportation.</p>
                </div>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-2xl border border-border">
                <img 
                  src={tripgineVersion2} 
                  alt="Dark Tech Direction" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Version 3 - Final */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl border border-primary/20">
                <img 
                  src={tripgineVersion3} 
                  alt="Human-Centered Trustworthy Design" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4 bg-secondary text-primary-foreground">
                  Final Version ✓
                </div>
                <h3 className="text-2xl font-medium mb-4">Human-Centered, Trustworthy Design</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    Softer blue palette, cleaner hierarchy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    Warm imagery featuring real human scenarios
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    Clearer Chinese copy, more breathing room
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    Tone adjusted for conservative B2B audiences
                  </li>
                </ul>
                <p className="mt-4 text-foreground font-medium">A page that both business partners and long-term care providers felt comfortable and confident with.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Information Architecture */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Information Architecture</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Designed a service-first IA based on real business requirements, not assumptions.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[{
            icon: <Sparkles className="w-5 h-5" />,
            label: "Hero Section"
          }, {
            icon: <Cpu className="w-5 h-5" />,
            label: "AI Dispatch"
          }, {
            icon: <ArrowRight className="w-5 h-5" />,
            label: "Airport Transfer"
          }, {
            icon: <Users className="w-5 h-5" />,
            label: "Driver Onboarding"
          }, {
            icon: <FileText className="w-5 h-5" />,
            label: "About Us"
          }, {
            icon: <PenTool className="w-5 h-5" />,
            label: "Contact + FAQ"
          }].map((item, index) => <div key={item.label} className="p-4 bg-info-block rounded-xl border-border text-center border-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">Section {index + 1}</p>
              </div>)}
          </div>
        </section>

        {/* Deliverables */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Deliverables</h2>
          <div className="flex flex-wrap gap-4">
            {["PRD (Chinese)", "Information Architecture", "Wireframes", "3 Design Versions", "Final Landing Page"].map(item => <div key={item} className="px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-foreground font-medium">{item}</span>
              </div>)}
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container-wide mb-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">Key Learnings</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[{
            num: "1",
            title: "Business clarity comes before UI clarity",
            highlight: false
          }, {
            num: "2",
            title: "AI accelerates designers who provide structure — and overwhelms those who don't",
            highlight: true
          }, {
            num: "3",
            title: "Designing for long-term elderly care requires emotional sensitivity, not just visual polish",
            highlight: true
          }, {
            num: "4",
            title: "PRD writing improves design accuracy by 50%",
            highlight: false
          }, {
            num: "5",
            title: "A wrong design direction is not wasted time — it's directional data",
            highlight: true
          }].map(item => <div key={item.num} className={`p-6 rounded-xl border ${item.highlight ? 'bg-primary/5 border-primary/20' : 'bg-info-block border-border'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full font-bold flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {item.num}
                  </div>
                  <p className="text-lg text-foreground">{item.title}</p>
                </div>
              </div>)}
          </div>
        </section>

        {/* Final Reflection */}
        <section className="container-wide mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Final Reflection</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                This project showed me what it means to design with both <strong className="text-foreground">precision</strong> (AI workflows, PRD, IA) and <strong className="text-foreground">empathy</strong> (understanding long-term care providers).
              </p>
              <p className="text-xl text-foreground font-medium">
                AI will never replace designers — but designers who can't collaborate with AI will be left behind.
              </p>
              <p>
                And it proved that with the right workflow, a single designer can ship a full B2B landing page in 14 days that aligns business, product, and trust.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="container-wide mb-24">
          <h2 className="text-2xl font-medium mb-6">Skills Applied</h2>
          <div className="flex flex-wrap gap-3">
            {["PRD Writing", "Product Strategy", "Information Architecture", "UX Writing (Chinese)", "B2B Landing Page", "AI-Assisted Design", "Cross-functional Collaboration", "Design Systems"].map(skill => <span key={skill} className="px-4 py-2 bg-secondary rounded-full border border-border text-primary-foreground">
                {skill}
              </span>)}
          </div>
        </section>

        {/* Project Navigation */}
        <ProjectNavigation currentSlug="tripgine-b2b" />
      </main>
    </div>;
};
export default TripgineCaseStudy;
