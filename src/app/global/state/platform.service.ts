import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private platform: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  getPlatform(): Observable<string>{
    return this.platform.asObservable();
  }

  setPlatform(platform: string): void{
    this.platform.next(platform);
  }

}
