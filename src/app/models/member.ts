import {ChainInterface} from './chain';

export interface MemberInterface {
  id:           Number;
  type:         String;
  parent:       String;
  members:      Object;
  username:     String;
  name:         String;
  email:        String;
  birthdate:    String;
  age:          String;
  password:     String;
  valid:        Boolean;
}

export class Member implements MemberInterface, ChainInterface {
  id:           Number;
  type:         'member';
  parent:       String;
  members:      Object;
  username:     String;
  name:         String;
  email:        String;
  birthdate:    String;
  age:          String;
  password:     String;
  valid:        Boolean;
}

