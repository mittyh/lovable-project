import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DarkCaseStudyNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (section: string) => {
    navigate(`/#${section}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0b]/90 backdrop-blur-md border-b border-zinc-800/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="text-lg font-bold text-white hover:text-emerald-400 transition-colors tracking-tight"
        >
          Mitty Huang
        </Link>

        <div className="flex items-center gap-8">
          <button
            onClick={() => navigateToSection("works")}
            className="font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors link-underline"
          >
            Works
          </button>
          <button
            onClick={() => navigateToSection("about")}
            className="font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors link-underline"
          >
            About
          </button>
          <button
            onClick={() => navigateToSection("contact")}
            className="font-mono text-xs uppercase tracking-wider px-4 py-2 bg-emerald-500 text-white rounded hover:opacity-90 transition-opacity"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default DarkCaseStudyNavigation;
