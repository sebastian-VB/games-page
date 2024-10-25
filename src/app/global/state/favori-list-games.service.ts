import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriListGamesService {

  private cartGames: Game[] = [];

  private _favoriteGames: BehaviorSubject<Game[]>;

  constructor() { 
    this._favoriteGames = new BehaviorSubject<Game[]>([]);
  }

  getFavoriteGames(): Observable<Game[]>{
    return this._favoriteGames.asObservable();
  }

  addNewGame(newGame: Game): void{
    this.cartGames.push(newGame);
    this._favoriteGames.next(this.cartGames);
  }

  deleteGame(index: number): void{
    this.cartGames.splice(index, 1);
    this._favoriteGames.next(this.cartGames);
  }

}
