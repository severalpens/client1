import {ChainInterface} from './chain';

export class Group implements ChainInterface {
  id:             Number;
  name:           String;
  type:          'group';
  types:          Array<String>;
  parent:         String;
  members?:        Object;
}

