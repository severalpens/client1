import {ChainInterface} from './chain';
import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');

export class Site implements ChainInterface {
  id:   Number;
  name: String;
  type: 'site';
  parent: String;
  members: Object;
}

var model = mongoose.model('Site', new mongoose.Schema({
  id:       Number,
  name:     String,
  type:     String,
  parent:   String,
  members:  Object,
}));

export default model;
