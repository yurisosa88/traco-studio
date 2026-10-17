import { Component, HostListener } from '@angular/core';
import { businessContent } from '../../config/business.config';
import { navigationItems as siteNavigationItems } from '../../config/site.config';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly brand = businessContent.brand;
  readonly navigationItems = siteNavigationItems;
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }
}
