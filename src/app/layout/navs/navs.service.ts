import { Injectable, signal, WritableSignal } from '@angular/core';
import { NavModel } from './nav';

@Injectable({
  providedIn: 'root'
})
export class NavsService {
  private navs: WritableSignal<NavModel[]> = signal([
    new NavModel('home', 'home', 'Home'),
    new NavModel('table-users', 'table_view', 'Table Users'),
    new NavModel('insert-user', 'person', 'Insert User'),
  ]);

  public getNavs(): WritableSignal<NavModel[]> {
    return this.navs;
  }
}
