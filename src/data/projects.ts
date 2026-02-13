// Shared project data for consistency across homepage and case study pages
// Import covers from each case study page for single source of truth
import { cover as cathayCover } from "@/pages/CathayCaseStudy";
import { cover as cubeCover } from "@/pages/CubeCaseStudy";
import { cover as newotcCover } from "@/pages/NewOTCCaseStudy";
import { cover as kkdayCover } from "@/pages/KKdayCaseStudy";
import { cover as ourcityloveCover } from "@/pages/OurCityLoveCaseStudy";
import { cover as mhealthCover } from "@/pages/TaipeiMHealthCaseStudy";
import { cover as kvbCover } from "@/pages/KVBPrimeCaseStudy";
import { cover as onecarCover } from "@/pages/OneCarCaseStudy";
import { cover as tripgineCover } from "@/pages/TripgineCaseStudy";
import { cover as rtrCover } from "@/pages/RoundTaiwanRoundCaseStudy";

export interface Project {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  tags: string[];
  imageUrl: string;
  slug: string;
  industry: 'Financial' | 'Blockchain' | 'Travel' | 'Social Enterprise' | 'Healthcare';
  functions: ('Product Design' | 'UX' | 'UI' | 'UIUX' | 'Visual' | 'Brand')[];
}

export const projects: Project[] = [
  {
    title: "Designing Trust for 7 Million Users",
    subtitle: "Cathay Bank App — A Large-Scale Redesign of a National Banking App",
    year: "2023",
    description: "Redesigned account & transfer experience for 4M+ active users. Led user research and established design guidelines.",
    tags: ["iOS", "Fintech", "Lead"],
    imageUrl: cathayCover,
    slug: "cathay-bank-app",
    industry: "Financial",
    functions: ["Product Design", "UX", "UI"],
  },
  {
    title: "Leading a Full Visual System Shift in a Conservative Banking Product",
    subtitle: "CUBE Credit Card — How CUBE Replaced Its Legacy App UI",
    year: "2021",
    description: "Designed and led a visual system that replaced the legacy UI and became the new foundation for the entire app experience, serving 7M+ users.",
    tags: ["iOS", "Fintech", "Visual System"],
    imageUrl: cubeCover,
    slug: "cube-bank-app",
    industry: "Financial",
    functions: ["Visual", "UI", "Product Design"],
  },
  {
    title: "Structuring a 0→1 Crypto Exchange MVP in 3 Days",
    subtitle: "NewOTC — Web3 OTC Trading Platform",
    year: "2019–2020",
    description: "Complete design and branding for a professional crypto trading platform serving institutional clients.",
    tags: ["Web3", "Crypto", "Branding"],
    imageUrl: newotcCover,
    slug: "newotc-crypto",
    industry: "Blockchain",
    functions: ["Brand", "UI", "Product Design"],
  },
  {
    title: "Designing a Unified Flight + Car Booking System Across 4 Platforms",
    subtitle: "KKday Airline — Korea Flight & Car Rental Unified Search",
    year: "2022–2023",
    description: "Designed a unified flight + car rental search experience across Web, Web App, iOS, and Android platforms.",
    tags: ["iOS", "Android", "Travel"],
    imageUrl: kkdayCover,
    slug: "kkday-airline",
    industry: "Travel",
    functions: ["UIUX", "Product Design"],
  },
  {
    title: "Designing Accessibility from the Ground Up",
    subtitle: "Our City Love — From Visual Designer to Product Owner in a Government-Backed Social Impact Platform",
    year: "2015–2017",
    description: "A suite of accessibility-focused apps helping people with disabilities and caregivers navigate daily life — my first job and the foundation of my product mindset.",
    tags: ["Social Impact", "Accessibility", "Gov"],
    imageUrl: ourcityloveCover,
    slug: "our-city-love",
    industry: "Social Enterprise",
    functions: ["Product Design", "UX"],
  },
  {
    title: "Redesigning Public Health from the Streets Up",
    subtitle: "Taipei mHealth — Community-Based Mobile Health System",
    year: "2015–2016",
    description: "Co-created with 300+ frontline public health nurses across all 12 districts, supporting 5,600+ chronic & independent senior cases through a mobile-first public health system.",
    tags: ["Service Design", "Healthcare", "Gov"],
    imageUrl: mhealthCover,
    slug: "taipei-mhealth",
    industry: "Healthcare",
    functions: ["UX", "Product Design"],
  },
  {
    title: "Designing a High-Frequency Forex Trading App for 100+ Countries",
    subtitle: "KVB Prime — Professional FX Trading Redesign",
    year: "2019",
    description: "3-day intensive design sprint transforming a legacy forex trading interface into a modern, dark-theme mobile experience for active traders across 100+ countries.",
    tags: ["Forex", "Trading UI", "Design Sprint"],
    imageUrl: kvbCover,
    slug: "kvb-prime",
    industry: "Financial",
    functions: ["UI", "UIUX"],
  },
  {
    title: "Designing an MVP That Failed — and Learning from a 90% Drop-Off",
    subtitle: "OneCar — How usability testing and analytics revealed a misaligned product positioning",
    year: "2022",
    description: "An MVP experiment to test multi-day, multi-stop transportation for foreign travelers. Though the MVP failed, it provided invaluable lessons in hypothesis validation, usability testing, and product strategy.",
    tags: ["MVP", "UX Research", "Travel Tech"],
    imageUrl: onecarCover,
    slug: "onecar-mvp",
    industry: "Travel",
    functions: ["UX", "Product Design"],
  },
  {
    title: "Turning 5 Conflicting Business Decks into a Single B2B Product Direction",
    subtitle: "Tripgine B2B — AI-Driven Design Workflow",
    year: "2024",
    description: "Transformed 5 fragmented CEO pitch decks into one cohesive B2B landing page in 14 days — using AI as a design collaborator for PRD, IA, wireframes, and visual design.",
    tags: ["B2B", "AI Workflow", "Landing Page"],
    imageUrl: tripgineCover,
    slug: "tripgine-b2b",
    industry: "Travel",
    functions: ["Product Design", "Visual", "Brand"],
  },
  {
    title: "Designing Travel for People Who Aren't in the Same Time Zone",
    subtitle: "Round Taiwan Round — Product & Experience Redesign",
    year: "2024–2025",
    description: "Reframed a 10+ year Taiwan travel platform by redesigning the inquiry → quotation → booking journey, grounded in cross-cultural research with international travelers. Clarified trust, expectations, and handoff between travelers and planners.",
    tags: ["UX Research", "Travel Tech", "Cross-Cultural"],
    imageUrl: rtrCover,
    slug: "round-taiwan-round",
    industry: "Travel",
    functions: ["UX", "Product Design", "UI"],
  },
];

export const industryFilters = ['All', 'Financial', 'Blockchain', 'Travel', 'Social Enterprise', 'Healthcare'] as const;
export const functionFilters = ['All', 'Product Design', 'UX', 'UI', 'UIUX', 'Visual', 'Brand'] as const;

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
