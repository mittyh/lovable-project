import { Mail, Linkedin, FileText, Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-[15%] text-highlight opacity-40">
        <Plus className="w-4 h-4" strokeWidth={3} />
      </div>
      <div className="absolute bottom-20 right-[10%] text-highlight opacity-40">
        <Plus className="w-3 h-3" strokeWidth={3} />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-12 left-12 w-16 h-16 border-l-2 border-t-2 border-border/20" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-r-2 border-b-2 border-border/20" />

      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-caption mb-4">Contact</p>
            
            <h2 className="text-display-md md:text-display-lg mb-6">
              Let's work{" "}
              <span className="highlight-underline">together</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="font-mono text-muted-foreground text-sm md:text-base mb-14 leading-relaxed">
              I'm open to senior product design roles, especially with teams building 
              meaningful products at scale. Based in Taiwan, open to remote opportunities globally.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:shiaoyuhuang@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded font-semibold 
                           transition-all duration-200 ease-out
                           hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/mittyhuang/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground rounded font-semibold text-foreground 
                           transition-all duration-200 ease-out
                           hover:bg-foreground hover:text-background hover:scale-[1.02] active:scale-[0.98]"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="/Mitty_Huang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded font-semibold 
                           transition-all duration-200 ease-out
                           hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </ScrollReveal>

          {/* Decorative progress bar */}
          <ScrollReveal delay={300}>
            <div className="mt-16 flex justify-center items-center gap-4">
              <div className="w-8 h-1 bg-highlight" />
              <span className="font-mono text-xs text-muted-foreground">Available for new opportunities</span>
              <div className="w-8 h-1 bg-highlight" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
