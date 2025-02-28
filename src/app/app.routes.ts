import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./features/home/home.routes').then(r => r.routes) },
    { path: 'table-users', loadChildren: () => import('./features/table-users/table-users.routes').then(r => r.routes) },
    { path: 'insert-user', loadChildren: () => import('./features/insert-user/insert-user.routes').then(r => r.routes) },
];
