export interface MessageInterface{
  id:         Number,
  timestamp:  Number,
  parent:     String,
  author:     String,
  content:      String,
  visible:    Boolean
}

export class Message implements MessageInterface{
  constructor(){
    //this.timestamp = Date.now();
  }
  id:         Number;
  timestamp:  Number;
  parent:      String;
  author:     String;
  content:      String;
  visible:    Boolean;
}



