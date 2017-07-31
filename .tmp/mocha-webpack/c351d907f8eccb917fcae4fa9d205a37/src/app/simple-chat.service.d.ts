import { Socket } from 'ng-socket-io';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export declare class ChatService {
    private socket;
    constructor(socket: Socket);
    getMessages(): Observable<{
        user: string;
        text: string;
    }>;
    sendMessage(message: {
        user: string;
        text: string;
    }): void;
}
