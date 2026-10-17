import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioFilter } from '../../models/portfolio-work.model';

@Component({
  selector: 'app-portfolio-filters',
  standalone: true,
  templateUrl: './portfolio-filters.html',
  styleUrl: './portfolio-filters.scss',
})
export class PortfolioFilters {
  @Input() filters: ReadonlyArray<{ label: string; value: PortfolioFilter }> = [];
  @Input() selectedFilter: PortfolioFilter = 'all';

  @Output() filterChange = new EventEmitter<PortfolioFilter>();

  selectFilter(filter: PortfolioFilter): void {
    this.filterChange.emit(filter);
  }
}
