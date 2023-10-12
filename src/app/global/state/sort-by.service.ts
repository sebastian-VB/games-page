import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortByService {

  private sortBy: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  getSortBy(): Observable<string>{
    return this.sortBy.asObservable();
  }

  setSortBy(sort: string): void{
    this.sortBy.next(sort);
  }
}
