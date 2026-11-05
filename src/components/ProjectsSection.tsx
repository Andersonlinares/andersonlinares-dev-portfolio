import { useState } from "react";
import { ArrowUpRight, Bot, Globe, LayoutDashboard, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projectMeta, useLang, type ProjectKind } from "@/lib/i18n";

type Filter = "all" | ProjectKind;

const kindIcon = { automation: Workflow, system: LayoutDashboard, web: Globe } as const;

const ProjectsSection = () => {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const items = t.projects.items.map((p, i) => ({ ...p, ...projectMeta[i] }));
  const visible = items.filter((p) => filter === "all" || p.kind === filter);

  return (
    <section id="projetos" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker">{t.projects.kicker}</p>
              <h2 className="section-title">{t.projects.title}</h2>
            </div>
            <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
              <div className="inline-flex rounded-full bg-white/[0.05] p-1" role="tablist">
                {(["all", "automation", "system", "web"] as Filter[]).map((f) => (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={filter === f}
                    onClick={() => setFilter(f)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                      filter === f ? "bg-white/[0.1] text-foreground shadow-[inset_0_1px_0_hsl(0_0%_100%/0.12)]" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t.projects.filters[f]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => {
            const Icon = p.kind === "automation" && p.tags.includes("OpenAI") ? Bot : kindIcon[p.kind];
            const Tag = p.link ? "a" : "div";
            return (
              <ScrollReveal key={p.title} delay={0.04 * i}>
                <Tag
                  {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`glass spot group flex h-full flex-col rounded-3xl p-5 transition-transform duration-300 sm:p-6 ${p.link ? "hover:-translate-y-1" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    {p.link && (
                      <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-white/[0.06] group-hover:text-foreground">
                        {t.projects.visit}
                        <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-semibold">{p.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-white/[0.05] px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Tag>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
