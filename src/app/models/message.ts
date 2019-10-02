import {get} from 'http'
export interface MessageInterface{
  id:         Number,
  timestamp:  Number,
  author:     String,
  value:      String,
  visible:    Boolean
}

export class Message implements MessageInterface{
  constructor(){
    this.timestamp = Date.now();
  }
  id:         Number;
  timestamp:  Number;
  author:     String;
  value:      String;
  visible:    Boolean;
}



