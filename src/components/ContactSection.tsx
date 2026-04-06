import { Phone, Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Phone, label: "(61) 98129-6170", href: "tel:+5561981296170" },
  { icon: Mail, label: "andersonlinares.dev@gmail.com", href: "mailto:andersonlinares.dev@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/andersonlinares", href: "https://www.linkedin.com/in/andersonlinares/" },
  { icon: Github, label: "github.com/Andersonlinares", href: "https://github.com/Andersonlinares" },
];

const ContactSection = () => (
  <section id="contato" className="py-20">
    <div className="container max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Mail className="text-primary" size={24} />
        <h2 className="text-2xl md:text-3xl font-bold">Contato</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 bg-card rounded-xl p-5 border card-glow hover:border-primary/40 transition-all duration-300"
          >
            <c.icon className="text-primary shrink-0" size={20} />
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all">
              {c.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
