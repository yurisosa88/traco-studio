import { Component, HostListener } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { PortfolioCard } from './components/portfolio-card/portfolio-card';
import { PortfolioFilters } from './components/portfolio-filters/portfolio-filters';
import { PortfolioLightbox } from './components/portfolio-lightbox/portfolio-lightbox';
import { portfolioFilters, portfolioWorks } from './data/portfolio.data';
import { PortfolioFilter, PortfolioWork } from './models/portfolio-work.model';
import { sectionIds } from '../../../../core/config/site.config';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioFilters, PortfolioCard, PortfolioLightbox, RevealOnScrollDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  readonly sectionId = sectionIds.portfolio;
  readonly filters = portfolioFilters;
  readonly works = portfolioWorks;

  selectedFilter: PortfolioFilter = 'all';
  selectedWork: PortfolioWork | null = null;
  currentIndex = 0;

  get filteredWorks(): PortfolioWork[] {
    return this.selectedFilter === 'all'
      ? this.works
      : this.works.filter((work) => work.styleKey === this.selectedFilter);
  }

  onFilterChange(filter: PortfolioFilter): void {
    this.selectedFilter = filter;
    this.selectedWork = null;
    this.currentIndex = 0;
  }

  openLightbox(work: PortfolioWork): void {
    const index = this.filteredWorks.findIndex((item) => item.id === work.id);
    this.currentIndex = index >= 0 ? index : 0;
    this.selectedWork = this.filteredWorks[this.currentIndex] ?? work;
  }

  closeLightbox(): void {
    this.selectedWork = null;
    this.currentIndex = 0;
  }

  showPrevious(): void {
    if (!this.filteredWorks.length) {
      return;
    }

    this.currentIndex = (this.currentIndex - 1 + this.filteredWorks.length) % this.filteredWorks.length;
    this.selectedWork = this.filteredWorks[this.currentIndex];
  }

  showNext(): void {
    if (!this.filteredWorks.length) {
      return;
    }

    this.currentIndex = (this.currentIndex + 1) % this.filteredWorks.length;
    this.selectedWork = this.filteredWorks[this.currentIndex];
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (!this.selectedWork) {
      return;
    }

    if (event.key === 'Escape') {
      this.closeLightbox();
      return;
    }

    if (event.key === 'ArrowRight') {
      this.showNext();
    }

    if (event.key === 'ArrowLeft') {
      this.showPrevious();
    }
  }
}
