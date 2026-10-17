import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioWork } from '../../models/portfolio-work.model';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  templateUrl: './portfolio-card.html',
  styleUrl: './portfolio-card.scss',
})
export class PortfolioCard {
  @Input({ required: true }) work!: PortfolioWork;

  @Output() open = new EventEmitter<PortfolioWork>();
}
