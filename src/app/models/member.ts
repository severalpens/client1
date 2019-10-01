import {ChainInterface} from './chain';
import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');

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

