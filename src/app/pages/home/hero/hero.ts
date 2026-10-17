import { Component } from '@angular/core';
import { businessContent } from '../../../core/config/business.config';
import { enabledSections, homeSectionId, sectionHref } from '../../../core/config/site.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly sectionId = homeSectionId;
  readonly content = businessContent.hero;
  readonly enabledSections = enabledSections;
  readonly getSectionHref = sectionHref;
}
