import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');

export interface ChainInterface {
  id:       Number;
  name:     String;
  type:     String;
  parent:   String;
  members:  Object;
}

export class Chain implements ChainInterface {
  id:       Number;
  name:     String;
  type:     String;
  parent:   String;
  members:  Object;
}

var model = mongoose.model('Chain', new mongoose.Schema({
  id:       Number,
  name:     String,
  type:     String,
  parent:   String,
  members:  Object,
}));

export default model;
