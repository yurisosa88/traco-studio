import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';

export type RevealOnScrollEffect = 'fade-up' | 'fade-in' | 'fade-left';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() revealOnScrollDelay = 0;
  @Input() revealOnScrollEffect: RevealOnScrollEffect = 'fade-up';

  @HostBinding('class.reveal-on-scroll--pending')
  isPending = false;

  @HostBinding('class.reveal-on-scroll--visible')
  isVisible = false;

  @HostBinding('attr.data-reveal-effect')
  get effectAttribute(): RevealOnScrollEffect {
    return this.revealOnScrollEffect;
  }

  @HostBinding('style.--reveal-delay')
  get delayStyle(): string {
    const delay = Number(this.revealOnScrollDelay);
    return `${Number.isFinite(delay) ? Math.max(0, delay) : 0}ms`;
  }

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      return;
    }

    try {
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      this.isPending = true;
      this.observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        this.isPending = false;
        this.isVisible = true;
        this.observer?.unobserve(this.elementRef.nativeElement);
        this.changeDetector.markForCheck();
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -24px 0px',
      });

      this.observer.observe(this.elementRef.nativeElement);
      this.changeDetector.markForCheck();
    } catch {
      this.isPending = false;
      this.isVisible = false;
      this.observer?.disconnect();
      this.observer = null;
      this.changeDetector.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}