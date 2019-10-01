import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { User, UserInterface, Chain, ChainInterface } from "../abstractions/classes";

import { Hero } from '../abstractions/classes';

const API = "http://localhost:3000/api/";


@Injectable({
  providedIn: "root"
})
export class DbMirrorService {
  constructor(private httpClient: HttpClient) { }

  async login(username, password) {
    let result = await this.httpClient
      .post<UserInterface>("http://localhost:3000/api/user/login", tmp)
      .toPromise();
    return result;
  }

  async register(username, password) {
    let result = await this.httpClient
      .post<UserInterface>("http://localhost:3000/api/user/register", tmp)
      .toPromise();
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

