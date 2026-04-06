import { GraduationCap, BookOpen } from "lucide-react";

const courses = [
  { name: "Fundação Bradesco", detail: "Gestão de Banco de Dados e CSS" },
  { name: "ESPRO", detail: "Rotinas Administrativas e Comunicação Profissional" },
  { name: "Centro Interescolar de Línguas", detail: "Desenvolvimento do Inglês" },
];

const EducationSection = () => (
  <section id="formacao" className="py-20">
    <div className="container max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="text-primary" size={24} />
        <h2 className="text-2xl md:text-3xl font-bold">Formação</h2>
      </div>

      <div className="bg-card rounded-xl p-6 md:p-8 border card-glow mb-8 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="font-semibold text-foreground">Análise e Desenvolvimento de Sistemas</h3>
          <span className="text-xs font-mono text-primary">Jan 2022 – Mar 2024</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">UDF · Graduação · Brasília, DF</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Desenvolvimento de habilidades em lógica de programação, programação, banco de dados e estrutura de sistemas.
        </p>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="text-primary" size={20} />
        <h3 className="text-lg font-semibold">Cursos Extracurriculares</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {courses.map((c) => (
          <div key={c.name} className="bg-card rounded-xl p-5 border card-glow transition-all duration-300">
            <h4 className="font-medium text-foreground text-sm mb-1">{c.name}</h4>
            <p className="text-xs text-muted-foreground">{c.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
