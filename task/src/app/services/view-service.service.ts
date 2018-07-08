import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

const apiURT: String = 'http://localhost:4444';
@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {

  constructor(private http:HttpClient) { }
    createUser(user) {
   	// console.log(user);
    return this.http
      .post(apiURT + '/logs', user)
      .toPromise()
      .then((data: any) => {
        return data
        console.log(data)
      })
      .catch(err => {
        console.log('somthing went wrong')
      })
  }
  }

