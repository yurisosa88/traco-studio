export type PortfolioStyle = 'Blackwork' | 'Fine Line' | 'Realismo' | 'Ornamental';
export type PortfolioFilter = 'all' | 'blackwork' | 'fine-line' | 'realismo' | 'ornamental';

export interface PortfolioWork {
  id: number;
  title: string;
  style: PortfolioStyle;
  styleKey: Exclude<PortfolioFilter, 'all'>;
  description: string;
  dimensions: string;
  image: string;
  alt: string;
}

export interface PortfolioFilterOption {
  label: string;
  value: PortfolioFilter;
}