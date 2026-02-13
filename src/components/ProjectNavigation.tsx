import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAdjacentProjects, Project } from "@/data/projects";

interface ProjectNavigationProps {
  currentSlug: string;
  theme?: "light" | "dark";
}

const ProjectNavigation = ({ currentSlug, theme = "light" }: ProjectNavigationProps) => {
  const { prev, next } = getAdjacentProjects(currentSlug);

  const isDark = theme === "dark";

  return (
    <section className="container-wide overflow-hidden">
      <div className={`pt-12 border-t ${isDark ? "border-zinc-800" : "border-border"}`}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Previous Project */}
          {prev ? (
            <Link
              to={`/case-study/${prev.slug}`}
              className={`group flex gap-4 p-4 rounded-xl transition-all min-w-0 ${
                isDark 
                  ? "hover:bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700" 
                  : "hover:bg-info-block border border-border/50 hover:border-border"
              }`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={prev.imageUrl}
                  alt={prev.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <ArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isDark ? "text-zinc-500" : "text-muted-foreground"}`} />
                  <span className={`text-xs uppercase tracking-wider ${isDark ? "text-zinc-500" : "text-muted-foreground"}`}>Previous</span>
                </div>
                <h4 className={`font-medium line-clamp-2 break-words ${isDark ? "text-white" : "text-foreground"}`}>{prev.title}</h4>
                <p className={`text-sm line-clamp-1 ${isDark ? "text-zinc-400" : "text-muted-foreground"}`}>{prev.subtitle}</p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {prev.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded ${
                        isDark 
                          ? "bg-zinc-800/80 text-zinc-400" 
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Project */}
          {next ? (
            <Link
              to={`/case-study/${next.slug}`}
              className={`group flex gap-4 p-4 rounded-xl transition-all min-w-0 ${
                isDark 
                  ? "hover:bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700" 
                  : "hover:bg-info-block border border-border/50 hover:border-border"
              }`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={next.imageUrl}
                  alt={next.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className={`text-xs uppercase tracking-wider ${isDark ? "text-zinc-500" : "text-muted-foreground"}`}>Next</span>
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isDark ? "text-zinc-500" : "text-muted-foreground"}`} />
                </div>
                <h4 className={`font-medium line-clamp-2 break-words text-right ${isDark ? "text-white" : "text-foreground"}`}>{next.title}</h4>
                <p className={`text-sm line-clamp-1 text-right ${isDark ? "text-zinc-400" : "text-muted-foreground"}`}>{next.subtitle}</p>
                <div className="flex gap-1.5 mt-2 flex-wrap justify-end">
                  {next.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded ${
                        isDark 
                          ? "bg-zinc-800/80 text-zinc-400" 
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation;
