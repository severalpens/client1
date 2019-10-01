var mongoose = require('mongoose');
var Schema = mongoose.Schema;

export interface ChainInterface {
  name:     String;
  type:     String;
  parent:   String;
  members:  Object;
}

export class Chain implements ChainInterface {
  name:     String;
  type:     String;
  parent:   String;
  members:  Object;
}

var model = mongoose.model('Chain', new mongoose.Schema({
  name:     String,
  type:     String,
  parent:   String,
  members:  Object,
}));

export default model;
