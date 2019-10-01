import {get} from 'http'
export interface MessageInterface{
  id:         any,
  timestamp:  Number,
  author:     String,
  value:      String,
  visible:    Boolean
}

export class Message implements MessageInterface{
  constructor(){
    this.timestamp = Date.now();
     get('http://localhost:3000/api/user/login',(res) =>{
      this.id = res
    })
  }
  id:         any;
  timestamp:  Number;
  author:     String;
  value:      String;
  visible:    Boolean;
}



