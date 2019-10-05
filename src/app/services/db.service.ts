import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, from, interval, Subscription, throwError as observableThrowError, ObservableInput } from "rxjs"; // use obs$ naming convention
import { ajax } from "rxjs/ajax";
import { catchError, map, tap } from "rxjs/operators";
import Product  from '../models/product';

const API = 'http://localhost:3000/api'
//const API = 'https://gu-week9.herokuapp.com/api'

@Injectable({
  providedIn: "root"
})
export  class DbService {
  constructor(private httpClient: HttpClient) { }
  
  // get products
  getProducts() {
    return this.httpClient
      .get<Array<Product>>(`${API}/getlist` )
      .pipe(map(data => data));
  }
  // get product
  getProduct(Id: number): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.Id === Id))
    );
  }

    // get product
    findById(_id: string): Observable<Product> {
      return this.httpClient
      .get<Product>(`${API}/getbyid?_id=${_id}` )
    }


// save product
saveProduct(product: Product) {
  if (product.Id) {
    return this.putProduct(product);
  }
  return this.postProduct(product);
}

// delete product
deleteProduct(product: Product) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const url = `${API}/products/${product.Id}`;

  return this.httpClient.delete<Product>(url).pipe(catchError(this.handleError));
}




// post product
  postProduct(product: Product) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.httpClient
      .post<Product>(`${API}/product`, product)
      .pipe(catchError(this.handleError));
  }




  handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }


  // Update existing product
  putProduct(product: Product) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API}/products`;

    return this.httpClient.put<Product>(url, product).pipe(catchError(this.handleError));
  }



  post(path: string, props: Object){
    path = API + path;
    let result =  this.httpClient
      .post<Object>(path, props)
      //console.log(result);
      return result
  }




  get(path: string, props: Object){
    path += '?'
    for (var prop in props) {
      path += `${prop}=${props[prop]}`
    }
    return this.httpClient
      .post<Object>(path, props)
  }




}



