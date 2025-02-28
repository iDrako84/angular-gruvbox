import { Component, computed, Signal, WritableSignal } from '@angular/core';
import { StatusMenuService } from '../../shared/services/status-menu.service';
import { NgClass } from '@angular/common';
import { NavsService } from './navs.service';
import { NavModel } from './nav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gruv-navs',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './navs.component.html',
  styleUrl: './navs.component.scss'
})
export class NavsComponent {
  public readonly isOpen: WritableSignal<boolean>;
  public readonly navs: WritableSignal<NavModel[]>;
  public readonly classStatusNavs: Signal<string> = computed(() => {
    const isOpen: boolean = this.isOpen();
    if (isOpen) return 'justify-end';
    else return 'justify-center';
  });
  public readonly classPath: Signal<string> = computed(() => {
    const isOpen: boolean = this.isOpen();
    if (isOpen) return 'w-full';
    else return '';
  });

  constructor(
    private _statusMenuService: StatusMenuService,
    private _navsService: NavsService
  ) {
    this.isOpen = this._statusMenuService.getIsOpen();
    this.navs = this._navsService.getNavs();
  }

  public onToggleMenu(): void {
    this._statusMenuService.toggleIsOpen();
  }
}
