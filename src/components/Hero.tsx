import { ArrowDown, Plus } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import mittyPortrait from "@/assets/mitty-portrait.png";
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // Parallax effect - text moves slower than scroll
  const parallaxOffset = scrollY * 0.3;
  return <section ref={heroRef} id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-px h-32 bg-border/30" />
        <div className="absolute top-32 left-[10%] w-16 h-px bg-border/30" />
        <div className="absolute bottom-40 right-[15%] w-px h-24 bg-border/30" />
        <div className="absolute bottom-40 right-[15%] w-12 h-px bg-border/30" />
      </div>

      {/* Decorative plus icons */}
      <div className="absolute top-1/4 right-[20%] text-highlight opacity-60">
        <Plus className="w-4 h-4" strokeWidth={3} />
      </div>
      <div className="absolute bottom-1/3 left-[8%] text-highlight opacity-60">
        <Plus className="w-3 h-3" strokeWidth={3} />
      </div>

      <div className="container-wide">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
          {/* Text Content */}
          <div className="max-w-2xl">
            {/* Caption with monospace */}
            <p className="text-caption mb-8 animate-fade-up flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Product Designer
            </p>
            
            {/* Main headline with parallax - massive typography */}
            <h1 className="text-display-lg md:text-display-xl mb-10 animate-fade-up animate-fade-up-delay-1 lg:text-7xl" style={{
            transform: `translateY(${parallaxOffset}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
            I don't just design screens.
            <br />
            I design <span className="highlight-underline text-primary bg-transparent">journeys</span>.
            </h1>
            
            {/* Sub-headline with monospace contrast */}
            <p className="font-mono text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-14 animate-fade-up animate-fade-up-delay-2">
              An exploration-driven product designer crafting intuitive 
              experiences for fintech, travel, and enterprise products.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-fade-up-delay-3">
              <button onClick={scrollToWorks} className="inline-flex items-center gap-3 px-8 py-4 text-primary-foreground rounded font-semibold transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] bg-secondary">
                View Work
                <ArrowDown className="w-4 h-4" />
              </button>
              <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground rounded font-semibold text-foreground 
                           transition-all duration-200 ease-out
                           hover:bg-foreground hover:text-background hover:scale-[1.02] active:scale-[0.98]">
                Get in Touch
              </a>
            </div>

            {/* Decorative progress bar */}
            <div className="mt-16 flex items-center gap-4 animate-fade-up animate-fade-up-delay-4">
              <div className="w-24 h-1 bg-highlight" />
              <span className="font-mono text-xs text-muted-foreground">7+ years of craft</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-up animate-fade-up-delay-1">
            <img src={mittyPortrait} alt="Mitty Huang — Product Designer" className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up animate-fade-up-delay-4">
        
      </div>
    </section>;
};
export default Hero;