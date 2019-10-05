import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { ControllerService } from 'src/app/services/controller.service';
import { FormsModule } from '@angular/forms';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product
  constructor(private activatedRoute: ActivatedRoute,  private dbService: DbService,private controllerService: ControllerService, private router: Router, private formsModule: FormsModule) {
  }


  ngOnInit() {
    let _id = this.activatedRoute.snapshot.params._id;
    this.controllerService.findById(_id).subscribe(
      (product) => {
        this.product = product;
      }
    )
  }

}
