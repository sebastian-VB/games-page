import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowOrHideSidebarService {

  private showOrHidesb: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getValueShowOrHidesb(): Observable<boolean>{
    return this.showOrHidesb.asObservable();
  }

  setValueShowOrHidesb(value: boolean): void{
    this.showOrHidesb.next(value);
  }

}
