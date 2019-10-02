import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
import { DbService } from './db.service';
import { Message } from '../models/models';

const SERVER_URL = 'http://localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  constructor(private dbService: DbService) { }

  public initSocket(): void {
    this.socket = io(SERVER_URL);

  }

  public send(message: Message): void {
    this.dbService.saveMessage(message);
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<any> {
    let observable = new Observable(observer => {
      this.socket.on('message', (data: string) => {
         observer.next(data);
         console.log('message received');
      });
    });
    return observable;
  }
}
