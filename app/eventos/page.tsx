import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Música ao Vivo para Eventos",
  description: "Saxofonista para casamentos, aniversários, 15 anos, corporativos, homenagens e festas no RJ.",
  alternates: { canonical: "/eventos" }
};

const events = [
  ["Casamentos", "Cerimônia, recepção, coquetel, jantar e festa.", "/saxofonista-para-casamento-rj", "/images/cards/casamento.svg"],
  ["15 anos & aniversários", "Entrada, recepção, homenagens, momentos especiais e pista.", "/contato", "/images/cards/celebracao.svg"],
  ["Eventos corporativos", "Recepções, coquetéis, inaugurações, confraternizações e ações empresariais.", "/contato", "/images/cards/corporativo.svg"],
  ["Homenagens & surpresas", "Apresentações personalizadas para momentos especiais.", "/contato", "/images/cards/celebracao.svg"],
  ["Pedidos de casamento", "Música planejada para criar um momento marcante e íntimo.", "/contato", "/images/cards/romantico.svg"],
  ["Festas particulares", "Soluções musicais flexíveis para diferentes formatos de celebração.", "/contato", "/images/cards/palco.svg"]
];

export default function EventosPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <span className="eyebrow">Eventos</span>
          <h1>Música ao vivo no contexto certo.</h1>
          <p>Cada evento pede uma intensidade, um repertório e uma presença musical diferentes.</p>
        </div>
      </section>

      <section className="pageBody shell">
        <div className="cardGrid three">
          {events.map(([title, text, href, image]) => (
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
          <h2>Quer uma proposta para o seu evento?</h2>
          <p>Comece pelo briefing; a configuração vem depois.</p>
          <Link className="button buttonPrimary" href="/contato">Enviar briefing</Link>
        </div>
      </section>
    </>
  );
}
