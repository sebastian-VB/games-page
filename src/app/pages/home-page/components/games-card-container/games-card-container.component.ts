import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/global/interfaces/game.interface';
import { FavoriListGamesService } from 'src/app/global/state/favori-list-games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-card-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games-card-container.component.html',
  styleUrls: ['./games-card-container.component.scss']
})
export class GamesCardContainerComponent {

  @Input() gameInfo!: Game;

  constructor(
    private favoriteGameSvc: FavoriListGamesService,
    private router: Router
  ){}

  getGameId(gameId: number): void{
    this.router.navigate(['game-details', gameId]);
  }

  addNewGame(): void{
    this.favoriteGameSvc.addNewGame(this.gameInfo);
  }

}
