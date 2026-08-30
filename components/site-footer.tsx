import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div><strong>Lincon Class</strong><p>Saxofonista e músico para eventos.</p></div>
        <div><strong>Atendimento</strong><p>São Gonçalo · Niterói · Rio de Janeiro e região.</p></div>
        <div className="footerLinks"><Link href="/sobre">Sobre</Link><Link href="/contato">Contato</Link><a href="https://www.instagram.com/linconclass" target="_blank" rel="noreferrer">Instagram</a></div>
      </div>
      <div className="shell footerBottom">© 2026 Lincon Class. Música ao vivo para eventos.</div>
    </footer>
  );
}
