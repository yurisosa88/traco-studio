import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { sectionIds } from '../../../../core/config/site.config';
import { specialties } from './specialties.data';

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './specialties.html',
  styleUrl: './specialties.scss',
})
export class Specialties {
  readonly specialties = specialties;
  readonly sectionId = sectionIds.specialties;
}