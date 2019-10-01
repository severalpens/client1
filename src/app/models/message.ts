import {get} from 'http'
export interface MessageInterface{
  id:         object,
  timestamp:  Number,
  author:     String,
  value:      String,
  visible:    Boolean
}

export class Message implements MessageInterface{
  constructor(){
    this.timestamp = Date.now();
  }
  id:         object;
  timestamp:  Number;
  author:     String;
  value:      String;
  visible:    Boolean;
}



