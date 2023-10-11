import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';

@Injectable()
export class ListGamesService {

  private listGames: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);

  constructor() { }

  getListGames(): Observable<Game[]>{
    return this.listGames.asObservable();
  }

  setListGames(listG: Game[]): void{
    this.listGames.next(listG);
  }

}
