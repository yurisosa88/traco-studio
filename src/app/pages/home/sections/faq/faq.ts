import { Component, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { sectionIds } from '../../../../core/config/site.config';
import { faqItems } from './data/faq.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  readonly sectionId = sectionIds.faq;
  readonly items = faqItems;
  readonly expandedItemId = signal<string | null>(null);

  isExpanded(id: string): boolean {
    return this.expandedItemId() === id;
  }

  toggleItem(id: string): void {
    this.expandedItemId.update((currentId) => (currentId === id ? null : id));
  }
}