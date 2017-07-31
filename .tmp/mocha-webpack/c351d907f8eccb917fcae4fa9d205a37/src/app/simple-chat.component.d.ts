import { OnInit } from '@angular/core';
import { ChatService } from './simple-chat.service';
import 'rxjs/Rx';
export declare class SimpleChat implements OnInit {
    private chatService;
    message: {
        user: string;
        text: string;
    };
    messages: Object;
    constructor(chatService: ChatService);
    ngOnInit(): void;
    sendMsg(): void;
}
