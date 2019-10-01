var mongoose = require('mongoose');
import {ChainInterface} from './chain';
import {mongoose} from 'mongoose';

export interface MemberInterface {
  username:     String;
  name:         String;
  email:        String;
  birthdate:    String;
  age:          String;
  password:     String;
  valid:        Boolean;
}

export class Member implements MemberInterface {
  username:     String;
  name:         String;
  email:        String;
  birthdate:    String;
  age:          String;
  password:     String;
  valid:        Boolean;
}


var model = mongoose.model('Member', new mongoose.Schema({
  username:     String,
  name:         String,
  email:        String,
  birthdate:    String,
  age:          String,
  password:     String,
  valid:        Boolean
}));

export default model;


export class Chain implements ChainInterface {
  name: String;
  type: String;
  parent: String;

}
