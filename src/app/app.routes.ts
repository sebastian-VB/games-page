import { Routes } from '@angular/router';
import { ShowOrHideSidebarService } from './global/state/show-or-hide-sidebar.service';
import { ListGamesService } from './global/state/list-games.service';
import { FilterListGamesService } from './pages/home-page/service/filter-list-games.service';
import { SortLisGamesService } from './pages/home-page/service/sort-lis-games.service';
import { GetGameByIdService } from './pages/game-details/service/get-game-by-id.service';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home_page'},
    {
        path: 'home_page', 
        providers: [
            ShowOrHideSidebarService, 
            ListGamesService,
            FilterListGamesService,
            SortLisGamesService
        ], 
        loadComponent: ()=> import('./pages/home-page/home-page.component').then(comp => comp.HomePageComponent)
    },
    {
        path: 'game-details/:gameId', 
        providers: [GetGameByIdService],
        loadComponent: ()=> import('./pages/game-details/game-details.component').then(comp => comp.GameDetailsComponent)
    }
];
