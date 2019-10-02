import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Group} from '../../../models/group';
@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  group: Group;
  types: Array<String>;

  constructor(private activatedRoute: ActivatedRoute,   dbService: DbService, private router: Router, private formsModule: FormsModule) {


  }

    ngOnInit() {
      //this.group = new Group();
      this.group = new Group();
      this.group.name = "asdfa"
      this.group.types = ['sfds','sdfs']
      this.types = ['sfds','sdfs']
  }

  submit(){
    //this.dbService.postGroup(this.group).subscribe(x => this.group = x);

  }


}
