import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private fullName$ = new BehaviorSubject<string>("");
  constructor() { }


  public getFullNameForStore(fullname : string){
    this.fullName$.next(fullname);

  }

  public getFullNameFromStore() : Observable<string>{
    return this.fullName$.asObservable();
  }

}
