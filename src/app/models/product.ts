
export interface ProductInterface {
  Id:             Number,
  Name:           String,
  Description:    String,
  Price:          Number,
  Units:          Number
}

export default class Product implements ProductInterface {
  Id:             Number;
  Name:           String;
  Description:    String;
  Price:          Number;
  Units:          Number;
}


