import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Group} from '../../../models/group';
import { ControllerService } from 'src/app/services/controller.service';
@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  group: Group;
  types: Array<String>;
  parents: Array<String>;
  members: Array<String>;
  constructor(private activatedRoute: ActivatedRoute,  private dbService: DbService,controllerService: ControllerService, private router: Router, private formsModule: FormsModule) {
  }

    ngOnInit() {
      this.group = new Group();
      this.types = ['Group','Channel', 'Member', 'Message', 'Product'];
      this.parents = ['Chat'];
      this.members = ['Chad', 'Bruce','David','super'];
  }

  submit(){
    this.dbService.postGroup(this.group).subscribe(x => this.group = x);

  }


}
