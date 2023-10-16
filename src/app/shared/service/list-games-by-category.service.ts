import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/global/endpoints';
import { Game } from 'src/app/global/interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class ListGamesByCategoryService {

  constructor(private http: HttpClient) { }

  getListGame(): Observable<Game[]>{

    return this.http.get<Game[]>(urls.mainUrl);
  }

  getListGameByCategory(category: string): Observable<Game[]>{

    const params = new HttpParams().set('category', category);
    return this.http.get<Game[]>(urls.mainUrl, {params});
    
  }

}
