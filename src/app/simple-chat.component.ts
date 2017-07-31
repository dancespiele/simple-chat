import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './simple-chat.service';

import 'rxjs/Rx';

@Component({
  selector: 'simple-chat',
  templateUrl: './simple-chat.component.html',
  styleUrls: ['./simple-chat.component.css']
})
export class SimpleChat implements OnInit, OnDestroy{
  message: string
  connection;
  messages = [];

  constructor(
    private chatService : ChatService
  ){}

  ngOnInit(): void {
    this.connection = this.chatService
      .getMessages()
      .subscribe(messages => this.messages.push(messages))
  }

  sendMsg(): void{
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
