import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import * as io from 'socket.io-client';
import { SimpleChat } from '../app/simple-chat.component';
import { ChatService } from '../app/simple-chat.service';
import { By } from '@angular/platform-browser';
import { expect } from 'chai';
import { FormsModule }   from '@angular/forms'
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { spy } from 'sinon';

let chai = require('chai') , spies = require('chai-spies');
chai.use(spies);
const config = { url: 'http://localhost:4000', options: {} };

describe('SimpleChat', () => {
  let comp: SimpleChat;
  let fixture: ComponentFixture<SimpleChat>;
  let chatService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleChat
      ],
      providers: [ ChatService ],
      imports: [
        FormsModule,
      ],
    }).compileComponents();
  });
  
  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should exist object message with propertie text', () => {
    fixture = TestBed.createComponent(SimpleChat);
    comp = fixture.componentInstance;
    comp.message = 'Hello Ana';
    
    fixture.detectChanges();
    expect(comp.message).to.equal('Hello Ana');
  });
  
  it('should call sendMsg from SimpleChat component', () => {
    fixture = TestBed.createComponent(SimpleChat);
    comp = fixture.componentInstance;
    chatService = TestBed.get(ChatService);
    comp.message = 'Hello Ana';
    
    let button = fixture.debugElement.query(By.css('button'));
    let sendMsg = chai.spy.on(comp, 'sendMsg');
    
    button.triggerEventHandler('click', {});
    
    fixture.detectChanges();
    expect(sendMsg).to.have.been.called();
  });
  
  it('should call sendMessage from ChatService', () => {
    fixture = TestBed.createComponent(SimpleChat);
    comp = fixture.componentInstance;
    chatService = TestBed.get(ChatService);
    comp.message = 'Hello Ana';
    
    let button = fixture.debugElement.query(By.css('button'));
    let sendMsg = chai.spy.on(chatService, 'sendMessage');
    
    button.triggerEventHandler('click', {});
    
    fixture.detectChanges();
    expect(sendMsg).to.have.been.called();
  });
  
  it('should call getMessages from ChatService', () => {
    fixture = TestBed.createComponent(SimpleChat);
    comp = fixture.componentInstance;
    chatService = TestBed.get(ChatService);
    comp.message = 'Hello Ana';
    
    let button = fixture.debugElement.query(By.css('button'));
    let getMsg = chai.spy.on(chatService, 'getMessages');
    
    button.triggerEventHandler('click', {});
    
    fixture.detectChanges();
    expect(getMsg).to.have.been.called();
  });
})
