import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriListGamesService } from 'src/app/global/state/favori-list-games.service';
import { Game } from 'src/app/global/interfaces/game.interface';

@Component({
  selector: 'app-favorite-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-games.component.html',
  styleUrls: ['./favorite-games.component.scss']
})
export class FavoriteGamesComponent implements OnInit{

  favoriteGames: Game[] = [];

  constructor(private favoriteGamesSvc: FavoriListGamesService){}

  ngOnInit(): void {
    this.favoriteGamesSvc.getFavoriteGames().subscribe(
      (value: Game[]) => {
        this.favoriteGames = value;
        console.log(this.favoriteGames);
      }
    );
  }

  deleteElement(index: number): void{
    this.favoriteGamesSvc.deleteGame(index);
  }
}
