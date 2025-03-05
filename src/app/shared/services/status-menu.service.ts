import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusMenuService {
  private readonly isOpen: WritableSignal<boolean> = signal(true);

  constructor() { }

  public getIsOpen(): WritableSignal<boolean> {
    return this.isOpen;
  }

  public toggleIsOpen(): void {
    this.isOpen.update(v => !v);
  }
}
