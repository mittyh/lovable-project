import { Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
const About = () => {
  return <section id="about" className="section bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 left-[5%] text-highlight opacity-40">
        <Plus className="w-4 h-4" strokeWidth={3} />
      </div>
      <div className="absolute bottom-32 right-[8%] text-highlight opacity-40">
        <Plus className="w-3 h-3" strokeWidth={3} />
      </div>
      
      {/* Decorative grid lines */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-transparent" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-transparent" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <ScrollReveal>
              <p className="text-caption mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                About
              </p>
              <h2 className="text-display-md mb-10">
                Designer who thinks in{" "}
                <span className="highlight-underline">systems</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6 text-muted-foreground">
              <ScrollReveal delay={100}>
                <p className="text-lg leading-relaxed">
                  I'm a Taiwanese designer with 7+ years crafting digital products across fintech, 
                  travel, crypto, and public sector. I thrive in ambiguity and love turning complex 
                  problems into clear, intuitive experiences.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p>
                  My work spans leading redesigns for banking apps serving millions of users, 
                  building design systems from scratch, and mentoring junior designers. I believe 
                  great design comes from deep understanding of both user needs and business constraints.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p>
                  I've worked across startups, consulting firms, and large corporations—adapting 
                  quickly to different organizational cultures while maintaining high craft standards. 
                  Cross-functional collaboration is where I do my best work.
                </p>
              </ScrollReveal>
            </div>

            {/* Decorative progress indicator */}
            <ScrollReveal delay={400}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-20 h-1 bg-highlight" />
                <span className="font-mono text-xs text-muted-foreground">Always learning</span>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold">Experience</h3>
                <span className="font-mono text-xs text-accent">2014 — 2025</span>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <ExperienceItem role="Product Designer" company="tripool" period="2024 – 2025" description="Led UX/UI redesigns and AI-assisted Tripgine MVP for international TravelTech users (400K+ passengers), using LLMs for faster prototyping and data-driven research." />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <ExperienceItem role="Product Designer" company="KKday" period="2022 – 2023" description="Led airline ticketing platform design across iOS, Android, and Web. Established design system components and collaborated with scrum teams." />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <ExperienceItem role="Product Designer" company="Cathay United Bank" period="2019 – 2022" description="Redesigned credit card and account features for 4M+ users. Conducted user research and built company design guidelines." />
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <ExperienceItem role="UI/UX Designer" company="Follow Me Invest" period="2019" description="Built crypto exchange from scratch with a team of five. Handled complete design and branding for KVB Prime app." />
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <ExperienceItem role="GUI Designer" company="VIADNA Agency" period="2017 – 2019" description="Marketing and product design for banking, telecom, and government clients. Led visual design and user story development." />
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <ExperienceItem role="PM / Product Designer" company="OurCityLove" period="2014 – 2016" description="Built life apps for disabled people. Project managed government accessibility initiatives." />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={700}>
              <div className="mt-12">
                <a href="/Mitty_Huang_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm font-medium text-accent 
                             transition-all duration-200 hover:gap-4">
                  <span className="w-4 h-px bg-accent" />
                  Download Resume
                  <span className="text-highlight">→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>;
};
interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}
const ExperienceItem = ({
  role,
  company,
  period,
  description
}: ExperienceItemProps) => {
  return <div className="relative pl-6 border-l-2 border-border/30 hover:border-accent transition-colors duration-200 group">
      {/* Decorative dot */}
      <div className="absolute -left-[5px] top-0 w-2 h-2 bg-background border-2 border-border/30 group-hover:border-accent group-hover:bg-highlight transition-colors duration-200" />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <h4 className="font-semibold text-foreground">
          {role}, <span className="text-accent">{company}</span>
        </h4>
        <span className="font-mono text-xs text-muted-foreground">{period}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>;
};
export default About;