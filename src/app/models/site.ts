import {ChainInterface} from './chain';

export class Site implements ChainInterface {
  id:   Number;
  name: String;
  type: 'site';
  parent: String;
  members: Object;
}
