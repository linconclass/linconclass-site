import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Experiências Musicais", description: "Música ao vivo para cerimônia, recepção, coquetel, jantar e Sax Live no RJ.", alternates: { canonical: "/experiencias" } };

const items = [
  ["Música para cerimônia", "Entradas, momentos solenes, homenagens e saída com repertório alinhado à celebração."],
  ["Recepção musical", "Sax ao vivo desde a chegada, criando presença musical sem disputar atenção com os convidados."],
  ["Coquetel, jantar & música ambiente", "Performance integrada ao espaço e à dinâmica do evento."],
  ["Sax Live", "Mais energia e interação para festas, pista e momentos de destaque, inclusive com DJ."]
];

export default function ExperienciasPage(){return <><section className="pageHero"><div className="shell"><span className="eyebrow">Experiências</span><h1>Música planejada para cada momento.</h1><p>O formato parte da experiência desejada no evento. Depois definimos formação, repertório, duração e estrutura.</p></div></section><section className="pageBody shell"><div className="contentGrid">{items.map(([t,p])=><article className="contentCard" key={t}><h2>{t}</h2><p>{p}</p></article>)}</div><div className="ctaPanel" style={{marginTop:40}}><h2>Qual experiência combina com seu evento?</h2><p>Conte o contexto e eu te ajudo a chegar na solução certa.</p><Link className="button buttonPrimary" href="/contato">Solicitar orientação</Link></div></section></>}
