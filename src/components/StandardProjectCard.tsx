import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface StandardProjectCardProps {
  project: Project;
}

const StandardProjectCard = ({ project }: StandardProjectCardProps) => {
  return (
    <Link
      to={`/case-study/${project.slug}`}
      className="group block h-full"
    >
      <article className="relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:border-accent/30 hover:shadow-lg h-full flex flex-col">
        {/* Image Container */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          {/* Year */}
          <span className="text-xs text-muted-foreground mb-2">{project.year}</span>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {project.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-secondary/50 text-secondary-foreground rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all mt-auto">
            <span>View Case</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default StandardProjectCard;
