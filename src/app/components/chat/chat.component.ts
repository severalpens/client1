import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Message, MessageInterface } from 'src/app/models/models';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { ActivatedRoute } from '@angular/router';
import { ControllerService } from 'src/app/services/controller.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messagecontent: string = "";
  messagescontent: string[] = [];

  message: MessageInterface;
  messages: Array<MessageInterface>;

  group: string = '';
  channel: string = '';
  member: string = '';
  currentSiteMemberName: String = '';
  ioConnection: any;

  constructor(private controllerService: ControllerService,   private socketService: SocketService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.group = this.route.snapshot.params.group;
    this.channel = this.route.snapshot.params.channel;
    this.currentSiteMemberName = this.controllerService.currentSiteMember.name;
    this.messages = new Array<Message>();

    this.initToConnection();


  }

  private initToConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
    .subscribe((message: string) => {
            this.messagescontent.push(message);
    });
  }

  public chat() {

    if(this.messagecontent) {

      this.socketService.send(`${this.currentSiteMemberName}: ${this.messagecontent}`);
      this.messagecontent = '';

    }else{
      console.log("no message");
    }
  }
}
