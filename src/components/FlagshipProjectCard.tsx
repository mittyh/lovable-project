import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface FlagshipProjectCardProps {
  project: Project;
}

const FlagshipProjectCard = ({ project }: FlagshipProjectCardProps) => {
  return (
    <Link
      to={`/case-study/${project.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover:border-accent/30 hover:shadow-xl">
        {/* Image Container - Large Hero */}
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          {/* Label */}
          <span className="text-caption text-muted-foreground mb-3 block">
            Work at Scale
          </span>

          {/* Title - Large */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Description with impact */}
          <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
            <span>View Case</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FlagshipProjectCard;
