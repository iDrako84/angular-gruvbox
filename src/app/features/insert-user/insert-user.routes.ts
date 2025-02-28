import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./insert-user.component').then(c => c.InsertUserComponent) }
];