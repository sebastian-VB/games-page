import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ShowOrHideSidebarService } from '../../global/state/show-or-hide-sidebar.service';
import { FavoriListGamesService } from 'src/app/global/state/favori-list-games.service';
import { Game } from 'src/app/global/interfaces/game.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  flatNav!: boolean;
  totalGames: number = 0;

  constructor(
    private buttonSidebar: ShowOrHideSidebarService,
    private favoriteListeSvc: FavoriListGamesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.favoriteListeSvc.getFavoriteGames().subscribe(
      (value: Game[]) =>{
        this.totalGames = value.length
      }
    );
  }

  onShowSidebar(): void{
    const currenValue = this.buttonSidebar.getValueShowOrHidesb().subscribe(value => this.flatNav = !value);
    this.buttonSidebar.setValueShowOrHidesb(this.flatNav);
  }

  navigateFavoriteGames(): void{
    this.router.navigate(['favorite-games']);
  }

}
