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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  temps = ['t1','t2','t3']
  products: Array<Product>;
  constructor(private activatedRoute: ActivatedRoute,  private dbService: DbService,private controllerService: ControllerService, private router: Router, private formsModule: FormsModule) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    const result = this.dbService.getProducts()
    result.subscribe((x) => {
       this.products = x
     });
 
     
   }

   edit(product: Product){

    // let _id = this.activatedRoute.snapshot.params._id;
    // this.controllerService.findById(_id).subscribe(
    //   (product) => {
    //     this.product = product;
    //   }
    // )


     this.router.navigate(['/edit',product])
   }

}
