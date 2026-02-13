import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { useState } from "react";
import { getProjectBySlug } from "@/data/projects";
import kkdayCoverImage from "@/assets/kkday-cover.png";

// Export cover for use in projects.ts
export const cover = kkdayCoverImage;

// Import images
import kkdayWorkflow from "@/assets/kkday-workflow.png";
import kkdayIA from "@/assets/kkday-ia.png";
import kkdayWireframe from "@/assets/kkday-wireframe.png";
import kkdayCompetitor from "@/assets/kkday-competitor.png";
import kkdayUI1 from "@/assets/kkday-ui-1.png";
import kkdayUI2 from "@/assets/kkday-ui-2.png";
import kkdayUI3 from "@/assets/kkday-ui-3.png";
import kkdayUI4 from "@/assets/kkday-ui-4.png";
import kkdayUI5 from "@/assets/kkday-ui-5.png";

const KKdayCaseStudy = () => {
  const project = getProjectBySlug("kkday-airline");
  const uiImages = [kkdayUI1, kkdayUI2, kkdayUI3, kkdayUI4, kkdayUI5];
  const [currentUIIndex, setCurrentUIIndex] = useState(0);

  const nextUI = () => {
    setCurrentUIIndex((prev) => (prev + 1) % uiImages.length);
  };

  const prevUI = () => {
    setCurrentUIIndex((prev) => (prev - 1 + uiImages.length) % uiImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Link 
          to="/#works" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to works
        </Link>
        
        <div className="mb-8">
          <span className="text-cyan-500 text-sm font-medium tracking-wide uppercase">Travel Tech</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
          KKday — Korea Flight & Car Rental<br />Unified Search Experience
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mb-12">
          Designing a unified search and booking experience across Web, Web App, iOS, and Android platforms for international travelers in Korea.
        </p>
        
        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden mb-16">
          <img 
            src={project?.imageUrl} 
            alt={project?.title || "KKday Flight & Car Rental Unified Search Experience"} 
            className="w-full"
          />
        </div>
      </section>

      {/* Project Context Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-medium text-cyan-500 uppercase tracking-wider mb-3">Role</h3>
            <p className="text-gray-900">End-to-End Product Designer</p>
            <p className="text-gray-500 text-sm mt-1">Web, Web App, iOS, Android</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-cyan-500 uppercase tracking-wider mb-3">Team</h3>
            <p className="text-gray-900">Cross-Functional Scrum Team</p>
            <p className="text-gray-500 text-sm mt-1">PM, Engineering, QA</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-cyan-500 uppercase tracking-wider mb-3">Year</h3>
            <p className="text-gray-900">2022–2023</p>
            <p className="text-gray-500 text-sm mt-1">Production Released</p>
          </div>
        </div>
      </section>

      {/* Context & Background */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-8">Context</h2>
        <div className="max-w-3xl">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            This project redesigned KKday's Korea flight booking experience, integrating flight search and car rental into a single, scalable cross-platform system.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong className="text-gray-900">This was my first time owning a full multi-platform system</strong> from information architecture to UI delivery.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Problem</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">User Pain Points</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2.5 shrink-0"></span>
                  Needed to compare routes, prices, and availability quickly
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2.5 shrink-0"></span>
                  Easily overwhelmed by fragmented booking flows
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2.5 shrink-0"></span>
                  Had to switch between flight and car rental with inconsistent logic
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">System Complexity</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
                  Flight booking involves time, price, and seat-availability logic
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
                  Car rental adds location, pickup/drop-off, and luggage constraints
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
                  Existing structures did not support mixed-product decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Challenge */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-8">Design Challenge</h2>
        <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-2xl p-8 md:p-12">
          <p className="text-xl text-gray-700 font-medium mb-6">
            How might we design a unified search and booking experience that:
          </p>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li className="flex items-start gap-4">
              <span className="text-cyan-500 font-medium shrink-0">01</span>
              Supports both flight-only and flight + car scenarios
            </li>
            <li className="flex items-start gap-4">
              <span className="text-cyan-500 font-medium shrink-0">02</span>
              Works consistently across Web, Web App, iOS, and Android
            </li>
            <li className="flex items-start gap-4">
              <span className="text-cyan-500 font-medium shrink-0">03</span>
              Scales across multiple languages and markets
            </li>
            <li className="flex items-start gap-4">
              <span className="text-cyan-500 font-medium shrink-0">04</span>
              Reduces cognitive load during complex travel decisions
            </li>
          </ul>
        </div>
      </section>

      {/* Design Process - Workflow */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Design Process</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            End-to-end ownership from research to launch, with clear handoffs at each phase.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <img 
              src={kkdayWorkflow} 
              alt="Design Process Workflow" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Information Architecture</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Unified search architecture that separates search intent, time-based constraints, and price comparison logic.
        </p>
        <div className="bg-gray-50 rounded-2xl p-6">
          <img 
            src={kkdayIA} 
            alt="Information Architecture Diagram" 
            className="w-full"
          />
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Wireframing</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Low-fidelity exploration of search flows across platforms, validating information hierarchy and interaction patterns.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <img 
              src={kkdayWireframe} 
              alt="Wireframe Designs" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Competitive Analysis</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Analyzed major travel booking platforms including Agoda, Trip.com, Skyscanner, and others to understand industry patterns.
        </p>
        <div className="bg-gray-50 rounded-2xl p-6">
          <img 
            src={kkdayCompetitor} 
            alt="Competitive Analysis" 
            className="w-full"
          />
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-cyan-500 font-medium text-sm">01</span>
              <h3 className="text-lg font-medium text-gray-900 mt-2 mb-3">Unified Search Architecture</h3>
              <p className="text-gray-600">
                Defined a unified search architecture that separates search intent (flight only vs. flight + car), time-based constraints, and price comparison logic.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-cyan-500 font-medium text-sm">02</span>
              <h3 className="text-lg font-medium text-gray-900 mt-2 mb-3">Modular Result Card System</h3>
              <p className="text-gray-600">
                Designed adaptable result cards for different platforms, multi-language tags, and promotional/urgency states (e.g., "Almost sold out").
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-cyan-500 font-medium text-sm">03</span>
              <h3 className="text-lg font-medium text-gray-900 mt-2 mb-3">Platform-Specific Patterns</h3>
              <p className="text-gray-600">
                Standardized decision flows across platforms while respecting platform-specific UI patterns for iOS, Android, and Web.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-cyan-500 font-medium text-sm">04</span>
              <h3 className="text-lg font-medium text-gray-900 mt-2 mb-3">Cross-Functional Collaboration</h3>
              <p className="text-gray-600">
                Collaborated closely with PM and engineering to balance business rules, technical constraints, and user clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UI Design - Carousel */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Search UI Design</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Final UI designs across different search states and user interactions.
        </p>
        
        <div className="relative bg-gray-50 rounded-2xl p-8">
          {/* Carousel Navigation */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500 text-sm">
              {currentUIIndex + 1} / {uiImages.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prevUI}
                className="p-2 rounded-full bg-white border border-gray-200 hover:border-cyan-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextUI}
                className="p-2 rounded-full bg-white border border-gray-200 hover:border-cyan-500 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Image Display */}
          <div className="flex justify-center">
            <img 
              src={uiImages[currentUIIndex]} 
              alt={`Search UI Design ${currentUIIndex + 1}`} 
              className="max-h-[600px] w-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {uiImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentUIIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentUIIndex ? "bg-cyan-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Key Contributions</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-light text-cyan-500 mb-2">4</div>
              <div className="text-gray-600">Platforms Designed</div>
              <div className="text-gray-400 text-sm mt-1">Web, Web App, iOS, Android</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-light text-cyan-500 mb-2">E2E</div>
              <div className="text-gray-600">Ownership</div>
              <div className="text-gray-400 text-sm mt-1">IA to UI Delivery</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-light text-cyan-500 mb-2">2-in-1</div>
              <div className="text-gray-600">Unified Search</div>
              <div className="text-gray-400 text-sm mt-1">Flight + Car Rental</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-light text-cyan-500 mb-2">i18n</div>
              <div className="text-gray-600">Multi-Market Ready</div>
              <div className="text-gray-400 text-sm mt-1">Scalable Tag System</div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-8">Outcome</h2>
        <div className="max-w-3xl">
          <ul className="space-y-4 text-gray-600 text-lg">
            <li className="flex items-start gap-4">
              <span className="text-cyan-500 mt-1">✓</span>
              Delivered a production-ready system marked as <strong className="text-gray-900">DEV Ready</strong>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-cyan-500 mt-1">✓</span>
              Enabled faster decision-making for users booking flights and rentals
            </li>
            <li className="flex items-start gap-4">
              <span className="text-cyan-500 mt-1">✓</span>
              Established a reusable search framework for future multi-product integrations
            </li>
          </ul>
        </div>
      </section>

      {/* Design Focus */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Design Focus</h2>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-700 mb-8">
              This project demonstrates my ability to:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <span className="text-cyan-600 font-medium">01</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Design complex systems beyond visual UI</h3>
                  <p className="text-gray-600 mt-1">Architecting information flows and decision paths at scale</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <span className="text-cyan-600 font-medium">02</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Translate business rules into clear user decision paths</h3>
                  <p className="text-gray-600 mt-1">Balancing technical constraints with user clarity</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <span className="text-cyan-600 font-medium">03</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Own cross-platform consistency at scale</h3>
                  <p className="text-gray-600 mt-1">Designing for Web, Web App, iOS, and Android simultaneously</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation currentSlug="kkday-airline" />

      <Footer />
    </div>
  );
};

export default KKdayCaseStudy;
