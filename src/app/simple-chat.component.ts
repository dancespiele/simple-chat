import { Component, OnInit } from '@angular/core';
import { ChatService } from './simple-chat.service';

import 'rxjs/Rx';

@Component({
  selector: 'simple-chat',
  templateUrl: './simple-chat.component.html',
})
export class SimpleChat implements OnInit{
  message: {user: string, text: string}
  messages: Object;

  constructor(
    private chatService : ChatService
  ){}

  ngOnInit(): void {
    this.chatService
      .getMessages()
      .subscribe(messages => this.messages = messages)
  }

  sendMsg() {
    this.chatService.sendMessage(this.message);
  }
}
