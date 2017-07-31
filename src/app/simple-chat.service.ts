import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  constructor(private socket: Socket) {}

  getMessages(){
    return this.socket
      .fromEvent('message')
      .map((data: {user: string, msg: string}) => {
        const message: {user: string, text: string} = {
          user: data.user,
          text: data.msg
        };
        return message
      });
  }

  sendMessage(message: {user: string, text: string}) {
    this.socket.emit('message', message);
  }
}
