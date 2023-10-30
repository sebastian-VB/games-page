import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ShowOrHideSidebarService } from '../../global/state/show-or-hide-sidebar.service';
import { FavoriListGamesService } from 'src/app/global/state/favori-list-games.service';
import { Game } from 'src/app/global/interfaces/game.interface';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListGamesByCategoryService } from '../service/list-games-by-category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListGamesService } from 'src/app/global/state/list-games.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, SideBarComponent, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  flatNav!: boolean;
  totalGames: number = 0;
  nameGame: string = "";
  listGame!: Game[]; 
  listGameAux: Game[] = [];

  constructor(
    private buttonSidebar: ShowOrHideSidebarService,
    private favoriteListeSvc: FavoriListGamesService,
    private router: Router,
    private listGameSvc: ListGamesByCategoryService,
    private listGamesSvc: ListGamesService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.favoriteListeSvc.getFavoriteGames().subscribe(
      (value: Game[]) =>{
        this.totalGames = value.length
      }
    );
    this.listGameSvc.getListGame().subscribe(value => this.listGame = value);
  }

  onShowSidebar(): void{
    const currenValue = this.buttonSidebar.getValueShowOrHidesb().subscribe(value => this.flatNav = !value);
    this.buttonSidebar.setValueShowOrHidesb(this.flatNav);
  }

  navigateFavoriteGames(): void{
    this.router.navigate(['favorite-games']);
  }

  searchGame(): void{
    
    if(this.nameGame != ""){
      this.listGame.forEach((value: Game) =>{
        if(value.title.includes(this.nameGame)){
          this.listGameAux.push(value);
        }
      });
      this.listGamesSvc.setListGames(this.listGameAux);
      this.nameGame = "";
      this.listGameAux = [];
    }
    else{
      this.snackBar.open('Ingrese el nombre del juego', 'Close');
      this.nameGame = "";
    }
  }

}
