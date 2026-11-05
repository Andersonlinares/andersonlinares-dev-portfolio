import { useLang } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="px-4 pb-10 pt-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Anderson Linares</p>
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
