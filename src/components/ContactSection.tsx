import { useState } from "react";
import { Check, Copy, Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { contactInfo, useLang } from "@/lib/i18n";

const ContactSection = () => {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <section id="contato" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="glass relative overflow-hidden rounded-[32px] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[70%] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, hsl(189 94% 58% / 0.35), transparent)" }}
              aria-hidden
            />
            <p className="kicker relative">{t.contact.kicker}</p>
            <h2 className="section-title relative mx-auto max-w-2xl">{t.contact.title}</h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">{t.contact.text}</p>

            <div className="relative mt-9 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.7)] transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <MessageCircle size={17} /> {t.contact.whatsapp}
              </a>
              <button
                onClick={copy}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border bg-white/[0.04] px-5 font-mono text-[13px] transition-colors hover:bg-white/[0.08] sm:w-auto"
                aria-label={t.contact.copy}
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                {copied ? t.contact.copied : contactInfo.email}
              </button>
            </div>

            <div className="relative mt-8 flex items-center justify-center gap-1">
              {[
                { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
                { icon: Github, href: contactInfo.github, label: "GitHub" },
                { icon: Phone, href: "tel:+5561981296170", label: contactInfo.phone },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
                >
                  <s.icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
