import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./table-users.component').then(c => c.TableUsersComponent) }
];