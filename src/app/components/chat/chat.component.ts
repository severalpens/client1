import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messagecontent: string = "";
  messages: string[] = [];
  ioConnection: any;



  constructor(private socketService: SocketService) {
   }

  ngOnInit() {
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
      // check there is a mesage to send
      this.socketService.send(this.messagecontent);
      this.messagecontent = null;

    }else{
      console.log("no message");
    }

  }

}
