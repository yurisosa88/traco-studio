import type { SectionKey } from './site.config';

export const businessContent = {
  brand: {
    name: 'Traço Studio',
    homeLabel: 'Página inicial do Traço Studio',
  },
  hero: {
    eyebrow: 'TATUAGEM AUTORAL',
    title: 'Sua história merece ser arte.',
    description: 'Cada traço carrega uma história. Transformamos suas ideias em tatuagens únicas, feitas com técnica, cuidado e personalidade.',
    image: '/images/hero-tattoo.webp',
    primaryAction: {
      label: 'Solicitar orçamento',
      section: 'contact' as SectionKey,
    },
    secondaryAction: {
      label: 'Explorar trabalhos',
      section: 'portfolio' as SectionKey,
    },
  },
  about: {
    imageLabel: 'Retrato do artista tatuador em ambiente editorial',
    imageAlt: 'Retrato de um tatuador em um estúdio, com atenção ao detalhe e expressão pessoal.',
    imageDesktop: '/images/about-artist-desktop.webp',
    imageMobile: '/images/about-artist-mobile.webp',
    eyebrow: 'SOBRE O ARTISTA',
    title: 'Mais que tatuagens, histórias na pele',
    paragraphs: [
      'Sou um tatuador independente apaixonado por transformar ideias em peças com identidade, técnica e presença. Cada projeto é pensado com atenção personalizada, respeitando o estilo, a história e a forma como você se expressa.',
      'Trabalho com linhas precisas, composição cuidadosa e acabamento refinado para criar tatuagens que resistem ao tempo e continuam importantes em cada detalhe. A experiência é acolhedora, honesta e feita para que você se sinta seguro em cada etapa do processo.',
    ],
    action: {
      label: 'Conheça meu trabalho',
      section: 'portfolio' as SectionKey,
    },
  },
  footer: {
    copyright: '© 2026 Traço Studio',
    description: 'Estúdio de tatuagem e arte corporal',
  },
} as const;