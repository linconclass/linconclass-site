import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiências Musicais",
  description: "Música ao vivo para cerimônia, recepção, coquetel, jantar e Sax Live no RJ.",
  alternates: { canonical: "/experiencias" }
};

const items = [
  ["Música para cerimônia", "Entradas, momentos solenes, homenagens e saída com repertório alinhado à celebração.", "/contato", "/images/cards/casamento.svg"],
  ["Recepção musical", "Sax ao vivo desde a chegada, criando presença musical sem disputar atenção com os convidados.", "/contato", "/images/cards/celebracao.svg"],
  ["Coquetel, jantar & música ambiente", "Performance integrada ao espaço e à dinâmica do evento.", "/contato", "/images/cards/corporativo.svg"],
  ["Sax Live", "Mais energia e interação para festas, pista e momentos de destaque, inclusive com DJ.", "/sax-live-com-dj-rj", "/images/cards/palco.svg"]
];

export default function ExperienciasPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <span className="eyebrow">Experiências</span>
          <h1>Música planejada para cada momento.</h1>
          <p>O formato parte da experiência desejada no evento. Depois definimos formação, repertório, duração e estrutura.</p>
        </div>
      </section>

      <section className="pageBody shell">
        <div className="cardGrid three">
          {items.map(([title, text, href, image]) => (
            <Link className="eventCard" href={href} key={title}>
              <span
                className="eventCardVisual"
                style={{ backgroundImage: `linear-gradient(180deg,rgba(9,16,26,.03),rgba(9,16,26,.25)),url('${image}')` }}
              />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="textLink">Explorar →</span>
            </Link>
          ))}
        </div>

        <div className="ctaPanel" style={{ marginTop: 40 }}>
          <h2>Qual experiência combina com seu evento?</h2>
          <p>Conte o contexto e eu te ajudo a chegar na solução certa.</p>
          <Link className="button buttonPrimary" href="/contato">Solicitar orientação</Link>
        </div>
      </section>
    </>
  );
}
