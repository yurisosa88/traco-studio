import { Component, Input } from '@angular/core';
import { ContactMethod } from '../../models/contact.model';

@Component({
  selector: 'app-contact-methods',
  standalone: true,
  templateUrl: './contact-methods.html',
  styleUrl: './contact-methods.scss',
})
export class ContactMethods {
  @Input() methods: readonly ContactMethod[] = [];

  get visibleMethods(): readonly ContactMethod[] {
    return this.methods.filter((method) => method.enabled && method.label.trim() && method.value.trim() && this.hasValidDestination(method));
  }

  private hasValidDestination(method: ContactMethod): boolean {
    if (method.type === 'email') {
      return /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(method.href.trim());
    }

    try {
      const destination = new URL(method.href);

      if (method.type === 'whatsapp') {
        return destination.protocol === 'https:'
          && destination.hostname === 'wa.me'
          && /^\/[1-9]\d{7,14}$/.test(destination.pathname)
          && Boolean(destination.searchParams.get('text')?.trim());
      }

      return destination.protocol === 'https:' && Boolean(destination.hostname);
    } catch {
      return false;
    }
  }
}