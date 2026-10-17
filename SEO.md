# Configuração SEO

O site é um projeto fictício/demonstrativo e permanece com `noindex, follow`. O `robots.txt` permite o rastreamento para que mecanismos de busca possam encontrar essa diretiva; não há sitemap enquanto não existir um domínio definitivo.

Antes de publicar uma versão para um cliente real:

- Defina a URL pública e adicione a URL canônica absoluta ao `<head>`.
- Atualize `og:url` e configure URLs absolutas para a imagem Open Graph e a imagem do Twitter, usando assets existentes aprovados para o cliente.
- Remova `noindex`, confirme que o rastreamento está permitido e crie um sitemap com URLs públicas válidas.
- Revise título, descrição, identidade visual e favicon para refletir o cliente real.
