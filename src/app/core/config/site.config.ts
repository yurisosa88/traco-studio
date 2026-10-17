export const enabledSections = {
  about: true,
  portfolio: true,
  specialties: true,
  process: true,
  faq: true,
  contact: true,
} as const;

export type SectionKey = keyof typeof enabledSections;

export const sectionIds: Record<SectionKey, string> = {
  about: 'sobre',
  portfolio: 'portfolio',
  specialties: 'especialidades',
  process: 'processo',
  faq: 'faq',
  contact: 'contato',
};

export const sectionHref = (section: SectionKey): string => `#${sectionIds[section]}`;
export const homeSectionId = 'inicio';

export interface NavigationItem {
  label: string;
  href: string;
}

interface SectionNavigationItem {
  label: string;
  section: SectionKey;
}

const sectionNavigationConfig: SectionNavigationItem[] = [
  { label: 'Sobre', section: 'about' },
  { label: 'Portfólio', section: 'portfolio' },
  { label: 'Especialidades', section: 'specialties' },
  { label: 'Processo', section: 'process' },
  { label: 'Perguntas frequentes', section: 'faq' },
  { label: 'Contato', section: 'contact' },
];

export const navigationItems: NavigationItem[] = [
  { label: 'Início', href: `#${homeSectionId}` },
  ...sectionNavigationConfig
    .filter((item) => enabledSections[item.section])
    .map(({ label, section }) => ({ label, href: sectionHref(section) })),
];