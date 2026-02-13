const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/20 bg-card">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-1 bg-highlight" />
            <p className="font-mono text-xs text-muted-foreground">
              © {currentYear} Mitty Huang
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/mittyhuang/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shiaoyuhuang@gmail.com"
              className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              Email
            </a>
            <a
              href="/Mitty (XiaoYu) Huang Product Designer - CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;