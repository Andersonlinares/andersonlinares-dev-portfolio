import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative pt-16 px-4">
    <div className="container text-center">
      <p className="text-primary font-mono text-sm mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Olá, eu sou
      </p>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Anderson <span className="text-gradient">Linares</span>
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        Desenvolvedor Full Stack Júnior
      </h2>
      <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
        Integrador de sistemas com experiência em gestão de CRMs, automação de processos,
        desenvolvimento web e criação de soluções personalizadas.
      </p>
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <a
          href="/curriculo-anderson-linares.pdf"
          download
          className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Download size={18} /> Baixar CV
        </a>
        <a
          href="https://www.linkedin.com/in/andersonlinares/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-border text-foreground text-sm hover:border-primary hover:text-primary transition-colors"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="https://github.com/Andersonlinares"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-border text-foreground text-sm hover:border-primary hover:text-primary transition-colors"
        >
          <Github size={18} /> GitHub
        </a>
        <a
          href="mailto:andersonlinares.dev@gmail.com"
          className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-border text-foreground text-sm hover:border-primary hover:text-primary transition-colors"
        >
          <Mail size={18} /> E-mail
        </a>
      </div>
    </div>
    <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
      <ChevronDown size={28} />
    </a>
  </section>
);

export default HeroSection;
