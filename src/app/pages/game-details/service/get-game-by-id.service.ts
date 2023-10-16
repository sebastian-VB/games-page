import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/global/endpoints';
import { GameDetail } from 'src/app/global/interfaces/game-details.interface';

@Injectable()
export class GetGameByIdService {

  constructor(private http: HttpClient) { }

  getOnlyGame(id: number): Observable<GameDetail>{

    const params = new HttpParams().set('id', id);
    return this.http.get<GameDetail>(urls.gameDetailUrl, {params});
  }
}
