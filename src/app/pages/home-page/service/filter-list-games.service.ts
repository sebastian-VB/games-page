import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mainUrl } from 'src/app/global/endpoints';
import { Game } from 'src/app/global/interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterListGamesService {

  constructor(private http: HttpClient) { }

  getListGamesByPlatform(platform: string): Observable<Game[]>{

    const params = new HttpParams().set('platform', platform);
    return this.http.get<Game[]>(mainUrl, { params });
  }

  getListGamesByPlatformWhitCategory(category: string, platform: string): Observable<Game[]>{

    const params = new HttpParams()
      .set('category', category)
      .set('platform', platform);
    
    return this.http.get<Game[]>(mainUrl, { params });
  }

}
