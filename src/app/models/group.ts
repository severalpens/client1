import {ChainInterface} from './chain';
import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');

export class Group implements ChainInterface {
  id:             Number;
  name:           String;
  type:          'group';
  parent:         String;
  members:        Object;
}

var model = mongoose.model('Group', new mongoose.Schema({
  id:             Number,
  name:           String,
  type:           String,
  parent:         String,
  members:        Object,
}));

export default model;
