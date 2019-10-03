import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Message, MessageInterface } from 'src/app/models/models';
import { Timestamp } from 'rxjs/internal/operators/timestamp';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messagecontent: string = "";
  messages: Array<Message>;
  ioConnection: any;

  message: MessageInterface;
  timestamp: Date;
  constructor(private socketService: SocketService) {
   }

  ngOnInit() {
    this.timestamp = new Date()
    this.initToConnection();
    this.messages = new Array<Message>();
    console.log('ngOnInit');
  }

  private initToConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
    .subscribe((message: Message) => {
      let strMessage = JSON.stringify(message)
      console.log(`initToConnection.subscribe ${strMessage}`);
            this.messages.push(message);
    });
  }

  public chat() {

    if(this.messagecontent) {
      this.message = new Message();
      this.message.timestamp = Math.floor(Date.now() / 10)
      this.message.id = 1;
      this.message.author = 'super';
      this.message.content = 'this is a test';
      this.message.parent = 'Channel1';
      this.message.visible = true;
      let strMessage = JSON.stringify(this.message)
      // check there is a mesage to send
      console.log(`chat(): ${strMessage}`);
      this.socketService.send(this.message);
      this.message = null;

    }else{
      console.log("no message");
    }

  }

}
