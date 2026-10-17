import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { sectionIds } from '../../../../core/config/site.config';
import { processSteps } from './process.data';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  readonly sectionId = sectionIds.process;
  readonly steps = processSteps;
}