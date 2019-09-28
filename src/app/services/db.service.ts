import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, interval } from 'rxjs'; // use obs$ naming convention
import { ajax } from 'rxjs/ajax';
import { catchError, map, tap } from 'rxjs/operators';

// Create an Observable out of a promise
const data = from(fetch('/api/endpoint'));
// Subscribe to begin listening for async result
data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});

// Create an Observable that will create an AJAX request
const apiData = ajax('/api/data');
// Subscribe to create the request
apiData.subscribe(res => console.log(res.status, res.response));



@Injectable({
  providedIn: 'root'
})
export class DbService {
  loggedIn: boolean
  constructor() { }
}
