import {ChainInterface} from './chain';
import {Message} from './message';

export interface ChannelInterface {
  id:         Number;
  name:       String;
  type:       String;
  parent:     String;
  members:    Array<String>;
  messages:   Array<Object>;
}

export class Channel implements ChannelInterface, ChainInterface {
  id:         Number;
  name:       String;
  type:       'channel';
  parent:     String;
  members:    Array<String>;
  messages:   Array<Message>;
}

