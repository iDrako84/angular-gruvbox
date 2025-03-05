import { effect, Inject, Injectable, Injector, Renderer2, RendererFactory2, signal, WritableSignal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly isDark: WritableSignal<boolean> = signal(true);
  private readonly renderer: Renderer2;

  constructor(
    private _rendererFactory2: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private injector: Injector) {
    this.renderer = this._rendererFactory2.createRenderer(null, null);
  }

  public initializeTheme() {
    this.renderer.addClass(this.document.documentElement, 'bg-gruv-light-bg');
    this.renderer.addClass(this.document.documentElement, 'text-gruv-light-fg');
    this.renderer.addClass(this.document.documentElement, 'dark:bg-gruv-dark-bg');
    this.renderer.addClass(this.document.documentElement, 'dark:text-gruv-dark-fg');
    effect(() => {
      const isDark: boolean = this.isDark();
      this.renderer[isDark ? 'addClass' : 'removeClass'](this.document.documentElement, 'dark');
    }, { injector: this.injector });
  }

  public getIsDark(): WritableSignal<boolean> {
    return this.isDark;
  }

  public toggleIsDark(): void {
    this.isDark.update(v => !v);
  }
}
