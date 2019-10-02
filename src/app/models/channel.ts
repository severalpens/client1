import {ChainInterface} from './chain';
import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');
import {Message} from './message';

export interface ChannelInterface {
  id:         Number;
  name:       String;
  type:       String;
  parent:     String;
  members:    Object;
  messages:   Array<Object>;
}

export class Channel implements ChannelInterface, ChainInterface {
  id:         Number;
  name:       String;
  type:       'channel';
  parent:     String;
  members:    Object;
  messages:   Array<Message>;
}

var model = mongoose.model('Channel', new mongoose.Schema({
  id:         Number,
  name:       String,
  type:       String,
  parent:     String,
  members:    Object,
  messages:    []
}));

export default model;
