import { useLang } from "@/lib/i18n";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLang();
  const next = lang === "pt" ? "en" : "pt";
  const label = lang === "pt" ? "Switch to English" : "Mudar para Português";
  // Flag shown represents the CURRENT language
  const flag = lang === "pt" ? "🇧🇷" : "🇺🇸";
  const code = lang.toUpperCase();

  return (
    <button
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors ${className}`}
    >
      <span className="text-base leading-none" aria-hidden>{flag}</span>
      <span>{code}</span>
    </button>
  );
};

export default LanguageToggle;
