import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Experiências Musicais", description: "Música ao vivo para cerimônia, recepção, coquetel, jantar e Sax Live no RJ.", alternates: { canonical: "/experiencias" } };

const items = [
  ["Música para cerimônia", "Entradas, momentos solenes, homenagens e saída com repertório alinhado à celebração.", "/images/galerry/foto 1.jpg"],
  ["Recepção musical", "Sax ao vivo desde a chegada, criando presença musical sem disputar atenção com os convidados.", "/images/cards/celebracao.svg"],
  ["Coquetel, jantar & música ambiente", "Performance integrada ao espaço e à dinâmica do evento.", "/images/cards/corporativo.svg"],
  ["Sax Live", "Mais energia e interação para festas, pista e momentos de destaque, inclusive com DJ.", "/images/cards/palco.svg"]
];

export default function ExperienciasPage(){return <><section className="pageHero"><div className="shell"><span className="eyebrow">Experiências</span><h1>Música planejada para cada momento.</h1><p>O formato parte da experiência desejada no evento. Depois definimos formação, repertório, duração e estrutura.</p></div></section><section className="pageBody shell"><div className="contentGrid">{items.map(([t,p,image])=><article className="contentCard contentCardMedia" key={t}><div className="contentMedia" style={{backgroundImage:`linear-gradient(180deg,rgba(9,16,26,.03),rgba(9,16,26,.22)),url('${image}')`}}/><div className="contentCardBody"><h2>{t}</h2><p>{p}</p></div></article>)}</div><div className="ctaPanel" style={{marginTop:40}}><h2>Qual experiência combina com seu evento?</h2><p>Conte o contexto e eu te ajudo a chegar na solução certa.</p><Link className="button buttonPrimary" href="/contato">Solicitar orientação</Link></div></section></>}
