import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderWhitCategoryService {

  private isSelectCategpry: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getSelectCategory(): Observable<boolean>{
    return this.isSelectCategpry.asObservable();
  }

  setSelectCategory(value: boolean): void{
    this.isSelectCategpry.next(value);
  }

}
