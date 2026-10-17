import { Component } from '@angular/core';
import { enabledSections } from '../../core/config/site.config';
import { Contact } from './sections/contact/contact';
import { Hero } from './hero/hero';
import { About } from './sections/about/about';
import { Faq } from './sections/faq/faq';
import { Portfolio } from './sections/portfolio/portfolio';
import { Process } from './sections/process/process';
import { Specialties } from './sections/specialties/specialties';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Portfolio, Specialties, Process, Faq, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly enabledSections = enabledSections;
}
