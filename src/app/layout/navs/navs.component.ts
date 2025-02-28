import { Component, computed, Signal, WritableSignal } from '@angular/core';
import { StatusMenuService } from '../../shared/services/status-menu.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'gruv-navs',
  imports: [
    NgClass
  ],
  templateUrl: './navs.component.html',
  styleUrl: './navs.component.scss'
})
export class NavsComponent {
  public readonly isOpen: WritableSignal<boolean>;
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

  constructor(private _statusMenuService: StatusMenuService) {
    this.isOpen = this._statusMenuService.getIsOpen();
  }

  public onToggleMenu(): void {
    this._statusMenuService.toggleIsOpen();
  }
}
