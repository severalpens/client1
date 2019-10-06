import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { ControllerService } from 'src/app/services/controller.service';
import { FormsModule } from '@angular/forms';
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
  constructor(private activatedRoute: ActivatedRoute,  private productService: ProductService, private router: Router, private formsModule: FormsModule) {
  }

  ngOnInit() {    
     this.productService.getProducts().subscribe(results => this.products = results)
   }

   delete(_id){
     console.log(`home.component.delete activated: ${_id}`);
    this.productService.delete(_id).subscribe({
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + JSON.stringify(err)),
      complete: () => {
        this.productService.getProducts();
     
      },
    })
      

   }

}
