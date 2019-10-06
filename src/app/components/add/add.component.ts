import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { ControllerService } from 'src/app/services/controller.service';
import { FormsModule } from '@angular/forms';
import Product from 'src/app/models/product';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: Product
  constructor(private activatedRoute: ActivatedRoute,  private dbService: DbService,private controllerService: ControllerService, private router: Router, private formsModule: FormsModule) {
  }

  ngOnInit() {
    this.product = new Product();
  }

  submit(){
    this.controllerService.save(this.product).subscribe(
      (product) => {
        this.product = product;
        this.router.navigateByUrl('');
      }
    )
  }

}
