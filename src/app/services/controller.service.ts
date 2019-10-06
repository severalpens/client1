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
import { AltService } from "./alt.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ControllerService implements OnInit {
  products: Array<Product>;
  currentProduct: Product;

  constructor(private dbService: DbService, private router: Router) {
    this.getProducts()
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


  
  deleteProduct(_id: string){
    this.dbService.deleteProduct(_id).toPromise().then((prod) => {
          this.getProducts()
    })
   

}

  
update(product: Product){
  const result = this.dbService.update(product)
      result.subscribe((x) => {
        console.log(x);
        this.currentProduct = x
        this.getProducts();
      });
  
      return result;
}


save(product: Product){
  const result = this.dbService.save(product)
      result.subscribe((x) => {
        console.log(x);
        this.currentProduct = x
        this.getProducts();
      });
  
      return result;
}

}
