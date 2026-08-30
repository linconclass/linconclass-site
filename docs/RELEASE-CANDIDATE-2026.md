# Lincon Class 2026 — Release Candidate

## Estado atual

A branch `audit/lincon-class-2026` é a candidata de reconstrução do site e permanece separada de produção.

## Gate 1 — Arquitetura e posicionamento

- [x] Marca central: Lincon Class
- [x] Posicionamento: saxofonista e música ao vivo para eventos
- [x] Separação entre momentos, experiências, eventos, formações e adicionais
- [x] ClassMark/TI fora do posicionamento musical

## Gate 2 — Navegação e conversão

- [x] Home
- [x] Experiências
- [x] Eventos
- [x] Formações
- [x] Sobre
- [x] Galeria de fotos
- [x] Galeria de vídeos sem conteúdo fictício
- [x] Contato orientado a WhatsApp
- [x] Briefing de seis pontos

## Gate 3 — SEO técnico

- [x] robots.txt
- [x] sitemap.xml
- [x] canonical global e por páginas prioritárias
- [x] títulos e descriptions por intenção
- [x] Open Graph base
- [x] dados estruturados WebSite + Person + Service
- [x] landing page de casamento
- [x] landing page de Sax Live com DJ
- [ ] validar Search Console após produção
- [ ] validar sitemap no Google após produção

## Gate 4 — Build e publicação

- [x] estrutura Blazor WebAssembly corrigida
- [x] wwwroot/index.html
- [x] CSS publicado em wwwroot
- [x] GitHub Actions de build/publish
- [ ] CI final verde no commit candidato
- [ ] preview final da aplicação compilada
- [ ] aprovação visual final
- [ ] merge controlado em master
- [ ] deploy de produção

## Gate 5 — Mídia

- [x] arquitetura de mídia definida
- [x] mídia de autoridade identificada no Drive
- [ ] substituir imagem provisória principal por fotografia comercial final
- [ ] selecionar fotos para cerimônia, recepção, Sax Live e corporativo
- [ ] selecionar vídeos reais prioritários

## Regra de publicação

Não alterar `linconclass.com.br` até Gate 4 estar concluído e a mídia essencial estar adequada. O restante do acervo pode ser enriquecido progressivamente após a publicação.