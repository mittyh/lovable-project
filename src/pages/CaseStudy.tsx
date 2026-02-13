import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import projectCathay from "@/assets/project-cathay.jpg";
import projectCube from "@/assets/project-cube.jpg";
import projectCrypto from "@/assets/project-crypto.jpg";
import projectTravel from "@/assets/project-travel.jpg";
import projectHealth from "@/assets/project-health.jpg";
import projectFx from "@/assets/project-fx.jpg";

const caseStudies = {
  "cathay-bank-app": {
    title: "Cathay Bank App",
    year: "2023",
    tags: ["iOS", "Fintech", "Lead"],
    imageUrl: projectCathay,
    overview: {
      problem: "Cathay United Bank's mobile app served 4M+ users but suffered from fragmented navigation, inconsistent UI patterns, and a transfer flow with high drop-off rates.",
      role: "Lead Product Designer — I owned the end-to-end redesign of the account & transfer experience, conducted user research, and established design guidelines for the mobile team.",
      timeline: "8 months",
      team: "2 designers, 1 PM, 6 engineers",
    },
    constraints: [
      "Regulatory compliance requirements for financial transactions",
      "Legacy backend systems with limited API flexibility",
      "Serving diverse user demographics (18-70+ age range)",
      "Must maintain business continuity during phased rollout",
    ],
    research: {
      methods: ["User interviews (n=24)", "Analytics deep-dive", "Competitive analysis", "Usability testing"],
      insights: [
        "67% of users couldn't complete a transfer in under 3 minutes",
        "Account switching was the #1 support ticket category",
        "Users expected biometric confirmation but got password prompts",
        "Visual hierarchy made key actions hard to find",
      ],
    },
    process: [
      "Mapped existing user flows and identified friction points",
      "Created low-fi wireframes focusing on transfer simplification",
      "Established a component library for consistency",
      "Ran 3 rounds of usability testing with iterative refinement",
      "Collaborated with engineering on technical constraints",
    ],
    decisions: [
      {
        title: "Single-screen transfer",
        description: "Reduced the 5-step transfer flow to a single scrollable screen with smart defaults, cutting average completion time by 40%.",
      },
      {
        title: "Contextual account switching",
        description: "Instead of a separate account management screen, users can switch accounts contextually within any transaction flow.",
      },
      {
        title: "Progressive disclosure",
        description: "Advanced options are hidden by default but easily accessible, reducing cognitive load for casual users.",
      },
    ],
    results: [
      { metric: "Task completion rate", value: "+28%", description: "for transfer flows" },
      { metric: "Average session time", value: "-35%", description: "users complete tasks faster" },
      { metric: "Support tickets", value: "-42%", description: "related to account issues" },
      { metric: "App Store rating", value: "4.2 → 4.6", description: "after redesign launch" },
    ],
  },
  "cube-bank-app": {
    title: "CUBE Bank App",
    year: "2022",
    tags: ["Mobile", "Banking", "UX"],
    imageUrl: projectCube,
    overview: {
      problem: "CUBE, a digital-first bank, needed a credit card and banking experience that felt modern, trustworthy, and simple enough for first-time digital banking users.",
      role: "Product Designer — Designed the credit card management module, spending insights, and onboarding flow.",
      timeline: "6 months",
      team: "1 designer, 1 PM, 4 engineers",
    },
    constraints: [
      "Competing in a crowded digital banking market",
      "Building trust with users new to digital-only banking",
      "Tight timeline for market launch",
      "Limited brand guidelines to work from",
    ],
    research: {
      methods: ["Competitor analysis", "User interviews (n=16)", "Card sorting", "Prototype testing"],
      insights: [
        "Users wanted spending insights but found existing tools overwhelming",
        "Trust signals (security badges, clear confirmations) were critical",
        "Young professionals valued quick actions over comprehensive menus",
        "Bill due dates were frequently missed due to poor visibility",
      ],
    },
    process: [
      "Defined core user journeys for credit card management",
      "Sketched multiple concepts for spending visualization",
      "Built interactive prototypes for A/B testing",
      "Created motion design specifications for micro-interactions",
      "Documented design system components for handoff",
    ],
    decisions: [
      {
        title: "Glanceable spending cards",
        description: "Spending categories shown as visual cards with progress bars, letting users understand their habits at a glance.",
      },
      {
        title: "Smart notifications",
        description: "Contextual push notifications that arrive at the right time (before due dates, unusual spending patterns).",
      },
      {
        title: "One-tap actions",
        description: "Most common actions (pay bill, freeze card, view statement) accessible from the home screen.",
      },
    ],
    results: [
      { metric: "Onboarding completion", value: "89%", description: "users complete signup flow" },
      { metric: "Daily active users", value: "+45%", description: "month over month growth" },
      { metric: "Bill payment on-time", value: "+62%", description: "reduction in late payments" },
      { metric: "NPS score", value: "72", description: "above industry average" },
    ],
  },
  "newotc-crypto": {
    title: "NewOTC Crypto Exchange",
    year: "2021",
    tags: ["Web", "Crypto", "Branding"],
    imageUrl: projectCrypto,
    overview: {
      problem: "NewOTC needed a professional trading platform for institutional OTC crypto transactions that conveyed trust and sophistication in a volatile market.",
      role: "Lead Designer — Complete design and branding from scratch, including web platform, trading interfaces, and brand identity.",
      timeline: "4 months",
      team: "1 designer, 2 PMs, 5 engineers",
    },
    constraints: [
      "Institutional users expect Bloomberg-level professional tools",
      "Crypto market volatility requires real-time data handling",
      "Regulatory uncertainty affecting feature scope",
      "Building brand trust in a skeptical market",
    ],
    research: {
      methods: ["Stakeholder interviews", "Competitive analysis", "Expert reviews", "Trading desk shadowing"],
      insights: [
        "Traders prioritize information density over visual simplicity",
        "Quick order execution is more important than aesthetics",
        "Multi-monitor setups are standard; design must scale",
        "Brand colors matter for quick platform recognition",
      ],
    },
    process: [
      "Developed brand identity with professional, trustworthy positioning",
      "Created information architecture for complex trading workflows",
      "Designed responsive layouts for multi-monitor setups",
      "Built a dark/light theme system for trader preference",
      "Established iconography and data visualization standards",
    ],
    decisions: [
      {
        title: "Dense but organized",
        description: "High information density with clear visual hierarchy, using spacing and color to group related data.",
      },
      {
        title: "Keyboard-first interactions",
        description: "Power users can execute trades entirely via keyboard shortcuts, matching their muscle memory.",
      },
      {
        title: "Trust through transparency",
        description: "All fees, rates, and execution details visible upfront—no hidden information.",
      },
    ],
    results: [
      { metric: "Trading volume", value: "$50M+", description: "processed in first quarter" },
      { metric: "User satisfaction", value: "4.5/5", description: "trader feedback score" },
      { metric: "Onboarding time", value: "-50%", description: "for new institutional clients" },
      { metric: "Brand recognition", value: "Top 5", description: "in Taiwan OTC market" },
    ],
  },
  "kkday-airline": {
    title: "KKday Airline Ticketing",
    year: "2022–2023",
    tags: ["iOS", "Android", "Travel"],
    imageUrl: projectTravel,
    overview: {
      problem: "KKday, a leading travel platform, was expanding into airline ticketing and needed a booking experience that matched their brand while handling the complexity of flight search.",
      role: "Product Designer — Designed the complete airline booking flow for iOS, Android, and Web, collaborating with the design system team.",
      timeline: "10 months",
      team: "3 designers, 2 PMs, 8 engineers",
    },
    constraints: [
      "Integrating with multiple airline APIs with different data formats",
      "Maintaining KKday's playful brand in a traditionally serious category",
      "Supporting 8+ languages and multiple currencies",
      "Competing with established players (Skyscanner, Google Flights)",
    ],
    research: {
      methods: ["User journey mapping", "Competitor UX audit", "Usability testing", "A/B testing"],
      insights: [
        "Price comparison is the #1 user need, but date flexibility matters too",
        "Users abandon when they can't understand fare differences",
        "Mobile booking requires different patterns than desktop",
        "Baggage and seat selection cause confusion in most competitors",
      ],
    },
    process: [
      "Mapped the entire booking funnel from search to confirmation",
      "Created responsive components for the design system",
      "Designed for progressive disclosure of flight details",
      "Ran guerrilla usability tests at airports",
      "Collaborated with localization team on multi-language support",
    ],
    decisions: [
      {
        title: "Calendar-first search",
        description: "Visual calendar showing price by date, letting flexible travelers find the best deals quickly.",
      },
      {
        title: "Fare comparison cards",
        description: "Side-by-side fare comparison with clear icons for included amenities (baggage, meals, changes).",
      },
      {
        title: "Step-by-step mobile flow",
        description: "On mobile, complex forms broken into focused single-task screens with progress indicator.",
      },
    ],
    results: [
      { metric: "Search-to-book rate", value: "+34%", description: "conversion improvement" },
      { metric: "Booking completion", value: "78%", description: "from passenger details to payment" },
      { metric: "Average booking time", value: "4.2 min", description: "competitive with industry leaders" },
      { metric: "User satisfaction", value: "4.4/5", description: "post-booking survey score" },
    ],
  },
  "taipei-mhealth": {
    title: "Taipei mHealth",
    year: "2018",
    tags: ["iOS", "Healthcare", "Gov"],
    imageUrl: projectHealth,
    overview: {
      problem: "Taipei City government wanted to give citizens access to their health records digitally, but faced challenges around data privacy, accessibility, and user trust in government apps.",
      role: "UX Designer — Designed the iOS app connecting citizens with medical records, vaccination history, and wellness tracking.",
      timeline: "6 months",
      team: "2 designers, 1 PM, 4 engineers",
    },
    constraints: [
      "Strict healthcare data privacy regulations (HIPAA-equivalent)",
      "Serving users across all age groups and tech literacy levels",
      "Integration with legacy hospital systems",
      "Government procurement and approval processes",
    ],
    research: {
      methods: ["User interviews", "Accessibility audit", "Stakeholder workshops", "Paper prototype testing"],
      insights: [
        "Elderly users needed larger text and simpler navigation",
        "Parents wanted easy access to children's vaccination records",
        "Trust in data security was a major concern",
        "Users wanted to share records with doctors easily",
      ],
    },
    process: [
      "Conducted accessibility-focused design from the start",
      "Created user personas across age demographics",
      "Designed for offline-first with sync capabilities",
      "Built in security explanations at key moments",
      "Tested with actual citizens at community centers",
    ],
    decisions: [
      {
        title: "Accessibility-first design",
        description: "Large touch targets, high contrast modes, and screen reader optimization built into the core experience.",
      },
      {
        title: "Family accounts",
        description: "Parents can manage children's records from one login, with clear switching between profiles.",
      },
      {
        title: "QR code sharing",
        description: "Secure, time-limited QR codes for sharing records with healthcare providers.",
      },
    ],
    results: [
      { metric: "Registered users", value: "180K+", description: "in first year" },
      { metric: "Accessibility score", value: "AA+", description: "WCAG compliance achieved" },
      { metric: "User satisfaction", value: "4.3/5", description: "App Store rating" },
      { metric: "Record lookups", value: "2.1M", description: "annual health record views" },
    ],
  },
  "kvb-prime": {
    title: "KVB Prime",
    year: "2019",
    tags: ["Mobile", "Fintech"],
    imageUrl: projectFx,
    overview: {
      problem: "KVB Prime's forex trading app was functional but felt outdated, causing professional traders to prefer competitor platforms with better UX.",
      role: "Product Designer — Led the app redesign focusing on clarity, professional trader workflows, and modern visual design.",
      timeline: "5 months",
      team: "1 designer, 1 PM, 3 engineers",
    },
    constraints: [
      "Cannot disrupt existing active traders during migration",
      "Real-time price feeds require careful performance optimization",
      "Professional traders have strong preferences for existing tools",
      "Regulatory requirements for trade confirmations and disclosures",
    ],
    research: {
      methods: ["Trader interviews", "Session recordings", "Competitor analysis", "Beta testing"],
      insights: [
        "Traders check positions 20+ times per day; speed is critical",
        "Chart customization is a strong preference differentiator",
        "Push notifications for price alerts drive engagement",
        "One-tap trading is expected for repeat transactions",
      ],
    },
    process: [
      "Shadowed professional traders to understand workflows",
      "Redesigned core trading screens with real-time data handling",
      "Created customizable chart widgets",
      "Designed progressive rollout to minimize disruption",
      "Built comprehensive trading notification system",
    ],
    decisions: [
      {
        title: "Customizable dashboard",
        description: "Traders can arrange widgets, watchlists, and charts to match their personal workflow.",
      },
      {
        title: "Quick trade drawer",
        description: "Swipe-up drawer for instant trades without navigating away from current screen.",
      },
      {
        title: "Smart price alerts",
        description: "AI-suggested price alert levels based on historical patterns and volatility.",
      },
    ],
    results: [
      { metric: "Daily active users", value: "+55%", description: "after redesign launch" },
      { metric: "Trades per session", value: "+23%", description: "increased trading activity" },
      { metric: "App session length", value: "+40%", description: "more engaged users" },
      { metric: "Churn rate", value: "-30%", description: "improved user retention" },
    ],
  },
};

