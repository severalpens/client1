import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, NgForm, FormsModule  } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  controllerService: ControllerService;

  constructor(private activatedRoute: ActivatedRoute, controllerService: ControllerService,  dbService: DbService, private router: Router, private formsModule: FormsModule) {
      this.controllerService = controllerService;
  }

  ngOnInit(){

    }


}
