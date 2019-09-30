export interface UserInterface {
  username: string;
  password: string;
  valid: boolean;
}
export class User implements UserInterface {
  constructor(public username: string, public password: string, public valid: boolean ){}

}

export interface ChainInterface {
  name: String;
  type: String;
  parent: String;
  members: Array<String>;
  admins: Array<String>;
}
export class Chain implements ChainInterface {
  name: String;
  type: String;
  parent: String;
  members: Array<String>;
  admins: Array<String>;

}
export class Hero {
  id: number;
  name: string;
}
