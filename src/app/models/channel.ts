import {ChainInterface} from './chain';
import {mongoose} from 'mongoose';
import {Message} from './message'

export class Channel implements ChainInterface {
  name:       String;
  type:       String;
  parent:     String;
  members:    Object;
  messages:   Array<Object>;
}

var model = mongoose.model('Channel', new mongoose.Schema({
  name:       String,
  type:       String,
  parent:     String,
  members:    Object,
  messages:    []
}));

export default model;
