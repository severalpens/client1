import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';


@Component({
  selector: 'app-socketTest',
  templateUrl: './socketTest.component.html',
  styleUrls: ['./socketTest.component.css']
})
export class SocketTestComponent implements OnInit {

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

  public socketTest() {

    if(this.messagecontent) {
      // check there is a mesage to send
      this.socketService.send(this.messagecontent);
      this.messagecontent = null;

    }else{
      console.log("no message");
    }

  }

}
