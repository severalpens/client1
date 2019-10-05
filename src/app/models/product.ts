
export interface ProductInterface {
  _id:            String,
  Id:             Number,
  Name:           String,
  Description:    String,
  Price:          Number,
  Units:          Number
}

export class Product implements ProductInterface {
  _id:            String;
  Id:             Number;
  Name:           String;
  Description:    String;
  Price:          Number;
  Units:          Number;
}


