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
  messages: string[] = [];
  ioConnection: any;

  message: MessageInterface;
  timestamp: Date;
  constructor(private socketService: SocketService) {
   }

  ngOnInit() {
    this.timestamp = new Date()
    this.initToConnection();

  }

  private initToConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
    .subscribe((message: string) => {
      // add new message to the mesages array.
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

      // check there is a mesage to send
      console.log(this.message)
      this.socketService.send(this.message);
      this.message = null;

    }else{
      console.log("no message");
    }

  }

}
