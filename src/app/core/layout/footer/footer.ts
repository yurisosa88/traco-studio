import { Component } from '@angular/core';
import { businessContent } from '../../config/business.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly content = businessContent.footer;
}
