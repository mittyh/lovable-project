import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, MapPin, Car, Baby, Users, Building, Award, ChevronLeft, ChevronRight } from "lucide-react";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import Footer from "@/components/Footer";
import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjectBySlug } from "@/data/projects";
import ourcityloveCoverImage from "@/assets/ourcitylove-cover.png";

// Export cover for use in projects.ts
export const cover = ourcityloveCoverImage;

// Import app images
import driver1 from "@/assets/ourcitylove-driver-1.png";
import driver2 from "@/assets/ourcitylove-driver-2.jpg";
import driver3 from "@/assets/ourcitylove-driver-3.png";
import feeding1 from "@/assets/ourcitylove-feeding-1.png";
import feeding2 from "@/assets/ourcitylove-feeding-2.png";
import workshop from "@/assets/ourcitylove-workshop.jpg";
import team1 from "@/assets/ourcitylove-team-1.png";
import team2 from "@/assets/ourcitylove-team-2.png";
import restaurantApp1 from "@/assets/ourcitylove-restaurant-app-1.jpg";
import restaurantApp2 from "@/assets/ourcitylove-restaurant-app-2.jpg";
import wheelchair from "@/assets/ourcitylove-wheelchair.png";
import restaurant1 from "@/assets/ourcitylove-restaurant-1.jpg";
const OurCityLoveCaseStudy = () => {
  const project = getProjectBySlug("our-city-love");
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const teamImages = [team1, team2];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTeamSlide(prev => (prev + 1) % teamImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [teamImages.length]);
  const nextSlide = () => {
    setCurrentTeamSlide(prev => (prev + 1) % teamImages.length);
  };
  const prevSlide = () => {
    setCurrentTeamSlide(prev => (prev - 1 + teamImages.length) % teamImages.length);
  };
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
            <span className="text-sm text-muted-foreground">2015–2017</span>
            {["Social Impact", "Accessibility", "Gov"].map(tag => <span key={tag} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded">
                {tag}
              </span>)}
          </div>

          <h1 className="text-display-md md:text-display-lg mb-4">
            Designing Accessibility from the Ground Up
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
            Our City Love — From Visual Designer to Product Owner in a Government-Backed Social Impact Platform
          </p>
        </section>

        {/* Hero Image */}
        <section className="container-wide mb-24">
          {project?.imageUrl ? <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted">
              <img src={project.imageUrl} alt={project.title || "Our City Love"} className="w-full h-full object-cover" />
            </div> : <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-rose-100 to-amber-50 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-24 h-24 text-rose-400 mx-auto mb-4" />
                <p className="text-muted-foreground">Cover image coming soon</p>
              </div>
            </div>}
        </section>

        {/* Personal Story */}
        <section className="container-wide mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-xl border-l-4 border-rose-400 bg-primary-foreground">
              <h2 className="text-display-sm mb-6">A Personal Beginning</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                This project was my <strong className="text-foreground">first full-time job</strong> and had deep personal meaning to me — <strong className="text-foreground">my mother is a person with disabilities</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I joined the company driven by its mission rather than salary, and gradually grew from a <strong className="text-foreground">junior visual designer</strong> into a <strong className="text-foreground">UX/UI designer</strong> and eventually a <strong className="text-foreground">product / project manager</strong> role on government-funded projects.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team - Social Enterprise with Carousel */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            众社會企業 (Our City Love Social Enterprise) — a passionate team dedicated to creating an accessible, inclusive society.
          </p>
          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden rounded-xl">
              <img src={teamImages[currentTeamSlide]} alt={`Our City Love team ${currentTeamSlide + 1}`} className="w-full h-full object-cover transition-opacity duration-500" />
            </div>
            {/* Navigation arrows */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors" aria-label="Previous slide">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors" aria-label="Next slide">
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {teamImages.map((_, index) => <button key={index} onClick={() => setCurrentTeamSlide(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTeamSlide ? 'bg-foreground' : 'bg-foreground/30'}`} aria-label={`Go to slide ${index + 1}`} />)}
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Project Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            "Our City Love" is a suite of accessibility-focused applications designed to help people with disabilities and caregivers navigate daily life more easily. The ecosystem includes:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-rose-200 dark:border-rose-900/30 bg-primary-foreground">
              <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Friendly Restaurant</h3>
              <p className="text-sm text-muted-foreground">
                Find accessible restaurants with verified accessibility features like ramps, accessible restrooms, and friendly service.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-amber-200 dark:border-amber-900/30 bg-primary-foreground">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Friendly Driver</h3>
              <p className="text-sm text-muted-foreground">
                Connect with verified drivers trained to assist passengers with disabilities, featuring wheelchair-accessible vehicles.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-pink-200 dark:border-pink-900/30 bg-primary-foreground">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Friendly Breastfeeding</h3>
              <p className="text-sm text-muted-foreground">
                Locate verified breastfeeding rooms with real photos, equipment details, and facility information.
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                People with disabilities and caregivers often lack <strong className="text-foreground">reliable, experience-based information</strong> about accessible restaurants, transportation, and breastfeeding facilities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0" />
                  Existing data was <strong className="text-foreground">fragmented</strong> across different sources
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0" />
                  Information was often <strong className="text-foreground">outdated</strong> or inaccurate
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0" />
                  Data was based on <strong className="text-foreground">self-reporting</strong> rather than real usage
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0" />
                  No consideration for <strong className="text-foreground">lived experience</strong> of users
                </li>
              </ul>
            </div>
            <div className="p-8 bg-info-block rounded-xl">
              <h3 className="text-caption mb-4">Research Workshop</h3>
              <img src={workshop} alt="How to become a friendly restaurant workshop session" className="w-full rounded-lg mb-4" />
              <p className="text-sm text-muted-foreground">
                "How to become a friendly restaurant" — workshop session with restaurant owners, people with disabilities, and caregivers.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">The Solution</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We built a <strong className="text-foreground">human-centered accessibility platform</strong> powered by real field research.
            </p>
            <p className="text-muted-foreground mb-6">
              A dedicated survey team <strong className="text-foreground">physically visited locations</strong> to evaluate:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Entrance accessibility", "Braille menus", "Elevators & toilets", "Parking spaces", "Staff friendliness", "Service quality", "Wi-Fi availability", "Charging stations"].map(item => <div key={item} className="p-4 rounded-lg text-center bg-primary-foreground">
                <p className="text-sm text-foreground">{item}</p>
              </div>)}
          </div>

          <div className="p-6 bg-info-block rounded-xl">
            <p className="text-center text-muted-foreground">
              Each app addressed a <strong className="text-foreground">specific life scenario</strong> while sharing a <strong className="text-foreground">unified design system</strong> and information structure.
            </p>
          </div>
        </section>

        {/* Product Showcase - Friendly Restaurant */}
        <section className="container-wide mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-display-sm">Friendly Restaurant</h2>
          </div>
          <div className="space-y-6">
            <img src={restaurantApp1} alt="Restaurant app mobile UI" className="w-full rounded-lg" />
            <img src={restaurantApp2} alt="Restaurant app screens overview" className="w-full rounded-lg" />
          </div>
        </section>

        {/* Product Showcase - Friendly Driver */}
        <section className="container-wide mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-display-sm">Friendly Driver</h2>
          </div>
          <div className="mb-6">
            <img src={driver1} alt="Friendly Driver App overview" className="w-full rounded-lg" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img src={driver2} alt="Driver app UI mockups" className="w-full rounded-lg" />
            <img src={driver3} alt="Driver app wireframe and flow" className="w-full rounded-lg" />
          </div>
        </section>

        {/* Product Showcase - Friendly Breastfeeding */}
        <section className="container-wide mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
              <Baby className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-display-sm">Friendly Breastfeeding</h2>
          </div>
          <div className="mb-6">
            <img src={feeding1} alt="Breastfeeding app overview" className="w-full rounded-lg" />
          </div>
          <div>
            <img src={feeding2} alt="Breastfeeding app wireframe and flow" className="w-full rounded-lg" />
          </div>
        </section>

        {/* My Roles & Growth */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">My Roles & Growth</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-info-block rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg font-medium text-primary">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Junior Visual Designer</h3>
              <p className="text-sm text-muted-foreground">
                Started with brand identity, icons, and marketing materials. Learned the basics of accessibility-first design.
              </p>
            </div>
            
            <div className="p-6 bg-info-block rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg font-medium text-primary">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">UX/UI Designer</h3>
              <p className="text-sm text-muted-foreground">
                Led interface design for mobile apps. Conducted field research and usability testing with people with disabilities.
              </p>
            </div>
            
            <div className="p-6 bg-info-block rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg font-medium text-primary">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Product / Project Manager</h3>
              <p className="text-sm text-muted-foreground">
                Managed government contracts, coordinated with NGOs, and led cross-functional teams on accessibility initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-primary-foreground">
              <div className="text-4xl font-bold mb-2 text-primary">3</div>
              <p className="text-sm text-muted-foreground">Apps Launched</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground">
              <div className="text-4xl font-bold mb-2 text-primary">10K+</div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary-foreground">
              <div className="text-4xl font-bold mb-2 text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Verified Locations</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground">
              <div className="text-4xl font-bold text-foreground mb-2">2</div>
              <p className="text-sm text-muted-foreground">Years of Operation</p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container-wide mb-24">
          <h2 className="text-display-sm mb-8">Key Learnings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-primary-foreground border-0">
              <Building className="w-8 h-8 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Government Collaboration</h3>
              <p className="text-muted-foreground">
                Learned to navigate bureaucratic processes, manage stakeholder expectations, and deliver under strict regulatory requirements.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-primary-foreground border-0">
              <Users className="w-8 h-8 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Empathy-Driven Design</h3>
              <p className="text-muted-foreground">
                Real understanding comes from being in the field. Watching users struggle with inaccessible spaces changed my approach to design forever.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-primary-foreground border-0">
              <Heart className="w-8 h-8 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Purpose Over Pay</h3>
              <p className="text-muted-foreground">
                Working on something personally meaningful accelerated my growth far more than any high-paying job could have.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-primary-foreground border-0">
              <Award className="w-8 h-8 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">From Execution to Strategy</h3>
              <p className="text-muted-foreground">
                Transitioned from taking direction to setting direction. Learned to balance business goals with social impact.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="container-wide mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-display-sm mb-6">Reflection</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              "This project taught me that design is not just about interfaces—it's about <strong className="text-foreground">enabling dignity</strong>. Every ramp we documented, every accessible toilet we verified, represented a small victory for someone's independence."
            </p>
            <p className="text-muted-foreground">
              Looking back, this experience shaped my belief that good design must be <strong className="text-foreground">inclusive by default</strong>, not as an afterthought.
            </p>
          </div>
          {/* Reflection images */}
          <div className="space-y-6">
            <img src={wheelchair} alt="Wheelchair user entering accessible restaurant" className="w-full rounded-lg" />
            <img src={restaurant1} alt="Our team field research" className="w-full rounded-lg" />
          </div>
        </section>

        {/* Project Navigation */}
        <section className="container-wide">
          <ProjectNavigation currentSlug="our-city-love" />
        </section>
      </main>

      <Footer />
    </div>;
};
export default OurCityLoveCaseStudy;