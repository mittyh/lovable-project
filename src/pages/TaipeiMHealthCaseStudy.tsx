import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Building2, ClipboardList, Heart, Activity, Cloud, Smartphone, BookOpen, MapPin, Play } from "lucide-react";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import mhealthCoverImage from "@/assets/mhealth-cover.png";

// Export cover for use in projects.ts
export const cover = mhealthCoverImage;

// Import all mHealth images
import mhealthProcess from "@/assets/mhealth-process.png";
import mhealthSteps from "@/assets/mhealth-steps.png";
import mhealthKeyframe from "@/assets/mhealth-keyframe.png";
import mhealthField1 from "@/assets/mhealth-field-1.jpg";
import mhealthField2 from "@/assets/mhealth-field-2.jpg";
import mhealthField3 from "@/assets/mhealth-field-3.jpg";
import mhealthField4 from "@/assets/mhealth-field-4.jpg";
import mhealthField5 from "@/assets/mhealth-field-5.jpg";
import mhealthField6 from "@/assets/mhealth-field-6.jpg";

const TaipeiMHealthCaseStudy = () => {
  const project = getProjectBySlug("taipei-mhealth");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CaseStudyNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-b from-cyan-50 to-background">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          {/* Project Meta */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
              Public Sector
            </span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
              Digital Health
            </span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
              Service Design
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Redesigning Public Health from the Streets Up
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            Taipei mHealth — Community-Based Mobile Health System
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Client</p>
              <p className="font-semibold text-foreground">Taipei City Dept. of Health</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Timeline</p>
              <p className="font-semibold text-foreground">2015–2016</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">My Role</p>
              <p className="font-semibold text-foreground">PM / Service Designer</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Focus</p>
              <p className="font-semibold text-foreground">Mobile + Cloud System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={project?.imageUrl} 
              alt={project?.title || "Taipei mHealth - Public health nurse using tablet"}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="px-6 lg:px-12 py-16 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
              <Heart size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">My First Project as a PM</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This was my first project as a Project Manager, where I led the end-to-end process 
                from field research to service concept definition and cross-stakeholder alignment. 
                It taught me that <strong>great products don't start with screens — 
                they start with respect for people doing invisible work.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Challenge */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Context & Challenge</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-cyan-600">
                Taipei was entering a super-aging society
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                  <Users className="text-cyan-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium">65+ population projected to exceed 20%</p>
                    <p className="text-sm text-muted-foreground">Rapid demographic shift requiring systemic response</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                  <Activity className="text-cyan-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium">88.7% of seniors had at least one chronic disease</p>
                    <p className="text-sm text-muted-foreground">Diabetes, hypertension, cardiovascular conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                  <ClipboardList className="text-cyan-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium">Paper-based records & fragmented data</p>
                    <p className="text-sm text-muted-foreground">Nurses overwhelmed by inefficient workflows</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-8 rounded-3xl">
              <h3 className="text-xl font-semibold mb-4">The Core Challenge</h3>
              <p className="text-lg leading-relaxed opacity-95">
                The core challenge was not UI — it was how to <strong>redesign public health services 
                around communities and individuals</strong>, not institutions.
              </p>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm opacity-80">Health education for elderly citizens with:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Low literacy levels</li>
                  <li>• Visual limitations</li>
                  <li>• Language barriers (Mandarin & Taiwanese)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Fieldwork */}
      <section className="px-6 lg:px-12 py-20 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Key Differentiator</span>
            <h2 className="text-3xl font-bold mt-2">Research & Fieldwork</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                I led extensive bottom-up research across the city, treating nurses as 
                <strong className="text-white"> co-designers</strong>, not end-users.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Building2 size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-medium">Visited all 12 District Health Centers</p>
                    <p className="text-sm text-neutral-400">City-wide coverage for systemic understanding</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-medium">300+ "Public Health Angels"</p>
                    <p className="text-sm text-neutral-400">Learned from frontline nurses serving seniors in streets and alleys</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-medium">Real Visit Scenarios</p>
                    <p className="text-sm text-neutral-400">Chronic disease follow-ups, fall prevention, nutrition guidance</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Field Research Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={mhealthField3} 
                  alt="Public health nurse conducting home visit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mt-8">
                <img 
                  src={mhealthField6} 
                  alt="Public health nurses walking in community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Study Gallery */}
      <section className="px-6 lg:px-12 py-20 bg-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={mhealthField2} 
                alt="Nurse showing blood pressure data on tablet to elderly citizen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={mhealthField5} 
                alt="Nurse providing medication education with tablet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={mhealthField1} 
                alt="mHealth app showing health education modules"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Process - Field Studies Image */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Design Process</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Design Thinking + Service Design Workshops with nurses and public health colleagues
          </p>
          
          {/* Steps/Field Studies Image */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img 
              src={mhealthSteps} 
              alt="Field Studies - 4D design thinking approach with nurses and staff"
              className="w-full h-auto"
            />
          </div>
          
          {/* Training Session Photo */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img 
              src={mhealthField4} 
              alt="Training session with 300+ public health nurses"
              className="w-full h-auto"
            />
          </div>
          
          {/* Service Principles */}
          <div className="bg-cyan-50 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Service Design Principles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                  <Heart size={20} className="text-white" />
                </div>
                <h4 className="font-medium mb-2">Individual-Centered</h4>
                <p className="text-sm text-muted-foreground">Not form-centered. Focus on the person, not the paperwork.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                  <BookOpen size={20} className="text-white" />
                </div>
                <h4 className="font-medium mb-2">Language-Inclusive</h4>
                <p className="text-sm text-muted-foreground">Visual-first design supporting Mandarin & Taiwanese speakers.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                  <Users size={20} className="text-white" />
                </div>
                <h4 className="font-medium mb-2">Dual Support</h4>
                <p className="text-sm text-muted-foreground">Designed for both nurses and elderly citizens simultaneously.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-to-b from-background to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Solution Overview</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Taipei mHealth is an integrated public health service system
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mobile App */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-cyan-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6">
                <Smartphone size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile App for Nurses</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  Real-time data input during home visits
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  Track BP, blood sugar, and cholesterol trends
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  Reduce duplicate paperwork
                </li>
              </ul>
            </div>
            
            {/* Cloud System */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-cyan-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6">
                <Cloud size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud-Based Records</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Centralized case management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Chronic disease & senior tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Continuity across visits and nurses
                </li>
              </ul>
            </div>
            
            {/* Health Education */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-cyan-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6">
                <BookOpen size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Health Education</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Multimedia health content
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Designed for low literacy & visual decline
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Diet, exercise, fall prevention
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Process Flow */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Workflow Transformation</h2>
          
          {/* Process Image */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img 
              src={mhealthProcess} 
              alt="Before and After workflow comparison - streamlined public health visit process"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="px-6 lg:px-12 py-20 bg-cyan-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Impact & Outcomes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Activity size={32} className="mb-4 text-cyan-200" />
              <h3 className="font-semibold text-lg mb-2">Improved Efficiency</h3>
              <p className="text-cyan-100 text-sm">Enhanced confidence and workflow for frontline nurses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Cloud size={32} className="mb-4 text-cyan-200" />
              <h3 className="font-semibold text-lg mb-2">Paper to Digital</h3>
              <p className="text-cyan-100 text-sm">Shifted public health services from paper-based to data-driven</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Heart size={32} className="mb-4 text-cyan-200" />
              <h3 className="font-semibold text-lg mb-2">Personalized Care</h3>
              <p className="text-cyan-100 text-sm">Enabled long-term chronic care tracking for individuals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Users size={32} className="mb-4 text-cyan-200" />
              <h3 className="font-semibold text-lg mb-2">Strengthened Trust</h3>
              <p className="text-cyan-100 text-sm">Better communication between nurses and elderly citizens</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Smartphone size={32} className="mb-4 text-cyan-200" />
              <h3 className="font-semibold text-lg mb-2">First of Its Kind</h3>
              <p className="text-cyan-100 text-sm">Taipei's first mobile public health management system</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <ClipboardList size={32} className="mb-4 text-cyan-200" />
              <h3 className="font-semibold text-lg mb-2">Expanded Roadmap</h3>
              <p className="text-cyan-100 text-sm">8+ disease-specific systems: diabetes, cardiovascular, dementia, cancer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section with Keyframe */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Micro-documentary showcasing real public health nurses in action
          </p>
          
          {/* Keyframe Image */}
          <div className="rounded-3xl overflow-hidden mb-8">
            <img 
              src={mhealthKeyframe} 
              alt="Documentary keyframe - nurses using mHealth app during home visits"
              className="w-full h-auto"
            />
          </div>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IcW_x6yK86o"
              title="Taipei mHealth Documentary"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 lg:px-12 py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why This Project Matters</h2>
          
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-neutral-300">
            "Great products don't start with screens — they start with 
            <span className="text-cyan-400"> respect for people doing invisible work.</span>"
          </blockquote>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-700 rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-cyan-400">Systems Thinking</h3>
              <p className="text-neutral-400 text-sm">Learned to think in systems, not just features — seeing how healthcare, technology, and policy interconnect.</p>
            </div>
            <div className="border border-neutral-700 rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-cyan-400">Grounded Decisions</h3>
              <p className="text-neutral-400 text-sm">Every decision grounded in real human behavior observed in the field.</p>
            </div>
            <div className="border border-neutral-700 rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-cyan-400">Leading Complexity</h3>
              <p className="text-neutral-400 text-sm">Can lead complexity across government, healthcare, and technology stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation currentSlug="taipei-mhealth" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TaipeiMHealthCaseStudy;
