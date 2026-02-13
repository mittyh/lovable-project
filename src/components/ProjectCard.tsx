import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  tags: string[];
  imageUrl: string;
  slug: string;
  index: number;
  industry?: string;
  functions?: string[];
}

const ProjectCard = ({ title, year, description, tags, imageUrl, slug, industry, functions }: ProjectCardProps) => {
  return (
    <Link to={`/case-study/${slug}`} className="block">
      <article 
        className="group cursor-pointer bg-card border border-border/10 rounded overflow-hidden
                   transition-all duration-300 ease-out
                   hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2
                   hover:border-accent/20"
      >
        {/* Image container with hover effects */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {/* L-shaped decorative corners */}
          <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          {/* Background image with scale effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
            role="img"
            aria-label={title}
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>

        <div className="p-6 space-y-4">
          {/* Tags with Cobalt Blue styling */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs text-muted-foreground">{year}</span>
            <span className="w-px h-3 bg-border/50" />
            {/* Industry tag */}
            {industry && (
              <span className="font-mono text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                {industry}
              </span>
            )}
            {/* Function tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-accent text-accent-foreground font-medium tracking-wide rounded font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title with arrow */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200 leading-tight">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-1" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>

          {/* Decorative dashed line */}
          <div className="pt-2">
            <div className="w-12 h-px border-t border-dashed border-highlight group-hover:w-20 transition-all duration-300" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
