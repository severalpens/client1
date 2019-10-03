import {ChainInterface} from './chain';

export class Group implements ChainInterface {
  id:             Number;
  name:           String;
  type:          'group';
  parent:         String;
  members:        Array<String>;
}

