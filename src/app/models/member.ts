import {ChainInterface} from './chain';
import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');

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


var model = mongoose.model('Member', new mongoose.Schema({
  id:           Number,
  type:         String,
  parent:       String,
  members:      Object,
  username:     String,
  name:         String,
  email:        String,
  birthdate:    String,
  age:          String,
  password:     String,
  valid:        Boolean
}));

export default model;

