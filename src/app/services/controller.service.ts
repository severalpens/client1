import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, from, interval, Subscription, throwError as observableThrowError, ObservableInput } from "rxjs"; // use obs$ naming convention
import { ajax } from "rxjs/ajax";
import { catchError, map, tap } from "rxjs/operators";
import * as models from '../models/models';
import { DbService } from './db.service';

@Injectable({
  providedIn: "root"
})
export  class ControllerService implements OnInit {
  groups:               models.Group[];
  channels:             models.Channel[];
  members:              models.Member[];
  messages:             models.Message[];
  products:             models.Product[];
  currentSite:          models.Site;
  currentGroup:         models.Group;
  currentChannel:       models.Channel;
  currentMember:        models.Member;
  currentMessage:       models.Message;
  currentProduct:       models.Product;

  constructor(private dbService: DbService) {
    this.groups =               new Array<models.Group>();
    this.channels =             new Array<models.Channel>();
    this.members =              new Array<models.Member>();
    this.messages =             new Array<models.Message>();
    this.products =             new Array<models.Product>();
    this.currentSite =          new models.Site;
    this.currentGroup =         new models.Group;
    this.currentChannel =       new models.Channel;
    this.currentMember =        new models.Member;
    this.currentMessage =       new models.Message;
    this.currentProduct =       new models.Product;

   }
  hydrateObjects(){
    this.dbService.getGroups().subscribe(x => this.groups = x);
    this.dbService.getChannels().subscribe(x => this.channels = x);
    this.dbService.getMembers().subscribe(x => this.members = x);
    this.dbService.getMessages().subscribe(x => this.messages = x);
    this.dbService.getProducts().subscribe(x => this.products = x);
    this.dbService.getSite(1).subscribe(x => this.currentSite = x);
    this.dbService.getChannel(1).subscribe(x => this.currentChannel = x);
    this.dbService.getMember(1).subscribe(x => this.currentMember = x);
    this.dbService.getMessage(1).subscribe(x => this.currentMessage = x);
    this.dbService.getProduct(1).subscribe(x => this.currentProduct = x);
    this.dbService.getGroup(1).subscribe(x => this.currentGroup = x);

    this.dbService.postSite(1).subscribe(x => this.currentSite = x);
    this.dbService.postChannel(1).subscribe(x => this.currentChannel = x);
    this.dbService.postMember(1).subscribe(x => this.currentMember = x);
    this.dbService.postMessage(1).subscribe(x => this.currentMessage = x);
    this.dbService.postProduct(1).subscribe(x => this.currentProduct = x);
    this.dbService.postGroup(1).subscribe(x => this.currentGroup = x);

  }
ngOnInit(){
  this.hydrateObjects()

}
login(username, password){

}
  async register(username, password) {
    let tmp = new User(username, password, true);
    let result = await this.httpClient
      .post<UserInterface>("http://localhost:3000/api/user/register", tmp)
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


  getGroups() {
    return this.httpClient
      .get<Chain[]>(`http://localhost:3000/api/chain/groups?username=${this.loggedInUser}`      )
      .pipe(map(data => data), catchError(this.handleError));
  }

//   getHero(id: number): Observable<Hero> {
//     return this.getHeroes().pipe(
//       map(heroes => heroes.find(hero => hero.id === id))
//     );
//   }

//   save(hero: Hero) {
//     if (hero.id) {
//       return this.put(hero);
//     }
//     return this.post(hero);
//   }

//   delete(hero: Hero) {
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     const url = `${this.heroesUrl}/${hero.id}`;

//     return this.httpClient.delete<Hero>(url).pipe(catchError(this.handleError));
//   }

//   // Add new Hero
//   private post(hero: Hero) {
//     const headers = new Headers({
//       'Content-Type': 'application/json'
//     });

//     return this.httpClient
//       .post<Hero>(this.heroesUrl, hero)
//       .pipe(catchError(this.handleError));
//   }

//   // Update existing Hero
//   private put(hero: Hero) {
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     const url = `${this.heroesUrl}/${hero.id}`;

//     return this.httpClient.put<Hero>(url, hero).pipe(catchError(this.handleError));
//   }

//   private handleError(res: HttpErrorResponse | any) {
//     console.error(res.error || res.body.error);
//     return observableThrowError(res.error || 'Server error');
//   }
// }

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
