import Link from "next/link";

const nav = [
  ["Experiências", "/experiencias"],
  ["Eventos", "/eventos"],
  ["Formações", "/formacoes"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"]
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link href="/" className="brand" aria-label="Lincon Class — início">
          <span className="brandMark">LC</span>
          <span><strong>Lincon Class</strong><small>Música ao vivo para eventos</small></span>
        </Link>
        <nav className="desktopNav" aria-label="Navegação principal">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <a className="button buttonPrimary headerCta" href="https://wa.me/5521969909037?text=Olá!%20Gostaria%20de%20uma%20proposta%20para%20meu%20evento." target="_blank" rel="noreferrer">Solicitar proposta</a>
        <details className="mobileMenu">
          <summary aria-label="Abrir menu">Menu</summary>
          <nav>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<a href="https://wa.me/5521969909037" target="_blank" rel="noreferrer">WhatsApp</a></nav>
        </details>
      </div>
    </header>
  );
}
