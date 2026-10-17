import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioWork } from '../../models/portfolio-work.model';

@Component({
  selector: 'app-portfolio-lightbox',
  standalone: true,
  templateUrl: './portfolio-lightbox.html',
  styleUrl: './portfolio-lightbox.scss',
})
export class PortfolioLightbox {
  @Input() work: PortfolioWork | null = null;
  @Input() index = 0;
  @Input() total = 0;

  @Output() close = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  get currentLabel(): string {
    if (this.total === 0) {
      return '';
    }

    return `${this.index + 1} / ${this.total}`;
  }
}
