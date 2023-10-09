import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mainUrl } from 'src/app/global/endpoints';
import { Game } from 'src/app/global/interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class ListAllGamesService {

  constructor(private http: HttpClient) { }

  getListGames(): Observable<Game[]>{
    return this.http.get<Game[]>(mainUrl);
  }
}
