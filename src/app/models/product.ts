//import * as mongoose from 'mongoose'
var mongoose = require('mongoose');



export interface ProductInterface {
  id:             Number;
  name:           String;
  Description:    String;
  Price:          Number;
  Units:          Number;
}

export class Product implements ProductInterface {
  id:             Number;
  name:           String;
  Description:    String;
  Price:          Number;
  Units:          Number;
}


var model = mongoose.model('Product', new mongoose.Schema({
  id:             Number,
  Name:           String,
  Description:    String,
  Price:          Number,
  Units:          Number
}));

export default model;
