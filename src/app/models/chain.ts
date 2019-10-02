
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

