import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

//this is a use case on how to use behavioural subject
//made by khalifa
@Injectable({
  providedIn: 'root'
})
export class LanguageTrackerService {

  constructor() { }

  private subject = new BehaviorSubject<string>("en");

  SendMessage(langTracker: string) {
    this.subject.next(langTracker);
  }

  GetMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
