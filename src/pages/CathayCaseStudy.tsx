import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import cathayCoverImage from "@/assets/cathay-cover.png";

// Export cover for use in projects.ts
export const cover = cathayCoverImage;
import cathayBackground from "@/assets/cathay-background.png";
import cathayChallenge from "@/assets/cathay-challenge.png";
import cathaySolution from "@/assets/cathay-solution.png";
import cathayQualitative from "@/assets/cathay-qualitative.png";
import cathayQuantitative1 from "@/assets/cathay-quantitative-1.png";
import cathayQuantitative2 from "@/assets/cathay-quantitative-2.png";
import cathayQuantitative3 from "@/assets/cathay-quantitative-3.png";
import cathayKpi1 from "@/assets/cathay-kpi-1.png";
import cathayKpi2 from "@/assets/cathay-kpi-2.png";
import cathayKpi3 from "@/assets/cathay-kpi-3.png";
import cathaySavingRedesign from "@/assets/cathay-saving-redesign.png";
import cathayDreamSavings from "@/assets/cathay-dream-savings.png";
import cathayTransactionRedesign from "@/assets/cathay-transaction-redesign.png";
import cathayTransferBefore from "@/assets/cathay-transfer-before.gif";
import cathayTransferAfter from "@/assets/cathay-transfer-after.gif";
import cathayUsability1 from "@/assets/cathay-usability-1.png";
import cathayUsability2 from "@/assets/cathay-usability-2.png";
import cathayUsability3 from "@/assets/cathay-usability-3.jpg";
import cathayUsabilityPrototype from "@/assets/cathay-usability-prototype.gif";
const CathayCaseStudy = () => {
  const project = getProjectBySlug("cathay-bank-app");
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
            <span className="text-sm text-muted-foreground">2023</span>
            {["iOS", "Fintech", "Lead"].map(tag => <span key={tag} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded">
                {tag}
              </span>)}
          </div>

          <h1 className="text-display-md md:text-display-lg mb-4">
            Designing Trust for 7 Million Users
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Cathay Bank App — A Large-Scale Redesign of a National Banking App
          </p>
        </section>

        {/* Hero Image */}
        <section className="container-wide mb-24">
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted">
            <img src={project?.imageUrl} alt={project?.title || "Cathay United Bank App"} className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Background */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Background</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cathay United Bank serves over <strong className="text-foreground">9 million customers</strong>, with <strong className="text-foreground">3 million active mobile banking users</strong>. The long-term goal is to fully digitize financial services.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={cathayBackground} alt="User statistics - 9 million total users, 6 million offline, 3 million online" className="max-w-sm w-full" />
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Challenge</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over <strong className="text-foreground">50% of customers own two or more accounts</strong> (TWD, foreign currency, securities, loans, etc.).
              </p>
              <p className="text-muted-foreground mb-4">Users often reported confusion about:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Why new accounts appear
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Differences between accounts
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  How to navigate multiple account types
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src={cathayChallenge} alt="Current account structure - multiple separate accounts" className="max-w-lg w-full" />
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Solution</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We introduced a new <strong className="text-foreground">parent–child account model</strong> that consolidates multiple accounts without changing the backend system.
              </p>
              <p className="text-muted-foreground mb-4">Low-permission accounts are grouped under a primary account, enabling:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Simpler navigation
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Clearer hierarchy
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Fully online self-management
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src={cathaySolution} alt="New parent-child account structure - One Account Project" className="max-w-lg w-full" />
            </div>
          </div>
        </section>

        {/* Role & Timeline */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-info-block rounded-lg">
              <h3 className="text-caption mb-4">My Role</h3>
              <p className="text-muted-foreground">
                I was responsible for <strong className="text-foreground">end-to-end UX and UI design</strong>, collaborating with:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• 2 product managers (business & app)</li>
                <li>• 4 engineers</li>
                <li>• 1 user researcher</li>
              </ul>
            </div>
            <div className="p-6 bg-info-block rounded-lg">
              <h3 className="text-caption mb-4">Timeline</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Research:</strong> 4 months</p>
                <p><strong className="text-foreground">Design & Development:</strong> 3 months</p>
              </div>
            </div>
            <div className="p-6 bg-info-block rounded-lg">
              <h3 className="text-caption mb-4">Achievement</h3>
              <p className="text-muted-foreground">
                After launch, over <strong className="text-foreground">100,000 users</strong> actively used the new child-account structure for transactions, significantly reducing workload at physical branches and increasing digital engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Design Process</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {["Discover", "Analyze", "Benchmark", "Design", "Validate"].map((step, i) => <div key={step} className="flex items-center gap-4">
                <div className="px-6 py-3 bg-secondary rounded-full text-center text-primary-foreground">
                  <span className="font-medium">{step}</span>
                </div>
                {i < 4 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
              </div>)}
          </div>
        </section>

        {/* Qualitative Research */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Qualitative Research</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Reviewed NPS & App Store feedback to identify recurring complaints
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Users were unclear about account assets, transaction details, and navigation
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Insights guided the problem framing
                </li>
              </ul>
            </div>
            <div>
              <img src={cathayQualitative} alt="Qualitative research - user feedback cards" className="w-full rounded-lg" />
            </div>
          </div>
        </section>

        {/* Quantitative Research */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Quantitative Research</h2>
          <div className="mb-8">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Analyzed business + interaction data with data analysts
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Identified friction points in navigation and account usage
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Validated qualitative pain points through metrics
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img src={cathayQuantitative1} alt="User behavior data - more function analysis" className="w-full rounded-lg border border-border" />
            <img src={cathayQuantitative2} alt="User data of saving accounts" className="w-full rounded-lg border border-border" />
          </div>
          <div className="mt-6">
            <img src={cathayQuantitative3} alt="User data of transfer flows" className="w-full rounded-lg border border-border" />
          </div>
        </section>

        {/* Competitor Analysis & UX Exploration */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-display-sm mb-6">Competitor Analysis</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Studied 30+ domestic & international banks
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Compared IA structures, menu patterns, and account hierarchy models
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Identified best practices for clarity and security
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-display-sm mb-6">UX Design Exploration</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Explored parent–child structures for account clarity
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Simplified Taiwan/foreign currency relationships
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Designed 2 UX directions for comparison
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usability Testing */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Usability Testing</h2>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 rounded-lg bg-primary-foreground">
              <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">10</p>
              <p className="text-sm text-muted-foreground">Participants</p>
            </div>
            <div className="text-center p-6 rounded-lg text-primary-foreground bg-primary-foreground">
              <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">7</p>
              <p className="text-sm text-muted-foreground">Scenario-based tasks</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-primary-foreground">
              <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">✓</p>
              <p className="text-sm text-muted-foreground">Validated hierarchy & transfer flow</p>
            </div>
          </div>
          
          {/* Usability Testing Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="overflow-hidden rounded-lg">
              <img src={cathayUsability1} alt="User interview session with prototype testing" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src={cathayUsability2} alt="User testing scheduled transfer feature" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src={cathayUsability3} alt="Team affinity mapping session" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Prototype Testing Demo */}
          <div className="flex justify-center">
            <div className="text-center">
              <h4 className="text-caption mb-4 text-base">Prototype Testing Tasks</h4>
              <div className="p-4 rounded-lg bg-transparent">
                <img src={cathayUsabilityPrototype} alt="Usability testing prototype with 7 scenario-based tasks" className="w-full max-w-xs mx-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Design Deliverables - Insight */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Design Deliverables</h2>
          
          <div className="mb-16">
            <h3 className="text-xl font-medium mb-6">Insight</h3>
            <p className="text-lg text-muted-foreground mb-6">
              From <strong className="text-foreground">2,000+ surveys & interviews</strong>, two core user needs emerged:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-info-block rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Clarity</h4>
                <p className="text-sm text-muted-foreground">Clear account assets</p>
              </div>
              <div className="p-6 bg-info-block rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Security</h4>
                <p className="text-sm text-muted-foreground">Safe & trustworthy experience</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">Key objectives:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Introduce parent–child account model
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Improve transaction details structure
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Simplify transfer process
              </li>
            </ul>
          </div>
        </section>

        {/* Saving Page */}
        <section className="container-wide mb-24">
          <h3 className="text-xl font-medium mb-6">Saving Page Redesign</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-caption mb-4 text-base">Before</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                  Old sorting was based on balance → hard to scan
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                  Large color blocks cluttered the view
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-caption mb-4 text-base">After</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Introduced parent–child hierarchy for clarity
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Removed large color blocks and aligned visual patterns
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Enabled easier navigation and clearer account relationships
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={cathaySavingRedesign} alt="Saving Page Redesign - Before and After comparison" className="w-full max-w-3xl rounded-lg" />
          </div>
        </section>

        {/* KPI Result 1 */}
        <section className="container-wide mb-24">
          <h3 className="text-xl font-medium mb-6">KPI Result 1 — Adoption of Account-Management Tools</h3>
          <div className="p-6 rounded-lg bg-primary-foreground">
            <img src={cathayKpi1} alt="KPI Result 1 - Percentage of transaction users who own sub-accounts" className="w-full" />
          </div>
        </section>

        {/* Dream Savings */}
        <section className="container-wide mb-24">
          <h3 className="text-xl font-medium mb-6">Dream Savings at Sub-account</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              Introduced goal-based savings on top of existing system
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              Designed fully within current transfer logic (no backend changes)
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              Feature highlights new account hierarchy and increases engagement
            </li>
          </ul>
          <div className="flex justify-center">
            <img src={cathayDreamSavings} alt="Dream Savings at Sub-account - Goal-based savings flow" className="w-full max-w-4xl rounded-lg" />
          </div>
        </section>

        {/* KPI Results 2 & 3 */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-6">KPI Result 2 — Adoption of Dream Savings</h3>
              <div className="p-6 rounded-lg flex justify-center bg-primary-foreground">
                <img src={cathayKpi2} alt="KPI Result 2 - 23.22% Target Savings Account Openings" className="max-w-xs" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">KPI Result 3 — Tutorial Impact</h3>
              <div className="p-6 rounded-lg bg-primary-foreground">
                <img src={cathayKpi3} alt="KPI Result 3 - Sub-Account vs. Target Savings Account Openings" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Transaction Details */}
        <section className="container-wide mb-24">
          <h3 className="text-xl font-medium mb-6">Transaction Details Redesign</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-caption mb-4 text-base">Before</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                  Old version required switching pages and segments
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-caption mb-4 text-base">After</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  New design surfaces recent months directly (NPS request)
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Added swipe card module for switching accounts
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Added transfer button based on behavior data (25% transfer after checking details)
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={cathayTransactionRedesign} alt="Transaction Details Redesign - Before and After comparison" className="w-full max-w-3xl rounded-lg" />
          </div>
        </section>

        {/* Transfer Process */}
        <section className="container-wide mb-24">
          <h3 className="text-xl font-medium mb-6">Redesigned Transfer Process</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-info-block rounded-lg text-center">
              <p className="text-3xl font-medium text-foreground mb-2">3 → 2</p>
              <p className="text-sm text-muted-foreground">Pages reduced</p>
            </div>
            <div className="p-6 bg-info-block rounded-lg text-center">
              <p className="text-3xl font-medium text-foreground mb-2">✓</p>
              <p className="text-sm text-muted-foreground">Simplified account selection</p>
            </div>
            <div className="p-6 bg-info-block rounded-lg text-center">
              <p className="text-3xl font-medium text-foreground mb-2">↓</p>
              <p className="text-sm text-muted-foreground">Reduced cognitive load</p>
            </div>
          </div>
          
          {/* Transfer Before/After GIFs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-caption mb-4 text-base">Before</h4>
              <div className="p-4 rounded-lg bg-transparent">
                <img src={cathayTransferBefore} alt="Transfer flow before redesign" className="w-full max-w-xs mx-auto rounded-lg" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-caption mb-4 text-base">After</h4>
              <div className="p-4 rounded-lg bg-transparent">
                <img src={cathayTransferAfter} alt="Transfer flow after redesign" className="w-full max-w-xs mx-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Takeaway */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Takeaway</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Two mindset shifts that shaped me</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Experienced the full UR → UX → UI product cycle, often executing research independently
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Transitioned from UX research team to UX/UI development, gaining both user and business perspectives
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">Cross-functional alignment requires "role-switching thinking"</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-info-block rounded-lg">
                  <p className="font-medium text-foreground mb-2">If I were a PM</p>
                  <p className="text-sm text-muted-foreground">What design process brings the highest efficiency?</p>
                </div>
                <div className="p-6 bg-info-block rounded-lg">
                  <p className="font-medium text-foreground mb-2">If I were an Engineer</p>
                  <p className="text-sm text-muted-foreground">What feature structure lowers implementation complexity?</p>
                </div>
                <div className="p-6 bg-info-block rounded-lg">
                  <p className="font-medium text-foreground mb-2">If I were a Data Analyst</p>
                  <p className="text-sm text-muted-foreground">What metrics truly indicate success?</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">If I could redo the project, what more could I have done?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Push data tracking earlier and drive more data-informed decisions
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Add more visual polish or brand motion where appropriate, while balancing constraints
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <ProjectNavigation currentSlug="cathay-bank-app" theme="light" />
      </main>

      <Footer />
    </div>;
};
export default CathayCaseStudy;