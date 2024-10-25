import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/global/interfaces/game.interface';
import { FavoriListGamesService } from 'src/app/global/state/favori-list-games.service';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-games-card-container',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './games-card-container.component.html',
  styleUrls: ['./games-card-container.component.scss']
})
export class GamesCardContainerComponent implements OnInit{

  @Input() gameInfo!: Game;
  private _favoriteGames: Game[] = [];

  constructor(
    private favoriteGameSvc: FavoriListGamesService,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.favoriteGameSvc.getFavoriteGames().subscribe(
      (value: Game[]) => this._favoriteGames = value
    );
  }

  getGameId(gameId: number): void{
    this.router.navigate(['game-details', gameId]);
  }

  addNewGame(): void{
    
    if(this._favoriteGames.length == 0){
      this.favoriteGameSvc.addNewGame(this.gameInfo);
    }
    else{
      if(this.searchGameInList() == false){
        this.favoriteGameSvc.addNewGame(this.gameInfo);
      }
    }
    
  }

  searchGameInList(): boolean{

    const id = this.gameInfo.id;
    let isFound: boolean = false;

    for(let i=0; i< this._favoriteGames.length; i++){
      let item = this._favoriteGames[i];
      if(item.id == id){
        isFound = true;
        this.snackBar.open('El juego ya esta agregado', 'Close');
        break;
      }
      else{
        isFound = false;
      }
    }
    
    return isFound;
  }

}
