import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface CompactProjectCardProps {
  project: Project;
}

const CompactProjectCard = ({ project }: CompactProjectCardProps) => {
  return (
    <Link
      to={`/case-study/${project.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-lg bg-card border border-border/50 transition-all duration-300 hover:border-accent/30 hover:shadow-md">
        {/* Horizontal Layout */}
        <div className="flex gap-4 p-4">
          {/* Thumbnail - Small */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            {/* Year */}
            <span className="text-xs text-muted-foreground mb-1">{project.year}</span>

            {/* Title */}
            <h3 className="text-base md:text-lg font-medium text-foreground mb-1 leading-snug group-hover:text-accent transition-colors line-clamp-2">
              {project.title}
            </h3>

            {/* Personal framing */}
            <p className="text-xs text-muted-foreground italic line-clamp-1">
              {project.subtitle.split('—')[0]}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex items-center">
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CompactProjectCard;
