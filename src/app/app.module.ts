import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleChat } from './simple-chat.component';

import { ChatService } from './simple-chat.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    SimpleChat
  ],
  providers: [ ChatService ],
  bootstrap: [ SimpleChat ]
})
export class AppModule {}
