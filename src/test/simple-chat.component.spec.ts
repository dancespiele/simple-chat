import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChat } from '../app/simple-chat.component';
import { ChatService } from '../app/simple-chat.service';
import { By } from '@angular/platform-browser';
import { expect } from 'chai';
import { FormsModule }   from '@angular/forms'
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config = { url: 'http://localhost:4000', options: {} };

describe('SimpleChat', () => {
  let comp: SimpleChat;
  let fixture: ComponentFixture<SimpleChat>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleChat
      ],
      providers: [ ChatService ],
      imports: [
        FormsModule,
        SocketIoModule.forRoot(config)
      ],
    })

    fixture = TestBed.createComponent(SimpleChat);

    comp = fixture.componentInstance;
  })

  it('should exist object message with properties user and text', () => {
    comp.message = { user: 'Paco', text: 'Hello Ana'}
    expect(comp.message).to.have.property('user').to.equal('Paco');
    expect(comp.message).to.have.property('text').to.equal('Hello Ana');
  });
})
