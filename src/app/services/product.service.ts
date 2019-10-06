import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Product from "../models/product";
import { Router } from "@angular/router";


@Injectable()
export class ProductService {
  private productsUrl = 'http://localhost:3000/api/product'; // URL to web api

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<Product[]>(this.productsUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getProduct(_id: string): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(product => product._id === _id))
    );
  }

  save(product: Product) {
    if (product._id) {
      return this.put(product);
    }
    return this.post(product);
  }

  delete(product: Product) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.productsUrl}/${product._id}`;

    return this.http.delete<Product>(url).pipe(catchError(this.handleError));
  }

  // Add new Product
  private post(product: Product) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Product>(this.productsUrl, product)
      .pipe(catchError(this.handleError));
  }

  // Update existing Product
  private put(product: Product) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.productsUrl}/${product._id}`;

    return this.http.put<Product>(url, product).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