const projectOrder = [
  "cathay-bank-app",
  "cube-bank-app", 
  "newotc-crypto",
  "kkday-airline",
  "taipei-mhealth",
  "kvb-prime",
];

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Case study not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projectOrder.indexOf(slug!);
  const prevProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : null;
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container-wide mb-16">
          <Link 
            to="/#works" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to works
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm text-muted-foreground">{study.year}</span>
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-display-md md:text-display-lg mb-6">{study.title}</h1>
        </section>

        {/* Hero Image */}
        <section className="container-wide mb-24">
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted">
            <img
              src={study.imageUrl}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="container-wide mb-24">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-caption mb-4">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.overview.problem}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-caption mb-2">My Role</h3>
                <p className="text-sm text-muted-foreground">{study.overview.role}</p>
              </div>
              <div>
                <h3 className="text-caption mb-2">Timeline</h3>
                <p className="text-sm text-muted-foreground">{study.overview.timeline}</p>
              </div>
              <div>
                <h3 className="text-caption mb-2">Team</h3>
                <p className="text-sm text-muted-foreground">{study.overview.team}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Constraints */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Constraints & Goals</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {study.constraints.map((constraint, i) => (
              <div key={i} className="p-6 bg-info-block rounded-lg">
                <p className="text-muted-foreground">{constraint}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Research & Insights</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-caption mb-4">Methods</h3>
              <ul className="space-y-2">
                {study.research.methods.map((method, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {method}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-caption mb-4">Key Insights</h3>
              <ul className="space-y-3">
                {study.research.insights.map((insight, i) => (
                  <li key={i} className="text-muted-foreground pl-4 border-l-2 border-border">
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Design Process</h2>
          <div className="space-y-4">
            {study.process.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-medium text-muted-foreground">
                  {i + 1}
                </span>
                <p className="text-muted-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Decisions */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Key Decisions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {study.decisions.map((decision, i) => (
              <div key={i} className="space-y-3">
                <h3 className="font-medium text-foreground">{decision.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Impact & Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result, i) => (
              <div key={i} className="text-center p-6 bg-secondary/30 rounded-lg">
                <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">
                  {result.value}
                </p>
                <p className="text-sm text-muted-foreground">{result.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="container-wide pt-12 border-t border-border">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link 
                to={`/case-study/${prevProject}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous project
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link 
                to={`/case-study/${nextProject}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Next project
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link 
                to="/#works"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                View all projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
