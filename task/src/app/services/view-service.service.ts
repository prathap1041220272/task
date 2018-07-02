import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
public user = new BehaviorSubject<string>("");
public cast = this.user.asObservable();
  constructor() { }
    public editUser(newUser): void {
    this.user.next(newUser);
        // console.log(this.user)
  }
}
