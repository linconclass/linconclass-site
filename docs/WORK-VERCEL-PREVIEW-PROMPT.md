# Prompt operacional — Work / Vercel Preview

Objetivo: publicar a branch real `audit/lincon-class-2026` do repositório `linconclass/linconclass-site` como **Preview**, sem alterar o domínio de produção e sem fazer merge em `master`.

## Estado validado

- Repositório: `linconclass/linconclass-site`
- Branch: `audit/lincon-class-2026`
- PR: #7
- Projeto: Blazor WebAssembly / .NET 10
- CI do GitHub executa restore + publish com sucesso.
- Saída estática esperada após `dotnet publish LinconClass.csproj -c Release -o publish`: `publish/wwwroot`
- `vercel.json` está no repositório com fallback SPA.

## Regras obrigatórias

1. NÃO fazer merge em `master`.
2. NÃO alterar `linconclass.com.br`.
3. NÃO promover deployment para Production.
4. Criar/importar apenas um projeto Preview ou configurar o projeto existente para Preview.
5. Se a Vercel tentar associar o domínio principal automaticamente, cancelar essa etapa.
6. Não apagar deployments antigos.

## Caminho preferencial

1. Abrir Vercel na conta já autenticada.
2. Importar o repositório GitHub `linconclass/linconclass-site`, se ainda não estiver conectado.
3. Confirmar que a integração GitHub está autorizada para esse repositório.
4. Configurar a branch de preview como `audit/lincon-class-2026`.
5. Como o projeto é Blazor WebAssembly, usar build compatível com .NET 10:
   - Build command: `dotnet publish LinconClass.csproj -c Release -o publish`
   - Output directory: `publish/wwwroot`
6. Se a imagem de build da Vercel não possuir .NET 10, NÃO adaptar o código nem trocar framework. Nesse caso, usar o artefato gerado pelo GitHub Actions ou outro fluxo de deploy estático do `publish/wwwroot`.
7. Manter o deployment como **Preview**.
8. Após READY, testar no endereço de preview:
   - `/`
   - `/experiencias`
   - `/eventos`
   - `/formacoes`
   - `/saxofonista-para-casamento-rj`
   - `/sax-live-com-dj-rj`
   - `/sobre`
   - `/galeriafotos`
   - `/galeriavideos`
   - `/contato`
9. Recarregar diretamente pelo menos três rotas internas para confirmar que o fallback SPA do `vercel.json` funciona.
10. Testar desktop e viewport mobile.

## Critérios de aprovação

- aplicação Blazor inicia sem erro;
- CSS e ícones carregam;
- menu navega corretamente;
- rotas internas sobrevivem a refresh direto;
- WhatsApp abre com briefing pré-preenchido;
- nenhuma URL aponta para ClassMark/TI;
- nenhuma afirmação `500+ eventos`, `100% satisfação` ou claim não auditado aparece;
- páginas de casamento e Sax Live com DJ carregam;
- `robots.txt` e `sitemap.xml` são acessíveis;
- deployment permanece Preview.

## Saída obrigatória

Ao terminar, entregar:

1. URL pública do Preview;
2. status do deployment;
3. branch e commit implantados;
4. resultado dos testes de rotas;
5. problemas encontrados;
6. screenshots desktop e mobile da Home, Casamentos e Contato;
7. confirmação explícita de que `linconclass.com.br` e `master` não foram alterados.
