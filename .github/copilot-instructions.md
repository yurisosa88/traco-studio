# Traço Studio — Copilot Instructions

## Project
Traço Studio is a fictional tattoo artist portfolio and landing page, developed as a professional demonstration project.

The site is written in Brazilian Portuguese. Its architecture should be reusable for other independent professionals, such as barbers, massage therapists, and beauty specialists.

## Technology
- Angular 22 with standalone components.
- TypeScript with strict typing.
- SCSS for styling.
- Angular Router.
- Angular SSR/SSG.
- Semantic HTML and responsive, mobile-first design.

## Architecture
- Keep pages, reusable UI components, layouts, and configuration separate.
- Prefer small, focused components.
- Store business-specific information in centralized configuration when practical.
- Avoid unnecessary dependencies.
- Do not introduce Tailwind, Bootstrap, or other CSS frameworks.
- Preserve compatibility with Angular SSR. Never access `window`, `document`, or browser storage during server rendering without appropriate safeguards.

## Design
- Editorial, minimalist, sophisticated visual identity.
- Dark background: `#171717`.
- Surface color: `#292725`.
- Primary text: `#EDE7DD`.
- Accent color: `#B68B69`.
- Elegant serif typography for headings and clean sans-serif typography for body text.
- Restrained animations and hover effects.
- Respect `prefers-reduced-motion`.
- Prioritize accessibility, readability, performance, and mobile usability.

## Working Rules
- Analyze existing code before changing it.
- Follow the current project structure and conventions.
- Make small, incremental changes.
- Do not modify unrelated files.
- Do not install packages without asking first.
- Do not remove SSR or change Angular configuration without approval.
- Do not create commits, push changes, or switch Git branches unless explicitly requested.
- Explain significant changes and mention any verification that was performed.
- Do not invent business contact details, addresses, or customer testimonials.

## Quality
- Keep components accessible and responsive.
- Use meaningful HTML elements.
- Prefer maintainable SCSS over unnecessary complexity.
- Check for TypeScript and Angular template errors.
- Run appropriate validation commands when requested or when needed to verify changes.

## Idioma de comunicación

Responde siempre en español cuando expliques decisiones técnicas, cambios realizados, errores o recomendaciones.

Todo el contenido visible del sitio web debe estar en portugués brasileño (`pt-BR`).

Mantén los identificadores de código, nombres de archivos, componentes y métodos en inglés.