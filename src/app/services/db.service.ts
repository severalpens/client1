import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, interval, Subscription } from 'rxjs'; // use obs$ naming convention
import { ajax } from 'rxjs/ajax';
import { catchError, map, tap } from 'rxjs/operators';
import {User, UserInterface, Chain, ChainInterface} from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  loggedIn: boolean;
  constructor(private httpClient: HttpClient) {
    this.loggedIn = false;
   }

   async login  (username, password){
     let tmp = new User(username, password,false)
    let result = await this.httpClient.post<UserInterface>('http://localhost:3000/api/user/login',tmp).toPromise();
            this.loggedIn = result.valid;
            localStorage.setItem('loggedIn',this.loggedIn.toString());
           return result;

}
}


// // Create an Observable out of a promise
// const data = from(fetch('/api/endpoint'));
// // Subscribe to begin listening for async result
// data.subscribe({
//   next(response) { console.log(response); },
//   error(err) { console.error('Error: ' + err); },
//   complete() { console.log('Completed'); }
// });

// // Create an Observable that will create an AJAX request
// const apiData = ajax('/api/data');
// // Subscribe to create the request
// apiData.subscribe(res => console.log(res.status, res.response));


