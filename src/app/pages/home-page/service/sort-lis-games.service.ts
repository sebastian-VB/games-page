import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mainUrl } from 'src/app/global/endpoints';
import { Game } from 'src/app/global/interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class SortLisGamesService {

  constructor(private http: HttpClient) { }

  getSortListGames(sort: string): Observable<Game[]>{

    const params = new HttpParams().set('sort-by', sort);

    return this.http.get<Game[]>(mainUrl, {params});
  }

  getSortListGamesByCatgeory(category: string, sort: string): Observable<Game[]>{
    
    const params = new HttpParams()
    .set('category', category)
    .set('sort-by', sort);

    return this.http.get<Game[]>(mainUrl, {params});
  }
}
