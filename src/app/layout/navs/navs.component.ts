import { Component, computed, Signal, WritableSignal } from '@angular/core';
import { StatusMenuService } from '../../shared/services/status-menu.service';
import { NgClass } from '@angular/common';
import { NavsService } from './navs.service';
import { NavModel } from './nav';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';
import { GruvButtonDirective } from '../../shared/directives/button.directive';

@Component({
  selector: 'gruv-navs',
  imports: [
    NgClass,
    RouterLink,
    GruvButtonDirective
  ],
  templateUrl: './navs.component.html',
  styleUrl: './navs.component.scss'
})
export class NavsComponent {
  public readonly isOpen: WritableSignal<boolean>;
  public readonly isDark: WritableSignal<boolean>;
  public readonly navs: WritableSignal<NavModel[]>;
  public readonly classStatusNavs: Signal<string> = computed(() => {
    const isOpen: boolean = this.isOpen();
    if (isOpen) return 'flex justify-end';
    else return 'flex flex-col-reverse justify-center';
  });
  public readonly classPath: Signal<string> = computed(() => {
    const isOpen: boolean = this.isOpen();
    if (isOpen) return 'w-full';
    else return '';
  });

  constructor(
    private _statusMenuService: StatusMenuService,
    private _themeService: ThemeService,
    private _navsService: NavsService
  ) {
    this.isOpen = this._statusMenuService.getIsOpen();
    this.isDark = this._themeService.getIsDark();
    this.navs = this._navsService.getNavs();
  }

  public onToggleMenu(): void {
    this._statusMenuService.toggleIsOpen();
  }

  public onToggleIsDark(): void {
    this._themeService.toggleIsDark();
  }
}
