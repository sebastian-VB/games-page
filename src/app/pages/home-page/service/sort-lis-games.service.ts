import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/global/endpoints';
import { Game } from 'src/app/global/interfaces/game.interface';

@Injectable()
export class SortLisGamesService {

  constructor(private http: HttpClient) { }

  getSortListGames(sort: string): Observable<Game[]>{

    const params = new HttpParams().set('sort-by', sort);

    return this.http.get<Game[]>(urls.mainUrl, {params});
  }

  getSortListGamesByCatgeory(category: string, sort: string): Observable<Game[]>{
    
    const params = new HttpParams()
    .set('category', category)
    .set('sort-by', sort);

    return this.http.get<Game[]>(urls.mainUrl, {params});
  }

  getSortListGamesAndPlatform(sort: string, platform: string): Observable<Game[]>{

    const params = new HttpParams().set('sort-by', sort).set('platform', platform);

    return this.http.get<Game[]>(urls.mainUrl, {params});
  }

  getSortListGamesByCatgeoryAndPlatform(category: string, sort: string, platform: string): Observable<Game[]>{
    
    const params = new HttpParams()
    .set('category', category)
    .set('sort-by', sort)
    .set('platform', platform);

    return this.http.get<Game[]>(urls.mainUrl, {params});
  }
}
