import { useLang } from "@/lib/i18n";

const BRFlag = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 28 20" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" fill="#009b3a" />
    <polygon points="14,3 25,10 14,17 3,10" fill="#fedf00" />
    <circle cx="14" cy="10" r="3.6" fill="#002776" />
    <path d="M10.7 10.4 Q14 8.8 17.3 10.4" stroke="#fff" strokeWidth="0.5" fill="none" />
  </svg>
);

const USFlag = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 28 20" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" fill="#fff" />
    {[0, 2, 4, 6, 8, 10, 12].map((y) => (
      <rect key={y} y={y * (20 / 13)} width="28" height={20 / 13} fill="#b22234" />
    ))}
    <rect width="12" height={20 * 7 / 13} fill="#3c3b6e" />
  </svg>
);

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLang();
  const next = lang === "pt" ? "en" : "pt";
  const label = lang === "pt" ? "Switch to English" : "Mudar para Português";

  return (
    <button
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors ${className}`}
    >
      {lang === "pt" ? <BRFlag className="w-5 h-[14px] rounded-sm" /> : <USFlag className="w-5 h-[14px] rounded-sm" />}
      <span>{lang.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
