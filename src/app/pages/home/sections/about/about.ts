import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { businessContent } from '../../../../core/config/business.config';
import { enabledSections, sectionHref, sectionIds } from '../../../../core/config/site.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly content = businessContent.about;
  readonly enabledSections = enabledSections;
  readonly getSectionHref = sectionHref;
  readonly sectionId = sectionIds.about;
}
