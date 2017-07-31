import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChatService {
  private url: string = 'http://localhost:4000';
  private socket;
  
  constructor() {}

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable
  }

  sendMessage(message: string): void {
    this.socket.emit('add-message', message);
  }
}
