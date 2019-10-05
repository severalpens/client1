import { Injectable, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import {
  Observable,
  of,
  from,
  interval,
  Subscription,
  throwError as observableThrowError,
  ObservableInput
} from "rxjs"; // use obs$ naming convention
import { ajax } from "rxjs/ajax";
import { catchError, map, tap } from "rxjs/operators";
import Product from "../models/product";
import { DbService } from "./db.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ControllerService implements OnInit {
  products: Product[];
  currentProduct: Product;

  constructor(private dbService: DbService, private router: Router) {
    this.products = new Array<Product>();
    this.currentProduct = new Product();
  }
  
  ngOnInit() {
  }
  
  getProducts(){
   const result = this.dbService.getProducts()
   result.subscribe((x) => {
      this.products = x
    });

    return result;

  }

  findById(_id: string){
      const result = this.dbService.findById(_id)
      result.subscribe((x) => {
        console.log(x);
        this.currentProduct = x
      });
  
      return result;
  


  }
}
