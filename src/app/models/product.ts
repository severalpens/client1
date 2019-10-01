var mongoose = require('mongoose');
import {ChainInterface} from './chain';
import {mongoose} from 'mongoose';

export interface ProductInterface {
  username:     String;
  name:         String;
  email:        String;
  birthdate:    String;
  age:          String;
  password:     String;
  valid:        Boolean;
}

export class Product implements ProductInterface {
  username:     String;
  name:         String;
  email:        String;
  birthdate:    String;
  age:          String;
  password:     String;
  valid:        Boolean;
}


var model = mongoose.model('Product', new mongoose.Schema({
  username:     String,
  name:         String,
  email:        String,
  birthdate:    String,
  age:          String,
  password:     String,
  valid:        Boolean
}));

export default model;
