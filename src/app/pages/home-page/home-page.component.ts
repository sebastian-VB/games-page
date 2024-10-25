import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOrHideSidebarService } from 'src/app/global/state/show-or-hide-sidebar.service';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/shared/side-bar/side-bar.component';
import { GamesCardContainerComponent } from 'src/app/pages/home-page/components/games-card-container/games-card-container.component';
import { Game } from 'src/app/global/interfaces/game.interface';
import { ListGamesService } from 'src/app/global/state/list-games.service';
import { SelectSortByGamesComponent } from './components/select-sort-by-games/select-sort-by-games.component';
import { SelectPlatformComponent } from './components/select-platform/select-platform.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule, 
    NavBarComponent, 
    SideBarComponent, 
    GamesCardContainerComponent,
    SelectSortByGamesComponent,
    SelectPlatformComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  showSideC!: boolean;
  listAllGames!: Game[];

  constructor(
    private buttonSidebar: ShowOrHideSidebarService, 
    private listGameSvc: ListGamesService
  ){
    this.buttonSidebar.getValueShowOrHidesb().subscribe(value=>{
      this.showSideC  = value;
    });
  }

  ngOnInit(): void {
    this.listGameSvc.getListGames().subscribe(
      (value: Game[]) => {
        this.listAllGames = value;
      }
    );
  }

}
