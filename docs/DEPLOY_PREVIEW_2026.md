# Lincon Class 2026 — Build e Preview

## Estado atual

- Branch de trabalho: `audit/lincon-class-2026`
- PR: #7
- Build Blazor WebAssembly validado via GitHub Actions.
- Artefato gerado a partir de `publish/wwwroot`.
- Preview visual Vercel mantida separada de produção.

## Correção estrutural realizada

O projeto original misturava o documento HTML completo dentro de `MainLayout.razor` e não possuía `wwwroot/index.html`. Também mantinha CSS fora da raiz pública. Isso permitia compilação parcial, mas não gerava um pacote estático pronto para hospedagem.

A arquitetura 2026 passa a usar:

- `wwwroot/index.html` como host do Blazor WebAssembly;
- `Layout/MainLayout.razor` apenas como layout de componentes;
- `wwwroot/css/app.css` como CSS público;
- CI para restore, publish e geração de artefato.

## Gate de publicação

Antes de merge em `master`:

1. CI verde;
2. revisão visual desktop/mobile;
3. mídia real final;
4. URLs e SEO revisados;
5. nenhum claim não auditado;
6. WhatsApp funcional;
7. deploy preview validado.

Produção só deve ser alterada após esses gates.