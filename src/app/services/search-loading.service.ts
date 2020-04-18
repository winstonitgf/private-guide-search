import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchLoadingService {

  isLoadingSubject = new BehaviorSubject<boolean>(false);
  constructor() { }

  public Start(): void {
    console.log('start', true);
    this.isLoadingSubject.next(true);
  }

  public Complete(): void {
    console.log('Complete', false);
    this.isLoadingSubject.next(false);
  }

  public SearchLoadingSubscription(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }
}
