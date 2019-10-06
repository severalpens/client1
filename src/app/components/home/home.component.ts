import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule } from '@angular/forms';
import Product from 'src/app/models/product';
import {
  Observable,
  of,
  from,
  interval,
  Subscription,
  throwError as observableThrowError,
  ObservableInput
} from "rxjs"; // use obs$ naming convention
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<Product>;
  selectedProduct: Product;
  addingHero = false;
  error: any;
  showNgFor = false;
  //productService: ProductService;
  constructor(private activatedRoute: ActivatedRoute, private  productService: ProductService, private router: Router, private formsModule: FormsModule) {
    //this.productService = productService;
  }

  ngOnInit() {    
     this.productService.getProducts().toPromise().then(results => this.products = results)
   }

   deleteProduct(product: Product) {
    //event.stopPropagation();
    this.productService.delete(product).toPromise().then((result) =>{
     // this.router.navigateByUrl('/add')
     this.productService.getProducts().toPromise().then(results => this.products = results)

    })

    
  }
      editProduct(product: Product){
           
      }


}
