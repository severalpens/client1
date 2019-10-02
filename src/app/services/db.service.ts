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
      .get<Array<models.Channel>>(`${API}/channels` )
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

  // get sites
  getSites() {
    return this.httpClient
      .get<Array<models.Site>>(`${API}/site` )
      .pipe(map(data => data));
  }

 // get group
 getSite(id: number): Observable<models.Site> {
  return this.getSites().pipe(
    map(sites => sites.find(site => site.id === id))
  );
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

  const url = `${API}/groups/${group.id}`;

  return this.httpClient.delete<models.Group>(url).pipe(catchError(this.handleError));
}


// delete channel
deleteChannel(channel: models.Channel) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}//channels/${channel.id}`;

  return this.httpClient.delete<models.Channel>(url).pipe(catchError(this.handleError));
}

// delete member
deleteMember(member: models.Member) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/members/${member.id}`;

  return this.httpClient.delete<models.Member>(url).pipe(catchError(this.handleError));
}

// delete message
deleteMessage(message: models.Message) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/messages/${message.id}`;

  return this.httpClient.delete<models.Message>(url).pipe(catchError(this.handleError));
}


// delete product
deleteProduct(product: models.Product) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/products/${product.id}`;

  return this.httpClient.delete<models.Product>(url).pipe(catchError(this.handleError));
}


// post group
  postGroup(group: models.Group) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Group>(`${API}/groups/${group.id}`, group)
      .pipe(catchError(this.handleError));
  }


// post channel
  postChannel(channel: models.Channel) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Channel>(`${API}/channels/${channel.id}`, channel)
      .pipe(catchError(this.handleError));
  }


// post member
  postMember(member: models.Member) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Member>(`${API}/members/${member.id}`, member)
      .pipe(catchError(this.handleError));
  }



// post message
  postMessage(message: models.Message) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Message>(`${API}/messages/${message.id}`, message)
      .pipe(catchError(this.handleError));
  }


// post product
  postProduct(product: models.Product) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<models.Product>(`${API}/products/${product.id}`, product)
      .pipe(catchError(this.handleError));
  }

  handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }


  // Update existing group
  putGroup(group: models.Group) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/groups/${group.id}`;

    return this.httpClient.put<models.Group>(url, group).pipe(catchError(this.handleError));
  }


// Update existing channel
  putChannel(channel: models.Channel) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/channels/${channel.id}`;

    return this.httpClient.put<models.Channel>(url, channel).pipe(catchError(this.handleError));
  }



// Update existing member
  putMember(member: models.Member) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/members/${member.id}`;

    return this.httpClient.put<models.Member>(url, member).pipe(catchError(this.handleError));
  }




// Update existing message
  putMessage(message: models.Message) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/messages/${message.id}`;

    return this.httpClient.put<models.Message>(url, message).pipe(catchError(this.handleError));
  }



// Update existing product
  putProduct(product: models.Product) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/products/${product.id}`;

    return this.httpClient.put<models.Product>(url, product).pipe(catchError(this.handleError));
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



