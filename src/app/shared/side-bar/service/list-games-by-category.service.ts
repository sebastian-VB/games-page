import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/global/interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class ListGamesByCategoryService {

  constructor(private http: HttpClient) { }

  getListGame(url: string): Observable<Game[]>{
    return this.http.get<Game[]>(url);
  }

}
