import {ChainInterface} from './chain';
import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');
import {Message} from './message';

export interface ChannelInterface {
  name:       String;
  type:       String;
  parent:     String;
  members:    Object;
  messages:   Array<Object>;
}
export class Channel implements ChannelInterface, ChainInterface {
  name:       String;
  type:       String;
  parent:     String;
  members:    Object;
  messages:   Array<Message>;
}

var model = mongoose.model('Channel', new mongoose.Schema({
  name:       String,
  type:       String,
  parent:     String,
  members:    Object,
  messages:    []
}));

export default model;
