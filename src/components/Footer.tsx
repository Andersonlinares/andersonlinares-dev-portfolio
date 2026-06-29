import { useLang } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="py-8 border-t">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anderson Linares. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
