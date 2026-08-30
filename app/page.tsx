import Link from "next/link";

const moments = [
  ["Cerimônia", "Entradas, momentos solenes, homenagens e saída com repertório alinhado à celebração."],
  ["Recepção", "Música ao vivo desde a chegada dos convidados, criando atmosfera sem disputar atenção."],
  ["Coquetel & jantar", "Performance elegante integrada ao ambiente, conversa e dinâmica do evento."],
  ["Festa & pista", "Sax Live com energia, interação e possibilidade de integração com DJ."]
];

const events = [
  ["Casamentos", "Do primeiro acorde da cerimônia à energia da festa.", "/saxofonista-para-casamento-rj"],
  ["15 anos & aniversários", "Recepção, entradas, homenagens e pista.", "/eventos"],
  ["Corporativos", "Coquetéis, recepções, inaugurações e confraternizações.", "/eventos"]
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Saxofonista · música ao vivo para eventos</span>
            <h1>A música certa para cada momento do seu evento.</h1>
            <p className="heroLead">Cerimônias, recepções, coquetéis, festas e Sax Live com uma experiência musical planejada para o contexto — não um pacote genérico.</p>
            <div className="buttonRow">
              <Link className="button buttonPrimary" href="/contato">Solicitar proposta</Link>
              <Link className="button buttonGhost" href="/experiencias">Conhecer experiências</Link>
            </div>
            <p className="serviceArea">São Gonçalo · Niterói · Rio de Janeiro e região <span>·</span> Outras localidades mediante disponibilidade</p>
          </div>
          <div className="heroVisual" aria-label="Espaço reservado para fotografia principal da Lincon Class">
            <div className="visualFrame"><span>Imagem real em curadoria</span><strong>Performance · presença · experiência</strong></div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionIntro"><span className="eyebrow">Momentos</span><h2>A apresentação acompanha a experiência do evento.</h2><p>Antes de escolher formação ou repertório, entendemos onde a música entra e o papel que ela precisa cumprir.</p></div>
        <div className="cardGrid four">{moments.map(([title, text], i) => <article className="card" key={title}><span className="cardNumber">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section sectionDark">
        <div className="shell split">
          <div><span className="eyebrow">Experiências</span><h2>Do sax solo a formações personalizadas.</h2><p>A solução é construída conforme tipo de evento, momento, repertório, duração e estrutura disponível.</p><Link className="textLink" href="/formacoes">Conhecer formações →</Link></div>
          <div className="experienceGrid"><div><strong>Sax Solo</strong><span>Versátil e elegante</span></div><div><strong>Sax Live</strong><span>Mais presença e interação</span></div><div><strong>Sax + DJ</strong><span>Integração com a pista</span></div><div><strong>Duo, trio & mais</strong><span>Formações sob medida</span></div></div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionIntro"><span className="eyebrow">Eventos</span><h2>Uma solução musical para cada celebração.</h2></div>
        <div className="cardGrid three">{events.map(([title, text, href]) => <Link className="eventCard" href={href} key={title}><span className="eventCardVisual" /><h3>{title}</h3><p>{text}</p><span className="textLink">Explorar →</span></Link>)}</div>
      </section>

      <section className="section shell">
        <div className="storyPanel"><div><span className="eyebrow">Trajetória</span><h2>Experiência construída no palco — aplicada ao seu evento.</h2><p>A trajetória de Lincon Class começou ainda jovem e passou por bandas, coros, orquestras, apresentações culturais, acompanhamento de artistas e pelo mercado profissional de eventos.</p><Link className="textLink" href="/sobre">Conhecer a trajetória →</Link></div><div className="storyProof"><span>Autoridade sem números inflados.</span><strong>Palco, repertório, leitura de ambiente e experiência real.</strong></div></div>
      </section>

      <section className="section shell"><div className="ctaPanel"><span className="eyebrow">Seu evento</span><h2>Vamos pensar na música certa?</h2><p>Conte data, local e o que está planejando. A partir disso, indicamos a configuração mais adequada.</p><Link href="/contato" className="button buttonPrimary">Começar pelo briefing</Link></div></section>
    </>
  );
}
