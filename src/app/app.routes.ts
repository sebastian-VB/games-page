import { Routes } from '@angular/router';
import { ShowOrHideSidebarService } from './global/state/show-or-hide-sidebar.service';
import { ListGamesService } from './global/state/list-games.service';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home_page'},
    {path: 'home_page', providers: [ShowOrHideSidebarService, ListGamesService], loadComponent: ()=> import('./pages/home-page/home-page.component').then(comp => comp.HomePageComponent)}
];
