import { Component, Input } from '@angular/core';
import { SocialLink } from '../../models/contact.model';

@Component({
  selector: 'app-social-links',
  standalone: true,
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  @Input() links: readonly SocialLink[] = [];

  get visibleLinks(): readonly SocialLink[] {
    return this.links.filter((link) => link.enabled && link.id.trim() && link.label.trim() && link.platform.trim() && this.isValidUrl(link.href));
  }

  private isValidUrl(href: string): boolean {
    try {
      const destination = new URL(href);
      return destination.protocol === 'https:' && Boolean(destination.hostname);
    } catch {
      return false;
    }
  }
}