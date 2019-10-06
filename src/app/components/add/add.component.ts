import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: Product
  constructor(private activatedRoute: ActivatedRoute, private  productService: ProductService, private router: Router, private formsModule: FormsModule) {
 
  }

  ngOnInit() {
    this.product = new Product();
  }

  submit(){
    this.productService.add(this.product).subscribe({
      next: x => this.router.navigateByUrl('/home'),
      error: (err) => {
        console.error('Observer got an error: ' + err);
        this.router.navigateByUrl('/home');
      },
      complete: () => console.log('Observer got a complete notification'),
    })
  }

}
