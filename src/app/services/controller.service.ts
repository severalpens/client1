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
    this.dbService.getSite('chat').subscribe(x => this.currentSite = x);
    this.dbService.getGroups().subscribe(x => this.groups = x);
    this.dbService.getChannels().subscribe(x => this.channels = x);
    this.dbService.getProducts().subscribe(x => this.products = x);
  }

ngOnInit(){
}



login(username, password){
  let result = this.dbService.post('/login',{username, password}).subscribe(
    (data:any) => {
      if(data){
       this.hydrateObjects()
      }
    }
  )
 return result
}

  // async register(username, password) {
  //   let tmp = new User(username, password, true);
  //   let result = await this.httpClient
  //     .post<UserInterface>("http://localhost:3000/api/user/register", tmp)
  //     .toPromise();
  //     this.loggedInUser = result.username;
  //     localStorage.setItem("loggedInUser", this.loggedInUser.toString());
  //     return result;
  // }
  // async nameCheck(username) {
  //   let result = await this.httpClient
  //     .get<boolean>(
  //       `http://localhost:3000/api/user/namecheck?username=${username}`
  //     )
  //     .toPromise();
  //   return result;
  // }

}
