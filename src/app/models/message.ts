import { ChainInterface } from './chain';

export interface MessageInterface{
  id:         Number,
  name:         String,
  type:         String,
  timestamp:  Number,
  parent:     String,
  author:     String,
  content:      String,
  visible:    Boolean
}

export class Message implements MessageInterface, ChainInterface{
  constructor(){
    //this.timestamp = Date.now();
  }
  id:         Number;
  name:         String;
  type:         String;
  timestamp:  Number;
  parent:      String;
  author:     String;
  content:      String;
  visible:    Boolean;
}



