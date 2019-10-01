import {ChainInterface} from './chain';
import {mongoose} from 'mongoose'

export class Site implements ChainInterface {
  name: String;
  type: String;
  parent: String;
  members: Object;
}

var model = mongoose.model('Site', new mongoose.Schema({
  name:     String,
  type:     String,
  parent:   String,
  members:  Object,
}));

export default model;
