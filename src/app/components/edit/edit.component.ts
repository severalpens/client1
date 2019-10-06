import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product
  constructor(private activatedRoute: ActivatedRoute,  private  productService: ProductService, private router: Router, private formsModule: FormsModule) {
  
  
  }


  ngOnInit() {
    let _id =  this.activatedRoute.snapshot.params._id;
    this.productService.getProduct(_id).subscribe(
      (product) => {
        this.product = product;
        console.log(JSON.stringify(this.product));
      }
    )
  }

  submit(){
    console.log(this.product);
    this.productService.update(this.product).subscribe((result) =>{
          this.router.navigateByUrl('/home')
    })
  }

}
