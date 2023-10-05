import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home_page'},
    {path: 'home_page', loadComponent: ()=> import('./pages/home-page/home-page.component').then(comp => comp.HomePageComponent)}
];
