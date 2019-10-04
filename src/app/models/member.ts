import {ChainInterface} from './chain';

export interface MemberInterface {
  id:           Number;
  type:         String;
  parent:       String;
 // username:     String;
  name:         String;
  //email:        String;
  //birthdate:    String;
  //age:          String;
  //password:     String;
  //valid:        Boolean;
  members: Array<string>;
}

export class Member implements MemberInterface, ChainInterface {
  id:           Number;
  type:         String;
  parent:       String;
 // username:     String;
  name:         String;
  //email:        String;
  //birthdate:    String;
  //age:          String;
  //password:     String;
  //valid:        Boolean;
  members: Array<string>;}

