import { User } from "lucide-react";

const AboutSection = () => (
  <section id="sobre" className="py-20">
    <div className="container max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <User className="text-primary" size={24} />
        <h2 className="text-2xl md:text-3xl font-bold">Sobre mim</h2>
      </div>
      <div className="bg-card rounded-xl p-6 md:p-8 border card-glow transition-all duration-300">
        <p className="text-muted-foreground leading-relaxed">
          Sou Anderson Linares, desenvolvedor de software e web, formado em{" "}
          <span className="text-foreground font-medium">Análise e Desenvolvimento de Sistemas</span> pela UDF.
          Tenho experiência em integração de sistemas e criação de aplicativos sem código.
          Sou familiarizado com ferramentas como Kommo, Zapier, Make e WordPress.
          Com boa capacidade de adaptação e aprendizado rápido, busco sempre oferecer
          soluções eficientes e inovadoras para as empresas.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
