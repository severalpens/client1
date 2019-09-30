import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, from, interval, Subscription, throwError as observableThrowError } from "rxjs"; // use obs$ naming convention
import { ajax } from "rxjs/ajax";
import { catchError, map, tap } from "rxjs/operators";
import { User, UserInterface, Chain, ChainInterface } from "../classes/classes";

import { Hero } from '../classes/classes';
@Injectable({
  providedIn: "root"
})
export class DbService {
  private heroesUrl = 'app/heroes'; // URL to web api
  loggedInUser: string;
  constructor(private httpClient: HttpClient) { }

  async login(username, password) {
    let tmp = new User(username, password, false);
    let result = await this.httpClient
      .post<UserInterface>("http://localhost:3000/api/user/login", tmp)
      .toPromise();
    this.loggedInUser = result.username;
    localStorage.setItem("loggedInUser", this.loggedInUser.toString());
    return result;
  }
  async nameCheck(username) {
    let result = await this.httpClient
      .get<boolean>(
        `http://localhost:3000/api/user/namecheck?username=${username}`
      )
      .toPromise();
    return result;
  }


  getHeroes() {
    return this.httpClient
      .get<Hero[]>(this.heroesUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes().pipe(
      map(heroes => heroes.find(hero => hero.id === id))
    );
  }

  save(hero: Hero) {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.heroesUrl}/${hero.id}`;

    return this.httpClient.delete<Hero>(url).pipe(catchError(this.handleError));
  }

  // Add new Hero
  private post(hero: Hero) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<Hero>(this.heroesUrl, hero)
      .pipe(catchError(this.handleError));
  }

  // Update existing Hero
  private put(hero: Hero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.heroesUrl}/${hero.id}`;

    return this.httpClient.put<Hero>(url, hero).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
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
