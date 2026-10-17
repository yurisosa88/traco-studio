import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { sectionIds } from '../../../../core/config/site.config';
import { ContactMethods } from './components/contact-methods/contact-methods';
import { SocialLinks } from './components/social-links/social-links';
import { contactData } from './data/contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactMethods, SocialLinks, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly sectionId = sectionIds.contact;
  readonly content = contactData;

  private readonly sanitizer = inject(DomSanitizer);

  get isLocationVisible(): boolean {
    const location = this.content.location;
    return location.enabled && Boolean(location.establishmentName.trim() && location.address.trim());
  }

  get mapEmbedUrl(): SafeResourceUrl | null {
    if (!this.isLocationVisible) {
      return null;
    }

    const validatedUrl = this.getValidatedEmbedUrl(this.content.location.mapEmbedUrl);
    return validatedUrl ? this.sanitizer.bypassSecurityTrustResourceUrl(validatedUrl) : null;
  }

  get directionsUrl(): string | null {
    if (!this.isLocationVisible) {
      return null;
    }

    return this.getValidatedDirectionsUrl(this.content.location.directionsUrl);
  }

  private getValidatedEmbedUrl(value: string): string | null {
    try {
      const url = new URL(value);
      const isGoogleMapsEmbed = url.protocol === 'https:'
        && url.hostname === 'www.google.com'
        && !url.port
        && !url.username
        && !url.password
        && /^\/maps\/embed(?:\/|$)/.test(url.pathname)
        && Boolean(url.searchParams.get('pb')?.trim() || url.searchParams.get('q')?.trim());

      return isGoogleMapsEmbed ? url.href : null;
    } catch {
      return null;
    }
  }

  private getValidatedDirectionsUrl(value: string): string | null {
    try {
      const url = new URL(value);
      const isGoogleMapsDirections = url.protocol === 'https:'
        && ['www.google.com', 'maps.google.com'].includes(url.hostname)
        && !url.port
        && !url.username
        && !url.password
        && /^\/maps\/dir(?:\/|$)/.test(url.pathname)
        && url.searchParams.get('api') === '1'
        && Boolean(url.searchParams.get('destination')?.trim());

      return isGoogleMapsDirections ? url.href : null;
    } catch {
      return null;
    }
  }
}