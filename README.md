# TRAÇO Studio

TRAÇO Studio é um site fictício e demonstrativo para um estúdio de tatuagem, desenvolvido como projeto de portfólio. A aplicação apresenta uma página profissional para ilustrar como um site pode ser adaptado a tatuadores e outros profissionais independentes.

**Demonstração online:** [https://traco-studio.pages.dev/](https://traco-studio.pages.dev/)

> **Aviso:** TRAÇO Studio não representa um negócio real. As imagens, a localização, os perfis sociais e os demais dados comerciais são ilustrativos e não devem ser usados como informações de um estabelecimento real.

## Tecnologias

- Angular 22 com componentes standalone e Angular Router.
- TypeScript.
- SCSS.
- Angular SSR/SSG: renderização no servidor e prerenderização das rotas configuradas.
- Node.js e Express para o servidor SSR.
- RxJS.

## Funcionalidades

- Layout responsivo, com estilos adaptados a diferentes larguras de tela.
- Navegação por âncoras entre início, sobre, portfólio, especialidades, processo, perguntas frequentes e contato.
- Portfólio com filtros por estilo e visualização ampliada em lightbox, incluindo navegação entre imagens.
- Animações de entrada acionadas ao rolar a página, com suporte à preferência por movimento reduzido.
- FAQ interativa, com perguntas que podem ser expandidas e recolhidas.
- Contato demonstrativo por WhatsApp e links de exemplo para redes sociais.
- Seção de localização ilustrativa, com mapa e link de direções.

## Requisitos

- Node.js 24.
- npm.

O projeto declara npm como gerenciador de pacotes e inclui o `package-lock.json` para instalação reproduzível.

## Instalação e desenvolvimento local

Na raiz do repositório, instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Abra [http://localhost:4200/](http://localhost:4200/). O servidor de desenvolvimento recarrega a aplicação durante as alterações.

## Build de produção

Gere o build:

```bash
npm run build
```

Os arquivos são gerados em `dist/traco-studio/`. A saída estática prerenderizada para publicação fica em `dist/traco-studio/browser/`; os artefatos do servidor ficam em `dist/traco-studio/server/`.

## Deploy no Cloudflare Pages

Configure o projeto do Cloudflare Pages com os seguintes valores:

| Configuração | Valor |
| --- | --- |
| Repositório | Repositório GitHub deste projeto |
| Branch de produção | `main` |
| Comando de build | `npm run build` |
| Diretório de saída | `dist/traco-studio/browser` |
| Versão do Node.js | `24` |

O build prerenderiza a rota principal, e o diretório `browser` contém os arquivos estáticos para publicação no Pages.

## SEO

A página inclui título, descrição, metadados Open Graph e Twitter Cards em português do Brasil. A diretiva `noindex, follow` é intencional: este projeto fictício não deve ser indexado. O `robots.txt` permite o rastreamento para que mecanismos de busca possam encontrar a diretiva `noindex`.

Como ainda não há um domínio definitivo para esta demonstração, não foi configurado um canonical nem criado um sitemap com URLs presumidas. Para um projeto real, defina o domínio público e revise o canonical, os metadados sociais, a indexação e o sitemap antes de publicar.

## Personalização

Os principais dados estão organizados por responsabilidade:

- [`business.config.ts`](./src/app/core/config/business.config.ts): nome da marca, textos do hero e da apresentação, imagens associadas e conteúdo do rodapé.
- [`site.config.ts`](./src/app/core/config/site.config.ts): seções habilitadas, identificadores e itens da navegação.
- [`contact.data.ts`](./src/app/pages/home/sections/contact/data/contact.data.ts): métodos de contato, links sociais e dados da localização. Substitua os valores demonstrativos pelos dados autorizados do profissional.
- [`portfolio.data.ts`](./src/app/pages/home/sections/portfolio/data/portfolio.data.ts): trabalhos, estilos, descrições, imagens e textos alternativos.
- [`faq.data.ts`](./src/app/pages/home/sections/faq/data/faq.data.ts), [`process.data.ts`](./src/app/pages/home/sections/process/process.data.ts) e [`specialties.data.ts`](./src/app/pages/home/sections/specialties/specialties.data.ts): conteúdo das perguntas frequentes, etapas do processo e especialidades.
- `public/images/`: imagens usadas no site. Atualize os arquivos e os caminhos correspondentes nas configurações e nos dados.

Ao adaptar o projeto a outro profissional, revise também os textos e dados demonstrativos para não publicar informações fictícias como se fossem reais.
