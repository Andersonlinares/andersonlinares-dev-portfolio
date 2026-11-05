import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useLiquidGlass } from "@/lib/liquid-glass";
import LanguageToggle from "./LanguageToggle";

const ids = ["sobre", "fluxo", "experiencia", "projetos", "stack", "contato"] as const;

const Navbar = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  useLiquidGlass(barRef, { bezel: 16, strength: 22, blur: 7 });

  const labels: Record<(typeof ids)[number], string> = {
    sobre: t.nav.about,
    fluxo: t.nav.flow,
    experiencia: t.nav.experience,
    projetos: t.nav.projects,
    stack: t.nav.skills,
    contato: t.nav.contact,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <div
        ref={barRef}
        className={`liquid flex h-14 w-full max-w-4xl items-center justify-between gap-2 rounded-full pl-5 pr-2 transition-[transform,box-shadow] duration-300 ${
          scrolled ? "" : "md:scale-[1.01]"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight" aria-label="Início">
          <span className="text-primary">{"<"}</span>
          <span>AL</span>
          <span className="text-primary">{"/>"}</span>
        </a>

        <nav className="hidden items-center md:flex" aria-label="Principal">
          {ids.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                active === id ? "bg-white/[0.08] text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {labels[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-white/[0.06] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-3 top-[76px] animate-fade-in md:hidden">
          <nav className="glass flex flex-col rounded-3xl p-2" style={{ background: "hsl(var(--glass-bg-strong))" }}>
            {ids.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-[15px] font-medium ${active === id ? "bg-white/[0.08] text-foreground" : "text-muted-foreground"}`}
              >
                {labels[id]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
