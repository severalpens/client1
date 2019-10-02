import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, from, interval, Subscription, throwError as observableThrowError, ObservableInput } from "rxjs"; // use obs$ naming convention
import { ajax } from "rxjs/ajax";
import { catchError, map, tap } from "rxjs/operators";
import * as models  from '../models/models';

const API = 'http://localhost:3000/api'

@Injectable({
  providedIn: "root"
})
export  class DbService {
  constructor(private httpClient: HttpClient) { }

  // get groups
  getGroups() {
    return this.httpClient
      .get<Array<models.Group>>(`${API}/groups` )
      .pipe(map(data => data));
  }

  // get channels
  getChannels() {
    return this.httpClient
      .get<Array<models.Channel>>(`${API}/api/channels` )
      .pipe(map(data => data));
  }

  // get members
  getMembers() {
    return this.httpClient
      .get<Array<models.Member>>(`${API}/members` )
      .pipe(map(data => data));
  }

  // get messages
  getMessages() {
    return this.httpClient
      .get<Array<models.Message>>(`${API}/messages` )
      .pipe(map(data => data));
  }

  // get groups
  getProducts() {
    return this.httpClient
      .get<Array<models.Product>>(`${API}/groups` )
      .pipe(map(data => data));
  }



  // get site
  getSite() {
    return this.httpClient
      .get<Array<models.Site>>(`${API}/site` )
      .pipe(map(data => data));
  }

  // get group
  getGroup(id: number): Observable<models.Group> {
    return this.getGroups().pipe(
      map(groups => groups.find(group => group.id === id))
    );
  }

  // get channel
  getChannel(id: number): Observable<models.Channel> {
    return this.getChannels().pipe(
      map(channels => channels.find(channel => channel.id === id))
    );
  }

  // get member
  getMember(id: number): Observable<models.Member> {
    return this.getMembers().pipe(
      map(members => members.find(member => member.id === id))
    );
  }

  // get message
  getMessage(id: number): Observable<models.Message> {
    return this.getMessages().pipe(
      map(messages => messages.find(message => message.id === id))
    );
  }


  // get product
  getProduct(id: number): Observable<models.Product> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }



// save group
saveGroup(group: models.Group) {
  if (group.id) {
    return this.putGroup(group);
  }
  return this.postGroup(group);
}

// save channel
saveChannel(channel: models.Channel) {
  if (channel.id) {
    return this.putChannel(channel);
  }
  return this.postChannel(channel);
}


// save member
saveMember(member: models.Member) {
  if (member.id) {
    return this.putMember(member);
  }
  return this.postMember(member);
}


// save message
saveMessage(message: models.Message) {
  if (message.id) {
    return this.putMessage(message);
  }
  return this.postMessage(message);
}


// save product
saveProduct(product: models.Product) {
  if (product.id) {
    return this.putProduct(product);
  }
  return this.postProduct(product);
}

// delete group
deleteGroup(group: models.Group) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/api/groups/${group.id}`;

  return this.httpClient.delete<models.Group>(url).pipe(catchError(this.handleError));
}


// delete channel
deleteChannel(channel: models.Channel) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/api/channels/${channel.id}`;

  return this.httpClient.delete<models.Channel>(url).pipe(catchError(this.handleError));
}

// delete member
deleteMember(member: models.Member) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/api/members/${member.id}`;

  return this.httpClient.delete<models.Member>(url).pipe(catchError(this.handleError));
}

// delete message
deleteMessage(message: models.Message) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/api/messages/${message.id}`;

  return this.httpClient.delete<models.Message>(url).pipe(catchError(this.handleError));
}


// delete product
deleteProduct(product: models.Product) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/api/products/${product.id}`;

  return this.httpClient.delete<models.Product>(url).pipe(catchError(this.handleError));
}


// post group
  private postGroup(group: models.Group) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Group>(`${API}/api/groups/${group.id}`, group)
      .pipe(catchError(this.handleError));
  }


// post channel
  private postChannel(channel: models.Channel) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Channel>(`${API}/api/channels/${channel.id}`, channel)
      .pipe(catchError(this.handleError));
  }


// post member
  private postMember(member: models.Member) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Member>(`${API}/api/members/${member.id}`, member)
      .pipe(catchError(this.handleError));
  }



// post message
  private postMessage(message: models.Message) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Message>(`${API}/api/messages/${message.id}`, message)
      .pipe(catchError(this.handleError));
  }


// post product
  private postProduct(product: models.Product) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Product>(`${API}/api/products/${product.id}`, product)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }


  // Update existing group
  private putGroup(group: models.Group) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/api/groups/${group.id}`;

    return this.httpClient.put<models.Group>(url, group).pipe(catchError(this.handleError));
  }


// Update existing channel
  private putChannel(channel: models.Channel) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/api/channels/${channel.id}`;

    return this.httpClient.put<models.Channel>(url, channel).pipe(catchError(this.handleError));
  }



// Update existing member
  private putMember(member: models.Member) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/api/members/${member.id}`;

    return this.httpClient.put<models.Member>(url, member).pipe(catchError(this.handleError));
  }




// Update existing message
  private putMessage(message: models.Message) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/api/messages/${message.id}`;

    return this.httpClient.put<models.Message>(url, message).pipe(catchError(this.handleError));
  }



// Update existing product
  private putProduct(product: models.Product) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/api/products/${product.id}`;

    return this.httpClient.put<models.Product>(url, product).pipe(catchError(this.handleError));
  }


}

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



// delete(hero: Hero) {
//   const headers = new Headers();
//   headers.append('Content-Type', 'application/json');

//   const url = `${this.heroesUrl}/${hero.id}`;

//   return this.httpClient.delete<Hero>(url).pipe(catchError(this.handleError));
// }
