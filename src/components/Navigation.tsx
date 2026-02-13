import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg font-bold text-foreground hover:text-accent transition-colors tracking-tight"
        >
          Mitty Huang
        </button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("works")}
            className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors link-underline"
          >
            Works
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors link-underline"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-mono text-xs uppercase tracking-wider px-4 py-2 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;