import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/global/endpoints';
import { Game } from 'src/app/global/interfaces/game.interface';

@Injectable()
export class FilterListGamesService {

  constructor(private http: HttpClient) { }

  getListGamesByPlatform(platform: string): Observable<Game[]>{

    const params = new HttpParams().set('platform', platform);
    return this.http.get<Game[]>(urls.mainUrl, { params });
  }

  getListGamesByPlatformWhitCategory(category: string, platform: string): Observable<Game[]>{

    const params = new HttpParams()
      .set('category', category)
      .set('platform', platform);
    
    return this.http.get<Game[]>(urls.mainUrl, { params });
  }

  getListGamesByPlatformAndSortBy(platform: string, sort: string): Observable<Game[]>{

    const params = new HttpParams().set('platform', platform).set('sort-by', sort);
    return this.http.get<Game[]>(urls.mainUrl, { params });
  }

  getListGamesByPlatformWhitCategoryAndSortBy(category: string, platform: string, sort: string): Observable<Game[]>{

    const params = new HttpParams()
      .set('category', category)
      .set('platform', platform)
      .set('sort-by', sort);
    
    return this.http.get<Game[]>(urls.mainUrl, { params });
  }

}
