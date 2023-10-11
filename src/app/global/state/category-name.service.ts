import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryNameService {

  private category: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  getCategory(): Observable<string>{
    return this.category.asObservable();
  }

  setCategory(cat: string): void{
    this.category.next(cat);
  }
}
