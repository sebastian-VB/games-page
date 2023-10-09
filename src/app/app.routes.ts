import { Routes } from '@angular/router';
import { ShowOrHideSidebarService } from './global/services/show-or-hide-sidebar.service';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home_page'},
    {path: 'home_page', providers: [ShowOrHideSidebarService], loadComponent: ()=> import('./pages/home-page/home-page.component').then(comp => comp.HomePageComponent)}
];
