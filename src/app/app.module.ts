import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { SimpleChat } from './simple-chat.component';

import { ChatService } from './simple-chat.service';

const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    SimpleChat
  ],
  providers: [ ChatService ],
  bootstrap: [ SimpleChat ]
})
export class AppModule {}
