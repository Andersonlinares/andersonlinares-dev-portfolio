import { useLang, type Lang } from "@/lib/i18n";

const LanguageToggle = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full bg-white/[0.06] p-0.5 font-mono text-[11px] font-medium" role="group" aria-label="Idioma / Language">
      {(["pt", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
