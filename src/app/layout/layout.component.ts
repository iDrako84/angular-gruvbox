import { Component, computed, Signal, WritableSignal } from '@angular/core';
import { NgClass } from '@angular/common';
import { StatusMenuService } from '../shared/services/status-menu.service';
import { NavsComponent } from './navs/navs.component';

@Component({
  selector: 'gruv-layout',
  imports: [
    NavsComponent,
    NgClass
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public readonly isOpen: WritableSignal<boolean>;
  public readonly classNavs: Signal<string> = computed(() => {
    const isOpen: boolean = this.isOpen();
    if (isOpen) return 'min-w-[300px] max-w-[300px]';
    else return 'min-w-[50px] max-w-[50px]';
  });

  constructor(private _statusMenuService: StatusMenuService) {
    this.isOpen = this._statusMenuService.getIsOpen();
  }
}
