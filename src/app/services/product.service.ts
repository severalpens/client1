import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError, Observer } from "rxjs";
import { catchError, map } from "rxjs/operators";
import Product from "../models/product";
import { Router } from "@angular/router";

@Injectable()
export class ProductService {
  private productsUrl = "http://localhost:3000/api/product"; // URL to web api
  products: Array<Product>;
  selectedProduct: Product;
  constructor(private http: HttpClient, private router: Router) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.productsUrl}/all`).pipe(
      map(data => data)
    );
  }

  getProduct(_id: string): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(product => product._id === _id))
    );
  }

  
  // Add new Product
   add(product: Product) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post<Product>(this.productsUrl, product)
  }

  // delete(hero: Hero) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http.delete<Hero>(url).pipe(catchError(this.handleError));
  // }


  delete(product: Product) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const url = `${this.productsUrl}/${product._id}`;
    return this.http.delete<Product>(url);
     

  }






  // Update existing Product
   update(product: Product) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post<Product>(`${this.productsUrl}/update`, product)
  }



}







