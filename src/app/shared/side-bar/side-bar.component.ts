import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOrHideSidebarService } from '../../global/services/show-or-hide-sidebar.service';
import { ListGamesByCategoryService } from './service/list-games-by-category.service';
import { mainUrl } from 'src/app/global/endpoints';
import { ListGamesService } from 'src/app/global/services/list-games.service';
import { Game } from 'src/app/global/interfaces/game.interface';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{

  flatSide!: boolean;
  gameCategory:string[] = [
    "mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social",
    "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel",
    "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank",
    "space", "sailing", "side-scroller", "superhero", "permadeath", "card",
    "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy",
    "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts",
    "flight", "low-spec", "tower-defense", "horror", "mmorts"
  ];
  
  constructor(
    private buttonSidebar: ShowOrHideSidebarService, 
    private listGameByCategorySvc: ListGamesByCategoryService,
    private listGameSvc: ListGamesService
  ){}

  ngOnInit(): void {
    this.listGameByCategorySvc.getListGame(mainUrl).subscribe(
      (value: Game[]) => this.listGameSvc.setListGames(value)
    );
  }

  onHideSideBar(): void{
    const currenValue = this.buttonSidebar.getValueShowOrHidesb().subscribe(
      value => this.flatSide = !value
    );
    this.buttonSidebar.setValueShowOrHidesb(this.flatSide);
  }

  getCategoryName(category: string): void{
    console.log(category);
    this.listGameByCategorySvc.getListGame(`${mainUrl}?category=${category}`).subscribe(
      (value: Game[]) => this.listGameSvc.setListGames(value)
    );
    this.onHideSideBar();
  }

}
